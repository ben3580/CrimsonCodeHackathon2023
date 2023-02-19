import "./Landing.css"

import React from "react";
import {Link} from "react-router-dom"

import myImage from "../images/spheal.webp"
import trees from "../images/Trees.jpg"
import mountains from "../images/mountains.jpg"
import collab from "../images/collab.jpg"

const Landing = () => {
    return (
        <div className="content">
            <div className="row">
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={trees} className="d-block" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h2>Mission</h2>
                                <p>Welcome to CommuniTales, the ultimate platform for collaborative storytelling! CommuniTales allows you to unleash your creativity and contribute to a unique, crowd-sourced storyline, where you can branch off into your own path and create your own narrative. Whether you're a seasoned writer or a beginner, CommuniTales provides a space for anyone to get involved and contribute to the story. Join us in this exciting journey, where together we can create a world filled with magic, adventure, and wonder. So, what are you waiting for? Start writing, exploring, and sharing your tales with the world!</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={mountains} className="d-block" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h2>Choose your own path</h2>
                                <p>We believe that every reader has the power to shape the stories they read. That's why we offer you the ability to choose your own path and change the course of the story. With our interactive storytelling platform, you are in control, and the story evolves based on the choices you make. Imagine being able to explore a story from different angles, making decisions that impact the outcome of the plot, and discovering new paths and possibilities. That's the magic of interactive storytelling, and that's exactly what we offer.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={collab} className="d-block" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h2>Building a Narrative Together</h2>
                                <p> great stories are best created through collaboration. That's why we offer a unique platform that enables you to build a story with your friends and other like-minded individuals. With our collaborative storytelling feature, you can work together to craft a narrative that's truly one-of-a-kind. Imagine being able to brainstorm ideas, develop characters, and create plot twists alongside your friends and fellow storytellers. With our platform, you can seamlessly collaborate in real-time, no matter where you are in the world. Each of you can add your own unique touch to the story, building a rich and complex narrative that none of you could have created alone.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <Link to={"/Read"}>
                        <button className="btn btn-primary homeLinkButton" type="button">
                            Read
                        </button>
                    </Link>
                </div>
                <div className="col">
                    <Link to={"/Write/1"}>
                        <button className="btn btn-primary homeLinkButton" type="button">
                            Write
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Landing