import { Form} from 'react-bootstrap'
import countries from '../assets/countries.json'


function CountrySelection(props: any) { 
    
  const { countryName, countryCode, currency, onClickHandler } = props;

  return (
        <>
        <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
        <img  width={30} height={30} className="mr-2" src={`flag/${countryCode?.toLowerCase()}.png`} alt={countryName} /> 
       
      </Form.Label>
      <Form.Control
        as="select"
        className="my-1 mr-sm-2"
        id="inlineFormCustomSelectPref"
        custom
        onChange={(e) =>  {onClickHandler(e.target.value) }}
        defaultValue={`${countryCode}/${countryName}/${currency}`}
      >
        { countries.map(country => {
          
          return (
            <option key={country.countryCode} value={`${country.countryCode}/${country.countryName}/${country.currencyCode}`}>
              {country.countryName} ({country.currencyCode})
            </option>
      
          )

          })}
        
      </Form.Control>
      </>
  );
}

export default CountrySelection 

