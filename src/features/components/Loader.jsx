import { Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import dumaLogo from '../../assets/Duma-Collective-Logo.svg'
import placeHolderImage from '../../assets/placeholder.jpg'
import HomeHeaderBackground from '../../assets/headers/home-header.png'
import { motion } from 'framer-motion'

const Loader = ({ setLoading }) => {
    // Framer Motion
    const MotionImage = motion(Image);
    const MotionHeading = motion(Heading);

    const logoVariants = {
        hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {delay: 0.5, duration: 1}
          },
        //   exit: {
        //     opacity: 0,
        //     transition: {delay: 1.75, duration: 1}
        //   }
    }

    const textVariants = {
        hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {delay: 1.2, duration: 1}
          },
          exit: {
            opacity: 0,
            transition: {delay: 1, duration: 1}
          }
    }

    const leftImageVariants = {
        hidden: {
            opacity: 0,
            y: -10,
          },
          visible: {
            y: 0,
            opacity: 0.8,
            transition: {delay: 1.5, duration: 1.2}
          },
          exit: {
            opacity: 0,
            transition: {delay: 1.25, duration: 1}
          }
    }

    const rightImageVariants = {
        hidden: {
            opacity: 0,
            y: 10,
          },
          visible: {
            y: 0,
            opacity: 0.8,
            transition: {delay: 2.5, duration: 1}
          },
    }

  return (
    <Flex 
        flexDir="column" 
        height="100vh" 
        width="100vw" 
        justifyContent="center" 
        alignItems="center"
    >
        <MotionImage
            src={dumaLogo}
            width="300px"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            layoutId="duma-logo"
        />
        <Flex>
            <MotionImage
                src={placeHolderImage}
                position="absolute"
                zIndex="-1"
                height="300px"
                bottom="300px"
                left="100px"
                opacity="0.5"
                variants={leftImageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            />
            <MotionHeading 
                variant="h2" 
                textAlign="center" 
                marginTop="2rem" 
                marginX="6rem"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                An oasis for African Creativity to flourish 
            </MotionHeading>
            <MotionImage
                src={HomeHeaderBackground}
                position="absolute"
                zIndex="-1"
                height="300px"
                bottom="150px"
                right="100px"
                opacity="0.5"
                variants={rightImageVariants}
                layoutId= "africa-image"
                initial="hidden"
                animate="visible"
                onAnimationComplete={() => setLoading(false)}
            />
        </Flex>
    </Flex>
  )
}

export default Loader