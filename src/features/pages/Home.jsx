import HomeHeader from "../components/HomeHeader";
import HomeAbout from "../components/HomeAbout";
import HomeContat from "../components/HomeContat";
import { Box } from "@chakra-ui/react";
import useLocoScroll from "../../actions/useLocoScroll";
import HomeShowreel from "../components/HomeShowreel";
import ContactSection from "../components/ContactSection";

const Home = () => {
  useLocoScroll();
  return (
    <>
      <Box data-scroll-container>
        <HomeHeader />
        <HomeAbout />
        <HomeShowreel />
        <ContactSection />
      </Box>
    </>
  );
};

export default Home;
