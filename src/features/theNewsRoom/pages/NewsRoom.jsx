import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import { useFetchFirebase } from "../../../actions/useFetchFirebase";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import transition from "../../components/transition";
import { useInView } from "react-intersection-observer";

const NewsRoom = () => {
  const buttonStyle = {
    color: "#fff",
    background: "#1E174B",
    border: "1px solid #1E174B",
    paddingY: "1.25rem",
    borderRadius: "2rem",
    width: "125px",

    _hover: {
      background: "transparent",
      border: "1px solid #1E174B",
      color: "#1E174B",
    },
  };

  const theBuzz = [
    {
      id: "109",
      title:
        "MultiChoice and Duma Collective win Bronze for Effective Content Marketing.",
      date: "29 September 2023",
      caption:
        "Four hundred of SA's Top industry leaders from the corporate and agency sectors gathered at the 11th annual New Generation Awards Gala.",
      image: "Origins.png",
      url: "https://modernmarketing.co.za/the-2023-new-generation-awards-winners-have-been-announced/",
    },
    {
      id: "109",
      title: "Sibu Mabena unveils newly renovated office space",
      date: "01 September 2023",
      caption:
        "Sibu Mabena, the founder of Duma Collective, recently unveiled the agency s newly renovated office space in Randburg. The remarkable workspace serves as the new creative haven for the Dumarians.",
      image: "Duma Office.jpg",
      url: "https://www.kaya959.co.za/lifestyle/sibu-mabena-unveils-newly-renovated-office-space/",
    },
    {
      id: "110",
      title:
        "Tbose Chats to “The Fixer” herself, Sibu Mabena The Founder of Duma Collective",
      date: "09 August 2023",
      caption:
        "August is all about celebrating. Ibose sat down with Sibu Mabena to chat more about what inspired her to start her business, how it felt to work on some of SA's biggest events, and what it feels like to finally have a permanent home Duma Collective.",
      image: "SibuMabena 2.png",
      url: "https://www.kaya959.co.za/lineup/best-t-in-the-city-lineup/sibu-mabenas-inspirational-story-behind-her-agency-duma-collective/",
    },
    {
      id: "105",
      title: "#Newsmaker: Lindiwe Maduna, MD of Duma Collective",
      date: "26 July 2023",
      caption:
        "Lindiwe Maduna has been appointed as the Managing Director of Duma Collective. With no formal qualifications in communications, Maduna developed her skills and knowledge through sheer hard work and determination.",
      image: "Lindi.jpg",
      url: "https://www.bizcommunity.com/Article/196/18/240473.html",
    },
    {
      id: "105",
      title: "Mabena rides wave of creativity",
      date: "06 March 2023",
      caption:
        "Sibu Mabena, a young and versatile entrepreneur, is a shining example of what it means to live towards fulfilling your dreams. She explains the importance of going above and beyond to achieve your career goals.",
      image: "Sibu Creativity.jpg",
      url: "https://sundayworld.co.za/news/business/hustlers-avenue/mabena-rides-wave-of-creativity-2/",
    },
    {
      id: "100",
      title: "Sibu wins big",
      date: "19 February 2023",
      caption:
        "The Founder and Chief Creative Officer of Duma Collective walked away with the headlining award for the Prestigious Inverroche Future is Female, making her the first reciptient in Africa...",
      image: "SibuMabena.jpg",
      url: "https://www.snl24.com/dailysun/celebs/sibu-mabena-wins-big-award-20230218",
    },
    {
      id: "101",
      title: "Duma Collective dissolves it's talent management division",
      date: "7 November 2022",
      caption:
        "Every new beginning comes from another beginning's end. Duma Collective has taken the decision to dissolve its talent management sector for several reasons.",
      image: "DumaLogo.jpg",
      url: "https://www.kaya959.co.za/entertainment/duma-collective-dissolves-its-talent-management-division/",
    },

    {
      id: "103",
      title: "Duma Collective, M&N brands in share deal",
      date: "10 March 2022",
      caption:
        "The most significant effect of the deal on Duma will be the agency-wide mentorship project",
      image: "M&N.png",
      url: "https://www.bizcommunity.com/Article/196/12/225854.html",
    },

    {
      id: "102",
      title: "MultiChoice group appoints Duma Collective",
      date: "28 June 2021",
      caption:
        "The MultiChoice Group has announced appointment of Duma Collective as its lead creative communications agency. Duma Collective will oversee Public Relations and Social Media for DStv, general entertainment channels, and the group's Corporate Brand.",
      image: "MCG Duma.jpg",
      url: "https://www.multichoice.com/media/news/multichoice-group-appoints-duma-collective-as-lead-creative-communications-agency",
    },
    {
      id: "102",
      title:
        "Heineken South Africa Women's Month entrepreneur - Sibu Mabena, founder of Duma Collective",
      date: "27 August 2020",
      caption:
        "This #WomensMonth, Heineken South Africa has partnered with Bizcommunity to showcase the phenomenal work and impact of women entrepreneurs such as Mabena...",
      image: "Sibu Heineken.jpeg",
      url: "https://www.bizcommunity.com/Article/196/841/207697.html",
    },
    {
      id: "104",
      title: "Mail & Guardian 200 Young South Africans",
      date: "22 June 2018",
      caption:
        "Mabena has managed to build a career around her passions — dance, social media, events and talent management. She founded Duma Collective while doing a Bachelor in Political Sciences and International Relations at the University of Pretoria.",
      image: "Sibu M&G.jpg",
      url: "https://200youngsouthafricans.co.za/sibu-mabena-2018/",
    },
  ];

  // Framer Motion
  const MotionImage = motion(Image);
  const MotionGridItem = motion(GridItem);
  const MotionHeading = motion(Heading);
  const MotionText = motion(Text);
  const MotionButton = motion(Button);
  const MotionBox = motion(Box);

  const imageChildVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      duration: 0.1,
    },
    hover: {
      scale: 1.05,
      duration: 2,
    },
  };

  const leftContainerVariants = {
    hidden: {
      opacity: 0,
      x: -10,
    },
    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 1.5,
        delay: 0.25,
      },
    },
    exit: {
      y: 0,
      opacity: 0,
      delay: 1,
    },
  };

  const headingVariants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 1.5,
        delay: 0.25,
      },
    },
    exit: {
      y: 0,
      opacity: 0,
      delay: 1,
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 1.5,
        delay: 0.5,
      },
    },
    exit: {
      y: 0,
      opacity: 0,
      delay: 1,
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        duration: 1,
        delay: 0.75,
      },
    },
    exit: {
      y: 0,
      opacity: 0,
      delay: 1,
    },
  };

  const borderVariants = {
    hidden: {
      width: 0,
    },
    visible: {
      width: "100%",
      transition: { delay: 1, duration: 1 },
    },
  };

  // Trigger when in View
  const { ref, inView } = useInView();

  return (
    <>
      <Box ref={ref}>
        <>
          {theBuzz?.map((buzzItem, index) => (
            <>
              <Grid
                key={index}
                gridTemplateColumns={{
                  base: "1fr",
                  sm: "1fr",
                  md: "30%, 70%",
                  lg: "30%, 70%",
                  xl: "30% 37%",
                }}
                marginX="2rem"
                marginTop={{
                  base: "1rem",
                  sm: "1rem",
                  md: "1rem",
                  lg: "2rem",
                  xl: "2rem",
                }}
                gap="2rem"
                paddingY={{
                  base: "1rem",
                  sm: "1rem",
                  md: "1rem",
                  lg: "2rem",
                  xl: "2rem",
                }}
                // borderBottom="1.5px solid #1E174B"
              >
                <MotionGridItem
                  variants={leftContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                  }}
                  // exit="exit"
                >
                  <Box overflow="hidden" className="image-container">
                    <MotionImage
                      variants={imageChildVariants}
                      initial="hidden"
                      whileInView="visible"
                      // exit="exit"
                      whileHover="hover"
                      viewport={{
                        once: true,
                      }}
                      src={require(`../../../assets/newsroom/${buzzItem.image}`)}
                    />
                  </Box>
                </MotionGridItem>
                <GridItem>
                  <Flex
                    height="100%"
                    flexDirection="column"
                    flexWrap="wrap"
                    justifyContent="space-between"
                    paddingRight="2rem"
                  >
                    <Stack>
                      <MotionHeading
                        variants={headingVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                          once: true,
                        }}
                        // exit="exit"
                        variant="h3"
                        as="h3"
                      >
                        {buzzItem.title}
                      </MotionHeading>
                      <MotionText
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                          once: true,
                        }}
                        // exit="exit"
                        variant="p"
                        as="p"
                        fontSize="1rem"
                        textTransform="uppercase"
                      >
                        {buzzItem.date}
                      </MotionText>
                    </Stack>
                    <MotionText
                      variants={textVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{
                        once: true,
                      }}
                      // exit="exit"
                    >
                      {buzzItem.caption}
                    </MotionText>
                    <Link isExternal to={buzzItem.url}>
                      <MotionButton
                        variants={buttonVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                          once: true,
                        }}
                        // exit="exit"
                        variant="standardButton"
                      >
                        Read Article
                      </MotionButton>
                    </Link>
                  </Flex>
                </GridItem>
              </Grid>
              <MotionBox
                variants={borderVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                }}
                // exit="exit"
                borderBottom="1px solid #1E174B"
              />
            </>
          ))}
        </>
      </Box>
    </>
  );
};

export default transition(NewsRoom);
