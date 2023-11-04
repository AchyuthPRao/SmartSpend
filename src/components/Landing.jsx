import React from 'react'
import "../App.css"
import Navbar from './Navbar'
import Img from '../images/aunty.png'
import bot from "../images/bot.png"

export default function Landing() {
  return (
    <>
        <Navbar />
        <div className="rect"></div>
        <div className="square">
            <img className="img" src={Img} alt="Aunty" />
        </div>
        <img className='bot' src={bot} alt=""  />
    </>
  )
}
