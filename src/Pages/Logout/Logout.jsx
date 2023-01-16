import React from 'react'
import "./Logout.css"

import pocket from "../../img/pocket.png"

const Logout = () => {
  return (
    <>
  <section className="logout">
    <div className="sign-in">
    <h1>Sign In</h1>
    <p>To Access Your Dashboard</p>

    <form>
      <div className="group">
      <label >Email Address</label>
      <input placeholder='input email address'/>
      </div>
      <div className="group">
      <label >Password</label>
      <input placeholder='enter password'/>
      <a className='psw' href="">Forgot Password?</a>
      </div>

    </form>
    <button className='log-btn'>
      Log In
    </button>
    <p>Dont have an account yet, <a className='diff'>Sign Up</a></p>
    </div>

    <div className="logot-img">
      <img src={pocket} alt="" />
    </div>
  </section>
  
    </>
  )
}

export default Logout