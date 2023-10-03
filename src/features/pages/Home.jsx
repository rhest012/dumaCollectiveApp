import HomeHeader from "../components/HomeHeader";
import HomeAbout from "../components/HomeAbout";
import HomeContat from "../components/HomeContat";
import { Box } from "@chakra-ui/react";
import useLocoScroll from "../../actions/useLocoScroll";
import HomeShowreel from "../components/HomeShowreel";
import ContactSection from "../components/ContactSection";
import transition from "../components/transition";

const Home = () => {
  useLocoScroll();
  return (
    <>
      <Box data-scroll-container>
        <HomeShowreel />
        <HomeAbout />
        {/* <ContactSection /> */}
      </Box>
    </>
  );
};

export default transition(Home);
