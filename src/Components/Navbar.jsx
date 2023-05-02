import {
    Box,
    Flex,
    HStack,
    IconButton,
    Button,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Image,
    Link,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Jayesh_resume from "../Assets/Resume/Jayesh-Mate-Resume.pdf";
// import favicon from "../Assets/dh.png";
// import { NavLink } from "react-router-dom";
import React from "react";
// const Links = ["Home", "About Me", "Skills", "Projects", "Contact", "Resume"];

// const NavLink = ({ children }) => (
//     <Link
//         px={2}
//         py={1}
//         rounded={"md"}
//         fontSize={"large"}
//         _hover={{
//             textDecoration: "none",
//             bg: useColorModeValue("gray.100", "gray.700"),
//         }}
//         href={"#contact"}
//     >
//         <span>{children}</span>
//     </Link>
// );

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);

    const handleResume = () => {
        window.open(
            "https://drive.google.com/file/d/1T788dHvoZIeotEcH_pP-8SnKER1HmARW/view?usp=share_link"
        );
    };

    return (
        <div
            id="nav-menu"
            style={{
                position: "sticky",
                top: 0,
                zIndex: "1",
                backgroundColor: "white",
            }}
        >
            <Box
                // bg={useColorModeValue("whiteAlpha.100", "gray.900")}
                px={9}
                w={"full"}
            >
                <Flex
                    h={16}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <IconButton
                        size={"md"}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{ md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={"center"}>
                        <Box w={"40px"} h={"40px"}>
                            <Image src={""} />
                        </Box>
                        <HStack
                            as={"nav"}
                            spacing={4}
                            display={{ base: "none", md: "flex" }}
                        >
                            {/* {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))} */}

                            <Link
                                key={"home"}
                                className="nav-link home"
                                px={2}
                                py={1}
                                rounded={"md"}
                                fontSize={"large"}
                                _hover={{
                                    textDecoration: "none",
                                    bg: useColorModeValue(
                                        "gray.100",
                                        "gray.700"
                                    ),
                                }}
                                href={"#home"}
                                onClick={click ? handleClick : null}
                            >
                                Home
                            </Link>
                            <Link
                                key={"about"}
                                className="nav-link about"
                                px={2}
                                py={1}
                                rounded={"md"}
                                fontSize={"large"}
                                _hover={{
                                    textDecoration: "none",
                                    bg: useColorModeValue(
                                        "gray.100",
                                        "gray.700"
                                    ),
                                }}
                                href={"#about"}
                                onClick={click ? handleClick : null}
                            >
                                About
                            </Link>
                            <Link
                                key={"skills"}
                                className="nav-link skills"
                                px={2}
                                py={1}
                                rounded={"md"}
                                fontSize={"large"}
                                _hover={{
                                    textDecoration: "none",
                                    bg: useColorModeValue(
                                        "gray.100",
                                        "gray.700"
                                    ),
                                }}
                                href={"#skills"}
                                onClick={click ? handleClick : null}
                            >
                                Skills
                            </Link>
                            <Link
                                key={"projects"}
                                className="nav-link projects"
                                px={2}
                                py={1}
                                rounded={"md"}
                                fontSize={"large"}
                                _hover={{
                                    textDecoration: "none",
                                    bg: useColorModeValue(
                                        "gray.100",
                                        "gray.700"
                                    ),
                                }}
                                href={"#projects"}
                                onClick={click ? handleClick : null}
                            >
                                Projects
                            </Link>
                            <Link
                                key={"Contact"}
                                className="nav-link contact"
                                px={2}
                                py={1}
                                rounded={"md"}
                                fontSize={"large"}
                                _hover={{
                                    textDecoration: "none",
                                    bg: useColorModeValue(
                                        "gray.100",
                                        "gray.700"
                                    ),
                                }}
                                href={"#contact"}
                                onClick={click ? handleClick : null}
                            >
                                Contact
                            </Link>
                            <Link
                                key={"Resume"}
                                className="nav-link resume"
                                download={true}
                                target="_blank"
                                id="resume-link-1"
                                px={2}
                                py={1}
                                rounded={"md"}
                                fontSize={"large"}
                                _hover={{
                                    textDecoration: "none",
                                    bg: useColorModeValue(
                                        "gray.100",
                                        "gray.700"
                                    ),
                                }}
                                href={Jayesh_resume}
                                onClick={click ? handleClick : null}
                            >
                                <Button
                                    id="resume-button-1"
                                    onClick={handleResume}
                                    border="1px solid white"
                                >
                                    Resume
                                </Button>
                            </Link>
                        </HStack>
                    </HStack>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                    </Button>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: "none" }}>
                        <Stack as={"nav"} spacing={4}>
                            {/* {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))} */}

                            <Link
                                key={"home"}
                                className="nav-link home"
                                href={"#home"}
                            >
                                Home
                            </Link>
                            <Link
                                key={"about"}
                                className="nav-link about"
                                href={"#about"}
                            >
                                About Me
                            </Link>
                            <Link
                                key={"skills"}
                                className="nav-link skills"
                                href={"#skills"}
                            >
                                Skills
                            </Link>
                            <Link
                                key={"project"}
                                className="nav-link projects"
                                href={"#projects"}
                            >
                                Projects
                            </Link>
                            <Link
                                key={"contact"}
                                className="nav-link contact"
                                href={"#contact"}
                            >
                                Contact
                            </Link>
                            <Link key={"resume"} className="nav-link resume">
                                Resume
                            </Link>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </div>
    );
}

/*
Extra things: ==> 


*/
