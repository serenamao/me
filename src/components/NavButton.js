import React, {useState} from 'react'

const NavButton = ({text}) => {
    const [isHover, setIsHover] = useState(false)
    const container = {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        zIndex: "3",
        alignItems: "center",
        justifyContent: "center"
    }
    const handleMouseEnter = () => {
        setIsHover(true);
     };
  
     const handleMouseLeave = () => {
        setIsHover(false);
     };

    const textStyle = {
        fontFamily: "DM Serif Display",
        color: isHover ? '#4838FF' : 'black',

    }
    const underline = {
        display: "flex",
        position: "absolute",
        bottom: "0",
        alignSelf: "center",
        width: "33%",
        height: "3px",
        backgroundColor: isHover ? '#4838FF' : 'black',
        zIndex: "6",
        opacity: isHover ? '1' : '0',
    }
  return (
      <div style={container}>

      
        <h3 style={textStyle}
        onClick={() => console.log("hi")}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
            >{text}</h3>
        <div style={underline}></div>
        </div>
  )
}

export default NavButton