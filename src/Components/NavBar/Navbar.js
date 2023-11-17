import React from 'react'
import "./Navbar.css";
import { BrowserRouter } from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
import Intro from '../About/Intro';
import Skills from '../Work/Skills';
import Contact from '../contactForm/ContactForm';
import Project1 from '../projectsCmpnt/Project1';
import Certificates from '../certificates/Certificates';
import Footer from '../FooterFile/Footer';


const Navbar = () => {

    
    const styleli = {
        marginLeft : "80px",    
      };

      
  return (

    <BrowserRouter>
       <div>

          <nav class="navbar navbar-expand-lg dark-body-tertiary cntClass" >
            <div class="container-fluid">
              <h4 style={{color:"white"}}>S Upendra Reddy</h4>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item" style={styleli}>
                    <Link to={'#intro'} className='navName'>About</Link>
                  </li>
                  <li class="nav-item" style={styleli}>
                    <Link to={'#skills'} className='navName'>Skills</Link>
                  </li>
                  <li class="nav-item" style={styleli}>
                    <Link to={'#certificates'} className='navName'>Certificates</Link>
                  </li>
                  <li class="nav-item" style={styleli}>
                    <Link to={'#projects'} className='navName'>Projects</Link>
                  </li>
                  <li class="nav-item" style={styleli}>
                    <Link to={'#contact'} className='navName'>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Intro/>
          <Skills/>
          <Certificates/>
          <Project1/>
          <Contact/>
          <Footer/>

      </div>
    </BrowserRouter>

     
  )
}

export default Navbar
