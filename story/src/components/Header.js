import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import {Link} from "react-router-dom"

const Header = (props) => {
    const { isAuthenticated } = useAuth0();
    const {isLoading, error} = useAuth0();
    return (
        <div className="header">
            <div className="row dark_theme stop">
                <div className="col-10 dark_theme">
                    <Link to={"/"} className="title">
                        <h2>CommuniTales</h2>
                    </Link>
                </div>
                <div className="col-2 center dark_theme stop">
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