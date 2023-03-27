import { Box, Heading, HStack, Image, Stack } from "@chakra-ui/react";
import React from "react";

export const MySkills = () => {
    return (
        <div id="skills">
            <Heading as={"header"} fontSize="9xl" fontWeight={"black"} lineHeight='1'>
                SKILLS
            </Heading>
            <Box
                border="2px solid red"
                style={{ display: "flex", gap: "30px", w: "fit-content" }}
            >
                {/* <Box>
                    <Image
                        src="https://images.unsplash.com/photo-1484820540004-14229fe36ca4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        w={"30%"}
                    />
                </Box> */}
                <Box
                    style={{
                        display: "flex",
                        gap: "30px",
                        border: "1px solid blue",
                    }}
                >
                    <Stack spacing={"4"}>
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
                                    <Image src="https://cdn.iconscout.com/icon/free/png-512/redux-283024.png?f=avif&w=256" />
                                </Box>
                                <Heading size={"sm"}>Redux</Heading>
                            </HStack>
                        </Box>
                    </Stack>
                    <Stack spacing={"4"}>
                        <Box>
                            <HStack>
                                <Box w={"20px"}>
                                    <Image src="https://cdn.iconscout.com/icon/free/png-512/nodejs-2-226035.png?f=avif&w=256" />
                                </Box>
                                <Heading size={"sm"}>Node Js</Heading>
                            </HStack>
                        </Box>
                        <Box>
                            <HStack>
                                <Box w={"20px"}>
                                    <Image src="https://img.icons8.com/ios/256/express-js.png" />
                                </Box>
                                <Heading size={"sm"}>Express Js</Heading>
                            </HStack>
                        </Box>
                        <Box>
                            <HStack>
                                <Box w={"20px"}>
                                    <Image src="https://cdn.iconscout.com/icon/free/png-512/mongodb-4-1175139.png?f=avif&w=256" />
                                </Box>
                                <Heading size={"sm"}>Mongo Db</Heading>
                            </HStack>
                        </Box>
                        <Box>
                            <HStack>
                                <Box w={"20px"}>
                                    <Image src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png" />
                                </Box>
                                <Heading size={"sm"}>Git & Github</Heading>
                            </HStack>
                        </Box>
                        <Box>
                            <HStack>
                                <Box w={"20px"}>
                                    <Image src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/256/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png" />
                                </Box>
                                <Heading size={"sm"}>Postman</Heading>
                            </HStack>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </div>
    );
};
