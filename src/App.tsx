import {Component} from "react";
import Header from './Header'
import ProductPage from "./ProductPage"
import {Spinner, Container} from "react-bootstrap"
import LoginPage from "./LoginPage";
type AppProps = {  };

type AppState = { 
  isLoading:boolean;
  isLoggedin: boolean;
  username: string;
  countryName: string;
  countryCode: string;
  currency: string;
  avatar: string;
  currencyRates: any;
  locationDetails: any;
  products: Array<any>;

};

class App extends Component<AppProps, AppState>{
  constructor(props: any) {
    super(props);

    this.state = {
      isLoading: false,
      isLoggedin: false,
      username: '',
      countryName: '',
      countryCode: '',
      currency: '',
      avatar: '',
      currencyRates: {},
      locationDetails: {},
      products: []
    };

    this.countryClickHandler = this.countryClickHandler.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
  }
  countryClickHandler(country: string, code: string, currency: string) {
    console.log('country:', country, 'code:', code, 'currency:', currency)
    this.setState({ countryCode: code, countryName: country, currency})
  }

  async loginHandler(username: string) {
    this.setState({ isLoading: true })
    await this.fetchData()
    this.setState({ username, isLoggedin: true, isLoading:false })
  }


  transformProductsByCurrency(products: any[], currency: string, currencyRates: any) {
    return products.map((details) => {
  
      let conversion: number = (details.priceUSD * currencyRates.rates[currency])
      if (currencyRates.base !== 'USD') {
        const usdRate: number= currencyRates.rates['USD']
        const localRate: number = (currencyRates.rates[currency])
        const rate: number = (localRate/usdRate);
        conversion = (details.priceUSD * rate)
      }
      details.currency = currency
      details.price = conversion
  
      return details
      });
  }
  render() : object{

  const {currency, currencyRates, products, countryName, countryCode, isLoading, isLoggedin, username } = this.state
  const items = this.transformProductsByCurrency(products, currency, currencyRates)
  let loadingIndicator:any = <Spinner  variant="danger" animation="grow" />
  if (!isLoading) {
      loadingIndicator = ''
  }
  let mainView = <LoginPage loginHandler={this.loginHandler} />
  if (isLoggedin) {
    mainView = <ProductPage products={items} />
  }
  return (
    <div className="App">
      <Header username={username} isLoggedIn={isLoggedin} countryName={countryName} countryCode={countryCode} countryClickHandler={this.countryClickHandler}/>
      <div  className="d-flex justify-content-center mt-2" >
        {loadingIndicator}
      </div>
      <Container className="mt-5">
        {mainView}
      </Container>
    </div>
  );
  }

  async fetchData() {
    const productsEndpoint = 'http://localhost:2020/products'
    const locationEndpoint = `http://localhost:2020/location/details`
    const currencyRatesEndpoint = 'http://localhost:2020/currency/rates'
 
    const PromiseArray = [productsEndpoint, locationEndpoint, currencyRatesEndpoint].map(endpoint => {
      return fetch(endpoint, {
        method: "GET",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "text/plain"
        },
    }).then(response => {
        return response.json()
    });
    } )
    
    const [products, locationDetails, currencyRates] = await Promise.all(PromiseArray)
    console.log('products:', products, 'locationDetails:', locationDetails, 'currencyRates:', currencyRates)
    const {country_name: countryName, country_code: countryCode, currency} = locationDetails
    this.setState({ products, locationDetails, currencyRates, countryName, countryCode, currency});
  }
  async componentDidMount()  {

  }
}

export default App;
