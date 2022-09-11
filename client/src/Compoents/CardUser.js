import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { getOneUser, deleteUser } from "../Redux/actions/userAction";
import { useDispatch } from "react-redux";

function CardUser({ user, details }) {
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
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{user && user.userName}</Card.Title>
        <Card.Text>{user && user.email}</Card.Text>
        <Card.Text>{user && details && user.age}</Card.Text>
        <Button variant={!details ? "primary" : "danger"} onClick={handleClick}>
          {!details ? "show More details" : "Delete"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardUser;
