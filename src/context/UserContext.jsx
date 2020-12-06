// Libs
import React from "react";
import jwtDecode from "jwt-decode";
import Cookie from "js-cookie";

export const UserContext = React.createContext(null);

export const UserProvider = (props) => {
  const { children } = props;
  const token = Cookie.get("token") || undefined;
  let infoToken = undefined;
  if (token) {
    const tokenObj = jwtDecode(token);
    infoToken = {
      email: tokenObj.email,
      name: tokenObj.name,
      role: tokenObj.role,
    };
  }
  return (
    <UserContext.Provider value={infoToken}>{children}</UserContext.Provider>
  );
};
