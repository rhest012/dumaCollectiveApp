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
import SibuMabena from "../../../assets/newsroom/SibuMabena.jpg";
import NewsRoomHeader from "../components/NewsRoomHeader";
import { useFetchFirebase } from "../../../actions/useFetchFirebase";
import useFetch from "../../../actions/useFetchData";
import { Link } from "react-router-dom";
import BuzzHeader from "../../components/BuzzHeader";
import { motion } from "framer-motion";
import transition from "../../components/transition";

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

  const data = useFetchFirebase("newsRoom");

  const theBuzz = [
    {
      id: "110",
      title:
        "Tbose Chats to “The Fixer” herself, Sibu Mabena The Founder of Duma Collective",
      date: "25 August 2023",
      caption:
        "August is all about celebrating and who better than “The Fixer” herself, Sibu Mabena? T-Bose spoke to her about how and what inspired her to start her marketing agency Duma Collective, working on some of the biggest events in SA, and finally moving Duma Collective into their own building.",
      image: "SibuMabena 2.png",
      url: "https://www.kaya959.co.za/lifestyle/sibu-mabena-unveils-newly-renovated-office-space/",
    },
    {
      id: "109",
      title: "Sibu Mabena unveils newly renovated office space",
      date: "7 August 2023",
      caption:
        "This #WomensMonth, Heineken South Africa has partnered with Bizcommunity to showcase the phenomenal work and impact of women entrepreneurs such as Mabena...",
      image: "SibuMabena 2.png",
      url: "https://www.kaya959.co.za/lifestyle/sibu-mabena-unveils-newly-renovated-office-space/",
    },
    {
      id: "105",
      title: "#Newsmaker: Lindiwe Maduna, MD of Duma Collective",
      date: "26 July 2023",
      caption:
        "With no formal qualifications in communications, she developed her skills and knowledge through sheer hard work.",
      image: "Lindi.jpg",
      url: "https://www.bizcommunity.com/Article/196/18/240473.html",
    },
    {
      id: "104",
      title: "Lindiwe Maduna appointed MD of Duma Collective",
      date: "11 July 2023",
      caption:
        "Lindiwe Maduna has been promoted to managing director of the Duma Collective.",
      image: "Lindi.jpg",
      url: "https://www.bizcommunity.com/Article/196/18/240060.html",
    },
    {
      id: "105",
      title: "Mabena rides wave of creativity",
      date: "06 March 2023",
      caption:
        "Young and versatile entrepreneur, Sibu Mabena is a shining example that when you live towards fulfilling your dreams, all is possible as you can go beyond to reach for the stars.",
      image: "SibuMabena.jpg",
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
      caption: "Every new beginning comes from some other beginning's end",
      image: "DumaLogo.jpg",
      url: "https://www.kaya959.co.za/entertainment/duma-collective-dissolves-its-talent-management-division/",
    },
    {
      id: "102",
      title: "MultiChoice group appoints Duma Collective",
      date: "9 March 2022",
      caption:
        "The MultiChoice Group has announced appointment of Duma Collective as its lead creative communications agency. Duma Collective will oversee Public Relations and Social Media for DStv, general entertainment channels, and the group's Corporate Brand.",
      image: "Multichoice.jpg",
      url: "https://www.multichoice.com/media/news/multichoice-group-appoints-duma-collective-as-lead-creative-communications-agency",
    },
    {
      id: "103",
      title: "Duma Collective, M&N brands in share deal",
      date: "9 March 2022",
      caption:
        "The most significant effect of the deal on Duma will be the agency-wide mentorship project",
      image: "M&N.jpg",
      url: "https://www.bizcommunity.com/Article/196/12/225854.html",
    },
    {
      id: "102",
      title:
        "Heineken South Africa Women's Month entrepreneur - Sibu Mabena, founder of Duma Collective",
      date: "9 March 2022",
      caption:
        "This #WomensMonth, Heineken South Africa has partnered with Bizcommunity to showcase the phenomenal work and impact of women entrepreneurs such as Mabena...",
      image: "SibuMabena 2.png",
      url: "https://www.bizcommunity.com/Article/196/841/207697.html",
    },
    {
      id: "104",
      title: "Mail & Guardian 200 Young South Africans",
      date: "22 June 2018",
      caption:
        "Mabena has managed to build a career around her passions — dance, social media, events and talent management. She founded Duma Collective while doing a Bachelor in Political Sciences and International Relations at the University of Pretoria.",
      image: "SibuMabena 2.png",
      url: "https://200youngsouthafricans.co.za/sibu-mabena-2018/",
    },
  ];

  // Framer Motion
  const MotionImage = motion(Image);
  const imageChildVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      duration: 1,
    },
    hover: {
      scale: 1.05,
      duration: 2,
    },
  };

  return (
    <>
      {data && (
        <Box>
          <>
            {theBuzz?.map((buzzItem, index) => (
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
                borderBottom="1.5px solid #1E174B"
              >
                <GridItem>
                  <Box overflow="hidden" className="image-container">
                    <MotionImage
                      src={require(`../../../assets/newsroom/${buzzItem.image}`)}
                      variants={imageChildVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      whileHover="hover"
                    />
                  </Box>
                </GridItem>
                <GridItem>
                  <Flex
                    height="100%"
                    flexDirection="column"
                    flexWrap="wrap"
                    justifyContent="space-between"
                    paddingRight="2rem"
                  >
                    <Stack>
                      <Heading variant="h3" as="h3">
                        {buzzItem.title}
                      </Heading>
                      <Text
                        variant="p"
                        as="p"
                        fontSize="1rem"
                        textTransform="uppercase"
                      >
                        {buzzItem.date}
                      </Text>
                    </Stack>
                    <Text>{buzzItem.caption}</Text>
                    <Link isExternal to={buzzItem.url}>
                      <Button variant="standardButton">Read Article</Button>
                    </Link>
                  </Flex>
                </GridItem>
              </Grid>
            ))}
          </>
        </Box>
      )}
    </>
  );
};

export default transition(NewsRoom);
