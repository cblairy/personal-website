import './styles.scss';
import React, { useState, useEffect } from "react";
import Bar from './bar';



function MiddleSection() {
    const [showElement, setShowElement] = useState(false);

    useEffect(() => {
        let fond = document.getElementById('middleSection');
        let button = document.getElementById('test');
        let bar = document.getElementById('progress-bar');
    })
    
    
    
      
    return (
      <section id="middleSection" onMouseEnter={() => setShowElement(!showElement)} onMouseLeave={() => setShowElement(!showElement)} className="middleSection">
        <button id='test'>=B Test moa =B</button>
        {showElement ? "Cacher l'élément" : "Afficher l'élément"}
        <Bar showElement={showElement} setShowElement={setShowElement}/>
      
      </section>
    );
}

export default MiddleSection;