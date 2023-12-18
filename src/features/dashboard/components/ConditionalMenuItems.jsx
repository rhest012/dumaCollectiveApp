import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ConditionalMenuItems = ({ children }) => {
  const location = useLocation();

  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if (location.pathname === "/account") {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);

  return <div>{showNavbar && children}</div>;
};

export default ConditionalMenuItems;
