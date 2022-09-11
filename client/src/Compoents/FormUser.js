import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function FormUser() {
    const [userInfo,setUserInfo]=useState({userName:'',age:'',email:''})
    const haandleChange=()=>{
        
    }

  return (
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" onChange={haandleChange} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>UserName</Form.Label>
      <Form.Control type="text" placeholder="Username" onChange={haandleChange} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>age</Form.Label>
      <Form.Control type="number" placeholder="number" onChange={haandleChange} />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}

export default FormUser