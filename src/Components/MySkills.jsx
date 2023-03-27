import { Box, Heading, HStack, Image, Stack } from "@chakra-ui/react";
import React from "react";

export const MySkills = () => {
    return (
        <div style={{display:"flex"}} id="skills">
            <Stack>
                <Box>
                    <HStack>
                        <Box w={"20px"}>
                            <Image src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" />
                        </Box>
                        <Heading size={"sm"}>HTML 5</Heading>
                    </HStack>
                </Box>
                <Box>
                    <HStack>
                        <Box w={"20px"}>
                            <Image src="https://cdn-icons-png.flaticon.com/512/732/732190.png" />
                        </Box>
                        <Heading size={"sm"}>CSS 3</Heading>
                    </HStack>
                </Box>
                <Box>
                    <HStack>
                        <Box w={"20px"}>
                            <Image src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" />
                        </Box>
                        <Heading size={"sm"}>JavaScript</Heading>
                    </HStack>
                </Box>
                <Box>
                    <HStack>
                        <Box w={"20px"}>
                            <Image src="https://cdn-icons-png.flaticon.com/512/3379/3379166.png" />
                        </Box>
                        <Heading size={"sm"}>React Js</Heading>
                    </HStack>
                </Box>
                <Box>
                    <HStack>
                        <Box w={"20px"}>
                            <Image src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" />
                        </Box>
                        <Heading size={"sm"}>Redux</Heading>
                    </HStack>
                </Box>
            </Stack>
            <Stack>
                <Box>
                    <HStack>
                        <Box w={"20px"}>
                            <Image src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" />
                        </Box>
                        <Heading size={"sm"}>Node Js</Heading>
                    </HStack>
                </Box>
                <Box>
                    <HStack>
                        <Box w={"20px"}>
                            <Image src="https://cdn-icons-png.flaticon.com/512/732/732190.png" />
                        </Box>
                        <Heading size={"sm"}>Express Js</Heading>
                    </HStack>
                </Box>
                <Box>
                    <HStack>
                        <Box w={"20px"}>
                            <Image src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" />
                        </Box>
                        <Heading size={"sm"}>Mongo Db</Heading>
                    </HStack>
                </Box>
                <Box>
                    <HStack>
                        <Box w={"20px"}>
                            <Image src="https://cdn-icons-png.flaticon.com/512/3379/3379166.png" />
                        </Box>
                        <Heading size={"sm"}>Git & Github</Heading>
                    </HStack>
                </Box>
                <Box>
                    <HStack>
                        <Box w={"20px"}>
                            <Image src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" />
                        </Box>
                        <Heading size={"sm"}>Postman</Heading>
                    </HStack>
                </Box>
            </Stack>
        </div>
    );
};
