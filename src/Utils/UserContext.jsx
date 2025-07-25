import axios from "axios";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const dataContext = createContext();

function UserContext({ children }) {
  const navigation = useNavigate();
  const serverUrl = "http://localhost:5000/api";
  const [userData, setUserData] = useState(null);
  const getUserData = async () => {
    try {
      let { data } = await axios.get(serverUrl + "/getUser", {
        withCredentials: true,
      });
      console.log(data);
      setUserData(data);
    } catch (err) {
      navigation("/signIn");
    }
  };
  const value = {
    serverUrl,
    userData,
    getUserData,
    setUserData
  };
  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
}

export default UserContext;
