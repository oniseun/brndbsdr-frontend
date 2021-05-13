import {Component} from "react";

import {Media} from 'react-bootstrap'

interface CountryProps {
    countryName?: string;
    countryCode?:string;
  }
  
interface CountryState {
}

class CountryProfile extends Component<CountryProps, CountryState> { 
    
  render(): object {
    const { countryName, countryCode } = this.props;

    return (
        <div>
            <Media>
            <img  width={30} height={30} className="mr-2" src={`flag/${countryCode?.toLowerCase()}.png`} alt={countryName} /> 
            <Media.Body> {countryName}</Media.Body>
            </Media>
        </div>
    );
  }
}

export default CountryProfile;