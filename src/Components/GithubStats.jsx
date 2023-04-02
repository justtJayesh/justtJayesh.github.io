import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const GithubStats = () => {
    return (
        <Box w={{ lg: "72%", base: "90%" }} margin={"40px auto"}>
            <Box padding={"0 20px"} borderLeft={"3px solid gray"}>
                <Heading>GitHub Stats</Heading>
            </Box>
            <Center>
                <Box padding={5} margin={'20px 0'}>
                    <GitHubCalendar username="justtjayesh" />
                </Box>
            </Center>
        </Box>
    );
};

export default GithubStats;
