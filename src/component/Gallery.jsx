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
        <Image rounded={"10px"} objectFit='cover' src={image} boxSize={isLargerThan992 ? "100%" : "70%"} onClick={onOpen} />
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
            onClick={(e)=>(setİmage(e.target.src))}
          />
          <Image
             boxSize={"15%"}
            objectFit='cover'
            rounded={"10px"}
            m={"5px"}
            src={Protuct2}
            alt='Dan Abramov'
            onClick={(e)=>(setİmage(e.target.src))}
          />
             <Image
             boxSize={"15%"}
            objectFit='cover'
            rounded={"10px"}
            m={"5px"}
            src={Protuct3}
            alt='Dan Abramov'
            onClick={(e)=>(setİmage(e.target.src))}
          />
             <Image
             boxSize={"15%"}
            objectFit='cover'
            rounded={"10px"}
            m={"5px"}
            src={Protuct4}
            alt='Dan Abramov'
            onClick={(e)=>(setİmage(e.target.src))}
          />
        </Stack>
      </Box>
    </Box>
  )
}

export default Gallery
