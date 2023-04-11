import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    Button,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import favicon from "../Assets/dh.png";
import { NavLink } from "react-router-dom";
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
//         href={"#"}
//     >
//         <span>{children}</span>
//     </Link>
// );

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div id="nav-menu">
            <Box bg={useColorModeValue("whiteAlpha.100", "gray.900")} px={9}>
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
                            <Image src={favicon} />
                        </Box>
                        <HStack
                            as={"nav"}
                            spacing={4}
                            display={{ base: "none", md: "flex" }}
                        >
                            {/* {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))} */}

                            <NavLink
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
                                href={"#"}
                                onClick={click ? handleClick : null}
                            >
                                Home
                            </NavLink>

                            <NavLink key={"about"} className="nav-link about">
                                About Me
                            </NavLink>
                            <NavLink key={"skills"} className="nav-link skills">
                                Skills
                            </NavLink>
                            <NavLink
                                key={"project"}
                                className="nav-link projects"
                            >
                                Projects
                            </NavLink>
                            <NavLink
                                key={"contact"}
                                className="nav-link contact"
                            >
                                Contact
                            </NavLink>
                            <NavLink key={"resume"} className="nav-link resume">
                                Resume
                            </NavLink>
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

                            <NavLink key={"home"} className="nav-link home">
                                Home
                            </NavLink>
                            <NavLink key={"about"} className="nav-link about">
                                About Me
                            </NavLink>
                            <NavLink key={"skills"} className="nav-link skills">
                                Skills
                            </NavLink>
                            <NavLink
                                key={"project"}
                                className="nav-link projects"
                            >
                                Projects
                            </NavLink>
                            <NavLink
                                key={"contact"}
                                className="nav-link contact"
                            >
                                Contact
                            </NavLink>
                            <NavLink key={"resume"} className="nav-link resume">
                                Resume
                            </NavLink>
                        </Stack>
                    </Box>
                ) : null}
            </Box>

            {/* <Box p={4}>Main Content Here</Box> */}
        </div>
    );
}

/*
Extra things: ==> 


*/
