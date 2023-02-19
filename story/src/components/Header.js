import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import HB from "../images/home_button.png"

const Header = (props) => {
    const { isAuthenticated } = useAuth0();
    return (
        <div className="header">
            <div className="row dark_theme">
                <div className="col-1 center dark_theme">
                    <img src={HB} alt="Home button" width="30px" height="30px" />
                </div>
                <div className="col-9 dark_theme">
                    <h3>Title</h3>
                </div>
                <div className="col-2 center dark_theme">
                    <a className="btn btn-success" href="#" role="button">Sign up / Login</a>
                </div>
            </div>
        </div>
    );
}

export default Header