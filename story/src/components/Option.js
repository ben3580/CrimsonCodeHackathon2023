import React from "react";

import {Link} from "react-router-dom"

const Option = ({text, changePage, id}) => {
    return (
        <div>
            {changePage ?
                <button className="btn btn-outline-light branchButton" type="button" onClick={() => {changePage(id)}}>
                    {text}
                </button> :
                <Link Link to={`/Write/${id}`}>
                    <button className="btn btn-outline-info branchButton" type="button">
                        "New Branch Available!"
                    </button>
                    
                </Link>
            }
        </div>
    )
}

export default Option