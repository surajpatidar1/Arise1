import React, { createContext, useState } from 'react'


export const StoreContext = createContext(null);
const Store = (props) => {

  const [video,setVideo] = useState("true");
  const [showservice,setShowService] = useState(false);
  const [showabout,setShowAbout] = useState(false);
  const [showcontact,setShowContact] = useState(false);

  const values = {
    setVideo,video,
     showservice,setShowService,
    showabout,setShowAbout,
     showcontact,setShowContact};
  return (
    
        <StoreContext.Provider value={values}>
            {props.children}
        </StoreContext.Provider>
      
    
  )
}

export default Store
