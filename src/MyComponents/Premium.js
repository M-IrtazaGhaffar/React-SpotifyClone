import "./Premium.css"
import Navbar from "./Navbar";
import Footer from "./Footer";

import React from 'react'

function Premium() {

  return (
    <>
    <Navbar />
        <div class="header">
            <div class="header_bold">
                Get Premium free for 1 month
            </div>
            <div class="header_italic">
                Just Rs 299.00/month after. Cancel anytime.
            </div>
            <div class="buttons">
                <button class="btn_1">
                    get started
            </button>
                <button class="btn_2">
                    view plans
            </button>
            </div>
            <p>
                <a href="">Terms and conditions apply.</a> 1 month free not available for users who have already tried Premium.
            </p>
        </div>


        
        <div class="content">
            <div class="content_heading">
                Why go Premium?
            </div>
            <div class="content_cards">
                <div class="content_card1">
                    <div class="icons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-download-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.5a.5.5 0 0 1 1 0V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.354 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V11h-1v3.293l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z" />
                        </svg>
                    </div>
                    <div class="content_cards_heading">Download music.</div> Listen anywhere.
                </div>
                <div class="content_card2">
                    <div class="icons"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-badge-ad-fill" viewBox="0 0 16 16">
                            <path
                                d="M11.35 8.337c0-.699-.42-1.138-1.001-1.138-.584 0-.954.444-.954 1.239v.453c0 .8.374 1.248.972 1.248.588 0 .984-.44.984-1.2v-.602zm-5.413.237-.734-2.426H5.15l-.734 2.426h1.52z" />
                            <path
                                d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm6.209 6.32c0-1.28.694-2.044 1.753-2.044.655 0 1.156.294 1.336.769h.053v-2.36h1.16V11h-1.138v-.747h-.057c-.145.474-.69.804-1.367.804-1.055 0-1.74-.764-1.74-2.043v-.695zm-4.04 1.138L3.7 11H2.5l2.013-5.999H5.9L7.905 11H6.644l-.47-1.542H4.17z" />
                        </svg></div>
                    <div class="content_cards_heading">Ad-free music listening.</div> Enjoy uninterrupted music.
                </div>
                <div class="content_card3">
                    <div class="icons"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note-list" viewBox="0 0 16 16">
                            <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                            <path fill-rule="evenodd" d="M12 3v10h-1V3h1z" />
                            <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z" />
                            <path fill-rule="evenodd"
                                d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />
                        </svg></div>
                    <div class="content_cards_heading">Play any song.</div> Even on mobile.
                </div>
                <div class="content_card4">
                    <div class="icons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-forward-circle-fill" viewBox="0 0 16 16">
                            <path
                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.79 5.093A.5.5 0 0 0 4 5.5v5a.5.5 0 0 0 .79.407L7.5 8.972V10.5a.5.5 0 0 0 .79.407L11 8.972V10.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-1 0v1.528L8.29 5.093a.5.5 0 0 0-.79.407v1.528L4.79 5.093z" />
                        </svg>
                    </div>
                    <div class="content_cards_heading">Unlimited skips.</div> Just hit next.
                </div>
            </div>
        </div>



        <div class="cards">
            <div class="cards_heading">
                Pick your Premium
            </div>
            <p class="cards_heading_para">Listen without limits on your phone, speaker, and other devices.</p>
            <div class="cards_all_css">
                <div class="cards_all">
                    <div class="card1">
                        <div class="card_info">
                            <div class="card_heading">Mini</div>
                            <p>From Rs 14.00/day 1 account on mobile only</p>
                        </div>
                        <ul>
                            <li>
                                <div class="tick_icon">
                                    <svg role="img " focusable="false " height="24 " width="24 " viewBox="0 0 24 24 " aria-label=" " class="Svg-ytk21e-0 fJEWJR ">
                                    <polyline points="3.32 12.86 8.9 19.4 20.99 5.26 " fill="none " stroke="#181818 "></polyline>
                                </svg>
                                </div>
                                <div>Ad-free music listening on mobile</div>

                            </li>
                            <li>
                                <div class="tick_icon">
                                    <svg role="img " focusable="false " height="24 " width="24 " viewBox="0 0 24 24 " aria-label=" " class="Svg-ytk21e-0 fJEWJR ">
                                    <polyline points="3.32 12.86 8.9 19.4 20.99 5.26 " fill="none " stroke="#181818 "></polyline>
                                </svg>
                                </div>
                                <div>Group Session</div>

                            </li>
                            <li>
                                <div class="tick_icon">
                                    <svg role="img " focusable="false " height="24 " width="24 " viewBox="0 0 24 24 " aria-label=" " class="Svg-ytk21e-0 fJEWJR ">
                                    <polyline points="3.32 12.86 8.9 19.4 20.99 5.26 " fill="none " stroke="#181818 "></polyline>
                                </svg>
                                </div>
                                <div>Download 30 songs on 1 mobile device</div>
                            </li>
                        </ul>
                        <button>get started</button>
                        <p class="t_c ">
                            <a href="">Terms and conditions apply.</a>
                        </p>
                    </div>
                    <div class="card2 ">
                        <div class="card_info ">
                            <div class="card_heading ">Individual</div>
                            <p>Rs 299.00/month after offer period</p>
                            <p>1 account</p>
                        </div>
                        <ul>
                            <li>
                                <div class="tick_icon">
                                    <svg role="img " focusable="false " height="24 " width="24 " viewBox="0 0 24 24 " aria-label=" " class="Svg-ytk21e-0 fJEWJR ">
                                    <polyline points="3.32 12.86 8.9 19.4 20.99 5.26 " fill="none " stroke="#181818 "></polyline>
                                </svg>
                                </div>
                                <div>Ad-free music listening</div>
                            </li>
                            <li>
                                <div class="tick_icon">
                                    <svg role="img " focusable="false " height="24 " width="24 " viewBox="0 0 24 24 " aria-label=" " class="Svg-ytk21e-0 fJEWJR ">
                                    <polyline points="3.32 12.86 8.9 19.4 20.99 5.26 " fill="none " stroke="#181818 "></polyline>
                                </svg>
                                </div>
                                <div>Play anywhere - even offline</div>
                            </li>
                            <li>
                                <div class="tick_icon">
                                    <svg role="img " focusable="false " height="24 " width="24 " viewBox="0 0 24 24 " aria-label=" " class="Svg-ytk21e-0 fJEWJR ">
                                    <polyline points="3.32 12.86 8.9 19.4 20.99 5.26 " fill="none " stroke="#181818 "></polyline>
                                </svg>
                                </div>
                                <div>On-demand playback</div>
                            </li>
                        </ul>
                        <button>get started</button>
                        <p class="t_c ">
                            <a href="">Terms and conditions apply.</a> 1 month free not available for users who have already tried Premium</p>
                    </div>
                    <div class="card3 ">
                        <div class="card_info ">
                            <div class="card_heading ">Duo</div>
                            <p>Rs 390.00/month after offer period</p>
                            <p>2 accounts</p>
                        </div>
                        <ul>
                            <li>
                                <div class="tick_icon">
                                    <svg role="img " focusable="false " height="24 " width="24 " viewBox="0 0 24 24 " aria-label=" " class="Svg-ytk21e-0 fJEWJR ">
                                    <polyline points="3.32 12.86 8.9 19.4 20.99 5.26 " fill="none " stroke="#181818 "></polyline>
                                </svg>
                                </div>
                                <div>2 Premium accounts for a couple under one roof</div>
                            </li>
                            <li>
                                <div class="tick_icon">
                                    <svg role="img " focusable="false " height="24 " width="24 " viewBox="0 0 24 24 " aria-label=" " class="Svg-ytk21e-0 fJEWJR ">
                                <polyline points="3.32 12.86 8.9 19.4 20.99 5.26 " fill="none " stroke="#181818 "></polyline></svg>
                                </div>
                                <div>Ad-free music listening, play offline, on-demand playback</div>
                            </li>
                        </ul>
                        <button>get started</button>
                        <p class="t_c ">
                            <a href="">Terms and conditions apply.</a> 1 month free not available for users who have already tried Premium</p>
                    </div>
                    <div class="card4 ">
                        <div class="card_info ">
                            <div class="card_heading ">Family</div>
                            <p>Rs 479.00/month after offer period</p>
                            <p>6 accounts</p>
                        </div>
                        <ul>
                            <li>
                                <div class="tick_icon">
                                    <svg role="img " focusable="false " height="24 " width="24 " viewBox="0 0 24 24 " aria-label=" " class="Svg-ytk21e-0 fJEWJR ">
                                    <polyline points="3.32 12.86 8.9 19.4 20.99 5.26 " fill="none " stroke="#181818 "></polyline>
                                </svg>
                                </div>
                                <div>6 Premium accounts for family members living under one roof</div>
                            </li>
                            <li>
                                <div class="tick_icon">
                                    <svg role="img " focusable="false " height="24 " width="24 " viewBox="0 0 24 24 " aria-label=" " class="Svg-ytk21e-0 fJEWJR ">
                                    <polyline points="3.32 12.86 8.9 19.4 20.99 5.26 " fill="none " stroke="#181818 "></polyline>
                                </svg>
                                </div>
                                <div>Block explicit music</div>
                            </li>
                            <li>
                                <div class="tick_icon">
                                    <svg role="img " focusable="false " height="24 " width="24 " viewBox="0 0 24 24 " aria-label=" " class="Svg-ytk21e-0 fJEWJR ">
                                    <polyline points="3.32 12.86 8.9 19.4 20.99 5.26 " fill="none " stroke="#181818 "></polyline>
                                </svg>
                                </div>
                                <div>Ad-free music listening, play offline, on-demand playback</div>
                            </li>
                        </ul>
                        <button>get started</button>
                        <p class="t_c ">
                            <a href="">Terms and conditions apply. </a> 1 month free not available for users who have already tried Premium</p>
                    </div>
                </div>
            </div>
            <div class="student ">
                <div class="student_info">
                    <div class="for_student ">
                        Student gets Premium free for 1 month
                    </div>
                    <button>
                        learn more
                </button>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Premium