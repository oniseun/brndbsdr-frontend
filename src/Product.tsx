
import {Component} from 'react'
import {Media, Button} from 'react-bootstrap'

interface ProductProps {
  name: string;
  photos: Array<string>;
  id: string;
  price: Number;
  currency: string
  onClickHandler: any
}

interface ProductState {
}

class Product extends Component<ProductProps, ProductState> { 
    
  render(): object {
  
    const { name, photos, id, price, currency, onClickHandler } = this.props;

  return (
      <>
        <Media as="li" key={id}  className="mb-3 pt-3 pb-3 border-bottom">
        <img
        width={120}
        height={120}
        className="mr-3"
        src={photos[0]}
        alt={name}
        />
        <Media.Body>
          <h5>{name}</h5>
          <p className="text-danger">{currency} {price.toFixed(2)} 
          </p>
          <p>
            <Button onClick={() => onClickHandler({name, price, photos, currency})} variant="secondary">Show full details</Button>
          </p>
        </Media.Body>
        </Media>
    </>
  );
}
}

export default Product
