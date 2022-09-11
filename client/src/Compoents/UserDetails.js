import React from "react";
import CardUser from "./CardUser";
import { useSelector } from "react-redux";

function UserDetails() {
  const foundUser = useSelector((state) => state.user);
  return <CardUser details={true} user={foundUser} />;
}

export default UserDetails;
