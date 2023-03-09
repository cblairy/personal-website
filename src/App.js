import Header from "./components/header";
import TopSection from "./components/top_section";
import MiddleSection from "./components/middle_section";
import BottomSection from "./components/bottom_section";
import Test from "./components/test.jsx";

import { ParallaxProvider } from "react-scroll-parallax";

/* 
        
        
        <BottomSection /> */

function App() {
  return (
    <ParallaxProvider class="app"> 
        <TopSection />
        <Header />
        <MiddleSection />
        <BottomSection />
    </ParallaxProvider>
    
  );
}

export default App;
