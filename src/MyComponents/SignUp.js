import React from 'react'
import './SignUp.css'
import SpotifyNavbar from "./SpotifyNavbar";

function SignUp() {
  return (
    <>
      <SpotifyNavbar />
      
      <div className="signup_all">
        <div className="Signup_part1">
          <div className="center1">
            <div className="center2">
              <div className="Signup_part1_heading">
                <h1>
                  Sign up for free to start listening.
                </h1>
              </div>
              <div className="Signup_btns">
                <div className="center3">
                  <div className="btn1">
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg> &nbsp;
                      Sign up with Facebook
                    </button>
                  </div>
                  <div className="btn2">
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                      </svg> &nbsp;
                      Sign up with Google
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Signup_part2">
          <div className="Signup_divider">
            or
          </div>
        </div>

        <div className="SignUp_part3">
          <div className="center4">
            <h3 className="Signup_part3_heading">
              Sign up with your email address
            </h3>
            <div className="form">
              <form action="" method="post">
                <div className='label'>
                  <label htmlFor="email">
                    What's your email?
                  </label>
                  <input type="email" name='email' placeholder='Enter your email.' required />
                </div>
                <div className='label'>
                  <label htmlFor="c_email">
                    Confirm your email
                  </label>
                  <input type="email" name="c_email" id="" placeholder='Enter your email again.' required />
                </div>
                <div className='label'>
                  <label htmlFor="c_email">
                    Create a password
                  </label>
                  <input type="password" name="password" id="" placeholder='Create a password.' required />
                </div>
                <div className='label'>
                  <label htmlFor="username">
                    What should we call you?
                  </label>
                  <input type="text" name="username" id="" placeholder='Enter a profile name.' required />
                  <p>
                    This appears on your profile.
                  </p>
                </div>
                <div className='label'>
                  <p>
                    Whats's your date of birth?
                  </p>
                  <div className='DOB'>
                    <span className='label month'>
                      <label htmlFor="month">
                        Month
                      </label>
                      <select name="month" id="" className='label' required>
                        <option value="" selected disabled>Month</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="Octuber">Octuber</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                      </select>
                    </span>
                    <span className='label day'>
                      <label htmlFor="day">
                        Day
                      </label>
                      <input type="number" name="day" id="" placeholder='DD' required maxLength={2} max={31} />
                    </span>
                    <span className='label year'>
                      <label htmlFor="year">
                        Year
                      </label>
                      <input type="number" name="year" id="" required max={2022} maxLength={4} min={1950} minLength={4} placeholder="YYYY" />
                    </span>
                  </div>
                </div>
                <div className='label'>
                  <label htmlFor="gender">
                    What is your gender?
                  </label>
                  <div className="gender">
                    <input type="radio" name="gender" value="male" id="" />
                    <p>
                      Male
                    </p>
                    <input type="radio" name="gender" value="female" id="" />
                    <p>
                      Female
                    </p>
                    <input type="radio" name="gender" value="custom" id="" />
                    <p>
                      Non-binary
                    </p>
                  </div>
                </div>
                <div className='label confirm'>
                  <input type="checkbox" name="checkbox" id="" required />
                  <p>
                    Share my registration data with spotify's content providers for marketing purposes.
                  </p>
                </div>
                <div className="signup_btn">
                  <div>
                    <p>
                      By clicking on sign-up, you agree to Spotify's <a href="https://www.spotify.com/us/legal/end-user-agreement/#3-your-use-of-the-spotify-service">Terms and Conditions of Use</a>.
                    </p>
                    <p>
                      To learn more about how Spotify collects, uses, shares and protects your personal data, please see <a href="https://www.spotify.com/us/legal/privacy-policy/">Spotify's Privacy Policy</a> .
                    </p>
                    <button type="submit">Sign Up</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="towards_login label">
          <div>
            Have an account? <a href="/Login">Login</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp