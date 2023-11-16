import HomeAbout from "../components/HomeAbout";
import { Box } from "@chakra-ui/react";
import useLocoScroll from "../../actions/useLocoScroll";
import HomeShowreel from "../components/HomeShowreel";
import transition from "../components/transition";

const Home = () => {
  useLocoScroll();
  return (
    <>
      <Box data-scroll-container>
        <HomeShowreel />
        <HomeAbout />
      </Box>
    </>
  );
};

export default transition(Home);
