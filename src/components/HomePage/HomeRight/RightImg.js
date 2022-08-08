import React from 'react'
import Cooking from  '../../../assets/Cooking.jpg';

const RightImg = () => {
    const largeContainer = {
        backgroundColor: "green",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "50%",
        zIndex: "4",
        boxSizing: "border-box",
        backgroundImage: "url(\"../assets/Deloitte.JPG\")"

        
    }
   

    const image = {
        objectFit: "cover",
        height: "100%",
        width: "100%",
        zIndex: "6",
    }
  return (
      <div style={largeContainer}>
        
        <img style={image}src={Cooking}></img>

  
          
      </div>
   
  )
}

export default RightImg