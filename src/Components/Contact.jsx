import { Box, HStack, Heading, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

const Contact = () => {
    return (
        <div>
            <Box
                w={{ lg: "72%", base: "90%" }}
                // h={"192px"}
                // border={"1px solid black"}
                margin={"40px auto"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
            >
                <Box padding={"0 20px"} mb={'20px'} borderLeft={"3px solid gray"}>
                    <Heading>Contact Me</Heading>
                </Box>
                <VStack spacing={5}>
                    <HStack spacing={"35px"} justifyContent={"center"}>
                        <Link href="https://www.linkedin.com/in/jayeshmate/"><IoLogoLinkedin size={"40px"} /></Link>
                        <Link href="https://github.com/justtJayesh"><IoLogoGithub size={"40px"} /></Link>
                        <Link href="https://twitter.com/justtJayesh"><IoLogoTwitter size={"40px"} /></Link>
                    </HStack>
                    <Text
                        fontSize={"sm"}
                        fontWeight={"light"}
                        textAlign={"center"}
                    >
                        Copyright ©2020 All rights reserved{" "}
                    </Text>
                </VStack>
            </Box>
        </div>
    );
};

export default Contact;
