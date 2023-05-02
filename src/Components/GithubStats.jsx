import { Box, Center, Heading, Image, Stack } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const GithubStats = () => {
    return (
        <div style={{ margin: "60px auto" }}>
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
            <Box w={{ lg: "100%", base: "80%" }} m={"auto"}>
                <div>
                    <Stack
                        direction={{ lg: "row", md: "column", base: "column" }}
                        spacing={4}
                        justifyContent={{
                            lg: "center",
                            md: "center",
                            base: "center",
                        }}
                        alignItems={"center"}
                    >
                        <Image
                            id="github-streak-stats"
                            w={"420px"}
                            src="https://github-readme-streak-stats.herokuapp.com?user=justtJayesh"
                        />
                        <Image
                            id="github-stats-card"
                            w={"400px"}
                            src="https://github-readme-stats.vercel.app/api?username=justtJayesh&show_icons=true"
                        />
                        <Image
                            id="github-top-langs"
                            w={{ lg: "300px", md: "400px" }}
                            src="https://github-readme-stats.vercel.app/api/top-langs/?username=justtJayesh&layout=compact"
                        />
                    </Stack>
                </div>
            </Box>
        </div>
    );
};

export default GithubStats;
