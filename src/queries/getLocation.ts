import { gql } from '@apollo/client';

 const GET_LOCATION = gql`
query {
    getLocationByIp {
        ip
        version
        country
        country_name
        country_code
        currency
        currency_name
    }
}
`;

export default GET_LOCATION