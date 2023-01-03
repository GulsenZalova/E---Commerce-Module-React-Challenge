import React from 'react'
import Gallery from './Gallery'
import ProductInfo from './ProductInfo'
import {
    Container,
    Box,
    Flex,
} from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'
function Main({ image, setİmage, value, setValue, basket, setBasket, onOpen }) {
    const [isLargerThan992] = useMediaQuery('(max-width: 992px)')
    return (
        
        <Container
            w='100%'
        >
            <Flex
                alignItems={"center"}
                justifyContent={'center'} >
                <Box
                    w={"70%"}
                    p={"50px"}>
                    <Flex
                        alignItems={"center"}
                        justifyContent={'space-between'}
                        flexDirection={isLargerThan992 ? "column" : "row"}
                        gap={'20px'}
                        >
                        <Box 
                        w={ isLargerThan992 ? "100%" : "50%"}>
                            <Gallery
                                image={image}
                                setİmage={setİmage}
                                onOpen={onOpen}
                                isLargerThan992={isLargerThan992}
                            />
                        </Box>
                        <Box 
                        w={ isLargerThan992 ? "100%" : "50%"}
                        >
                            <ProductInfo
                                value={value}
                                setValue={setValue}
                                basket={basket}
                                setBasket={setBasket}
                            />
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Container>

    )
}

export default Main
