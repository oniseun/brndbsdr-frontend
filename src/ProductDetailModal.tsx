import  {useState} from "react";
import { Button, Carousel, Modal } from "react-bootstrap";

export default function ProductDetailModal(props: any) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };

  const { productDetail, show, handleClose } = props

  const carousels =  productDetail.photos?.map((photo: any) => (
    <Carousel.Item>
    <div className="d-flex justify-content-center bg-dark">
      <img
         style={{ maxWidth: 480, width: 'auto',  height: 480 }}
        className="text-center"
        src={photo}
        alt={productDetail.name}
      />
      </div>
    </Carousel.Item>
    ))

  return (
    <>
      <Modal show={show} onHide={() => handleClose()} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Product Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Carousel activeIndex={index} onSelect={handleSelect}>
        {carousels}

        </Carousel>
        <h3 className="mt-5 mb-2">{productDetail.name}</h3>
        <h5 className="text-danger">{productDetail?.currency} {productDetail.price?.toFixed(2)} 
        </h5>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => handleClose()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// interface ProductDetailProps {
//   productDetail: object;
//   showHandler:any;
// }

// interface ProductDetailState {
// }

// class ProductDetailModal extends Component<ProductDetailProps, ProductDetailState> { 
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose} animation={false}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }
