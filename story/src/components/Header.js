import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Header = (props) => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        <div>
            <Link to="/">
                Home
            </Link>
            <Link to="/Read">
                Read
            </Link>
            { isAuthenticated ?
                <Link to="/Write">
                    Write
                </Link>
            : <></>}
        </div>
    );
}

export default Header