import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout,  isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button className = "AuthButton" onClick={() => logout()}><span>Logout</span></button>
      // show user.name if they are logged in
    )
  )
};

export default LogoutButton;