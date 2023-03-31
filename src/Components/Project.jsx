import { Box, Button, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { IoLinkSharp, IoLogoGithub } from "react-icons/io5";
import project1 from "../Assets/project_posters/1.png";
import project2 from "../Assets/project_posters/2.png";
import project3 from "../Assets/project_posters/4.png";

const Project = () => {
    return (
        <div>
            <Box w={"72%"} margin={"auto"}>
                <Heading
                    as={"header"}
                    fontSize={{ lg: "7xl", base: "6xl" }}
                    fontWeight={"black"}
                    textAlign={{ lg: "left", base: "center" }}
                    margin={"20px 0"}
                >
                    Projects
                </Heading>
                <Stack display={"flex"} alignItems={"center"}>
                    <Box
                        w={{ lg: "100%" }}
                        padding={"30px 0"}
                        borderBottom={"1px solid gray"}
                    >
                        <Stack
                            display={"flex"}
                            flexDirection={"row"}
                            justifyContent={"space-evenly"}
                            alignItems={"top"}
                        >
                            <Box
                                w={"26%"}
                                borderRadius={"5px"}
                                // marginTop={"0.5rem"}
                            >
                                <Image
                                    src={project1}
                                    w={"100%"}
                                    borderRadius={5}
                                />
                            </Box>
                            <Box w={"67%"} padding={'5px'}>
                                <Stack spacing={3}>
                                    <Heading>JEE-Fit Clone</Heading>
                                    <Text>HTML | CSS | JavaScript</Text>
                                    <Text>
                                        JEE-Fit is a Fitness tracking web
                                        application use to track any individuals
                                        fitness health. Customize your workout
                                        plan with over 1400 free exercises in
                                        Jefit Workout Plan Builder. And easily
                                        share with friends.
                                    </Text>
                                <HStack spacing={5}>
                                    <Button size='sm' colorScheme={'blue'}>
                                        <HStack>
                                            <Text>GitHub</Text>
                                            <IoLogoGithub />
                                        </HStack>
                                    </Button>
                                    <Button size='sm' colorScheme={'blue'}>
                                        <HStack>
                                            <Text>Deployment</Text>
                                            <IoLinkSharp />
                                        </HStack>
                                    </Button>
                                </HStack>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                    
                </Stack>
            </Box>
        </div>
    );
};

export default Project;
