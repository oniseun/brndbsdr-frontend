import React, {useState} from "react";
import { Button, Col, Form } from "react-bootstrap";
import AlertDismissible from '../components/AlertDismissible'
function LoginPage (props: any){

  
  const { loginHandler } = props
  const intialValues = { firstname: "" , lastname: "", error: false, errorMsg: ""};
  const [values, setFormValues] = useState(intialValues);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('values:', values, 'e:', e)
    if (![values.firstname.length, values.lastname.length].includes(0)) {
        loginHandler(values.firstname, values.lastname)
    } else {
      setFormValues({...values, error : true, errorMsg : "Firstname or Lastname cannot be empty"})
    }
  }

  const showError = <AlertDismissible showAlert={values.error} message={values.errorMsg} />
  return (
      <>
      <h1 className="display-2 mb-3 text-danger">Login</h1>
      {showError}
      <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Col xs={5}>
          <Form.Group controlId="formFirstname" className="mb-3">
            <Form.Control required size="lg"  minLength={2} type="text" name="firstname" value={values.firstname}
            onChange={handleChange} placeholder="Enter your firstname" />
          </Form.Group>
          <Form.Group controlId="formLastname" className="mb-3">
            <Form.Control required size="lg" minLength={2} type="text" name="lastname" value={values.lastname}
            onChange={handleChange} placeholder="Enter your lastname" />
          </Form.Group>
          <Button block variant="danger" size="lg" type="submit">
            Login
          </Button>
          </Col>
        </Form.Row>
      </Form>
      </>
  );
  

}

export default LoginPage;
