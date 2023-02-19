import React, {useState} from "react";
import { useNavigate } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import "./Write.css"


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
    const { logout,  isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div className = "Form">
              <h2 className = "write-page__title">Welcome to the write!</h2>
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