import Header from "./components/header";
import TopSection from "./components/top-section";
import MiddleSection from "./components/skills-section";
import SecondMidSection from "./components/portfolio-section";
import BottomSection from "./components/bottom-section";

import { ParallaxProvider } from "react-scroll-parallax";

function App() {


  return (
    <ParallaxProvider class="app"> 
        <Header />
        <TopSection />
        <MiddleSection />
        <SecondMidSection />
        <BottomSection />
    </ParallaxProvider>
    
  );
}

export default App;
