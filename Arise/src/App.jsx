import React, { useContext } from 'react'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Front from './Components/Front/Front'
import Footer from './Components/Footer/Footer'
import Service from './Pages/Service/Service'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import { StoreContext } from './Store/Store'


const App = () => {
  const {video,showservice,showabout,showcontact} = useContext(StoreContext)
 
  return (
    <div>
 <Navbar/>
 {video=="true"?<Front/>:<></>}
 <Routes>
  <Route path='/service' element={showservice?<Service/>:<></>}/>
  <Route path='/contact' element={showcontact?<Contact/>:<></>} />
  <Route path='/about' element={showabout?<About/>:<></>}/>
 </Routes>
 <Footer/>
    </div>
  )
}

export default App
