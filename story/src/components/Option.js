import React from "react";

import {Link} from "react-router-dom"

const Option = ({text, changePage, id}) => {
    return (
        <div>
            {changePage ?
                <button className="btn btn-outline-primary homeLinkButton" type="button" onClick={() => {changePage(id)}}>
                    {text}
                </button> :
                <Link Link to={`/Write/${id}`}>
                    "New Branch Available!"
                </Link>
            }
        </div>
    )
}

export default Option