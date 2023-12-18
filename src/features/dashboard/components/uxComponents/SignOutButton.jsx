import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../../actions/useFetchFirebase";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const SignOut = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/account");
  };

  useEffect(() => {
    const activeUser = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => activeUser();
  }, []);

  return (
    <Button
      className="link-container"
      onClick={handleLogout}
      backgroundColor="transparent"
      border="none"
      fontFamily="'Roc Grotesk Wide', sans-serif"
      marginTop="-0.7rem"
      fontWeight="600"
      fontSize="0.75rem"
      letterSpacing="1.5px"
      color="#1E174B"
      textTransform="uppercase"
      _hover={{
        background: "transparent",
        color: "#000000",
      }}
    >
      Logout
    </Button>
  );
};

export default SignOut;
