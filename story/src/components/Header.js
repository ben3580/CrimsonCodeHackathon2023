import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <div>
            <Link to="/">
                Home
            </Link>
            <Link to="/Read">
                Read
            </Link>
            <Link to="/Write">
                Write
            </Link>
        </div>
    );
}

export default Header