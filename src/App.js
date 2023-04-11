import { Text } from "@chakra-ui/react";
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
            <Text
                fontSize={"sm"}
                fontWeight={"light"}
                textAlign={"center"}
                m={"20px auto"}
            >
                Copyright ©2023 All rights reserved{" "}
            </Text>
        </div>
    );
}

export default App;
