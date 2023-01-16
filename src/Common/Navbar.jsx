import React from 'react'

import { VscExtensions, VscGear, VscComment } from "react-icons/vsc";
import { SiLoom } from "react-icons/si";
import { Link } from "react-router-dom"

import "./Navbar.css"
import Home from '../Pages/Home/Home';

export const Navbar = () => {
  return (
    <nav>
        <header className="header">
        <div className="container">
            <div className="navlink">
                <ul>
                    
                    <li>
                        <Link to="/" ><VscExtensions  /> Home </Link>
                    </li>
                    <li>
                        <Link to="/message"> <VscComment /> Message</Link>
                    </li>
                    <li>
                        <Link to="/setting"> <VscGear /> Setting</Link>
                    </li>
                    <li className='d_take'>
                        <Link to="/logout"><SiLoom/> Logout</Link>
                    </li>
                </ul>
            </div>
        </div>
        </header>
    </nav>
  )
}
