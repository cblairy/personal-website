import { ParallaxProvider } from "react-scroll-parallax";
import { useState, useEffect, useRef } from "react";

import Header from "./components/header";
import TopSection from "./components/top-section";
import SkillsSection from "./components/skills-section";
import PortfolioSection from "./components/portfolio-section";
import ContactSection from "./components/contact-section";

import "./index.scss";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isAnimationDone, setIsAnimationDone] = useState(false);
    const skillsSectionRef = useRef(null);
    const contactSectionRef = useRef(null);
    const portfolioSectionRef = useRef(null);
    const startRef = useRef(null);
    const [bodyStyle, setBodyStyle] = useState({});


    useEffect(() => {
        startRef.current.scrollIntoView();
    })

    function handleload() {
        if (isLoading)
            setTimeout(() => setIsLoading(false), 1000);
    }

    function handleAnimationEnd() {
        setIsAnimationDone(true);
    }

    /******** Disable mouse and keyboard events while loading ********/
    useEffect(() => {
        const disableEvents = () => {

            if (isLoading) {
                setBodyStyle({
                    pointerEvents: 'none',
                    overflow: 'hidden',
                });

            } else {
                setBodyStyle({
                    pointerEvents: 'auto',
                    overflow: 'auto',
                });
            }
        };

        disableEvents();
    }, [isLoading]);

    /******** Smooth scroll for all nav links ********/
    const handleLinkClick = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="app" ref={startRef} style={bodyStyle}>
            <div className={`loader ${isLoading ? "" : "loaded"} ${isAnimationDone ? "animationDone" : ""}`} onAnimationEnd={handleAnimationEnd} ><span>chargement...</span></div>
            
            <ParallaxProvider > 
                <Header 
                    onLinkClick={(ref) => handleLinkClick(ref)}
                    skillsSectionRef={skillsSectionRef}
                    contactSectionRef={contactSectionRef}
                    portfolioSectionRef={portfolioSectionRef}
                />
                <TopSection onLoad={handleload} isLoading={!isAnimationDone} skillsSectionRef={skillsSectionRef} onLinkClick={(ref) => handleLinkClick(ref)} />
                <SkillsSection isLoading={!isAnimationDone} sectionRef={skillsSectionRef}/>
                <PortfolioSection isLoading={!isAnimationDone} sectionRef={portfolioSectionRef} startRef={startRef} />
                <ContactSection isLoading={!isAnimationDone} sectionRef={contactSectionRef} startRef={startRef} onLinkClick={(ref) => handleLinkClick(ref)} />
            </ParallaxProvider>
            
        </div>   
    );
}

export default App;
