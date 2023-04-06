import { Box, HStack } from "@chakra-ui/react";
import "./App.css";
import { About } from "./Components/About";
import GithubStats from "./Components/GithubStats";
import { HeroSection } from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import Skills from "./Components/Skill";
import Contact from "./Components/Contact";

function App() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <About />
            <Skills />
            <Project />
            <GithubStats />
            <Contact />
        </div>
    );
}

export default App;
