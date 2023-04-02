import Header from "./components/header";
import TopSection from "./components/top-section";
import SkillsSection from "./components/skills-section";
import PortfolioSection from "./components/portfolio-section";
import BottomSection from "./components/bottom-section";

import "./index.scss";

import { ParallaxProvider } from "react-scroll-parallax";
import { useState, useEffect } from "react";

function App() {
    const [isLoading, setLoading] = useState(true);

    function handleload() {
        if (isLoading)
            setTimeout(() => setLoading(false), 1000);
    }
    
    handleload()

    return (
        <div className="app" >
            <div className={`loader ${isLoading ? "" : "loaded"}`} ><span>Chargement...</span></div>
            
            <ParallaxProvider > 
                <Header />
                <TopSection isLoading={isLoading} />
                <SkillsSection />
                <PortfolioSection />
                <BottomSection />
            </ParallaxProvider>
            
        </div>   
    );
}

export default App;
