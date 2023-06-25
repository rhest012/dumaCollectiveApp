import { Box, Flex, Grid, GridItem, Heading, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import HomeHeader from "../components/HomeHeader"
import HomeSquad from "../components/HomeSquad"
import { useFetchFirebase } from "../../actions/useFetchFirebase"
import LandscapeImage from "../../assets/bodyImages/DumaImage01.jpg"
import PortraitImage from "../../assets/bodyImages/DumaImage02.jpg"
import Beliefs from "../components/Beliefs"
import HomeServices from "../components/HomeServices"
import HomeStats from "../components/HomeStats"

const Home = () => {
    const listyling = {
      paddingY:"0.5rem"
    }

    const serviceStyling = {
      flexDirection:"column", 
      backgroundColor:"brand.900" ,
      paddingX:"2rem", 
      alignItems:"center",
      height:"250px", 
      width:"250px",
      flexWrap:"wrap",
      justifyContent:"center",
      borderRadius:"1rem",
    }

    const ethosTextContainerStyle = {
      marginLeft:"1rem",
      height:"100%",
      display: "flex",
      flexDirection: "column",
      alignContent: "center"
    }

  return (
    <>
      <HomeHeader/>
      <Box 
        padding="4rem 2rem"
      >
        <Text variant="p" as="p" textAlign="center">
          Duma Collective is a Creative Communications Agency in the business of redefining creative communication from Africa, to the world.<br/>  ​
          We are an oasis for African Creativity to flourish and committed to delivering impactful creative solutions for our clients.​
        </Text>
      </Box>
      <Beliefs/>
      <HomeSquad/>
      <HomeServices/>
      <HomeStats/>
    </>
  )
}

export default Home