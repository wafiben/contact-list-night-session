import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "./../Redux/actions/userAction";
import CardUser from "../Compoents/CardUser";

function Home() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const msg=useSelector(state=>state.msg)


  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {users.length!==0 ?
        users.map((elt) => (
          <CardUser key={elt._id} user={elt} details={false} />
        )):msg}
    </div>
  );
}

export default Home;
