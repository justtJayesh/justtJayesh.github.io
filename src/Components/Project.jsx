import {
    Badge,
    Box,
    Button,
    Heading,
    HStack,
    Image,
    Link,
    Stack,
    Text,
} from "@chakra-ui/react";
import React from "react";
import { IoLinkSharp, IoLogoGithub } from "react-icons/io5";
import project1 from "../Assets/project_posters/1.png";
import project2 from "../Assets/project_posters/2.png";
import project3 from "../Assets/project_posters/3.png";

const Project = () => {
    return (
        <div>
            <Box w={"72%"} margin={"auto"}>
                <Box padding={'0 20px'} borderLeft={'3px solid gray'}>
                    <Heading textAlign={{ base: "center", lg: "left" }}>
                        My Work
                    </Heading>
                </Box>
                {/* Project 1 */}
                <Stack display={"flex"} alignItems={"center"}>
                    <Box
                        w={{ lg: "100%" }}
                        padding={"30px 0"}
                        borderBottom={"1px solid gray"}
                    >
                        <Stack
                            display={"flex"}
                            flexDirection={{ lg: "row", base: "column" }}
                            justifyContent={"space-evenly"}
                            alignItems={"top"}
                        >
                            <Box
                                w={{ lg: "26%", base: "60%" }}
                                borderRadius={"5px"}
                                margin={{ base: "auto" }}
                                marginTop={"0.5rem"}
                            >
                                <Image
                                    src={project1}
                                    w={"100%"}
                                    borderRadius={5}
                                />
                            </Box>
                            <Box
                                w={{ lg: "67%", base: "100%" }}
                                padding={"5px"}
                            >
                                <Stack
                                    spacing={3}
                                    textAlign={{ base: "center", lg: "left" }}
                                >
                                    <Heading>JEE-Fit Clone</Heading>
                                    <Badge>Individual Project</Badge>
                                    <Box>
                                        <HStack
                                            justifyContent={{
                                                base: "center",
                                                lg: "left",
                                            }}
                                        >
                                            <Badge colorScheme="orange">
                                                HTML
                                            </Badge>
                                            <Badge colorScheme="blue">
                                                CSS
                                            </Badge>
                                            <Badge colorScheme="yellow">
                                                JavaScript
                                            </Badge>
                                        </HStack>
                                    </Box>
                                    <Text textAlign={"justify"}>
                                        JEE-Fit is a Fitness tracking web
                                        application use to track any individuals
                                        fitness health. Customize your workout
                                        plan with over 1400 free exercises in
                                        Jefit Workout Plan Builder. And easily
                                        share with friends.
                                    </Text>
                                    <HStack
                                        spacing={5}
                                        justifyContent={{
                                            base: "center",
                                            lg: "left",
                                        }}
                                    >
                                        <Link
                                            href="https://github.com/justtJayesh/JEFIT-Clone"
                                            _hover={{ textDecoration: "none" }}
                                            target="_blank"
                                        >
                                            <Button
                                                size="sm"
                                                colorScheme={"blue"}
                                            >
                                                <HStack>
                                                    <Text>GitHub</Text>
                                                    <IoLogoGithub />
                                                </HStack>
                                            </Button>
                                        </Link>
                                        <Link
                                            href="https://equiinox.netlify.app/"
                                            _hover={{ textDecoration: "none" }}
                                            target="_blank"
                                        >
                                            <Button
                                                size="sm"
                                                colorScheme={"orange"}
                                            >
                                                <HStack>
                                                    <Text>Deployment</Text>
                                                    <IoLinkSharp />
                                                </HStack>
                                            </Button>
                                        </Link>
                                    </HStack>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                </Stack>

                {/* Project 2 */}
                <Stack display={"flex"} alignItems={"center"}>
                    <Box
                        w={{ lg: "100%" }}
                        padding={"30px 0"}
                        borderBottom={"1px solid gray"}
                    >
                        <Stack
                            display={"flex"}
                            flexDirection={{ lg: "row", base: "column" }}
                            justifyContent={"space-evenly"}
                            alignItems={"top"}
                        >
                            <Box
                                w={{ lg: "26%", base: "60%" }}
                                borderRadius={"5px"}
                                margin={{ base: "auto" }}
                                marginTop={"0.5rem"}
                            >
                                <Image
                                    src={project2}
                                    w={"100%"}
                                    borderRadius={5}
                                />
                            </Box>
                            <Box
                                w={{ lg: "67%", base: "100%" }}
                                padding={"5px"}
                            >
                                <Stack
                                    spacing={3}
                                    textAlign={{ base: "center", lg: "left" }}
                                >
                                    <Heading>LensKart Clone</Heading>
                                    <Badge>Individual Project</Badge>
                                    <Box>
                                        <HStack
                                            justifyContent={{
                                                base: "center",
                                                lg: "left",
                                            }}
                                        >
                                            <Badge colorScheme="blue">
                                                React js
                                            </Badge>
                                            <Badge colorScheme="purple">
                                                Redux
                                            </Badge>
                                            <Badge colorScheme="orange">
                                                HTML
                                            </Badge>
                                            <Badge colorScheme="blue">
                                                CSS
                                            </Badge>
                                            <Badge colorScheme="yellow">
                                                JavaScript
                                            </Badge>
                                        </HStack>
                                    </Box>
                                    <Text textAlign={"justify"}>
                                        Lenskart is the leading e-commerce
                                        portal for eyewear in India. It has
                                        revolutionised the eyewear industry in
                                        the country with its omni-channel
                                        approach.
                                    </Text>
                                    <HStack
                                        spacing={5}
                                        justifyContent={{
                                            base: "center",
                                            lg: "left",
                                        }}
                                    >
                                        <Link
                                            href="https://github.com/justtJayesh/LensKart-Clone"
                                            _hover={{ textDecoration: "none" }}
                                            target="_blank"
                                        >
                                            <Button
                                                size="sm"
                                                colorScheme={"blue"}
                                            >
                                                <HStack>
                                                    <Text>GitHub</Text>
                                                    <IoLogoGithub />
                                                </HStack>
                                            </Button>
                                        </Link>
                                        <Link
                                            href="https://lenscraft.vercel.app/"
                                            _hover={{ textDecoration: "none" }}
                                            target="_blank"
                                        >
                                            <Button
                                                size="sm"
                                                colorScheme={"orange"}
                                            >
                                                <HStack>
                                                    <Text>Deployment</Text>
                                                    <IoLinkSharp />
                                                </HStack>
                                            </Button>
                                        </Link>
                                    </HStack>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                </Stack>

                {/* Project 3 */}
                <Stack display={"flex"} alignItems={"center"}>
                    <Box
                        w={{ lg: "100%" }}
                        padding={"30px 0"}
                        borderBottom={"1px solid gray"}
                    >
                        <Stack
                            display={"flex"}
                            flexDirection={{ lg: "row", base: "column" }}
                            justifyContent={"space-evenly"}
                            alignItems={"top"}
                        >
                            <Box
                                w={{ lg: "26%", base: "60%" }}
                                borderRadius={"5px"}
                                margin={{ base: "auto" }}
                                marginTop={"0.5rem"}
                            >
                                <Image
                                    src={project3}
                                    w={"100%"}
                                    borderRadius={5}
                                />
                            </Box>
                            <Box
                                w={{ lg: "67%", base: "100%" }}
                                padding={"5px"}
                            >
                                <Stack
                                    spacing={3}
                                    textAlign={{ base: "center", lg: "left" }}
                                >
                                    <Heading>American Eagle Clone</Heading>
                                    <Badge>Collaborative Project</Badge>
                                    <Box>
                                        <HStack
                                            justifyContent={{
                                                base: "center",
                                                lg: "left",
                                            }}
                                        >
                                            <Badge colorScheme="blue">
                                                React js
                                            </Badge>
                                            <Badge colorScheme="purple">
                                                Redux
                                            </Badge>
                                            <Badge colorScheme="orange">
                                                HTML
                                            </Badge>
                                            <Badge colorScheme="blue">
                                                CSS
                                            </Badge>
                                            <Badge colorScheme="yellow">
                                                JavaScript
                                            </Badge>
                                        </HStack>
                                    </Box>
                                    <Text textAlign={"justify"}>
                                        American Eagle Outfitters, Inc., also
                                        known as American Eagle, is an American
                                        lifestyle, clothing, and accessories
                                        retailer headquartered at SouthSide
                                        Works in Pittsburgh, Pennsylvania.
                                    </Text>
                                    <HStack
                                        spacing={5}
                                        justifyContent={{
                                            base: "center",
                                            lg: "left",
                                        }}
                                    >
                                        <Link
                                            href="https://github.com/justtJayesh/JEFIT-Clone"
                                            _hover={{ textDecoration: "none" }}
                                            target="_blank"
                                        >
                                            <Button
                                                size="sm"
                                                colorScheme={"blue"}
                                            >
                                                <HStack>
                                                    <Text>GitHub</Text>
                                                    <IoLogoGithub />
                                                </HStack>
                                            </Button>
                                        </Link>
                                        <Link
                                            href="https://equiinox.netlify.app/"
                                            _hover={{ textDecoration: "none" }}
                                            target="_blank"
                                        >
                                            <Button
                                                size="sm"
                                                colorScheme={"orange"}
                                            >
                                                <HStack>
                                                    <Text>Deployment</Text>
                                                    <IoLinkSharp />
                                                </HStack>
                                            </Button>
                                        </Link>
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
