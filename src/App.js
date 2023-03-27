import "./App.css";
import { About } from "./Components/About";
import { HeroSection } from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skill";

function App() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <About />
            <Skills />
        </div>
    );
}

export default App;
