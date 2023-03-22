import './styles.scss';
import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import Bar from './bar';

import cssLogo from '../../images/icons/css-3.png';
import sassLogo from '../../images/icons/sass.png';
import phpLogo from '../../images/icons/php.png';
import codeIgniterLogo from '../../images/icons/codeigniter.png';
import nodeLogo from '../../images/icons/node.png';
import reactLogo from '../../images/icons/react.png';
import angularLogo from '../../images/icons/angular.png';
import pythonLogo from '../../images/icons/python.png';
import djangoLogo from '../../images/icons/django.png';
import javascriptLogo from '../../images/icons/javaScript.png';


import symfonyLogo from '../../images/icons/symfony.png';

function MiddleSection() {
    const [showElement, setShowElement] = useState(false);
    const [showLogo, setShowLogo] = useState(false);

    // crée un evenement sur l'element passé en ref (30% de l'element visible le declenche)
    const [ref, inView] = useInView({
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
      <section id="mid1" className="middleSection" ref={ref}>
        {showElement ? "Cacher l'élément" : "Afficher l'élément"}
        <div id='fullBars'>
          <div className='divBarLeft'>
            <div className='barAndLogo'>
              <img src={phpLogo} className={showLogo ? "visible showLogo" : "showLogo"} alt="SymfonyLogo"/>
              <Bar percent={"85%"} showLogo={showLogo} setShowLogo={setShowLogo} animation={showElement ? "slideInFromBottom 1s ease-out" : ""}/>
            </div>

            <div className='barAndLogo'>
              <img src={javascriptLogo} className={showLogo ? "visible showLogo" : "showLogo"} alt="SymfonyLogo"/>
              <Bar percent={"90%"}showElement={showElement} setShowElement={setShowElement} animation={showElement ? "slideInFromBottom 1s ease-out" : ""}/>
            </div>

            <div className='barAndLogo'>
              <img src={nodeLogo} className={showLogo ? "visible showLogo" : "showLogo"} alt="SymfonyLogo"/>
              <Bar percent={"60%"}showElement={showElement} setShowElement={setShowElement} animation={showElement ? "slideInFromBottom 1s ease-out" : ""}/>
            </div>

            <div className='barAndLogo'>
              <img src={pythonLogo} className={showLogo ? "visible showLogo" : "showLogo"} alt="SymfonyLogo"/>
              <Bar percent={"60%"}showElement={showElement} setShowElement={setShowElement} animation={showElement ? "slideInFromBottom 1s ease-out" : ""}/>
            </div>

            <div className='barAndLogo'>
              <img src={cssLogo} className={showLogo ? "visible showLogo" : "showLogo"} alt="SymfonyLogo"/>
              <Bar percent={"90%"}showElement={showElement} setShowElement={setShowElement} animation={showElement ? "slideInFromBottom 1s ease-out" : ""}/>
            </div>
          </div>

          <div className='divBarRight'>
            <div className='barAndLogo'>
                <img src={symfonyLogo} className={showLogo ? "visible showLogo" : "showLogo"} alt="SymfonyLogo"/>
                <Bar percent={"75%"} showLogo={showLogo} setShowLogo={setShowLogo} animation={showElement ? "slideInFromTop 1s ease-out" : ""}/>
              </div>

              <div className='barAndLogo'>
                <img src={codeIgniterLogo} className={showLogo ? "visible showLogo" : "showLogo"} alt="SymfonyLogo"/>
                <Bar percent={"60%"} showLogo={showLogo} setShowLogo={setShowLogo} animation={showElement ? "slideInFromTop 1s ease-out" : ""}/>
              </div>

              <div className='barAndLogo'>
                <img src={reactLogo} className={showLogo ? "visible showLogo" : "showLogo"} alt="SymfonyLogo"/>
                <Bar percent={"75%"} showElement={showElement} setShowElement={setShowElement} animation={showElement ? "slideInFromTop 1s ease-out" : ""}/>
              </div>

              <div className='barAndLogo'>
                <img src={angularLogo} className={showLogo ? "visible showLogo" : "showLogo"} alt="SymfonyLogo"/>
                <Bar percent={"25%"} showElement={showElement} setShowElement={setShowElement} animation={showElement ? "slideInFromTop 1s ease-out" : ""}/>
              </div>

              <div className='barAndLogo'>
                <img src={sassLogo} className={showLogo ? "visible showLogo" : "showLogo"} alt="SymfonyLogo"/>
                <Bar percent={"50%"} showElement={showElement} setShowElement={setShowElement} animation={showElement ? "slideInFromTop 1s ease-out" : ""}/>
              </div>

              <div className='barAndLogo'>
                <img src={djangoLogo} className={showLogo ? "visible showLogo" : "showLogo"} alt="SymfonyLogo"/>
                <Bar percent={"30%"} showElement={showElement} setShowElement={setShowElement} animation={showElement ? "slideInFromTop 1s ease-out" : ""}/>
              </div>
          </div>
        
        </div>
      </section>
    );
}

export default MiddleSection;