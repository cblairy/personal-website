import Header from "./components/header";
import TopSection from "./components/top_section";
import MiddleSection from "./components/middle_section";
import SecondMidSection from "./components/second_middle_section";
import BottomSection from "./components/bottom_section";

import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  let viewportWidth = window.innerWidth;
  document.documentElement.style.setProperty('--viewport-width', `${viewportWidth}px`);

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
