import { Fragment } from "react";
import Navbar from "../components/navbar";
import "../css/home.css"
import { FaGoogle, FaInstagram, FaFacebookSquare, FaYoutube } from "react-icons/fa";
import Footer from "../components/footer";
import { Player } from 'video-react';
import '../css/video-react.css';
import { Link } from "react-router-dom";
const video_url = require("../asset/video.mp4")

function Home() {
    const page = { page: "homepage" }
    return (
        <Fragment>
            <Navbar {...page} />
            <div className="container">
                <div className="icons">
                    <FaGoogle />
                    <FaFacebookSquare />
                    <FaInstagram />
                    <FaYoutube />
                </div>
                <div className="main">
                    <div className="body">
                        <h1>Moraan</h1>
                        <p>
                            Customer satisfaction is one of the few levers brands can still pull to differentiate themselves in crowded and
                            competitive marketplaces. Today, the brand with the best customer experience usually wins.
                        </p>
                        <Link to={"/admin"}><button> GET STARTED </button></Link>
                    </div>
                    <div className="video">
                        <Player
                        fluid ={false}
                        height = {320}
                        startTime ={70}
                        >
                            <source src={video_url} />
                        </Player>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default Home;