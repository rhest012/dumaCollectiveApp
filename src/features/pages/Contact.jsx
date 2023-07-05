import { Flex, Grid, GridItem, Heading, Image, Input, Select, Stack, Text, Textarea } from '@chakra-ui/react'
import SecondaryHeader from '../components/SecondaryHeader'
import PlaceholderImageLs from "../../assets/bodyImages/DumaImage01.jpg"
import PlaceholderImageP from "../../assets/bodyImages/DumaImage02.jpg"
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

// Icons
import {SlLocationPin} from 'react-icons/sl'
import {BsEnvelopeAt, BsTelephone} from 'react-icons/bs'
import {AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'
import {FaFacebookF, FaTiktok, FaLinkedinIn} from 'react-icons/fa'
import SocialIconsHorizontal from '../components/SocialIconsHorizontal'

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

    const imageStyling = {
        height: "300px",
        borderRadius: "0.5rem"
    }

    const singleGridContainerStyling = {
        display:"flex", 
        flexDir:"column",
        height:"100%",
        justifyContent:"center",
        alignContent:"center"
    }

    const socialmediaContainerStyling = {
        display:"flex",
        flexDir:"column",
        alignItems:"center"
    }

    const contactDetailStyling = {
        paddingTop:"1rem"
    }


        // Page Location
    const location = useLocation();
    const pageLocation = location.pathname;

  return (
    <>
        <Grid
            // marginY="4rem"
            margin="2rem"
            gridTemplateColumns="40% 60%"
            gap="2rem"
            height="75vh"
        >
            <GridItem
               sx={singleGridContainerStyling}
               paddingBottom="2rem"
            >
                
                <Heading 
                    variant="h2" 
                    as="h2"
                >
                    Get in touch
                </Heading>
                <Text 
                    variant="p" 
                    paddingY="2rem"
                    width="90%"
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum exercitationem quisquam adipisci aspernatur? Sed, provident. A velit eum voluptatem sint dolore omnis laudantium illum dolorum est autem? Ad repellendus omnis mollitia cum magnam blanditiis, labore sint maiores amet modi esse culpa qui facilis quod et ab odit! Nostrum, illum blanditiis.
                </Text>
                <SocialIconsHorizontal/>
            </GridItem>
            <GridItem
                sx={singleGridContainerStyling}
                marginRight="2rem"
            >
                <form>
                    <Flex gap="1rem">
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
                    >
                        <option value='business'>Business</option>
                        <option value='careers'>Careers</option>
                        <option value='enquiries'>General Enquiries</option>
                    </Select>
                    <Textarea
                        placeholder="Message"
                        sx={inputStyling}
                    />
                </form>
                <Grid gridTemplateColumns="repeat(3, 1fr)" justifyContent="center" paddingY="2rem">
                    <GridItem sx={socialmediaContainerStyling}>
                        <BsEnvelopeAt
                            className="contact-icon"
                        />
                        <Text sx={contactDetailStyling} variant="p">
                            info@dumacollective.com
                        </Text>
                    </GridItem>
                    <GridItem sx={socialmediaContainerStyling}>
                        <SlLocationPin
                            className="contact-icon"
                        />
                        <Text sx={contactDetailStyling} variant="p" textAlign="center">
                            51 Glenhove, Melrose Estate Johannesburg, 2196
                        </Text>
                    </GridItem>
                    <GridItem sx={socialmediaContainerStyling}>
                        <BsTelephone
                            className="contact-icon"
                        />
                        <Text sx={contactDetailStyling} variant="p">
                            0104435854​
                        </Text>
                    </GridItem>
                </Grid>
        </GridItem>  
      </Grid>
    </>
  )
}

export default Contact