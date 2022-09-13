import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { getOneUser, deleteUser } from "../Redux/actions/userAction";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import FormUser from "./FormUser";

function CardUser({ user, details }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    if (!details) {
      dispatch(getOneUser(user._id));
      navigate(`/${user._id}`);
    } else {
      if (window.confirm("do you want to delete this user")) {
        dispatch(deleteUser(user._id, navigate));
      }
    }
  };
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{user && user.userName}</Card.Title>
          <Card.Text>{user && user.email}</Card.Text>
          <Card.Text>{user && details && user.age}</Card.Text>
          <Button
            variant={!details ? "primary" : "danger"}
            onClick={handleClick}
          >
            {!details ? "show More details" : "Delete"}
          </Button>
        </Card.Body>

        {details && (
          <Button variant="primary" onClick={handleShow}>
            update
          </Button>
        )}
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update user</Modal.Title>
        </Modal.Header>
        <FormUser commandeType="update" user={user} handleClose={handleClose} />
        <Modal.Footer>
          <Button variant="secondary" >
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CardUser;
