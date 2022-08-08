import React from 'react'
import MiddleTitle from './MiddleTitle'
import MiddleImg from './MiddleImg'
import MiddleText from './MiddleText'

const Middle = () => {
    const largeContainer = {
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
        width: "100%",
        height: "100%",
    }
    const Container = {
        left: "50%",
        width: "33.333333%",
        height: "100%",
        backgroundColor: "#4838FF",
        zIndex: "6",

    }
  return (
      <div style={largeContainer}>
          
         <div style={Container}>
         <MiddleTitle />
         <MiddleText />
         <MiddleImg />

         </div>
      </div>
   
  )
}

export default Middle