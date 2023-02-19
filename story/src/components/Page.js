import React, { useEffect, useState } from "react";

import Option from "./Option";

import database from '../apis/database';

import D1 from '../images/DALLE1.png';
import D33 from '../images/DALLE2.png';
import D35 from '../images/DALLE3.png';
import D36 from '../images/DALLE4.png';
import D20 from '../images/DALLE5.png';
import D37 from '../images/DALLE6.png';


const Page = ({pageid}) => {
    const [pageInfo, setPageInfo] = useState({})
    const [currPage, setCurrPage] = useState(0)
    const [imageSource, setImageSource] = useState('')

    const getPage = async(pageid) => {
        setCurrPage(pageid)
        var page = {}
        var options = []
        await database.get(`/read/${pageid}`)
        .then(res => {
            console.log(res.data)
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

        switch(pageid) {
            case 1:
                setImageSource(D1)
                break;
            case 33:
                setImageSource(D33)
                break;
            case 35:
                setImageSource(D35)
                break;
            case 36:
                setImageSource(D36)
                break;
            case 20:
                setImageSource(D20)
                break;
            case 37:
                setImageSource(D37)
                break;
            default:
                setImageSource('')
        }
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
            <div className="dalleImage">
                {imageSource ? <img src={imageSource} alt='the story' /> : <></>}
            </div>

        </div>
    )
}

export default Page