import React, { useState, useEffect } from "react";

const Modal = ({ message, valid, alreadySubmitted }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      
        const timer = setTimeout(() => {
            setVisible(false);
        }, 6000);

        return () => {
            clearTimeout(timer);
        };

    }, []);

    if (!visible) {
        return null;
    }

    return (
        <div className={`modal ${visible ? "show-modal" : ""}`}>
            <div className={`modal-content ${valid ? "valid" : ""} ${alreadySubmitted ? "already-submitted" : ""}`}>{message}</div>
        </div>
    );
};

export default Modal;
