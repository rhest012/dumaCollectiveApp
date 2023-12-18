import React from "react";
import { createContext, useEffect, useState } from "react";
import { auth, useFetchFirebase } from "./useFetchFirebase";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  // Define Firebase Database and Internal User Database
  const userData = useFetchFirebase("users");
  const firebaseDisplayName = auth?.currentUser?.displayName;

  // Define active user
  const [activeUser, setActiveUser] = useState({});
  const [isFetchingActiveUser, setIsFetchingActiveUser] = useState(true);

  useEffect(() => {
    if (userData && firebaseDisplayName) {
      try {
        const matchingUserKey = Object.keys(userData.employees).find(
          (key) => key === firebaseDisplayName
        );

        // Update active user state
        if (matchingUserKey) {
          setActiveUser(userData.employees[matchingUserKey]);
        }
      } catch (error) {
        console.error("Error finding matching user:", error);
      } finally {
        // Set fetching state to false once the data is processed
        setIsFetchingActiveUser(false);
      }
    }
  }, [userData, firebaseDisplayName]);

  return (
    <UserContext.Provider value={{ activeUser, isFetchingActiveUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
