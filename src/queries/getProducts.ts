import { gql } from '@apollo/client';

 const GET_PRODUCTS = gql`
  query {
    getProducts {
        id
        name
        priceUSD
        photos
    }
}
`;

export default GET_PRODUCTS