import { ParallaxProvider } from "react-scroll-parallax";
import { useState, useEffect } from "react";

import Header from "./components/header";
import TopSection from "./components/top-section";
import SkillsSection from "./components/skills-section";
import PortfolioSection from "./components/portfolio-section";
import BottomSection from "./components/contact-section";

import "./index.scss";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isAnimationDone, setIsAnimationDone] = useState(false);

    window.onload = function() {
        window.scrollTo(0, 0);
    }

    function handleload() {
        if (isLoading)
            setTimeout(() => setIsLoading(false), 1000);
    }

    function handleAnimationEnd() {
        setIsAnimationDone(true);
    }

    function scrollToSection(id) {
        const section = document.querySelector(id);
        const sectionTop = section.offsetTop;
        window.scrollTo({ top: sectionTop, behavior: 'smooth' });
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

        /******** Smooth scroll for all nav links ********/
        function handleClick(event) {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href');
            scrollToSection(targetId);
        }

        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', handleClick);
        });
            
        return () => {
            links.forEach(link => {
                link.removeEventListener('click', handleClick);
            });
        };    

    }, [isLoading]);
    

    return (
        <div className="app" onLoad={handleload}>
            <div className={`loader ${isLoading ? "" : "loaded"} ${isAnimationDone ? "animationDone" : ""}`} onAnimationEnd={handleAnimationEnd} ><span>chargement...</span></div>
            
            <ParallaxProvider > 
                <Header />
                <TopSection isLoading={!isAnimationDone} />
                <SkillsSection isLoading={!isAnimationDone} />
                <PortfolioSection isLoading={!isAnimationDone} />
                <BottomSection />
            </ParallaxProvider>
            
        </div>   
    );
}

export default App;
