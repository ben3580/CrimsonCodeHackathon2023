import React, { useEffect, useState } from "react";

import Option from "./Option";

import database from '../apis/database';

const Page = ({pageid}) => {
    const [pageInfo, setPageInfo] = useState({})

    const getPage = async(pageid) => {
        var page = {}
        var options = []
        await database.get(`/read/${pageid}`)
        .then(res => {
            page = res.data[0]
        })

        if (page.option1id !== -1) {
            await database.get(`/read/${page.option1id}`)
            .then(res => {
                options.push({optionText: res.data[0].prompttext, id:res.data[0].id})
            })
        }
        if (page.option2id !== -1) {
            await database.get(`/read/${page.option2id}`)
            .then(res => {
                options.push({optionText: res.data[0].prompttext, id:res.data[0].id})
            })
        }
        if (page.option3id !== -1) {
            await database.get(`/read/${page.option3id}`)
            .then(res => {
                options.push({optionText: res.data[0].prompttext, id:res.data[0].id})
            })
        }

        setPageInfo({
            pageText: page.text,
            options : options
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