import './App.scss';
import Header from "./components/header";
import TopSection from "./components/top_section";
import MiddleSection from "./components/middle_section";
import BottomSection from "./components/bottom_section";



function App() {
  return (
    <div className="app">
        <Header />
        <TopSection />
        <MiddleSection />
        <BottomSection />
    </div>
  );
}

export default App;
