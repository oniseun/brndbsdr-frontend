import {Component} from 'react'
import { Dropdown} from 'react-bootstrap'
import countries from './countries.json'
import CountryProfile from './CountryProfile'


interface CountrySelectionProps {
  countryName: string;
  countryCode: string;
  onClickHandler: any
}

interface CountrySelectionState {
}

class CountrySelection extends Component<CountrySelectionProps, CountrySelectionState> { 
    
  render(): object {
  
    const { countryName, countryCode, onClickHandler } = this.props;

  return (
        <>
        <Dropdown>
        <Dropdown.Toggle split={true} size="sm" variant="secondary" id="dropdown-basic">
          <CountryProfile countryCode={countryCode} countryName={countryName} />
        </Dropdown.Toggle>
        <Dropdown.Menu>
        { countries.map(country => {
          
          return (
          <Dropdown.Item onClick={() => onClickHandler(country.countryName, country.countryCode, country.currencyCode)} href="#">
              <CountryProfile countryName={country.countryName} countryCode={country.countryCode} />
          </Dropdown.Item>
          )

          })}
        </Dropdown.Menu>
          
        </Dropdown>
      </>
  );
}
}

export default CountrySelection 

