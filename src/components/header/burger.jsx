import React, { useState } from "react";

    function Burger({ content, isActiveBurger, setIsActiveBurger }) {

    return (
        <nav>
            <div className={`side-nav ${isActiveBurger ? "active" : ""}`}>{content}</div>

            <a href="#" className="open-btn" onClick={() => setIsActiveBurger(true)}>
                <span className="burger-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </a>
        </nav>
    );
}

export default Burger;