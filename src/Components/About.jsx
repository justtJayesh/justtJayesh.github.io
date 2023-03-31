import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const About = () => {
    return (
        <Box  backgroundColor={"#EDF7FA"} display='flex'>
            <Box w={"72%"} margin={"70px auto"} >
                <Heading
                    // as={"header"}
                    // fontSize={{lg:"7xl", base: "6xl"}}
                    // fontWeight={"black"}
                    textAlign={{lg:"left", base: 'center'}}
                >
                    About
                </Heading>
                <Box h={'5'}></Box>
                <Text textAlign={'justify'}>I'm a Full Stack Web Developer who is passionate about developing things aesthetically pleasing and creative to elevate people's interaction with the product. Some technologies I enjoy working with include ReactJS, Jamstack (Javascript, API + Markup), and creating User interfaces using Figma and Sketch. My Interest in designing led me to become a Full Stack Web Developer, So that I could build whatever I want.</Text>
            </Box>
        </Box>
    );
};
