import React from 'react'
import ScaleText from "react-scale-text";

const MiddleTitle = () => {
    const largeContainer = {
        backgroundColor: "#4838FF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "33.3333%",
        zIndex: "4",
        boxSizing: "border-box",

        
    }
    const title = {
        display: "flex",
        fontFamily: "DM Serif Display",
        justifySelf: "center",
        fontSize: "7vw",
        lineHeight: "1",
        color: "white",


        
    }
    const textContainer = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        padding: "30px"
    }
  return (
      <div style={largeContainer}>
          <div style={textContainer}> 
          <p style={title}>Hi, I'm Serena</p>
          {/* <p style={title}>01 –<br/>ABOUT</p> */}
          </div>
  
          
      </div>
   
  )
}

export default MiddleTitle