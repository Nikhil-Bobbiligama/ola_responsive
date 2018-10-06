import React, { Component } from 'react';
import MainTab from './MainTab';
import './App.css';
const k={
    height: 'auto',
    width :'auto',
    overflow: "hidden",
    paddingTop: '75px'
}
const overlay={
  zIndex: 1,  
  backgroundColor: "transparent",
  height: "auto",
  left: "280px",
  overflow: "hidden",
  position: "absolute",
  top: "110px",
  width:"auto",
  
  color: "white"
}
const overlay_tab={
  zIndex: 1,  
  backgroundColor: "white",
  height: "320px",
  left: "20px",
  borderRadius: "5px",
  overflow: "hidden",
  position: "absolute",
  top: "300px",
  width:"500px",
  
  color: "white"
}
const overlay_corosal={
  zIndex: 1,  
  backgroundColor: "red",
  height: "100px",
  left: "20px",
  overflow: "hidden",
  position: "absolute",
  top: "1010px",
  width:"100%",
  
  color: "white"
}
const overlay_text={
 
  color: "white",
  fontSize:"35px",
  fontWeight:"Bold",
  textAlign:"center",
  margin:"15px"
}
const overlay_text2={
 
  color: "white",
  fontSize:"20px",
  fontWeight:"normal",
  textAlign:"center",
  margin:"10px"
}
class FirstImage extends Component {
  render() {
    return (

      <div >

        <div  style= {k}>
        <div style={overlay}>
           <p style={overlay_text}>Book a City Taxi to your destination in town </p>
           <p style={overlay_text2}> Choose from a range of categories and prices</p>
        </div>
        <div >
          <MainTab/>
        </div>
        {/* <div style={overlay_corosal}>
          
          </div> */}
          <div>
        <img src="https://cms-web.olacabs.com/00000000383.jpg" alt="image failed to load">
        </img>
       </div>
        </div>

  <hr></hr>
      </div>
    );
  }
}


export default FirstImage;