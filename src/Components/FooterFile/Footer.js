import React from 'react';
import './Footer.css';
import Github from './socalMediaIcons/Github.png';
import linkedin from './socalMediaIcons/linkedin.png';
import Leetcode from './socalMediaIcons/Leetcode.png';
import HackerRank from './socalMediaIcons/HackerRank.png';

const Footer = () => {
  return (
    <div className='footerBox'>
      <footer className="text-center text-white" style={{ }}>
        <div className="iconsClass">  
            <a href='https://github.com/UpendraReddy123' target='_blank' rel="noopener noreferrer">
              <img src={Github} alt='github' className='sclIcn'/>
            </a> 
            <a href='https://www.linkedin.com/in/upendra-reddy-s-94b94021a' target='_blank' rel="noopener noreferrer">
              <img src={linkedin} alt='linkedin' className='sclIcn'/>
            </a>
            <a href='https://www.hackerrank.com/supendrareddy345' target='_blank' rel="noopener noreferrer">
              <img src={HackerRank} alt='HackerRank' className='sclIcn'/>            
            </a>  
            <a href='https://leetcode.com/upendraaaaa/' target='_blank' rel="noopener noreferrer">
              <img src={Leetcode} alt='Leetcode' className='sclIcn'/>            
            </a>       
           
         
         
        </div>

        <div className="text-center text-dark p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2023 Copyright: Upendra Reddy S
          <p>contact : +91 8688158619</p>
        </div>

      </footer>
    </div>
  );
};

export default Footer;
