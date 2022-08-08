import React from 'react'
import ScaleText from "react-scale-text";
import Deloitte from  '../../../assets/Deloitte.JPG';

const MiddleImg = () => {
    const largeContainer = {
        backgroundColor: "green",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "33.3333%",
        zIndex: "4",
        boxSizing: "border-box",
     
        
    }
   

    const image = {
        objectFit: "cover",
        height: "100%",
        width: "100%",
        zIndex: "6",
    }
  return (
      <div style={largeContainer}>
        
        <img style={image}src={Deloitte}></img>

  
          
      </div>
   
  )
}

export default MiddleImg