import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
    HStack,
    Box,
} from "@chakra-ui/react";
import {
    IoLogoNodejs,
    IoLogoHtml5,
    IoLogoCss3,
    IoLogoReact,
    IoLogoPython,
} from "react-icons/io5";
import {
    SiExpress,
    SiFigma,
    SiGithub,
    SiJavascript,
    SiMongodb,
    SiPostman,
    SiRedux,
} from "react-icons/si";
const Feature = ({ text, icon, iconBg }) => {
    return (
        <Stack direction={"row"} align={"center"} className="skills-card">
            <Flex
                w={8}
                h={8}
                align={"center"}
                justify={"center"}
                rounded={"full"}
                bg={iconBg}
                className="skills-card-img"
            >
                {icon}
            </Flex>
            <Text className="skills-card-name" fontWeight={600}>
                {text}
            </Text>
        </Stack>
    );
};

export default function Skills() {
    return (
        <div id="skills">
            <Container
                maxW={"5xl"}
                py={12}
                w={{ lg: "72%", base: "90%" }}
                margin={"60px auto"}
            >
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Flex>
                        <Image
                            class="skills-card-img"
                            rounded={"md"}
                            alt={"feature image"}
                            src={
                                "https://images.unsplash.com/photo-1484820540004-14229fe36ca4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            }
                            objectFit={"cover"}
                        />
                    </Flex>
                    <Stack spacing={4}>
                        <Box padding={"0 20px"} borderLeft={"3px solid gray"}>
                            <Heading>Teach Stacks and Tools</Heading>
                        </Box>
                        <Text color={"gray.500"} fontSize={"lg"}>
                            The more good ideas you collect, the more you can
                            choose from to be influenced by.
                        </Text>
                        <Box></Box>
                        <Box></Box>
                        <HStack spacing={"20"}>
                            <Stack
                                spacing={5}
                                divider={
                                    <StackDivider
                                        borderColor={useColorModeValue(
                                            "gray.100",
                                            "gray.700"
                                        )}
                                    />
                                }
                            >
                                <Feature
                                    icon={
                                        <Icon
                                            as={IoLogoHtml5}
                                            color={"orange.500"}
                                            w={5}
                                            h={5}
                                        />
                                    }
                                    iconBg={useColorModeValue(
                                        "orange.100",
                                        "orange.900"
                                    )}
                                    text={"HTML 5"}
                                />
                                <Feature
                                    icon={
                                        <Icon
                                            as={IoLogoCss3}
                                            color={"blue.500"}
                                            w={5}
                                            h={5}
                                        />
                                    }
                                    iconBg={useColorModeValue(
                                        "blue.100",
                                        "blue.900"
                                    )}
                                    text={"CSS 3"}
                                />
                                <Feature
                                    icon={
                                        <Icon
                                            as={SiJavascript}
                                            color={"yellow.500"}
                                            w={5}
                                            h={5}
                                        />
                                    }
                                    iconBg={useColorModeValue(
                                        "yellow.100",
                                        "yellow.900"
                                    )}
                                    text={"JavaScript"}
                                />
                                <Feature
                                    icon={
                                        <Icon
                                            as={IoLogoNodejs}
                                            color={"green.500"}
                                            w={5}
                                            h={5}
                                        />
                                    }
                                    iconBg={useColorModeValue(
                                        "green.100",
                                        "green.900"
                                    )}
                                    text={"Node Js"}
                                />
                                <Feature
                                    icon={
                                        <Icon
                                            as={SiExpress}
                                            color={"white.500"}
                                            w={5}
                                            h={5}
                                        />
                                    }
                                    iconBg={useColorModeValue(
                                        "gray.100",
                                        "gray.900"
                                    )}
                                    text={"Express Js"}
                                />
                                <Feature
                                    icon={
                                        <Icon
                                            as={SiFigma}
                                            color={"cyan.500"}
                                            w={5}
                                            h={5}
                                        />
                                    }
                                    iconBg={useColorModeValue(
                                        "gray.100",
                                        "gray.100"
                                    )}
                                    text={"Figma"}
                                />
                            </Stack>
                            <Stack
                                spacing={5}
                                divider={
                                    <StackDivider
                                        borderColor={useColorModeValue(
                                            "gray.100",
                                            "gray.700"
                                        )}
                                    />
                                }
                            >
                                <Feature
                                    icon={
                                        <Icon
                                            as={IoLogoPython}
                                            color={"blue.500"}
                                            w={5}
                                            h={5}
                                        />
                                    }
                                    iconBg={useColorModeValue(
                                        "blue.100",
                                        "blue.900"
                                    )}
                                    text={"Python"}
                                />
                                <Feature
                                    icon={
                                        <Icon
                                            as={IoLogoReact}
                                            color={"blue.500"}
                                            w={5}
                                            h={5}
                                        />
                                    }
                                    iconBg={useColorModeValue(
                                        "blue.100",
                                        "blue.900"
                                    )}
                                    text={"React Js"}
                                />
                                <Feature
                                    icon={
                                        <Icon
                                            as={SiRedux}
                                            color={"purple.500"}
                                            w={5}
                                            h={5}
                                        />
                                    }
                                    iconBg={useColorModeValue(
                                        "purple.100",
                                        "purple.900"
                                    )}
                                    text={"Redux"}
                                />

                                <Feature
                                    icon={
                                        <Icon
                                            as={SiGithub}
                                            color={"black.500"}
                                            w={5}
                                            h={5}
                                        />
                                    }
                                    iconBg={useColorModeValue(
                                        "gray.100",
                                        "gray.900"
                                    )}
                                    text={"Git & GitHub"}
                                />
                                <Feature
                                    icon={
                                        <Icon
                                            as={SiMongodb}
                                            color={"green.500"}
                                            w={5}
                                            h={5}
                                        />
                                    }
                                    iconBg={useColorModeValue(
                                        "green.100",
                                        "green.900"
                                    )}
                                    text={"Mongo db"}
                                />
                                <Feature
                                    icon={
                                        <Icon
                                            as={SiPostman}
                                            color={"red.500"}
                                            w={5}
                                            h={5}
                                        />
                                    }
                                    iconBg={useColorModeValue(
                                        "red.100",
                                        "red.900"
                                    )}
                                    text={"Postman"}
                                />
                            </Stack>
                        </HStack>
                    </Stack>
                </SimpleGrid>
            </Container>
        </div>
    );
}
