import React from 'react'
import "../App.css"
import Navbar from './Navbar'
import Img from '../images/aunty.png'
import bot from "../images/bot.png"
// import { chartRef } from '../pages/expense-tracker'
import MutualFundsDashboard from './MutualFunds'
import { ExpenseTracker } from '../pages/expense-tracker'
import { Auth } from '../pages/auth'
import Graph from './Graph'


export default function Landing() {
  return (
    <>
      <Navbar />
      <div className="parent rect">
       <div className="">
        <Graph />
        </div>
        <div className="txt ">
          Track Your Expenses on the go with SmartSpend!
        </div>
      </div>
      <div className="parent">
      <div className="square">
         <div className="bottom-right">
          <div className="mutual-funds-scroll">
            <MutualFundsDashboard /> 
          </div>
          
        </div>
      </div>
      
         
          </div>
      <img className='bot' src={bot} alt="" /> 
      {/* <canvas ref={chartRef}></canvas> */}
      
      {/* <Auth />  */}
    {/* <ExpenseTracker /> */}

    </>
  )
}
