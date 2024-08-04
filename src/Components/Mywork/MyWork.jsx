import React from 'react';
import './mywork.css';
import arrow from '../../assets/arrow.svg';
import mywork_data from '../../assets/mywork_data.js';


const MyWork = () => {
  return (
    <div id='work' className='work'>
      <div className="mywork-title">
        <h1>My Last Work</h1>
        {/* <img src={arrow} alt="" /> */}
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index)=>(
                <img key={index} src={work.w_img} alt="" />
        ))}
      </div>
      <div className="mywork-shomore">
        <p>Show More...</p>
        <img src={arrow} alt="" />
      </div>
    </div>
  )
}

export default MyWork
