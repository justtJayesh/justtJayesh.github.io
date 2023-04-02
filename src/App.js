import { Box, HStack } from "@chakra-ui/react";
import "./App.css";
import { About } from "./Components/About";
import GithubStats from "./Components/GithubStats";
import { HeroSection } from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import Skills from "./Components/Skill";

function App() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <About />
            <Skills />
            <Project />
            <GithubStats />

            <Box>
                <HStack>
                    <Box>a</Box>
                    <Box>b</Box>
                    <Box>c</Box>
                    <Box>d</Box>
                </HStack>
            </Box>
        </div>
    );
}

export default App;
