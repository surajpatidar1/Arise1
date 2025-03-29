import React, { useContext } from 'react'
import './Service.css'
import { StoreContext } from '../../Store/Store'

const Service = () => {
 const {setShowService,setVideo} = useContext(StoreContext)
 const onClick = ()=>{setShowService(false), setVideo("true")}
  return (
   <>
   <span className='backs' onClick={onClick} ><i className="fa-solid fa-arrow-left"></i></span>
   <div className="services">

    <div className="customer-service">
      <div ><img src="/Customer-Support.jpg" alt="" /></div>
    <div className='info'><strong>Customer Service </strong> <br/><br /> Managing customer interactions through call centers, email support, live chat, or social media.</div>
    </div>

    <div className="sales-service">
    <div className='info'> <strong>Sales</strong> <br /><br /> Handling inbound or outbound sales, lead generation, telesales, and customer acquisition.</div>
      <div className='service-img'> <img src="/sales.png" alt="" /></div>    
    </div>

    <div className="back-service">
      <div className='service-img'><img src="/back.jpg" alt="" /></div>
      <div className='info'><strong>Back Office Support </strong> <br /><br /> Managing administrative functions like data entry, payroll, HR support, and document management.</div>
    </div>
    <div className="marketing-service">
    <div className='info'><strong>Marketing Support </strong> <br /><br /> Digital marketing, SEO, content creation, and campaign management.</div>
      <div className='service-img'><img src="market.jpg" alt="" /></div>
    </div>
   </div>
   </>
  )
}

export default Service
