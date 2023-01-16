import React from 'react'
import flatline from "../../img/flatline.png"
import { VscArrowUp } from "react-icons/vsc";
import { VscArrowDown } from "react-icons/vsc";
import { RxRocket } from "react-icons/rx";
import { CgNotes } from "react-icons/cg";
import { GiClawHammer } from "react-icons/gi";
import lined from "../../img/lined.png"
import linel from "../../img/linel.png"
import Frame from "../../img/Frame.png"

import "./Home.css"

const Home = () => {
  return (
    <section className='homepage'>
      <div className="home">
      <div className="container">
        <div className="d_flex">
        <div className="f_mssg">
          <div className="f_img">
            <img src={flatline} alt="" />
          </div>
          <div className="f_text">
            <h3>Welcome to Pocketlawyers</h3>
            <p>Your services and meetings are showed by the buttons below .</p>
          </div>
        </div>
        </div>

      <div className="chart">
        
        <div className="left">
          <div className="d_head">
        <h3>Services</h3>
          </div>
      <div className="d_left">
        <div className="d_text">
        <h3>10</h3>
        <p> <VscArrowUp marginTop="10px"/> 12% vs last month</p>
        </div>
        <div className="d_img">
        <img src={lined} />
        </div>
      </div>
        </div>

        <div className="right">
          <div className="r_head">
        <h3>Meetings</h3>
          </div>
      <div className="d_right">
        <div className="r_text">
        <h3>5</h3>
        <p> <VscArrowDown marginTop="10px"/> 2% vs last month</p>
        </div>
        <div className="r_img">
        <img src={linel} />
        </div>
      </div>
        </div>
      </div>

        <div className="retail">
          <h2>Retail Solutions</h2>
          <div className="boxes">
            <div className="box-1 box">
              <div className="icon">
            <RxRocket/>
              </div>
              <h3>Start A Company</h3>
              <p>Registering A Business Entity Is The First Step To Turning Your Idea Into Actual Business,
                Let's Help you Start An Actual This Journey!
              </p>
            </div>

            <div className="box-2 box">
              <div className="icon">
            <CgNotes/>
              </div>
              <h3>Contaract & Letter Drafting </h3>
              <p>Focus On The High Impact Tasks Could Make 5x Successful in Business.
                 You Shouldn't Stress About Drafting, Let's Handle This!
              </p>
            </div>

            <div className="box-3 box">
              <div className="icon">
            <GiClawHammer/>
              </div>
              <h3> Legal Advisory </h3>
              <p>Seeking Advise And Guidiance Early Would Put You In A Better Position To manage 
                And Scale Your Business The Right Way. Let's Help Take Away The Future Headaches!
              </p>
            </div>

            <div className="box-4 box">
              <div className="icon">
              <CgNotes/>
              </div>
              <h3> Contract And Letter Drafting </h3>
              <p>Focusing On The High Impact Task Could Make 5x Successful In Business.
                You Shouldn't Stress About Drafting, Let's Handle This!
              </p>
            </div>
          </div>
        </div>


      </div>
        <div className="service">
          <img src={Frame} alt="" />
        </div>
        {/* <div className="service">
          <h3>Service Request</h3>
          <p>Connect With Your Preferred lawyer </p>
          <div className="other">
            <div className="pen">
              <div className="">
                <span>0</span> <span>Pending</span>
              </div>
            </div>

            <div className="con">
              <div className="">
                 <span>Connected</span>
              </div>
            </div>
          </div>
          <div className="search">
            < GoSearch />
            <h3>No request found</h3>
            <p>There is no request found. please create services</p>
          </div>
        </div> */}
      </div>
      </section>
  )
}

export default Home