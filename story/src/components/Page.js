import React, { useEffect, useState } from "react";

import Option from "./Option";

import database from '../apis/database';

const Page = ({pageid}) => {
    const [pageInfo, setPageInfo] = useState({})
    const [currPage, setCurrPage] = useState(0)

    const getPage = async(pageid) => {
        setCurrPage(pageid)
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
        } else {
            options.push(false)
        }
        if (page.option2id !== -1) {
            await database.get(`/read/${page.option2id}`)
            .then(res => {
                options.push({optionText: res.data[0].prompttext, id:res.data[0].id})
            })
        } else {
            options.push(false)
        }
        if (page.option3id !== -1) {
            await database.get(`/read/${page.option3id}`)
            .then(res => {
                options.push({optionText: res.data[0].prompttext, id:res.data[0].id})
            })
        } else {
            options.push(false)
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
            <div className="imageContainer">
                <p className="readText">{pageInfo.pageText}</p>
            </div>
            <div>
                {pageInfo.options?.map(item => (item ? <Option key={item.id} text={item.optionText} changePage={getPage} id={item.id}/> : <Option id={currPage}/>))}
            </div>
            <img src='../images/Trees.jpg' alt='the story'/>
        </div>
    )
}

export default Page