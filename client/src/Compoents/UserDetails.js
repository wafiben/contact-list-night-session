import React, { useEffect } from "react";
import CardUser from "./CardUser";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneUser } from "../Redux/actions/userAction.js";

function UserDetails() {
  const dispatch = useDispatch();
  const foundUser = useSelector((state) => state.user);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    dispatch(getOneUser(id));
  }, []);
  return (
    <> {foundUser ? <CardUser details={true} user={foundUser} /> : "loading"}</>
  );
}

export default UserDetails;
