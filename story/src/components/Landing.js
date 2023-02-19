import "./Landing.css"

import React from "react";
import {Link} from "react-router-dom"

const Landing = () => {
    return (
        <div className="content">
            <div className="row">
                <div className="col">
                    <Link to={"/Read"}>
                        <button className="btn btn-primary homeLinkButton" type="button">
                            Read
                        </button>
                    </Link>
                </div>
                <div className="col">
                    <Link to={"/Write"}>
                        <button className="btn btn-primary homeLinkButton" type="button">
                            Write
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Landing