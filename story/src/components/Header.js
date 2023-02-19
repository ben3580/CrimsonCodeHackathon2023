import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

import HB from "../images/home_button.png"

const Header = (props) => {
    const { isAuthenticated } = useAuth0();
    const {isLoading, error} = useAuth0();
    return (
        <div className="header">
            <div className="row dark_theme">
                <div className="col-1 center dark_theme">
                    <img src={HB} alt="Home button" width="40px" height="40px" />
                </div>
                <div className="col-9 dark_theme">
                    <h2>CommuniTales</h2>
                </div>
                <div className="col-2 center dark_theme">
                    {error && <p>Authentication Error</p>}
                    {!error && isLoading && <p>Loading...</p>}
                    {!error && !isLoading && (
                        <>
                        <LoginButton className = "Login" />
                        <LogoutButton className = "Logout"/>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header