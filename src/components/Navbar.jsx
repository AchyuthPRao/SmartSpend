import React from 'react'
import '../App.css';

import { Link } from 'react-router-dom';

export default function Navbar() {
    const inline = {
        background:'linear-gradient(180deg, #085643 0%, #094153 76.1%)',
        height: 'max',
      };
  return (
    <>
       <nav class="navbar navbar-expand-lg bg-body-tertiary " style={inline}>
  <div class="container-fluid " >
  <Link to='/' style={{textDecoration:'none'}}>
    <a class="navbar-brand text-white  mx-3" >SmartSpend</a>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to="/" style={{textDecoration:'none'}}>
          <a class="nav-link active text-white" aria-current="page">Home</a>
          </Link>
        </li>
        <li class="nav-item">
        <Link to="/about" style={{textDecoration:'none'}}>
          <a class="nav-link active text-white" aria-current="page">About</a>
          </Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Our Features
          </a>
          <ul class="dropdown-menu">
            <Link to='/expense' style={{textDecoration:'none'}}><li><a class="dropdown-item" href="#">Expense Tracker</a></li></Link>
            <Link to='/p2p' style={{textDecoration:'none'}}><li><a class="dropdown-item" href="#">P2P Lending</a></li></Link>
            <li><hr class="dropdown-divider"/></li>
            <Link to='/smartinv' style={{textDecoration:'none'}}><li><a class="dropdown-item" href="#">Smart Invest</a></li></Link>
          </ul>
        </li>
      </ul>
      <div className="profile">
      <Link to='/profile'>
        <i class="bi bi-person-circle p-4"  style={{ fontSize: '2rem' ,color: 'white' }}></i>
        </Link>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}
