
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useContext } from 'react';
import {StoreContext} from "../../Store/Store"

const Navbar = () => {
  const {setVideo,setShowService,setShowAbout,setShowContact} = useContext(StoreContext)
  const navigate = useNavigate();

  const onService = ()=>{
    setVideo("false")
   setShowService(true)
    navigate("/service")
  }
  const onContact = ()=>{
    setVideo("false")
    setShowContact(true)
    navigate("/contact")
  }
  const onAbout = ()=>{
    setVideo("false")
    setShowAbout(true)
    navigate("/about")
  }
  return (
    <>
    <div className="container">
        <div className="logo">
            <img src="/logo.jpg" alt="" className='logo' />
        </div>
        <div className="options">
            <ul>
                <li className="option" onClick={onService}>Services</li>
                <li className="option" onClick={onContact}>Contact Us</li>
                <li className="option" onClick={onAbout}>About</li>
            </ul>
        </div>
    </div>
    </>
   
  )
}

export default Navbar
