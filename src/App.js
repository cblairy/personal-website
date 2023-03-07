import Header from "./components/header";
import TopSection from "./components/top_section";
import MiddleSection from "./components/middle_section";
import BottomSection from "./components/bottom_section";

import { ParallaxProvider } from "react-scroll-parallax";

/* <Header />
        
        
        <BottomSection /> */

function App() {
  return (
    <ParallaxProvider className="app">
        <TopSection />
        <MiddleSection />
        <BottomSection />
    </ParallaxProvider>
  );
}

export default App;
