import { Box, Center, HStack, Heading, Image } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const GithubStats = () => {
    return (
        <div style={{margin:"60px auto"}}>
            <Box w={{ lg: "72%", base: "90%" }} margin={"auto"}>
                <Box padding={"0 20px"} borderLeft={"3px solid gray"}>
                    <Heading>GitHub Stats</Heading>
                </Box>
                <Center>
                    <Box padding={5} margin={"20px 0"}>
                        <GitHubCalendar
                            class="react-activity-calendar"
                            username="justtjayesh"
                        />
                    </Box>
                </Center>
            </Box>
            <Center>
                <div>
                    <HStack>
                        <Image
                            id="github-streak-stats"
                            w={"430px"}
                            src="https://github-readme-streak-stats.herokuapp.com?user=justtJayesh"
                        />
                        <Image
                            id="github-stats-card"
                            w={"400px"}
                            src="https://github-readme-stats.vercel.app/api?username=justtJayesh&show_icons=true"
                        />
                        <Image
                            id="github-top-langs"
                            src="https://github-readme-stats.vercel.app/api/top-langs/?username=justtJayesh&layout=compact"
                        />
                    </HStack>
                </div>
            </Center>
        </div>
    );
};

export default GithubStats;
