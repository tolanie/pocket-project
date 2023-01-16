import React from "react";
import "./Message.css";
import SheChat from "../../Components/sheChat";
import Ellipse from "../../img/Ellipse.png";
import pexels from "../../img/pexels.png"
import Vectortwo from "../../img/Vectortwo.svg";
import Vectorthree from "../../img/Vectorthree.svg";
import Vectorone from "../../img/Vectorone.svg";
import HeChat from "../../Components/heChat";
import SelectedUser from "./SelectedUser";

const Message = () => {
  return (
    <section className="message">
      <div className="m_main">
        <div className="m_body">
          <div className="m_head">
            <h2>
              Message <i class="fas fa-times"></i>
            </h2>
          </div>
          <div className="chats">
            <div className="c-1">
              <img src={Ellipse} alt="" />
            </div>
            <div className="c-name">
              <h3>Steven Buhari</h3>
              <p>Thank you! That wa.</p>
            </div>
          </div>
          <div className="chats">
            <div className="c-1">
              <img src={Ellipse} alt="" />
            </div>
            <div className="c-name">
              <h3>Steven Buhari</h3>
              <p>Thank you! That wa.</p>
            </div>
          </div>
          <div className="chats">
            <div className="c-1">
              <img src={Ellipse} alt="" />
            </div>
            <div className="c-name">
              <h3>Steven Buhari</h3>
              <p>Thank you! That wa.</p>
            </div>
          </div>
        </div>

        <div className="m-container">
          <div className="m-card">
            <SelectedUser />
            <div className="chat_parent">
              <SheChat />
              <HeChat />
              <HeChat />
              <SheChat />
              <HeChat />
              <HeChat />
            </div>

            <div className="type">
              <input placeholder="Type Your Message Here" />
              <img className="s-img" src={Vectorone} alt="" />
              <img className="a-img" src={Vectortwo} alt="" />
              <img className="c-img" src={Vectorthree} alt="" />
            </div>
          </div>

          <div className="l-container" style={{ width: "20vw" }}>
            <div className="l-card">
              <img  src={pexels} alt="" />

              <div className="l-text">
              <h2>Steven Buhari</h2>
              <i class="far fa-comment"></i>
              </div>
            </div>

            <div className="share">
              <h3>Shared Files</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
