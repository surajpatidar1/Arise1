import React, { useContext } from 'react'
import './Contact.css'
import { StoreContext } from '../../Store/Store'

const Contact = () => {
  const {setShowContact,setVideo} = useContext(StoreContext)
   const onClick = ()=>{setShowContact(false), setVideo("true")}
  return (
    <>
    <span className='back' onClick={onClick} ><i className="fa-solid fa-arrow-left"></i></span>
    <h1><span>Contact us</span></h1>
    <div className="contact-container">
      
      <div className="contact">
        <p><i className="fa-brands fa-instagram"></i><a href="https://www.instagram.com/ariseworkingsolutions/">Arise Working Solutions</a></p>
        <p><i className="fa-brands fa-linkedin-in"></i> <a href="https://www.linkedin.com/company/arise-working-solutions/">Arise Working Solutions</a></p>
        <p><i className="fa-brands fa-whatsapp"></i><a href="#">+91 9630121442</a></p>
        <p><i className="fa-regular fa-envelope"></i><a href="#">ariseworkingsolutions@gmail.com</a></p>
        <p> <i className="fa-solid fa-phone"></i> <a href="#">+91 9630121442</a></p>
        <p>   <i className="fa-solid fa-location-dot"></i><a href="https://maps.app.goo.gl/KHrTV8QSKyDdL7NY8">Go to Map</a></p>
        
      
      </div>
    </div>
    </>
  )
}

export default Contact
