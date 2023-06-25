import { Flex, Grid, GridItem, Heading, Input, Select, Stack, Text, Textarea } from '@chakra-ui/react'
import SecondaryHeader from '../components/SecondaryHeader'
import {SlLocationPin} from 'react-icons/sl'
import {BsEnvelopeAt, BsTelephone} from 'react-icons/bs'
import {AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import React from 'react'
import { useLocation } from 'react-router-dom'

const Contact = () => {
    const inputStyling= {
        border:"none",
        borderBottom:"1px solid #1E174B",
        borderRadius:"0",
        marginY:"0.25rem",

        _placeholder : {
            fontSize:"0.85rem"
        }
    }

        // Page Location
    const location = useLocation();
    const pageLocation = location.pathname;

  return (
    <>
        <SecondaryHeader pageLocation={pageLocation}/>
        <Grid
            marginY="4rem"
            marginX="10rem"
            gridTemplateColumns="70% 30%"
        >
            <GridItem
                borderRadius="1rem"
                border="1px solid #1E174B"
                padding="2rem"
                height="500px"
                zIndex="1"
            >
                <Flex height="100%" flexDirection="column" flexWrap="wrap" justifyContent="center">
                    <Heading 
                        variant="h3" 
                        as="h3"
                        color="brand.900"
                        paddingBottom="1rem"
                    >
                        Send Us a Message
                    </Heading>
                    <form>
                        <Flex gap="1rem" width="65%">
                            <Input
                                placeholder="Full Name"
                                type="text"
                                sx={inputStyling}
                            />
                            <Input
                                placeholder="Email"
                                type="email"
                                sx={inputStyling}
                            />
                        </Flex>
                        <Select
                            sx={inputStyling}
                            placeholder="Subject"
                            width="65%"
                        >
                            <option value='business'>Business</option>
                            <option value='careers'>Careers</option>
                            <option value='enquiries'>General Enquiries</option>
                        </Select>
                        <Textarea
                            placeholder="Message"
                            sx={inputStyling}
                            width="65%"
                        />
                    </form>
                </Flex>
        </GridItem>
        <GridItem
            marginTop="6rem"
            marginLeft="-200px"
            borderRadius="1rem"
            background="brand.900"
            padding="2rem"
            width="400px"
            height="500px"
            zIndex="2"
            
        >
            <Flex height="100%" flexDir="column" gap="2rem" flexWrap="wrap" alignContent="center" justifyContent="center">
            <Heading 
                variant="h3" 
                as="h3"
                color="#fff"
                paddingBottom="0.5rem"
            >
                Contact Us
            </Heading>
                <Flex
                    gap="1rem"
                >
                    <SlLocationPin
                        color="#fff"
                        fontSize="1.25rem"
                    />
                    <Text variant="p" color="#fff">
                        51 Glenhove, Melrose Estate Johannesburg, 2196
                    </Text>
                </Flex>
                <Flex
                    gap="1rem"
                >
                    <BsEnvelopeAt
                        color="#fff"
                        fontSize="1.25rem"
                    />
                    <Text variant="p" color="#fff">
                        info@dumacollective.com
                    </Text>
                </Flex>
                <Flex
                    gap="1rem"
                >
                    <BsTelephone
                        color="#fff"
                        fontSize="1.25rem"
                    />
                    <Text variant="p" color="#fff">
                        0104435854​
                    </Text>
                </Flex>
                <Flex flexDirecion="column" gap="5rem" marginTop="1rem">
                    <FaFacebookF
                        color="#fff"
                        fontSize="1.5rem"
                    />
                    <AiOutlineTwitter
                        color="#fff"
                        fontSize="1.5rem"
                    />
                    <AiOutlineInstagram
                        color="#fff"
                        fontSize="1.5rem"
                    />
                </Flex>
            </Flex>
        </GridItem>
      </Grid>
    </>
  )
}

export default Contact