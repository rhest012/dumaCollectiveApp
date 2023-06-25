import { Box, Heading, Text } from '@chakra-ui/react'
import { motion, animate, useMotionValue, useTransform } from 'framer-motion'
import React, { useEffect } from 'react'

const HomeStats = () => {

     // Counter
     const staffCount = useMotionValue(0)
     const countriesCount = useMotionValue(0)
     const continentsCount = useMotionValue(0)
     const socialsCount = useMotionValue(0)
 
 
     const fortyFour = useTransform(staffCount, latest => Math.round(latest))
     const twelve = useTransform(countriesCount, latest => Math.round(latest))
     const four = useTransform(continentsCount, latest => Math.round(latest))
     const fiveteen = useTransform(socialsCount, latest => Math.round(latest))
 
     useEffect(() => {
       const controlsFortyFour = animate(staffCount, 44, { duration: 1, delay: 1 })
       const controlsTwelve = animate(countriesCount, 12, { duration: 1, delay: 1.2 })
       const controlsFour = animate(continentsCount, 4, { duration: 1, delay: 1.4 })
       const controlsfiveteen = animate(socialsCount, 15, { duration: 1, delay: 1.6 })
       
 
       return () => {}
        controlsFortyFour.stop()
        controlsTwelve.stop()
        controlsFour.stop()
        controlsfiveteen.stop()
     }, []);
     

     const homeStats = [
        {
          number: fortyFour.get(),
          caption: "Staff Members"
        },
        {
          number: twelve.get(),
          caption: "Countries Serviced"
        },
        {
          number: four.get(),
          caption: "Continents Serviced"
        },
        {
          number: fiveteen.get(),
          caption: "Social Media Reach"
        },
      ]

     const counterVariants = {
         hidden: {
             opacity: 0
           },
           visible: {
             opacity: 1,
             transition: {duration: 1, ease:"easeIn"}
           },
           exit: {
             opacity: 0,
             transition: {duration: 1, delay: 1, ease:"easeInOut"}
           }
     }

    
  return (
    <Box 
        marginX="2rem" 
        marginY="8rem"
        display="flex"
        justifyContent="space-between"
    >
        {homeStats.map((homeStat, index) =>(
            <Box key={index} width="100%">
                <Heading variant="h3" textAlign="center">
                    {`${homeStat.number}`}
                </Heading>
                <Text variant="p" textAlign="center">
                    {homeStat.caption}
                </Text>
            </Box>
        ))}

    </Box>
  )
}

export default HomeStats