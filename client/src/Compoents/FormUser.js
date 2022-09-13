import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { updateUser, addUser } from "./../Redux/actions/userAction";
import { useDispatch } from "react-redux";

function FormUser({ commandeType, user,handleClose }) {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState(
    commandeType === "update"
      ? { userName: user.userName, email: user.email, age: user.age }
      : { userName: "", email: "", age: "" }
  );
  const haandleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (commandeType === "update") {
      dispatch(updateUser(userInfo, user._id));
      handleClose()

    }
    if (commandeType === "add") {
      dispatch(addUser(userInfo));
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={haandleChange}
          name="email"
          value={userInfo.email}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>UserName</Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
          onChange={haandleChange}
          name="userName"
          value={userInfo.userName}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>age</Form.Label>
        <Form.Control
          type="number"
          placeholder="number"
          onChange={haandleChange}
          name="age"
          value={userInfo.age}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        {commandeType === "update" ? "update" : "add"}
      </Button>
    </Form>
  );
}

export default FormUser;
