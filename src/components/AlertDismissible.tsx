import  { useState } from "react";
import { Alert } from "react-bootstrap";

function AlertDismissible(props: any) {
  const {showAlert, message} = props
    const [show, setShow] = useState(showAlert);
  
    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            {message}
        </Alert>
      );
    }
    return (<></>)
  }

  export default AlertDismissible