import React from 'react'
import "./Skills.css";
import html from "./html.png";
import css from "./css.png";
import bootstrap from "./bootstrap.jpg";
import js from "./js.png"
import react from "./react.png";
import java from "./java.png";
// import nodejs from "./nodejs.png";
import sql from "./sql.png";
// import mongodb from "./mongodb.png";
import dsa from "./dsa.jpg";



const Skills = () => {
  return (
    <div id='skills'>

      
      <div className='cd1'>
            <h1>What I Learn't</h1>
            <p>I love learning new tech stacks in the field of web-dev. And aspire to explore all the tech stack which intrigues me.</p>
      </div>
      <div className='Box1'>
           
                <div className='bx1'>
                  <div>
                      <img src={html} alt='javaImage' className='ImgSkills'/>
                      <img src={css} alt='javaImage' className='ImgSkills'/>
                      <img src={bootstrap} alt='javaImage' className='ImgSkills'/>
                      <img src={js} alt='javaImage' className='ImgSkills'/>
                  </div>
                  <div>
                      <img src={react} alt='javaImage' className='ImgSkills'/>
                      {/* <img src={nodejs} alt='javaImage' className='ImgSkills'/> */}
                      <img src={sql} alt='javaImage' className='ImgSkills'/>
                      {/* <img src={mongodb} alt='javaImage' className='ImgSkills'/> */}
                      <img src={java} alt='javaImage' className='ImgSkills'/>
                      <img src={dsa} alt='javaImage' className='ImgSkills'/>
                  </div>
                </div>

                
           
        </div>
      
    </div>
  )
}

export default Skills
