import React from 'react'
import {
    Box,
    Flex,
    Image,
    Text,
    Stack,
    Avatar,
    Button,
    Card,
    CardBody,
    Badge,
    Fade,
    Heading,
} from '@chakra-ui/react'
import image from "../assets/basket.svg"
import Protuct1 from "../assets/image-product-1.png"
function ProductInfo({value,setValue,basket,setBasket}) {

    const addBasket=(name)=>{
        const findProduct=basket.find((x)=>x.name==name)
        if(!findProduct){
            setBasket([...basket,{
                img:Protuct1,
                name:"Fall Limited Edition Sneakers",
                price:"125.00",
                quantity:value
            }])
        }
    }
    return (
        <Box >
            <Flex alignItems={"left"} flexDirection={"column"} gap={"20px"}>
                <Heading as={"h5"} textAlign={"left"} color={"hsl(26, 100%, 55%)"} letterSpacing={"1px"} fontWeight={"700"} fontSize={"11px"}>SNEAKER COMPANY</Heading>
                <Heading as={"h2"} color={"hsl(220, 13%, 13%)"} fontWeight={"700"} fontSize={"40px"}>Fall Limited Edition <br /> Sneakers</Heading>
                <Text color={"hsl(220, 14%, 75%)"}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Voluptatum error suscipit atque, recusandae, totam in velit officia <br /> impedit autem, quisquam alias reiciendis cum. Dolores corrupti ducimus nobis? <br /> Quis, nemo architecto?</Text>
                <Box ml='3'>
                    <Text fontWeight='bold' fontSize={"20px"}>
                        $125.00
                        <Badge fontSize={"15px"} ml={"10px"} p={"5px"} variant='outline' bg='hsl(25, 100%, 94%)' color={"hsl(26, 100%, 55%)"}>
                            50%
                        </Badge>
                    </Text>
                    <Text fontSize='sm' textDecorationLine={"line-through"} color={"hsl(220, 14%, 75%)"} mt={"5px"}>$250.00</Text>
                </Box>
                <Flex gap={"20px"}>
                    <Box bg={"hsl(223, 64%, 98%)"} w={"100px"} p={"10px"}>
                        <Flex alignItems={"center"} justifyContent={"space-between"}>
                            <Button onClick={() => setValue(value + 1)} bg={"transparent"} border={"none"} color={" hsl(26, 100%, 55%)"} fontWeight={"bold"} fontSize={"20px"}>+</Button>
                            <Box as='span' mx={"10px"} >
                                {value > 0 ? value : 0}
                            </Box>
                            <Button onClick={() => setValue(value - 1)} bg={"transparent"} border={"none"} color={" hsl(26, 100%, 55%)"} fontWeight={"bold"} fontSize={"20px"}>-</Button>
                        </Flex>
                    </Box>
                    <Button
                        size='lg'
                        height='48px'
                        width='80%'
                        border='2px'
                        borderColor='green.500'
                        bg={"hsl(26, 100%, 55%)"}
                        borderRadius={"10px"}
                        color={"white"}
                        onClick={()=>addBasket("Fall Limited Edition Sneakers")}
                    >
                    <Image 
                    src={image}
                    mx={"15px"}
                    >

                    </Image>
                          Add To Cart
                    </Button>
                </Flex>
            </Flex>
        </Box>
    )
}

export default ProductInfo
