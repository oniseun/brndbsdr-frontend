import { gql } from '@apollo/client';

 const GET_RATES = gql`
  query {
    getRates {
        success
        timestamp
        base
        date
        rates
    }
}
`;

export default GET_RATES