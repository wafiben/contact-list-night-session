import React, { useState, useEffect } from "react";
import Toast from "react-bootstrap/Toast";
import { useSelector } from "react-redux";

function Alert() {
  const msg = useSelector((state) => state.msg);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState(msg);
  const handleClick = () => {
    setShow(false);
    setMessage("");
  };
  useEffect(() => {
    if (msg) {
      setMessage(msg);
      setShow(true);
    }
  }, [msg]);

  return (
    <>
      {show && (
        <Toast>
          <Toast.Header onClick={handleClick}>
            <strong className="me-auto">{show && message && message}</strong>
          </Toast.Header>
        </Toast>
      )}
    </>
  );
}

export default Alert;
