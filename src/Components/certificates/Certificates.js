import React from 'react'
import './Certificates.css';
import java from '../Images/java.png';
import DBMS from '../Images/DBMS.png';
import dsa from '../Images/DSA.png';
import webDev from '../Images/webDev.jpeg';
import rubicon from '../Images/Rubicon.jpeg';
import hackerRank from '../Images/hakerRank.png';

const Certificates = () => {
  return (
    <div id='certificates'>


  <div className='CertBox'>
    <div className='certHead'>
      <h3 style={{color:"green", padding:"40px", fontFamily:"monospace"}}>CERTIFICATIONS</h3>
    </div>
<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="3000">
      <img src={java} className="d-block" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src={dsa} className="d-block" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src={DBMS} className="d-block" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src={hackerRank} className="d-block" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src={webDev} className="d-block" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src={rubicon} className="d-block" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
      
    </div>
  )
}

export default Certificates
