import React from 'react'
import '../App.css'
import image from '../assets/WhatsApp Image 2025-02-14 at 10.54.45 AM (1)-Photoroom.png';

const Homepage = () => {
  return (
    <div className='container'>
      <div className="leftbox">
        <h1>Hello<sub style={{color:"#dacfa7"}}>&bull;</sub ></h1>
        <p className='name' style={{fontSize:"30px"}}>- I'am Sagar Sylada</p>
        <p style={{padding:"10px 0px",fontSize:"30px",margin:"0px 10px 0px 0px"}}>Professional Graphics Designer</p>
        <button><i className="fa-solid fa-download"></i> Download CV</button>
      </div>
      <div className="centerbox">
        <img src={image} alt="" />
      </div>
      <div className="rightbox">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis sequi temporibus, totam facilis, blanditiis unde corrupti ducimus quas provident tempore dicta sed hic! Neque odio ipsum illum cum quae fugiat?</p>
        <div className="row">
            <h2><p>Lets Talk <i className="fa-solid fa-arrow-right"></i></p></h2>
        </div>
      </div>
    </div>
  )
}

export default Homepage
