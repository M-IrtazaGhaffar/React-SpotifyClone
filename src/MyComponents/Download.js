import React from 'react'
import './Download.css'
import Download_icon from "../Images/icon_in-progress.png";
import amazon from "../Images/amazon.png";
import apple from "../Images/apple.png";
import ms from "../Images/ms.png";
import google from "../Images/google.png";
import devices from "../Images/devices.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Download() {
    return (
        <>
        <Navbar />
            <div className='part1'>
                <div className='part1_center'>
                    <div className='part1-1_image'>
                        <img src={Download_icon} alt="icon" />
                    </div>
                    <div className='part1-2'>
                        <h1 className='part1-2_heading'>
                            Download Spotify
                        </h1>
                        <p className='part1-2_p'>
                            Play millions of songs and podcasts on your device.
                        </p>
                        <button className='btn'>
                            Download
                        </button>
                    </div>
                </div>
            </div>

            <div className='part2'>
                <div className="part2_center">
                    <h1 className='part2-1_heading'>
                        Bring your music to mobile and tablet, too.
                    </h1>
                    <p className='part2-2_p'>
                        Listening on your phone or tablet is free, easy, and fun.
                    </p>
                    <div className='part2-3_images'>
                        <div className="images1">
                            <a href="">
                                <img src={apple} alt="" />
                            </a>
                        </div>
                        <div className="images2">
                            <a href="">
                                <img src={google} alt="" />
                            </a>
                        </div>
                        <div className="images3">
                            <a href="">
                                <img src={ms} alt="" />
                            </a>
                        </div>
                        <div className="images4">
                            <a href="">
                                <img src={amazon} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="part3">
                <div className="part3_center">
                    <div className="part3-1_images">
                        <img src={devices} alt=""/>
                    </div>
                    <h1 className="part3-2_heading">
                        One account, listen everywhere.
                    </h1>
                    <ul className="part3-3_ul">
                        <li>
                            mobile
                        </li>
                        <li>
                            computer
                        </li>
                        <li>
                            tablet
                        </li>
                        <li>
                            car
                        </li>
                        <li>
                            playstation
                        </li>
                        <li>
                            xbox
                        </li>
                        <li>
                            tv
                        </li>
                        <li>
                            speaker
                        </li>
                        <li>
                            web player
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Download