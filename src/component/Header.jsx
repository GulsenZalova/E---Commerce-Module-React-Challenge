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
WrapItem 
} from '@chakra-ui/react'
import BasketCart from './BasketCart'
import image from "../assets/basket.svg"
import avatar from "../assets/avatar.png"


function Header({flag,setFlag,basket,setBasket}) {
    return (
        <Container w='100%'
             p={10} 
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
                                _hover={{ color: "gray", borderBottomColor: "orange" }}>
                                Collections
                                </ListItem>
                                <ListItem 
                                color={"lightgray"} 
                                borderBottom={" 1px solid transparent"} 
                                transition={"all .3s "} _hover={{ color: "gray", borderBottomColor: "orange" }}>
                                Men
                                </ListItem>
                                <ListItem 
                                color={"lightgray"} 
                                borderBottom={" 1px solid transparent"} 
                                transition={"all .3s "} 
                                _hover={{ color: "gray", borderBottomColor: "orange" }}>
                                Women
                                </ListItem>
                                <ListItem 
                                color={"lightgray"} 
                                borderBottom={" 1px solid transparent"} 
                                transition={"all .3s "} 
                                _hover={{ color: "gray", borderBottomColor: "orange" }}>
                                About
                                </ListItem>
                                <ListItem 
                                color={"lightgray"} 
                                borderBottom={" 1px solid transparent"} 
                                transition={"all .3s "} 
                                _hover={{ color: "gray", borderBottomColor: "orange" }}>
                                Contact
                                </ListItem>
                            </Flex>
                        </UnorderedList>
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
                                    />
                                </WrapItem>
                            </Wrap>  
                          <BasketCart flag={flag} basket={basket} setBasket={setBasket}/>

                        </Flex>
                    </Box>
                </Flex>

            </Box>
        </Container>
    )
}

export default Header
