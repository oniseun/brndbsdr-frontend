
import {Media, Button} from 'react-bootstrap'


export default function Product(props: any) { 
    
  const { name, photos, id, price, currency, onClickHandler } = props;

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