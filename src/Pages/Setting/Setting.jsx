import React from "react";
import "./Setting.css";

import biglady from "../../img/biglady.png";

const Setting = () => {
  return (
    <section className="setting">
      <div className="setting-card">
        <h1>Settings</h1>
        <div className="b-setting">
          <div className="p-setting">
            <div className="update">
              <i class="  fas fa-user-circle"></i>
              <h2>Update Profile</h2>
            </div>
            <i class=" u-icon fas fa-chevron-right"></i>
          </div>

          <div className="p-setting">
            <div className="update">
              <i class="far fa-bell"></i>
              <h2>Notification Setting</h2>
            </div>
            <i class=" u-icon fas fa-chevron-right"></i>
          </div>

          <div className="p-setting">
            <div className="update">
              <i class="fas fa-headset"></i>
              <h2>Support</h2>
            </div>
            <i class=" u-icon fas fa-chevron-right"></i>
          </div>

          <div className="p-setting">
            <div className="update">
              <i class="far fa-question-circle"></i>
              <h2>FAQS</h2>
            </div>
            <i class=" u-icon fas fa-chevron-right"></i>
          </div>
        </div>

        <div className="acc-info">
          <div className="acc-img">
            <img src={biglady} alt="" />
            <i class=" chge fas fa-plus-circle"></i>
          </div>
          

          <div className="info">
            <h2>Account Information</h2>
            <div className="b-name">
              <p>Name: </p>
              <span>Bola Tinubu</span>
            </div>
            <div className="b-name">
              <p>Email: </p>
              <span>Bolatinubu@gmail.com</span>
            </div>
            <div className="b-name">
              <p>Phone: </p>
              <span>070 2222 2222</span>
            </div>
            <div className="b-name">
              <p>Address: </p>
              <span>
                Opposite Sweet Sensation, Border Bus Stop, Isheri, Road, Lagos
                State
              </span>
            </div>
            <div className="edit-btn">
              <button className="btn">Edit Profile</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Setting;
