import {Component} from "react";
import Header from './layout/Header'
import ProductPage from "./pages/ProductPage"
import {Spinner, Container} from "react-bootstrap"
import LoginPage from "./pages/LoginPage";
import AlertDismissible from "./components/AlertDismissible";
import GET_PRODUCTS from "./queries/getProducts"
import GET_RATES from "./queries/getRates"
import GET_LOCATION from "./queries/getLocation";
import { ApolloClient, InMemoryCache } from '@apollo/client';
const clone = require('lodash/cloneDeep');
const client = new ApolloClient({
  uri:  `${process.env.REACT_APP_API_ENDPOINT}/graphql`,
  cache: new InMemoryCache()
});

type AppProps = {  };

type AppState = { 
  isLoading:boolean;
  isLoggedin: boolean;
  firstname: string;
  lastname: string;
  countryName: string;
  countryCode: string;
  currency: string;
  avatar: string;
  currencyRates: any;
  locationDetails: any;
  products: Array<any>;
  error: boolean;
  errorMsg: string;

};


class App extends Component<AppProps, AppState>{

   initialState: AppState =  {
    isLoading: false,
    isLoggedin: false,
    firstname: '',
    lastname: '',
    countryName: '',
    countryCode: '',
    currency: '',
    avatar: '',
    currencyRates: {},
    locationDetails: {},
    products: [],
    error: false,
    errorMsg: ''
  }

  constructor(props: any) {
    super(props);

    this.state = this.initialState

    this.countryClickHandler = this.countryClickHandler.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
    this.logoutHandler = this.logoutHandler.bind(this);
  }

  countryClickHandler(val: any) {
    const [code, country, currency] = val.split('/')
    this.setState({ countryCode: code, countryName: country, currency})
  }

  async loginHandler(firstname: string, lastname:string) {
    this.setState({ isLoading: true })
    try {
      await this.fetchData()  
      this.setState({ firstname, lastname, isLoggedin: true, isLoading:false })
    } catch(e) {
      this.setState({ isLoading: false, error: true, errorMsg: e.toString()})
    }
  }

  logoutHandler() {
    this.setState({ isLoading: true })
    this.setState({...this.initialState})
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

  const {currency, currencyRates, products, countryName, countryCode, isLoading, isLoggedin, firstname, lastname, error, errorMsg } = this.state
  const items = this.transformProductsByCurrency(products, currency, currencyRates)
  let loadingIndicator:any = <Spinner  variant="danger" animation="grow" />
  if (!isLoading) {
      loadingIndicator = ''
  }
  let mainView = <LoginPage loginHandler={this.loginHandler} logoutHandler={this.logoutHandler} />
  if (isLoggedin) {
    mainView = <ProductPage products={items} />
  }

  const showError = <AlertDismissible showAlert={error} message={errorMsg} />
  return (
    <div className="App">
      <Header 
      firstname={firstname} 
      lastname={lastname} 
      isLoggedIn={isLoggedin} 
      countryName={countryName} 
      currency={currency} 
      countryCode={countryCode} 
      countryClickHandler={this.countryClickHandler}
      logoutHandler={this.logoutHandler}
      />
      <div  className="d-flex justify-content-center mt-2" >
        {loadingIndicator}
      </div>
      <Container className="mt-5">
        {showError}
        {mainView}
      </Container>
    </div>
  );
  }

  async fetchData() {

      const PromiseArray = [GET_LOCATION, GET_PRODUCTS, GET_RATES].map(async endpoint => {  
        const response = await client.query({ query: endpoint })
        const clonedObj = clone(response.data)
        return clonedObj

    });

    try {
      const [location,products,  rates] = await Promise.all(PromiseArray)
      console.log('products:', products, 'locationDetails:', location, 'currencyRates:', rates)
      const { country_name: countryName, country_code: countryCode, currency } = location.getLocationByIp
      this.setState({ 
        products : products.getProducts, 
        locationDetails: location.getLocationByIp, 
        currencyRates: rates.getRates, 
        countryName, 
        countryCode, 
        currency
      });

    } catch (e) {
      console.log('fetch error =>' , e)
      throw e
    }
  }
  async componentDidMount()  {

  }
}

export default App;
