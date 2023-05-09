import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Box, Heading, HStack, Stack, Text, Link } from "@chakra-ui/layout";
import React from "react";
import heroImg from "../Assets/heroImage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import Jayesh_resume from "../Assets/Resume/Jayesh-Mate-Resume.pdf";
import { textDecoration } from "@chakra-ui/react";

export const HeroSection = () => {
    const handleResume = () => {
        window.open(
            "https://drive.google.com/file/d/1T788dHvoZIeotEcH_pP-8SnKER1HmARW/view?usp=share_link"
        );
    };

    return (
        <div id="home">
            <Box
                w={{ lg: "88%", md: "100%", base: "100%" }}
                margin="auto"
                padding={"20px"}
                display={"flex"}
                flexDirection={"column"}
                // border='1px solid black';
            >
                <HStack
                    justifyContent={"space-evenly"}
                    align={"center"}
                    padding={"20px"}
                    display="flex"
                    flexDirection={{ base: "column", md: "column", lg: "row" }}
                >
                    <Box
                        padding="15px"
                        textAlign={{ lg: "left", md: "center", base: "center" }}
                    >
                        <Stack spacing={9}>
                            <Box>
                                <Heading
                                    fontSize={"6xl"}
                                    fontWeight={"extrabold"}
                                    id="user-detail-name"
                                >
                                    Hi, I am Jayesh, 👋🏼
                                </Heading>
                                <Heading>Full Stack Web Developer</Heading>
                            </Box>
                            <Text
                                w={{ lg: "85%", md: "95%", base: "100%" }}
                                id="user-detail-intro"
                                color={"gray.500"}
                            >
                                I code web apps just to let out my creative
                                thoughts & whatever helps make my life easier.
                            </Text>
                            <Box>
                                <HStack spacing={4}>
                                    <FontAwesomeIcon icon={faLocationArrow} />
                                    <Text fontWeight={"light"}>
                                        Nagpur Maharashtra, INDIA
                                    </Text>
                                    <Box
                                        h="18px"
                                        borderRight={"2px solid black"}
                                        m={0}
                                    ></Box>
                                    <Link
                                        href="https://www.linkedin.com/in/jayeshmate/"
                                        target="_blank"
                                    >
                                        <IoLogoLinkedin size={"24px"} />
                                    </Link>
                                    <Link
                                        href="https://github.com/justtJayesh"
                                        target="_blank"
                                    >
                                        <IoLogoGithub size={"24px"} />
                                    </Link>
                                </HStack>
                            </Box>

                            <Button
                                id="resume-button-2"
                                bg={useColorModeValue("#EE6260", "gray.700")}
                                color="white"
                                w={{ lg: "50%", base: "100%" }}
                                borderRadius="3"
                                h="50px"
                                fontSize={"larger"}
                                _hover={{ bg: "#D2302C" }}
                                onClick={handleResume}
                            >
                                <Link
                                    href={Jayesh_resume}
                                    download={true}
                                    target="_blank"
                                    id="resume-link-2"
                                    _hover={{ textDecoration: "none" }}
                                >
                                    Download Resume
                                </Link>
                            </Button>
                        </Stack>
                    </Box>
                    <Box w={"60%"} padding="15px" margin={"auto"}>
                        <Image
                            margin="auto"
                            src={heroImg}
                            alt="Hero Section Image"
                        />
                    </Box>
                </HStack>
            </Box>
        </div>
    );
};
