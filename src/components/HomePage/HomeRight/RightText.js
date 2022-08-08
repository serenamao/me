import React from 'react'

const RightText = () => {
    const largeContainer = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "50%",
        zIndex: "4",
        boxSizing: "border-box",
        backgroundImage: "url(\"../assets/Deloitte.JPG\")",
        padding: "50px",

        
    }
    const title = {
        fontFamily: "DM Sans",
        fontSize: "1.9vw",
        margin: "0",
        color: "white",
    }
    const text = {
        fontFamily: "DM Sans",
        fontSize: "1.1vw",
        color: "white",


    }

  return (
      <div style={largeContainer}>
          <div>
        <p style={title}>This is my personal website</p>
        <p style={text}>Currently, I'm a sophomore working towards my B.S. in Computer Science at Harvey Mudd College. I've been involved in all things computer science: whether it's web-scraping, data visualization, or data analysis for undergraduate level research, startups, or local organizations. </p>
        </div>
  
          
      </div>
   
  )
}

export default RightText