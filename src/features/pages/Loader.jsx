import { Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import dumaLogo from '../../assets/Duma-Collective-Logo.svg'
import placeHolderImage from '../../assets/placeholder.jpg'

const Loader = () => {
  return (
    <Flex flexDir="column" height="100vh" width="100vw" justifyContent="center" alignItems="center">
        <Image
            src={dumaLogo}
            width="300px"
        />
        <Flex>
            <Image
                src={placeHolderImage}
                position="absolute"
                zIndex="-1"
                height="300px"
                bottom="300px"
                left="100px"
                opacity="0.5"
            />
            <Heading variant="h2" textAlign="center" marginTop="2rem" marginX="6rem">
                An oasis for African Creativity to flourish 
            </Heading>
            <Image
                src={placeHolderImage}
                position="absolute"
                zIndex="-1"
                height="300px"
                bottom="150px"
                right="100px"
                opacity="0.5"
            />
        </Flex>
    </Flex>
  )
}

export default Loader