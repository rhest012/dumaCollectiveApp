import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useLocation,
  Router,
  useNavigate,
} from "react-router-dom";

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

import { motion, AnimatePresence } from "framer-motion";
import ScrollToTop from "./ScrollToTop";
import { Box } from "@chakra-ui/react";
import Multichoice from "../theGrind/pages/Multichoice";
import NbaAfrica from "../theGrind/pages/NbaAfrica";
import ClassicCaseStudy from "../theGrind/pages/ClassicCaseStudy";
import Origins from "../theGrind/pages/Origins";
import InfluencerSubmission from "../dashboard/pages/InfluencerSubmission";
import PerformanceReview from "../dashboard/pages/PerformanceReview";
import EmployeeReviewDashboard from "../dashboard/pages/EmployeeReviewDashboard";
import DashboardNav from "../dashboard/components/DashboardNav";
import Account from "../dashboard/pages/Account";
import { UserProvider } from "../../actions/UserContext";

// Auth
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../actions/useFetchFirebase";
import ConditionalMenuItems from "../dashboard/components/ConditionalMenuItems";

export const DashboardRouter = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  // Check If User is Logged in
  const [user, setUser] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  // Handle Redirect if not logged in
  const [originalRoute, setOriginalRoute] = useState(null);

  useEffect(() => {
    if (!user) {
      // Save the original route before redirecting to login
      setOriginalRoute(window.location.pathname);
      navigate("/account");
    } else if (originalRoute) {
      // If the user is logged in and an original route exists, redirect to it
      navigate(originalRoute);
      setOriginalRoute(null);
    }
  }, [user]);

  return (
    <>
      <UserProvider>
        <AnimatePresence mode="wait">
          <ScrollToTop />
          <>
            <Box>
              <ConditionalMenuItems>
                <DashboardNav />
              </ConditionalMenuItems>

              <Routes>
                <Route path="/account" element={<Account />} />
                <Route
                  path="/performance-review"
                  element={<PerformanceReview />}
                />
                <Route
                  path="/employees"
                  element={<EmployeeReviewDashboard />}
                />
              </Routes>
              {/* <Footer /> */}
            </Box>
          </>
        </AnimatePresence>
      </UserProvider>
    </>
  );
};
export const FrontEndRouter = () => {
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
              <Route path="/git" element={<Contact />} />

              <Route
                path="/performance-review"
                element={<PerformanceReview />}
              />
              <Route path="/employees" element={<EmployeeReviewDashboard />} />
            </Routes>
            {/* <Footer /> */}
          </Box>
        </>
        {/* )} */}
      </AnimatePresence>
    </>
  );
};
