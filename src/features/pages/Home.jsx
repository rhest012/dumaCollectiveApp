import { Box, Flex, Grid, GridItem, Heading, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import HomeHeader from "../components/HomeHeader"
import HomeAbout from "../components/HomeAbout"
import HomeContat from "../components/HomeContat"

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
      <HomeAbout/>
      <HomeContat/>
    </>
  )
}

export default Home