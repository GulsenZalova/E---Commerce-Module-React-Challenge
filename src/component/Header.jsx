import React from 'react'
import {
    Box,
    Container,
    Flex,
    Text,
    ListItem,
    UnorderedList,
    Avatar,
    Wrap,
    WrapItem,
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import BasketCart from './BasketCart'
import image from "../assets/basket.svg"
import avatar from "../assets/avatar.png"
import { useDisclosure } from '@chakra-ui/react'

function Header({ flag, setFlag, basket, setBasket, isLargerThan992 }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('left')
    return (
        <Container w='100%'
            color='white'
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"} >
            <Box w='80%'
                borderBottom={"1px solid gray"}
            >
                <Flex
                    color='white'
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    p={10}
                    gap="50">
                    <Flex
                        alignItems={"center"}
                        justifyContent={"space-between"} >
                        <Box>
                            <Text
                                fontSize='25px'
                                color={"gray"}
                                fontWeight={"bold"}>
                                Sneakers
                            </Text>
                        </Box>
                        <UnorderedList
                            display={isLargerThan992 ? "none" : "flex"}
                            styleType={"none"}
                            fontSize='18px' >
                            <Flex
                                alignItems={"center"}
                                justifyContent={"space-between"}
                                gap="30" >
                                <ListItem
                                    color={"lightgray"}
                                    borderBottom={" 1px solid transparent"}
                                    transition={"all .3s "}
                                    _hover={{ color: "gray", borderBottomColor: "hsl(26, 100%, 55%)",cursor:"pointer" }}>
                                    Collections
                                </ListItem>
                                <ListItem
                                    color={"lightgray"}
                                    borderBottom={" 1px solid transparent"}
                                    transition={"all .3s "} _hover={{ color: "gray", borderBottomColor: "hsl(26, 100%, 55%)",cursor:"pointer" }}>
                                    Men
                                </ListItem>
                                <ListItem
                                    color={"lightgray"}
                                    borderBottom={" 1px solid transparent"}
                                    transition={"all .3s "}
                                    _hover={{ color: "gray", borderBottomColor: "hsl(26, 100%, 55%)",cursor:"pointer"}}>
                                    Women
                                </ListItem>
                                <ListItem
                                    color={"lightgray"}
                                    borderBottom={" 1px solid transparent"}
                                    transition={"all .3s "}
                                    _hover={{ color: "gray", borderBottomColor: "hsl(26, 100%, 55%)",cursor:"pointer"}}>
                                    About
                                </ListItem>
                                <ListItem
                                    color={"lightgray"}
                                    borderBottom={" 1px solid transparent"}
                                    transition={"all .3s "}
                                    _hover={{ color: "gray", borderBottomColor: "hsl(26, 100%, 55%)",cursor:"pointer" }}>
                                    Contact
                                </ListItem>
                            </Flex>
                        </UnorderedList>
                        <Button
                            colorScheme='blue'
                            bg={"transparent"}
                            border={"none"}
                            onClick={onOpen}
                            display={isLargerThan992 ? "flex" : "none"}
                        >
                            <HamburgerIcon
                                fontSize={"25px"}
                                ml={"50px"}
                                color={"hsl(26, 100%, 55%)"}
                            />
                        </Button>
                        <Drawer
                            placement={placement}
                            onClose={onClose}
                            isOpen={isOpen}
                        >
                            <DrawerContent bg={"rgba(0,0,0,0.6)"}>
                                <DrawerBody
                                    padding={"20px"}
                                >
                                    <UnorderedList
                                        styleType={"none"}
                                        fontSize='18px' >
                                        <Flex
                                            flexDirection={"column"}
                                            alignItems={"center"}
                                            justifyContent={"space-between"}
                                            gap="30" >
                                            <DrawerCloseButton
                                                fontSize={"20px"}
                                                color={"hsl(26, 100%, 55%)"}
                                                bg={"transparent"}
                                                border={"none"}
                                            />
                                            <ListItem
                                                color={"lightgray"}
                                                borderBottom={" 1px solid transparent"}
                                                transition={"all .3s "}
                                                _hover={{ color: "gray", borderBottomColor: "hsl(26, 100%, 55%)" ,cursor:"pointer" }}>
                                                Collections
                                            </ListItem>
                                            <ListItem
                                                color={"lightgray"}
                                                borderBottom={" 1px solid transparent"}
                                                transition={"all .3s "} _hover={{ color: "gray", borderBottomColor: "hsl(26, 100%, 55%)",cursor:"pointer" }}>
                                                Men
                                            </ListItem>
                                            <ListItem
                                                color={"lightgray"}
                                                borderBottom={" 1px solid transparent"}
                                                transition={"all .3s "}
                                                _hover={{ color: "gray", borderBottomColor: "hsl(26, 100%, 55%)",cursor:"pointer" }}>
                                                Women
                                            </ListItem>
                                            <ListItem
                                                color={"lightgray"}
                                                borderBottom={" 1px solid transparent"}
                                                transition={"all .3s "}
                                                _hover={{ color: "gray", borderBottomColor: "hsl(26, 100%, 55%)",cursor:"pointer" }}>
                                                About
                                            </ListItem>
                                            <ListItem
                                                color={"lightgray"}
                                                borderBottom={" 1px solid transparent"}
                                                transition={"all .3s "}
                                                _hover={{ color: "gray", borderBottomColor: "hsl(26, 100%, 55%)",cursor:"pointer" }}>
                                                Contact
                                            </ListItem>
                                        </Flex>
                                    </UnorderedList>
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>
                    </Flex>
                    <Box
                        position={"relative"}>
                        <Flex
                            alignItems={"center"}
                            justifyContent={"space-between"}
                            gap="30">
                            <Box
                                position={"relative"}>
                                <img
                                    src={image}
                                    alt=""
                                    onClick={setFlag.toggle}
                                    _hover={{cursor:"pointer"}}
                                />
                                <Box
                                    fontSize={"10px"}
                                    textAlign={"center"}
                                    bg={"orange"}
                                    borderRadius={"50%"}
                                    width={"15px"}
                                    height={"15px"}
                                    position={"absolute"}
                                    top={"-4px"}
                                    right={"-4px"}>
                                    {basket.length}
                                </Box>
                            </Box>
                            <Wrap>
                                <WrapItem>
                                    <Avatar
                                        width={"40px"}
                                        height={"40px"}
                                        border={'3px solid orange'}
                                        borderRadius={"50%"}
                                        borderColor={'orange'}
                                        name='Dan Abrahmov'
                                        src={avatar}
                                        _hover={{cursor:"pointer"}}
                                    />
                                </WrapItem>
                            </Wrap>
                            <BasketCart flag={flag} basket={basket} setBasket={setBasket} />
                        </Flex>
                    </Box>
                </Flex>

            </Box>
        </Container>
    )
}

export default Header
