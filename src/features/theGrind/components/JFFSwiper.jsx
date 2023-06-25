import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper'
import JffPhone1 from '../../../assets/theGrind/jff/JFF-Phone-2.png' 
import { Box, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/css/autoplay'

const JFFSwiper = () => {
  return (
    <>
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      navigation
      pagination={{
      clickable: true,
      }}
      
    >
      <SwiperSlide>
        <Box marginY="4rem" marginX="4rem">
            <Grid gridTemplateColumns="50% 50%">
                <GridItem height="100%">
                    <Flex height="100%" flexDirection="column" alignContent="center" justifyContent="center">
                        <Heading 
                            variant="h3" 
                            as="h3"
                            marginBottom="1rem"
                        >
                            JFF Social Content
                        </Heading>
                        <Text
                            variant="p"
                        >
                            Duma Collective developed 
                            an innovative mobile content campaign for 
                            the Johannesburg Film Festival, aimed at 
                            bringing the festival experience to a wider 
                            audience through engaging and shareable 
                            digital content. The campaign included short 
                            videos, interactive quizzes, and social media 
                            challenges, all centered around the festival’s 
                            theme of African cinema and culture. 

                            By leveraging mobile platforms and creating 
                            content that was easily shareable, 
                            Duma Collective successfully generated buzz 
                            and excitement for the festival, leading to 
                            increased attendance and engagement from 
                            both local and international audiences.
                        </Text>
                    </Flex>
                </GridItem>
                <GridItem height="100%">
                    <Flex height="100%" flexDirection="column" justifyContent="center" alignItems="center">
                        <Image
                            src={JffPhone1}
                            height="550px"
                            width="363px"
                        />
                    </Flex>
                </GridItem>
            </Grid>
        </Box>

      </SwiperSlide>
      <SwiperSlide>
        <Flex height="100%" flexDirection="column" justifyContent="center" alignItems="center">
            <Image
                src={JffPhone1}
                height="550px"
                width="363px"
            />
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex height="100%" flexDirection="column" justifyContent="center" alignItems="center">
            <Image
                src={JffPhone1}
                height="550px"
                width="363px"
            />
        </Flex>
      </SwiperSlide>
      
    </Swiper>
    </>
       
  )
}

export default JFFSwiper