import "./Navbar.css"
import { Link } from "react-router-dom";
import React from 'react'

function NavBar() {

    let hamburger_icon = document.getElementById("hamburger_icon");

    const fun1 = () => {
        let hamburger_links = document.getElementById("hamburger_links").style;
        hamburger_links.display = "block";
        hamburger_links.position = "absolute";
        hamburger_links.top = "0";
        hamburger_links.left = "90%"; //Because of 90vh of Height in css

        /* Copied from Geeks for Geeks */
        function disableScroll() {
            // Get the current page scroll position
            let scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;
            let scrollLeft =
                window.pageXOffset || document.documentElement.scrollLeft;

            // if any scroll is attempted,
            // set this to the previous value
            window.onscroll = function () {
                window.scrollTo(scrollLeft, scrollTop);
            };
        }
        disableScroll();
    }

    let cross_icon = document.getElementById("cross_icon");

    const fun2 = () => {
        let hamburger_links = document.getElementById("hamburger_links").style;
        hamburger_links.display = "none";

        /* Copied from Geek for Geeks */
        function enableScroll() {
            window.onscroll = function () { };
        }
        enableScroll()
    }

    return (
        <>
            <div class="nav">
                <div class="nav_logo">
                    <Link className="link" to="/Home">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-spotify" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z" />
                        </svg>&nbsp;Spotify
                    </Link>
                </div>
                <div class="hamburger" id="hamburger">
                    <div class="hamburger_icon" id="hamburger_icon" onClick={fun1}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </div>
                    <div id="hamburger_links">
                        <ul class="hamburger_links">
                            <li class="cross_icon" id="cross_icon" onClick={fun2}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                </svg>
                            </li>
                            <li>
                                <Link className="link" to="/Premium">Premium</Link>
                            </li>
                            <li>
                                <Link className="link" to="/Download">Download</Link>
                            </li>
                            <li>
                                <Link className="link" to="/Support">Support</Link>
                            </li>
                            <li>
                                <hr />
                            </li>
                            <li>
                                <Link className="link" to="/SignUp">Sign Up</Link>
                            </li>
                            <li>
                                <Link className="link" to="/Login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="nav_elements">
                    <ul>
                        <li>
                            <Link className="link" to="/Premium">Premium</Link>
                        </li>
                        <li>
                            <Link className="link" to="/Download">Download</Link>
                        </li>
                        <li>
                            <Link className="link" to="/Support">Support</Link>
                        </li>
                        <li>|</li>
                        <li>
                            <Link className="link" to="/SignUp">Sign Up</Link>
                        </li>
                        <li>
                            <Link className="link" to="/Login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}


export default NavBar