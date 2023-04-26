import { ParallaxProvider } from "react-scroll-parallax";
import { useState, useEffect, useRef } from "react";

import Header from "./components/header";
import TopSection from "./components/top-section";
import SkillsSection from "./components/skills-section";
import PortfolioSection from "./components/portfolio-section";
import BottomSection from "./components/contact-section";

import "./index.scss";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isAnimationDone, setIsAnimationDone] = useState(false);
    const skillsSectionRef = useRef(null);
    const contactSectionRef = useRef(null);
    const portfolioSectionRef = useRef(null);
    const startRef = useRef(null);

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

    useEffect(() => {
        /******** Disable mouse and keyboard events while loading ********/
        const disableEvents = () => {

            if (isLoading) {
                document.body.style.pointerEvents = "none";
                document.body.style.overflow = "hidden";

            } else {
                document.body.style.pointerEvents = "auto";
                document.body.style.overflow = "auto";

            }
        };
        disableEvents();
    }, [isLoading]);

    
    const handleLinkClick = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="app" onLoad={handleload} ref={startRef}>
            <div className={`loader ${isLoading ? "" : "loaded"} ${isAnimationDone ? "animationDone" : ""}`} onAnimationEnd={handleAnimationEnd} ><span>chargement...</span></div>
            
            <ParallaxProvider > 
                <Header 
                    onLinkClick={(ref) => handleLinkClick(ref)}
                    skillsSectionRef={skillsSectionRef}
                    contactSectionRef={contactSectionRef}
                    portfolioSectionRef={portfolioSectionRef}
                />
                <TopSection isLoading={!isAnimationDone} />
                <SkillsSection isLoading={!isAnimationDone} sectionRef={skillsSectionRef}/>
                <PortfolioSection isLoading={!isAnimationDone} sectionRef={portfolioSectionRef}/>
                <BottomSection isLoading={!isAnimationDone} sectionRef={contactSectionRef}/>
            </ParallaxProvider>
            
        </div>   
    );
}

export default App;
