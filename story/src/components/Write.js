import React, {useState} from "react";
import { useNavigate } from "react-router";

import Page from "./Page";

import database from '../apis/database';

const Write = (props) => {
    const navigate = useNavigate();

    const [branchText, setBranchText] = useState('')
    const [pageText, setPageText] = useState('')

    const addPage = async(e) => {
        e.preventDefault();
        var newid = -1
        var par_id = props.pageid
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

    return (
        <div>
            <h2>This is the Write Page!</h2>
            <form onSubmit={addPage}>
                <label>Branch:</label>
                <textarea value={branchText} onChange={(e) => setBranchText(e.target.value)} />
                <br />

                <label>Please Continue the story:</label>
                <textarea value={pageText} onChange={(e) => setPageText(e.target.value)} />
                <br />




                <button type="submit">Add Page</button>
            </form>
        </div>
    )
}

export default Write