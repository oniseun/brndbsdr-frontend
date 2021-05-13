import React, {useState} from "react";
import { Button, Form } from "react-bootstrap";
function LoginPage (props: any){

  
  const { loginHandler } = props
  const intialValues = { username: "" };
  const [values, setFormValues] = useState(intialValues);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('values:', values, 'e:', e)
  }

  return (
      <>
      <h1 className="display-4 mb-5 text-danger"> Customer Login</h1>
      <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail" className="mb-5">
            <Form.Control size="lg" type="text" name="username" value={values.username}
            onChange={handleChange} placeholder="Enter your username" />
          </Form.Group>
          <Button variant="danger" size="lg" type="submit" onClick={() => loginHandler(values.username)}>
            Login now
          </Button>
      </Form>
      </>
  );
  

}

export default LoginPage;
