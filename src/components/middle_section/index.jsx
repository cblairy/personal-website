import './styles.scss';
import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import Bar from './bar';
import symfonyLogo from './symfony.png';



function MiddleSection() {
    const [showElement, setShowElement] = useState(false);
    const [showLogo, setShowLogo] = useState(false);
   // const [hasIntersected, setHasIntersected] = useState(false);

    const onIntersect = (entry, observer) => {
      if (!showElement) {
        // Effect logic here
        setShowElement(true);
        observer.unobserve(entry.target);
      }
    };

    const [ref, inView, entry] = useInView({
      threshold: 0.3,
      showElement,
    });


    useEffect(() => {
      if (inView) {
        setShowElement(true);
        console.log("middle-visible !")
      }
    }, [inView]);
    
    
    
      
    return (
      <section id="middleSection" className="middleSection" ref={ref}>
        {showElement ? "Cacher l'élément" : "Afficher l'élément"}
        <div id='divBars'>
          <div className='divBar'>
            <div className='logoBar'>
              <img src={symfonyLogo} className={showLogo ? "visible" : ""} alt="SymfonyLogo"/>
              <Bar showLogo={showLogo} setShowLogo={setShowLogo} animation={showElement ? "slideInFromRight 2s ease-in-out" : ""}/>
            </div>

            <div className='logoBar'>
              <img src={symfonyLogo} className={showLogo ? "visible" : ""} alt="SymfonyLogo"/>
              <Bar showLogo={showLogo} setShowLogo={setShowLogo} animation={showElement ? "slideInFromRight 2s ease-in-out" : ""}/>
            </div>

            <div className='logoBar'>
              <img src={symfonyLogo} className={showLogo ? "visible" : ""} alt="SymfonyLogo"/>
              <Bar showLogo={showLogo} setShowLogo={setShowLogo} animation={showElement ? "slideInFromRight 2s ease-in-out" : ""}/>
            </div>
            

          </div>
          <div className='divBar divBar2'>
            <div className='logoBar'>
              <img src={symfonyLogo} className={showLogo ? "visible" : ""} alt="SymfonyLogo"/>
              <Bar showElement={showElement} setShowElement={setShowElement} animation={showElement ? "slideInFromLeft 2s ease-in-out" : ""}/>
            </div>

            <div className='logoBar'>
              <img src={symfonyLogo} className={showLogo ? "visible" : ""} alt="SymfonyLogo"/>
              <Bar showElement={showElement} setShowElement={setShowElement} animation={showElement ? "slideInFromLeft 2s ease-in-out" : ""}/>
            </div>

            <div className='logoBar'>
              <img src={symfonyLogo} className={showLogo ? "visible" : ""} alt="SymfonyLogo"/>
              <Bar showElement={showElement} setShowElement={setShowElement} animation={showElement ? "slideInFromLeft 2s ease-in-out" : ""}/>
            </div>
      

          </div>
        </div>
        
      
      </section>
    );
}

export default MiddleSection;