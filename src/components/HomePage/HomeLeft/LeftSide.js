
import React from 'react';
import Olympic from '../../../assets/Olympic.jpg';
import Navbar from '../../Navbar';

function LeftSide() {
    const container = {
      position: "absolute",
      width: "33.333333%",
      height: "100%",
      backgroundColor: "yellow"
    }

    const imageStyle = {
      objectFit: "cover",
      height: "100%",
      width: "100%",
      zIndex: "-1",
    }
  return (
    <div style={container}>
      <Navbar/>
      <img style={imageStyle} src={Olympic} alt="Olympic"></img>
     
    </div>
  );
}

export default LeftSide;
