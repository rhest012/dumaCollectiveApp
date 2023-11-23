import HomeAbout from "../components/HomeAbout";
import { Box } from "@chakra-ui/react";
import useLocoScroll from "../../actions/useLocoScroll";
import HomeShowreel from "../components/HomeShowreel";
import transition from "../components/transition";
import { Helmet } from "react-helmet-async";

const Home = () => {
  useLocoScroll();
  return (
    <>
      <Helmet>
        <title> Home</title>
        <meta
          name="description"
          content="An oasis for African creativity to flourish. We deliver greatness. Because creativity is at the heart of everything we do."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <Box data-scroll-container>
        <HomeShowreel />
        <HomeAbout />
      </Box>
    </>
  );
};

export default transition(Home);
