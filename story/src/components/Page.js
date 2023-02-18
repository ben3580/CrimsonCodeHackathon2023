import React, { useEffect, useState } from "react";

import Option from "./Option";

const Page = ({pageid}) => {
    const [pageInfo, setPageInfo] = useState({})

    const getPage = async(pageid) => {
        //GET INFO FROM DB

        setPageInfo({
            pageText: "You enter the castle, before you is a long hallway" + pageid,
            options : [
                {optionText: "Enter the door to your right", id:5},
                {optionText: "Go up a staircase", id:6},
                {optionText: "Turn around", id:7}
            ]
        })
    }

    useEffect(() => {
        getPage(pageid)
    }, [pageid]);

    return (
        <div>
            <p>{pageInfo.pageText}</p>

            <div>
                {pageInfo.options?.map(item => <Option key={item.id} text={item.optionText} changePage={getPage} id={item.id} />)}
            </div>
        </div>
    )
}

export default Page