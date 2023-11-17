import React from 'react'
import "./Intro.css";
import git from "./git.png";
import linkedin from "./linkedin.png";
import hckr from "./hckr.png";
import resume from "./S Upendra Reddy_Resume.pdf";
import Anime from "../Images/Anime.gif";


const Intro = () => {
  return (
    <div id='intro'>

       <div className='Box'>
  <div className='about'>
    <h1 className='name'>Hii all I'm Upendra Reddy <i className='hi'>👋</i> </h1>
    <p className='abt1'>
      I'm a passionate learner in the field of web-development, currently having
      fun building web-apps with ReactJS / Javascript
      and some other cool libraries and frameworks.
      I'm also intrigued by data structures and algorithms.
    </p>   

     <div className='socalMedia'>
      <a href='https://github.com/UpendraReddy123' target='_blank' rel="noreferrer">
         <img src={git} alt="github" className='sclIcons'/>
      </a>
      <a href='https://www.linkedin.com/in/upendra-reddy-s-94b94021a' target='_blank' rel="noreferrer">
         <img src={linkedin} alt="linkedin" className='sclIcons'/>
      </a>
      <a href='https://www.hackerrank.com/supendrareddy345' rel="noreferrer" target='_blank'>
         <img src={hckr} alt="hackerRank" className='sclIcons'/>
      </a>
    </div>

    <button className='resume'>
    <a href={resume} target="_blank" rel="noreferrer" className='resumeAnr'>Resume</a>
    </button> 
   
    
  </div>
  
  <div className='animation'>
    <img src={Anime} alt="Anime" className='anime'/> 
  </div>
</div>

</div>
  )
}

export default Intro
