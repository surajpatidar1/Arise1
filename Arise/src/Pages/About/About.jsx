import {useContext} from 'react'
import './About.css'
import { StoreContext } from '../../Store/Store'

const About = () => {
  const {setShowAbout,setVideo} = useContext(StoreContext)
   const onClick = ()=>{setShowAbout(false), setVideo("true")}
  return (
    <>
    <span className='back' onClick={onClick} ><i className="fa-solid fa-arrow-left"></i></span>
    <h1 className='head'><span>Arise working solutions</span></h1>
    <div className='about'>
    
      <div className="about-content">
        <p>
        <span>Arise</span> is a leading Business Process Outsourcing (BPO) provider specializing in customer management solutions. We help clients acquire, support, and grow their markets through services like sales, customer care, technical support, and back-office functions. As a trusted partner, we act as an extension of our clients' operations, delivering high-quality service while reducing costs. Our start-up approach offers scalability and flexibility, focused on enhancing customer experiences and driving continuous improvement.

        </p>
      </div>
      <div className="about-img">
        <div className="part1">
        <img src="/img1.jpg" alt=""  id='img' />
        <img src="/img4.jpg" alt=""  id='img'/>
        <img src="/img5.jpg" alt="" id='img' />
        </div>
        <div className="part2">
        <img src="/img2.jpg" alt=""  id='img'/>
        <img src="/img3.jpg" alt="" id='img'/>
        <img src="/img6.jpg" alt="" id='img'/>
        </div>
       
      </div>
    </div>
    </>
  )
}

export default About
