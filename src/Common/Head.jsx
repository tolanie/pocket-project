import React from 'react'
import logo from "../img/Logo.png"
import ellipse from "../img/Ellipse.png"

import "./Head.css"

const Head = () => {
    
  return (
    <>
    <section className="head" id="myheader">
        <div className="container">
            <div className="row">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="add">
                <div className="profile">
                <i class="far fa-bell"></i>
                </div>
                <div className="p-pic">
                    <img src={ellipse} alt="" />
                    <div className="nam">
                        <h4>Hello Steven</h4>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Head