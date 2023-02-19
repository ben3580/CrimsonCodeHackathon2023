import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import "./Write.css"

import { useParams } from "react-router";

import database from '../apis/database';

const Write = (props) => {
    const navigate = useNavigate();
    const { pageid } = useParams();

    const [branchText, setBranchText] = useState('')
    const [pageText, setPageText] = useState('')
    const [previousText, setPreviousText] = useState('')

    const addPage = async(e) => {
        e.preventDefault();
        var newid = -1
        var par_id = pageid
        var parent = {}

        await database.post(`/write`,
            {parentid: par_id,
            email: "Zayn",
            promptText: branchText,
            text: pageText})
        .then(res => {
            newid = res.data[0].id
        })

        await database.get(`/read/${par_id}`)
        .then(res => {
            parent = res.data[0]
        })

        if (parent.option1id === -1) {
            await database.get(`/update/${par_id}/1/${newid}`)
        } else {
            if (parent.option2id === -1) {
                await database.get(`/update/${par_id}/2/${newid}`)
            } else {
                await database.get(`/update/${par_id}/3/${newid}`)
            }
        }

        navigate('/')
    }

    const loadWrite = async() => {
        if (pageid === "0") {
            console.log("REGENERATING")
            await database.get('/random').then(
                res => {
                    navigate(`/write/${res.data.id}`)
                    window.location.reload();
                }
            )
        } else {
            getPreviousText(pageid)
        }
    }

    useEffect(() => {
        loadWrite()
    }, []);

    const getPreviousText = async() => {
        await database.get(`/read/${pageid}`)
        .then(res => {
            setPreviousText(res.data[0].text)
        })
    }

    const { logout,  isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div className = "Form">
                <h2 className = "write-page__title">Welcome to the write!</h2>
                <p>{previousText}</p>
                <form onSubmit={addPage}>
                    <h3 className = "write-page__branch">Branch:</h3>
                    <textarea value={branchText} onChange={(e) => setBranchText(e.target.value)} />
                    <br />

                    <h3 className = "write-page__continue">Please Continue the story</h3>
                    <textarea className = "continueStory" value={pageText} onChange={(e) => setPageText(e.target.value)} />
                    <br />
                    <button className = "button" type="submit">Add Page</button>
                </form>
            </div>
        )
    )
}

export default Write