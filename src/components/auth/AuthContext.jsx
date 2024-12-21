import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userDetails = localStorage.getItem("userDetails");

    if (token && userDetails) {
      setIsLoggedIn(true);
      const parsedUserDetails = JSON.parse(userDetails);
      setUserName(parsedUserDetails.name.split(" ")[0]);
    } else {
      setIsLoggedIn(false);
      setUserName("");
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userName, setUserName }}>
      {children}
    </AuthContext.Provider>
  );
};
