import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import heroImg from "../Assets/heroImage.png";


export const HeroSection = () => {
  return (
    <>
      <Box
        w={{ lg: "88%", md: "100%", base: "100%" }}
        margin="auto"
        padding={"20px"}
        display={"flex"}
        flexDirection={"column"}
        // border='1px solid black';
      >
        {/* <Heading fontWeight={'black'} fontSize={'9xl'} padding={'30px 0'} width={'fit-content'}>Hero Section</Heading> */}
        <HStack
          justifyContent={"space-evenly"}
          align={"center"}
          padding={"20px"}
          display="flex"
          flexDirection={{ base: "column", md: "column", lg: "row" }}
        >
          <Box padding="15px" textAlign={{lg:"left", md:'center', base:'center'}}>
            <Stack spacing={9}>
              <Box>
                <Heading fontSize={"6xl"} fontWeight={"extrabold"}>
                  Hi, I am Jayesh, 👋🏼
                </Heading>
                <Heading>Full Stack Web Developer</Heading>
              </Box>
              <Text w={{ lg: "85%", md: "95%", base: "100%" }}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Text>
              <Button
                bg={useColorModeValue("#EE6262", "gray.700")}
                color="white"
                w={{lg:"50%", base:'100%'}}
                borderRadius="3"
                h="50px"
                fontSize={"larger"}
                _hover={{ bg: "#f07f7f" }}
              >
                Download Resume
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
    </>
  );
};