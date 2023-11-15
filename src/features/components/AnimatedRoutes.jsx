import { useEffect, useState } from "react";
import { Routes, Route, useLocation, Router } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import WhatWeDo from "../pages/WhatWeDo";
import Squad from "../pages/Squad";
import TheGrind from "../theGrind/pages/TheGrind";
import Jff from "../theGrind/pages/Jff";
import NewsRoom from "../theNewsRoom/pages/NewsRoom";
import Contact from "../pages/Contact";

// Components
import Nav from "../../components/Nav";
import CustomCursor from "../../components/CustomCursor";
import Footer from "../../components/Footer";

import { motion, AnimatePresence } from "framer-motion";
import ScrollToTop from "./ScrollToTop";
import { Box } from "@chakra-ui/react";
import NewsRoomArticle from "../theNewsRoom/pages/NewsRoomArticle";
import Multichoice from "../theGrind/pages/Multichoice";
import NbaAfrica from "../theGrind/pages/NbaAfrica";
import ClassicCaseStudy from "../theGrind/pages/ClassicCaseStudy";
import Origins from "../theGrind/pages/Origins";
import InfluencerSubmission from "../dashboard/pages/InfluencerSubmission";

const AnimatedRoutes = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        <ScrollToTop />
        <>
          <Box>
            <Nav />
            <CustomCursor />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/what-we-do" element={<WhatWeDo />} />
              <Route path="/the-squad" element={<Squad />} />
              <Route path="/the-grind" element={<TheGrind />} />
              <Route path="/the-grind/jff" element={<Jff />} />
              <Route path="/the-grind/origins" element={<Origins />} />
              <Route path="/the-grind/multichoice" element={<Multichoice />} />
              <Route path="/the-grind/nba-africa" element={<NbaAfrica />} />
              <Route path="/the-grind/:id" element={<ClassicCaseStudy />} />
              <Route path="/influencers" element={<InfluencerSubmission />} />
              <Route path="/the-buzz" element={<NewsRoom />} />
              <Route path="/get-in-touch" element={<Contact />} />
            </Routes>
            {/* <Footer /> */}
          </Box>
        </>
        {/* )} */}
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoutes;
