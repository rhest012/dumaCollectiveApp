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


        // Page Location
    const location = useLocation();
    const pageLocation = location.pathname;

  return (
    <>
        <SecondaryHeader pageLocation={pageLocation}/>
        <Grid
            // marginY="4rem"
            marginX="2rem"
            marginY="8rem"
            gridTemplateColumns="50% 50%"
            gap="2rem"
        >
            <GridItem
               sx={singleGridContainerStyling}
               paddingBottom="2rem"
            >
                
                <Heading 
                    variant="h3" 
                    as="h3"
                >
                    Questions?
                </Heading>
                <Text 
                    variant="p" 
                    paddingBottom="2rem"
                >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus rem blanditiis nobis laborum molestiae neque dicta nihil quibusdam. Sed, dolorem.
                </Text>
                <Flex justifyContent="space-between">
                    <Image
                        src={PlaceholderImageLs}
                        sx={imageStyling}
                    />
                    <Image
                        src={PlaceholderImageP}
                        sx={imageStyling}
                    />
                </Flex>
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
                <Grid gridTemplateColumns="repeat(3, 1fr)" justifyContent="center" paddingY="1rem">
                    <GridItem sx={socialmediaContainerStyling}>
                        <SlLocationPin
                            className="contact-icon"
                        />
                        <Text variant="p" textAlign="center">
                            51 Glenhove, Melrose Estate Johannesburg, 2196
                        </Text>
                    </GridItem>
                    <GridItem sx={socialmediaContainerStyling}>
                        <BsEnvelopeAt
                            className="contact-icon"
                        />
                        <Text variant="p">
                            info@dumacollective.com
                        </Text>
                    </GridItem>
                    <GridItem sx={socialmediaContainerStyling}>
                        <BsTelephone
                            className="contact-icon"
                        />
                        <Text variant="p">
                            0104435854​
                        </Text>
                    </GridItem>
                </Grid>
                <Flex flexDirecion="column" paddingY="1rem" justifyContent="space-between">
                    <Link>
                        <FaFacebookF
                            className="contact-icon"
                        />
                    </Link>
                    <Link>
                        <FaTiktok
                            className="contact-icon"
                        />
                    </Link>
                    <Link>
                        <FaLinkedinIn
                            className="contact-icon"
                        />
                    </Link>
                    <Link>
                        <AiOutlineTwitter
                            className="contact-icon"
                        />
                    </Link>
                    <Link>
                        <AiOutlineInstagram
                            className="contact-icon"
                        />
                    </Link>
                </Flex>
        </GridItem>  
      </Grid>
    </>
  )
}

export default Contact