import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";
import { useSelector } from "react-redux";

function Alert() {
  const msg = useSelector((state) => state.msg);
  const [show, setShow] = useState(true);
  const handleClick=()=>{
    setShow(false)
  }

  return (
    <>
      {show && (
        <Toast>
          <Toast.Header onClick={handleClick}>
            <strong className="me-auto">{show && msg && msg}</strong>
          </Toast.Header>
        </Toast>
      )}
    </>
  );
}

export default Alert;
