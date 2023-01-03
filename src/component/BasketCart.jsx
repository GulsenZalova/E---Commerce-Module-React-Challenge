import React from 'react'
import {
Box,
Flex,
Text,
Avatar,
Button,
Card,
CardBody,
Fade,
Heading,
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import avatar from "../assets/avatar.png"
function BasketCart({flag,basket,setBasket}) {
    const deleteProduct=()=>{
        setBasket([])
    }
  return (
    <div>
        {
            flag && (
              <Fade
                in={flag} >
                  <Card 
                  position={"absolute"}  
                  top={"100%"} 
                  right={"0"} 
                  zIndex={"1000"} 
                  w='300px' 
                  borderRadius={"10px"}  
                  boxShadow={"0px -4px 28px -15px rgba(0,0,0,0.66)"}>
                <CardBody>
                    <Heading 
                    borderBottom={"1px solid lightgray"} 
                    size='xs' 
                    color={"hsl(220, 13%, 13%)"} 
                    p={"20px"} 
                    as='h4'>
                    Cart
                    </Heading>
                    <Flex 
                    p={"10px"}>
                      {
                        basket.length > 0 ? (
                            <Box >
                            <Flex 
                            alignItems={"center"} 
                            gap={"10px"} 
                            textAlign={"center"} 
                            m={"20px 0"}>
                                <Avatar 
                                width={"40px"} 
                                height={"40px"} 
                                border={'3px solid hsl(26, 100%, 55%)'} 
                                borderRadius={"50%"} 
                                borderColor={'orange'}  
                                src={basket[0].img} />
                                <Box>
                                    <Text 
                                    color={"hsl(220, 14%, 75%)"}>
                                    {basket[0].name}
                                    </Text>
                                    <Text 
                                    color={"hsl(220, 14%, 75%)"}>
                                   { `$${basket[0].price} X ${basket[0].quantity}`}
                                    <Text as={"span"} 
                                    fontWeight={"bold"}
                                    fontSize={"18px"}
                                    marginLeft={"5px"} 
                                    >
                                    {"$" + Number(basket[0].price) * basket[0].quantity}
                                    </Text>
                                    </Text>
                                </Box>
                                <DeleteIcon onClick={()=>deleteProduct()} color={"hsl(220, 14%, 75%)"} />
                            </Flex>
                            <Button
                                size='lg'
                                height='48px'
                                width='100%'
                                border='2px'
                                borderColor='green.500'
                                bg={"hsl(26, 100%, 55%)"}
                                borderRadius={"10px"}
                                color={"white"}
                            >
                                Checkout
                            </Button>
                        </Box>
                        ):(
                            <Text color={"black"}>You Cart is Empty</Text>
                        )
                      }
                    </Flex>
                </CardBody>
            </Card>
              </Fade>
            )
        }
    </div>
  )
}

export default BasketCart
