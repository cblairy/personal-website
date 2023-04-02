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

function SkillsSection() {
    const [showElement, setShowElement] = useState(false);
    const [showLogo, setShowLogo] = useState(false);
    const [bars, setBars] = useState([]);

    // creates an event on the element passed in ref (30% of the visible element triggers it)
    const [ref, inView] = useInView({
        threshold: 0.3,
        showElement,
    });


    useEffect(() => {
        if (inView) {
            // displays the bar elements according to the view
            setShowElement(true);
            console.log("middle-visible !")
        }
    }, [inView]);
      
    return (
        <section id="skills" className="skills-section" ref={ref}>
            <div className="skills-title">
                <div></div>
                <h3>Mes travaux récents</h3>
                <div></div>
            </div>
            <p animation={showElement ? "slideInFromBottom 1s ease-out" : ""} className="sub-intro">Fraichement diplômé d'un titre RNCP "developpeur web et web mobile" en Mars 2023, je me concentre actuellement sur la recherche d'une alternance pour un bachelor devOps CDA pour la rentrée de Septembre.</p>
            <div className='all-bars'>
                <div>
                    <div className='bar-and-logo'>
                        <img src={phpLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                        <Bar percent={"85%"} showLogo={showLogo} setShowLogo={setShowLogo} animation={showElement ? "slideInFromTop 1s ease-out" : ""}/>
                    </div>

                    <div className='bar-and-logo'>
                        <img src={javascriptLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                        <Bar percent={"90%"}showElement={showElement} setShowElement={setShowElement} animation={showElement ? "slideInFromTop 1s ease-out" : ""}/>
                    </div>

                    <div className='bar-and-logo'>
                        <img src={nodeLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                        <Bar percent={"60%"}showElement={showElement} setShowElement={setShowElement} animation={showElement ? "slideInFromTop 1s ease-out" : ""}/>
                    </div>

                    <div className='bar-and-logo'>
                        <img src={pythonLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                        <Bar percent={"60%"}showElement={showElement} setShowElement={setShowElement} animation={showElement ? "slideInFromTop 1s ease-out" : ""}/>
                    </div>

                    <div className='bar-and-logo'>
                        <img src={cssLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                        <Bar percent={"90%"}showElement={showElement} setShowElement={setShowElement} animation={showElement ? "slideInFromTop 1s ease-out" : ""}/>
                    </div>
                </div>

                <div>
                    <div className='bar-and-logo'>
                        <img src={symfonyLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                        <Bar percent={"75%"} showLogo={showLogo} setShowLogo={setShowLogo} animation={showElement ? "slideInFromTop 1s ease-out" : ""}/>
                    </div>

                    <div className='bar-and-logo'>
                        <img src={codeIgniterLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                        <Bar percent={"60%"} showLogo={showLogo} setShowLogo={setShowLogo} animation={showElement ? "slideInFromTop 1s ease-out" : ""}/>
                    </div>

                    <div className='bar-and-logo'>
                        <img src={reactLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                        <Bar percent={"75%"} showElement={showElement} setShowElement={setShowElement} animation={showElement ? "slideInFromTop 1s ease-out" : ""}/>
                    </div>

                    <div className='bar-and-logo'>
                        <img src={angularLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                        <Bar percent={"25%"} showElement={showElement} setShowElement={setShowElement} animation={showElement ? "slideInFromTop 1s ease-out" : ""}/>
                    </div>

                    <div className='bar-and-logo'>
                        <img src={sassLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                        <Bar percent={"50%"} showElement={showElement} setShowElement={setShowElement} animation={showElement ? "slideInFromTop 1s ease-out" : ""}/>
                    </div>

                    <div className='bar-and-logo'>
                        <img src={djangoLogo} className={`show-logo ${showLogo ? "visible" : "show-logo"}`} alt="SymfonyLogo"/>
                        <Bar percent={"30%"} showElement={showElement} setShowElement={setShowElement} animation={showElement ? "slideInFromTop 1s ease-out" : ""}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;