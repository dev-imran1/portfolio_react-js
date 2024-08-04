import React from 'react'
import avatar from '../../../src/assets/avatar.png';
import profileImage from '../../assets/logo.svg';
import './about.css'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        {/* <img src={avatar} alt="theme_pattern" /> */}
      </div>
      <div className="about-sections">
        <div className="about-left">
            {/* <img src={avatar} alt="profile image" /> */}
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Limit your skills section to 6-10 on which you’d be comfortable being interviewed. If you haven’t programmed in a specific language, it most likely s</p>
                <p>Any hiring manager or recruiter who knows what they’re doing knows that fro</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS </p> <hr style={{width:"50%"}}/> </div>
                <div className="about-skill"><p>JavaScript </p> <hr style={{width:"70%"}}/> </div>
                <div className="about-skill"><p>React JS </p> <hr style={{width:"60%"}}/> </div>
                <div className="about-skill"><p>Next JS</p> <hr style={{width:"50%"}}/> </div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>90+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
        
      </div>
    </div>
  )
}

export default About
