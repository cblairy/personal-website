import './styles.scss';
import React, { useState, useEffect } from "react";



function Bar(props) {

    useEffect(() => {
        let fond = document.getElementById('middleSection');
        let button = document.getElementById('test');
        let bar = document.getElementById('progress-bar');
    })
    
    
    
      
    return (
    
        <div id="progress-bar" onAnimationEnd={props.setShowElement} className='progress-bar' style={{
            //display: props.showElement ? "block" : "none",
            animation: props.showElement ? "slideOutToLeft 1s ease-in-out forwards" : "slideInFromLeft 1s ease-in-out forwards"
          }}>
          <div
            className="progress-bar__filler"
            style={{ width: "70% "}}
          ></div>
        </div>
     
    );
}

export default Bar;