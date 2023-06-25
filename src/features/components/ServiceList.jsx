import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Heading,
    Grid,
    GridItem,
    Text,
    Image,
    Flex,
    createMultiStyleConfigHelpers 
  } from '@chakra-ui/react'
import { accordionAnatomy } from '@chakra-ui/anatomy'
import placeHolderImage from '../../assets/squad/squadOri/Akhona.jpg'
import useFetch from '../../actions/useFetchData'
import { useFetchFirebase } from '../../actions/useFetchFirebase'
import { color } from 'framer-motion'

const ServiceList = () => {
    
    const data = useFetchFirebase('services');


  return (
    <>
        {data && (
            <Box
                marginX="2rem"
                marginY="4rem"
            >
                <Accordion  
                    allowToggle
                >
                    {data.map((service, index) => (
                        <AccordionItem 
                            className="accordion-container"
                            key={index} 
                            borderBottom="1px solid #1E174B"
                            _first = {{
                                borderY:"1px solid #1E174B"
                            }}
                        >
                            <AccordionButton 
                                className="accordion-button"
                                _expanded={{ bg: "brand.900", color: 'white' }}
                                _hover = {{
                                    backgroundColor: "brand.900",
                                    color: "#fff",
                        
                                }}
                            >
                                <Box as="span" paddingY="1rem" flex='1' textAlign='left'>
                                    <Heading variant="h3" as="h3">
                                        {service.title} 
                                    </Heading>
                                </Box>
                                <AccordionIcon/>
                            </AccordionButton>
                            <AccordionPanel paddingY="1rem">
                            <Grid gridTemplateColumns="repeat(3, 1fr)">
                                    <GridItem >
                                    <Flex height="100%" alignItems="flex-end">
                                        <Heading variant="h5">
                                            {service.name}
                                        </Heading>
                                    </Flex>
                                    </GridItem>
                                    <GridItem marginLeft="1rem">
                                        <Flex height="100%" justifyContent="flex-end" flexDir="column">
                                            {service.descriptions.map((serviceDescription, index) => (
                                                <Text key={index} width="100%">
                                                    {serviceDescription} <br/>
                                                </Text>
                                        
                                            ))}
                                        </Flex>
                                    </GridItem>
                                    <GridItem>
                                        <Flex justifyContent="flex-end">
                                            <Image
                                                src={placeHolderImage}
                                                borderRadius="0.5rem"
                                                width="300px"
                                            />
                                        </Flex>
                                    </GridItem>

                            </Grid>
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Box>
        )}
    </>
  )
}

export default ServiceList