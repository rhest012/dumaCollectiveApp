import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../actions/useFetchData'
import { useFetchFirebase } from '../../actions/useFetchFirebase'
import ServiceList from '../components/ServiceList'

const SingleService = () => {
    
    const { id } = useParams()
    const { data:serviceData } = useFetch(' http://localhost:8000/services');
    const newData = useFetchFirebase('clients');

    console.log(newData)


    // const fireBaseData = useFetchFirebase('https://duma-collective-default-rtdb.firebaseio.com/')

    const activeService = serviceData != null ? (serviceData.filter((item) => item.id == id)) : null;
    

  return (
    <>
        {serviceData && (
            <Box>
                <Box>  
                    {activeService.map((item, index) => (
                        <Box key={index} paddingX="12rem" paddingTop="4rem">
                            <Heading as="h3" variant="h3" textAlign="center" paddingBottom="2rem">
                                {item.title1} {item.title2}
                            </Heading>
                            <Grid gridTemplateColumns="1fr 1fr" gap="2rem">
                                <GridItem
                                    border="1px solid #1a202C"
                                    paddingY="2rem"
                                    paddingX="2rem"
                                >
                                    <Flex justifyContent="center" alignItems="center">
                                        <Heading as="h1" variant="h1" textAlign="center" textTransform="uppercase">
                                            {item.name} 
                                        </Heading>
                                    </Flex>
                                </GridItem>
                                <GridItem
                                    border="1px solid #1a202C"
                                    paddingX="2rem"
                                    paddingY="2rem"
                                > 
                                    <Text>
                                        {item.descriptions.map((descriptions, index) => (
                                            <Flex alignItems="center" alignContent="center" height="100%">
                                                <Heading variant="h6" as="h6" key={index} textAlign="left">
                                                    {descriptions.description1}
                                                    {descriptions.description2}
                                                    {descriptions.description3}
                                                    {descriptions.description4}
                                                    {descriptions.description5}
                                                </Heading>
                                            </Flex> 
                                        ))}
                                    </Text>
                                </GridItem>
                            </Grid>
                        </Box>
                    ))}
                <ServiceList serviceData={serviceData}/>
                </Box>
            </Box>
        )}
    </>
  )
}

export default SingleService