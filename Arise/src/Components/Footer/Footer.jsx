import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className="containers">
        <h1><span><i>Arise</i></span></h1>
        <div className="blocks">
            <div className="about">
                <h4>About Arise</h4>
                <p>Arise is a leading Business Process Outsourcing (BPO) provider specializing in customer management solutions. We help clients acquire, support, and grow their markets through services like sales, customer care, technical support, and back-office functions. </p>
            </div>
            <div className="social">
                <h3>Social Links</h3>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-whatsapp"></i>
            <i className="fa-brands fa-linkedin-in"></i> 
            <i className="fa-regular fa-envelope"></i>
            </div>
        </div>
        <hr className='hr'/>
        <p className='p1'><span>Arise Pvt Ltd</span></p>
        <p className='p2'><span>  &copy; 2025 Arise Pvt Ltd. All rights reserved.</span></p>
    </div>
    </>
  )
}

export default Footer
