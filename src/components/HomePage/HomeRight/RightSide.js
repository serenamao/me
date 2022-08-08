import { findByLabelText } from '@testing-library/react'
import React from 'react'
import RightImg from './RightImg'
import RightText from './RightText'

const RightSide = () => {
    const largeContainer = {
        position: "absolute",
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
    
    }
    const container = {
        float: "right",
        left: "50%",
        width: "33.333333%",
        height: "100%",
        backgroundColor: "#4838FF",
        zIndex: "6",
        

    }
  return (
      <div style={largeContainer}>
          <div style={container}>
            <RightImg/>
            <RightText />
          </div>
        
      </div>
   
  )
}

export default RightSide