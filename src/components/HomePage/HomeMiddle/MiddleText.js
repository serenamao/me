import React from 'react'

const MiddleText = () => {
    const largeContainer = {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "33.3333%",
        zIndex: "4",
        boxSizing: "border-box",
        backgroundImage: "url(\"../assets/Deloitte.JPG\")",
        padding: "50px",

        
    }
    const title = {
        fontFamily: "DM Sans",
        fontSize: "1.9vw",
        margin: "0"
    }
    const text = {
        fontFamily: "DM Sans",
        fontSize: "1.1vw",


    }

  return (
      <div style={largeContainer}>
          <div>
        <p style={title}>Who am I?</p>
        <p style={text}>Currently, I'm a sophomore working towards my B.S. in Computer Science at Harvey Mudd College. I've been involved in all things computer science: whether it's web-scraping, data visualization, or data analysis for undergraduate level research, startups, or local organizations. </p>
        </div>
  
          
      </div>
   
  )
}

export default MiddleText