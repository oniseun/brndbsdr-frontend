import {useState} from "react";
import Product from '../components/Product'
import ProductDetailModal from "../components/ProductDetailModal";

function ProductPage (props: any){

    
    const { products } = props
    const [show, setShow] = useState(false);

    const [selectedProduct, selectProduct] = useState({})

    const handleClose = () => setShow(false);
    const handleShow = (product: object) => {
            setShow(true);
            selectProduct(product)
        } 
      

    const items = products.map((details: any) => {

     return ( <Product key={details.id} name={details.name} photos={details.photos} currency={details.currency}  price={details.price} id={details.id} onClickHandler={handleShow}/>
     );
    });

  return (
    <>
      <ProductDetailModal productDetail={selectedProduct} handleClose={handleClose} show={show} />
        <h1 className="display-2 mb-5 text-danger"> Products </h1>
        <ul className="list-unstyled">
          {items}
        </ul>
    </>
  );
  

}

export default ProductPage;
