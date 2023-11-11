import React from 'react';
import "../App.css";
import Navbar from './Navbar'

export default function About() {
  return (
    <>
    <Navbar />
    <h1 className="about boold mx-3" style={{padding: "20px"}}>About Us</h1>
        
  <div className="accordion mx-3 p-2" id="accordionExample">
  <div className="accordion-item ">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       What are we?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>We are a bunch of innovative students who eagerly want to learn and contribute something to the community. Hence presenting to you SmartSpend, a unified platform for expense tracking, automatic investments, peer-to-peer lending platform with an interactive UI.</strong>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        What do we do?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>We solve real-world problems by building on point projects.</strong>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        How do you reach us?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>You can contact us at: 
          <br />
          achyuthprao123@gmail.com
          <br />
          shenoy.saakshi910@gmail.com
          <br />
          shreyasnaik31@gmail.com
        </strong>
      </div>
    </div>
  </div>
</div>



    </>
  
  )
}
