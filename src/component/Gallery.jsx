import React from 'react'
import {
  Box,
  Image,
  Stack,
} from '@chakra-ui/react'
import Protuct1 from "../assets/image-product-1.png"
import Protuct2 from "../assets/image-product-2.png"
import Protuct3 from "../assets/image-product-3.png"
import Protuct4 from "../assets/image-product-4.png"
// import { useMediaQuery } from '@chakra-ui/react'

function Gallery({image,setİmage,onOpen,isLargerThan992}) {
  // const [isLargerThan992] = useMediaQuery('(max-width: 992px)')
  return (
    <Box >
      <Box boxSize='sm'>
        <Image 
        rounded={"10px"} 
        objectFit='cover' 
        src={image} 
        boxSize={isLargerThan992 ? "100%" : "70%"} 
        onClick={onOpen}
        border="3px solid transparent"
        transition={"all .3s "}
        _hover={{ color: "hsl(26, 100%, 55%)", bg: "white" ,borderColor:"hsl(26, 100%, 55%)",cursor:"pointer",opacity:0.6}}
        />
      </Box>
      <Box width={"100%"}>
        <Stack direction='row' alignItems={"center"}>
          <Image
            boxSize={"15%"}
            rounded={"10px"}
            objectFit='cover'
            m={"5px"}
            src={Protuct1}
            alt='Dan Abramov'
            border="3px solid transparent"
            onClick={(e)=>(setİmage(e.target.src))}
            transition={"all .3s "}
            _hover={{ color: "hsl(26, 100%, 55%)", bg: "white" ,borderColor:"hsl(26, 100%, 55%)",cursor:"pointer",opacity:0.6}}
          />
          <Image
             boxSize={"15%"}
            objectFit='cover'
            rounded={"10px"}
            m={"5px"}
            src={Protuct2}
            alt='Dan Abramov'
            border="3px solid transparent"
            onClick={(e)=>(setİmage(e.target.src))}
            transition={"all .3s "}
            _hover={{ color: "hsl(26, 100%, 55%)", bg: "white" ,borderColor:"hsl(26, 100%, 55%)",cursor:"pointer",opacity:0.6}}
          />
             <Image
             boxSize={"15%"}
            objectFit='cover'
            rounded={"10px"}
            m={"5px"}
            src={Protuct3}
            alt='Dan Abramov'
            onClick={(e)=>(setİmage(e.target.src))}
            border="3px solid transparent"
            transition={"all .3s "}
            _hover={{ color: "hsl(26, 100%, 55%)", bg: "white" ,borderColor:"hsl(26, 100%, 55%)",cursor:"pointer",opacity:0.6}}
          />
             <Image
             boxSize={"15%"}
            objectFit='cover'
            rounded={"10px"}
            m={"5px"}
            src={Protuct4}
            alt='Dan Abramov'
            border="3px solid transparent"
            onClick={(e)=>(setİmage(e.target.src))}
            transition={"all .3s "}
            _hover={{ color: "hsl(26, 100%, 55%)", bg: "white" ,borderColor:"hsl(26, 100%, 55%)",cursor:"pointer",opacity:0.6}}
          />
        </Stack>
      </Box>
    </Box>
  )
}

export default Gallery
