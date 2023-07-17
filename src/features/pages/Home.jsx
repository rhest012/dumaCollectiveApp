import HomeHeader from "../components/HomeHeader";
import HomeAbout from "../components/HomeAbout";
import HomeContat from "../components/HomeContat";
import { Box } from "@chakra-ui/react";
import useLocoScroll from "../../actions/useLocoScroll";

const Home = () => {
  useLocoScroll();
  return (
    <>
      <Box data-scroll-container>
        <HomeHeader />
        <HomeAbout />
        <HomeContat />
      </Box>
    </>
  );
};

export default Home;
