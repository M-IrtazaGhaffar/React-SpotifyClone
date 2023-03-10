import Navbar from "./MyComponents/Navbar";
import Home from "./MyComponents/Home";
import Premium from "./MyComponents/Premium";
import Download from "./MyComponents/Download";
import SignUp from "./MyComponents/SignUp";
import Login from "./MyComponents/Login";
import Support from "./MyComponents/Support";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from 'react'

function App() {

  /*

  let FromNavbar;

  switch (window.location.pathname) {
    case '/':
      FromNavbar = <Home />
      document.title = 'Spotify Clone | Home';
      break;

    case '/Premium':
        FromNavbar = <Premium />
        document.title = 'Spotify Clone | Premium';
      break;

    case '/Download':
      FromNavbar = <Download/>
      document.title = 'Spotify Clone | Download';
      break;

    case '/Support':
      FromNavbar = <Support />
      document.title = 'Spotify Clone | Support';
      break;

    case '/Login':
      FromNavbar = <Login />
      document.title = 'Spotify Clone | Login';
      break;

    case '/SignUp':
      FromNavbar = <SignUp />
      document.title = 'Spotify Clone | SignUp';
      break;
  }
  */

  return (
    <>
      { /* FromNavbar */ }
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home/>}/>
          <Route exact path="/Premium" element={<Premium/>}/>
          <Route exact path="/Support" element={<Support/>}/>
          <Route exact path="/Login" element={<Login/>}/>
          <Route exact path="/SignUp" element={<SignUp/>}/>
          <Route exact path="/Download" element={<Download/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App