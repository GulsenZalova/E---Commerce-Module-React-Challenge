import React from 'react'
import Gallery from './Gallery'
import ProductInfo from './ProductInfo'
import {
    Container,
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
function Main({image,setİmage,value,setValue,basket,setBasket,onOpen}) {
    return (
        <Container w='100%'
        h={"80vh"}
      >
       <Flex alignItems={"center"} justifyContent={'center'} >
       <Box w={"70%"}  h={"80vh"} p={"50px"}>
          <Flex alignItems={"center"} justifyContent={'space-between'}>
            <Box w={"50%"}>
            <Gallery image={image} setİmage={setİmage} onOpen={onOpen}/>
            </Box>
            <Box w={"50%"}>
            <ProductInfo value={value} setValue={setValue} basket={basket} setBasket={setBasket} />
            </Box>
          </Flex>
         </Box>
       </Flex>
        </Container>

    )
}

export default Main
