import React, {useState} from 'react'
import NavButton from './NavButton'

const Navbar = () => {
    const Container = {
        position: "absolute",
        width: "100%",
        height: "15%",
        backgroundColor: "white",
        opacity: ".7",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        zIndex: "2",
          
    }
    const text = {
        fontFamily: "DM Serif Display",
    }
  return (
      
    <div style={Container}>
        <NavButton text="Home"/>  
        <NavButton text="About"/>
        <NavButton text="Portfolio"/>    
        </div>
  )
}

export default Navbar