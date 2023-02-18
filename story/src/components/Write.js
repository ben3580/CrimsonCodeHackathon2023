import React, {useState} from "react";
import { useNavigate } from "react-router";

import Page from "./Page";

const Write = () => {
    const navigate = useNavigate();

    const [branchText, setBranchText] = useState('')
    const [pageText, setPageText] = useState('')

    const addPage = async(e) => {
        e.preventDefault();

        console.log("ADD INFO TO DATABASE")

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