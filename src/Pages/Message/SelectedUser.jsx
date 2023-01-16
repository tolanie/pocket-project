import React from 'react'
import "./Message.css"
import Ellipse from "../../img/Ellipse.png"
import Vector from "../../img/Vector.png"
import active from "../../img/active.png"

export default function SelectedUser() {
  return (
    <div className="m_join">
    <div className="v_class">
      <img className='v_img' src={Vector} alt="" />
    </div>
    <div className="pn">
      <div className="m_pic">
        <img className='e_img' src={Ellipse} alt="" />
      </div>
      <div className="m_name">
        <h3>Stephen Buhari</h3>
      </div>
    </div>
    <div className="a_class">
      <img className='a_img' src={active} alt="" />
    </div>
  </div>
  )
}
