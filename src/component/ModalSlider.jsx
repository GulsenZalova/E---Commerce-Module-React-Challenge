import React, { useEffect } from 'react'
import {
  Modal,
  Image,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Stack,
  Box,
} from '@chakra-ui/react'
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import Protuct1 from "../assets/image-product-1.png"
import Protuct2 from "../assets/image-product-2.png"
import Protuct3 from "../assets/image-product-3.png"
import Protuct4 from "../assets/image-product-4.png"
function ModalSlider({ isOpen, onOpen, onClose, count, setCount,isLargerThan992}) {
  const arr = [Protuct1, Protuct2, Protuct3, Protuct4]
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose} >
        <ModalOverlay
          bg='rgba(0,0,0,0.6)'
          backdropFilter='blur(1px) ' />
        <ModalContent
          size={"md"}
          width={ isLargerThan992 ? "350px" : "500px"}
          height={ isLargerThan992 ? "350px" : "500px"}
          position={"absolute"}
          top={"50%"}
          left={ isLargerThan992 ? "10%" : "30%"}
          translate={"-50%,-50%"} >
          <ModalCloseButton
            bg={"transparent"}
            border={"none"}
            color={"hsl(26, 100%, 55%)"}
            fontSize={"20px"}
            mb={"10px"} />
          <ModalBody>
            <Box  >
              <Box
                boxSize='sm'
                position={"relative"}
                bg={"red"}
                width={ isLargerThan992 ? "350px" : "500px"}
                height={ isLargerThan992 ? "350px" : "500px"}  >
                <Image
                  rounded={"10px"}
                  objectFit='cover'
                  src={arr[count]}
                  boxSize={"70%"}
                  width={"100%"}
                  height={"100%"}
                  onClick={onOpen} />

                <ChevronLeftIcon
                  bg={"transparent"}
                  color={"white"}
                  fontSize={"30px"}
                  border={"1px solid white"}
                  m={"5px"}
                  position={"absolute"}
                  top={"50%"}
                  left={"0"}
                  onClick={() => count != 0 ? setCount(count - 1) : setCount(arr.length - 1)}
                />
                <ChevronRightIcon
                  bg={"transparent"}
                  color={"white"}
                  fontSize={"30px"}
                  position={"absolute"}
                  border={"1px solid white"}
                  m={"5px"}
                  top={"50%"}
                  right={"0"}
                  onClick={() => count != arr.length - 1 ? setCount(count + 1) : setCount(0)}
                />
              </Box>
              <Box width={"100%"}>
                <Stack
                  direction='row'
                  alignItems={"center"}>
                  <Image
                    boxSize={"25%"}
                    rounded={"10px"}
                    objectFit='cover'
                    m={"5px"}
                    src={Protuct1}
                    onClick={(e) => (setİmage(e.target.src))}
                  />
                  <Image
                    boxSize={"25%"}
                    objectFit='cover'
                    rounded={"10px"}
                    m={"5px"}
                    src={Protuct2}
                    onClick={(e) => (setİmage(e.target.src))}
                  />
                  <Image
                    boxSize={"25%"}
                    objectFit='cover'
                    rounded={"10px"}
                    m={"5px"}
                    src={Protuct3}
                    onClick={(e) => (setİmage(e.target.src))}
                  />
                  <Image
                    boxSize={"25%"}
                    objectFit='cover'
                    rounded={"10px"}
                    m={"5px"}
                    src={Protuct4}
                    onClick={(e) => (setİmage(e.target.src))}
                  />
                </Stack>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalSlider
