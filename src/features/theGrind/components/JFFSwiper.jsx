import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import JffPhone1 from "../../../assets/theGrind/jff/JFF-Phone-2.png";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/css/autoplay";

const JFFSwiper = () => {
  const imageList = [
    "JFF Screen 4.png",
    "JFF Screen 5.png",
    "JFF Screen 6.png",
    "JFF Screen 8.png",
    "JFF Screen 9.png",
    "JFF Screen 10.png",
  ];

  return (
    <Box margin="4rem 2rem">
      <Text>
        <Heading variant="h3" as="h3" marginBottom="1rem">
          JFF Social Content
        </Heading>
        <Text variant="p" marginBottom="2rem">
          Duma Collective developed an innovative mobile content campaign for
          the Johannesburg Film Festival, aimed at bringing the festival
          experience to a wider audience through engaging and shareable digital
          content. The campaign included short videos, interactive quizzes, and
          social media challenges, all centered around the festival's theme of
          African cinema and culture. By leveraging mobile platforms and
          creating content that was easily shareable, Duma Collective
          successfully generated buzz and excitement for the festival, leading
          to increased attendance and engagement from both local and
          international audiences.
        </Text>
      </Text>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        navigation
        pagination={{
          clickable: true,
        }}
      >
        {imageList.map((item, index) => (
          <SwiperSlide key={index}>
            <Flex
              height="100%"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                src={require(`../../../assets/theGrind/jff/${item}`)}
                height={{ base: "500px", md: "550px" }}
                width={{ base: "330px", md: "354px" }}
              />
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default JFFSwiper;
