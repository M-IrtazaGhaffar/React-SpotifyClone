import React from 'react'
import './Login.css';
import SpotifyNavbar from "./SpotifyNavbar";

function Login() {
  return (
    <>
      <SpotifyNavbar />

      <div className="login_all">
        <div className="login_center">
          <div className="login_email">
            <label htmlFor="email" className='login_label'>
              Email address or username
            </label>
            <input type="email" name="email" id="" required placeholder='Email address or username.'/>
          </div>
          <div className="login_pass">
            <label htmlFor="password" className='login_label'>
              Password
            </label>
            <input type="password" name="password" id="" required placeholder='Password.'/>
          </div>
          <div className="login_btn">
            <div className="login_check">
              <input type="checkbox" name="check" className='login_check_icon' id="" />
              <p>
                Remember me
              </p>
            </div>
            <button>
              LOG IN
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login