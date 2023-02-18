import React from "react";

const Option = ({text, changePage, id}) => {
    return (
        <button onClick={() => {changePage(id)}}>
            {text}
        </button>
    )
}

export default Option