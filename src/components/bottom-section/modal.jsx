import React, { useState, useEffect } from "react";

const Modal = ({ message, valid, alreadySubmitted }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    
    const timer = setTimeout(() => {
      setVisible(false);
    }, 6000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className={`modal ${visible ? "show-modal" : ""}`}>
      <div className={`modal-content ${valid ? "valid" : ""} ${alreadySubmitted ? "already-submitted" : ""}`}>{message}</div>
    </div>
  );
};

export default Modal;
