import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import profilePicture from "../Assets/picture2.jpg";

export const About = () => {
    return (
        <Box backgroundColor={"#EDF7FA"} display="flex">
            <Box w={"72%"} margin={"70px auto"}>
                <Stack
                    direction={{ lg: "row", md: "column", base: "column" }}
                    justifyContent={"space-between"}
                >
                    <Box w={{ lg: "60%", base: "100%" }}>
                        <Box
                            padding={"0 20px"}
                            color={"gray.900"}
                            borderLeft={"3px solid gray"}
                        >
                            <Heading>About</Heading>
                        </Box>
                        <Box h={"7"}></Box>
                        <Text
                            textAlign={"justify"}
                            color={"gray.700"}
                            fontSize={"lg"}
                            id="user-detail-intro"
                        >
                            I'm a Full Stack Web Developer who is passionate
                            about developing things aesthetically pleasing and
                            creative to elevate people's interaction with the
                            product. Some technologies I enjoy working with
                            include ReactJS, Jamstack (Javascript, API +
                            Markup), and creating User interfaces using Figma
                            and Sketch. My Interest in designing led me to
                            become a Full Stack Web Developer, So that I could
                            build whatever I want.
                        </Text>
                    </Box>
                    <Box
                        w={{ lg: "25%", base: "70%" }}
                        // borderRadius={"70%"}
                        // border={"1px solid black"}
                    >
                        <Image className="home-img" src={profilePicture} borderRadius={"2%"} />
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
};
