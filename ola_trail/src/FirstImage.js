import React, { Component } from 'react';
import MainTab from './MainTab';
import './App.css';
import Carouselme from './desk/Cardesk'
import Threeimg from './desk/Threedesk'
import Whyoladesk from './desk/Whyoladesk'
import Fleetdesk from './desk/Fleetdesk'
const k = {
  height: 'auto',
  width: 'auto',
  overflow: "hidden",
  paddingTop: '75px'
}
const overlay = {
  zIndex: 1,
  backgroundColor: "transparent",
  height: "auto",
  left: "280px",
  overflow: "hidden",
  position: "absolute",
  top: "110px",
  width: "auto",

  color: "white"
}
const overlay_corosal = {
  zIndex: 0,
  backgroundColor: "red",
  height: "auto",

  overflow: "hidden",
  position: "absolute",
  top: "500px",
  width: "90%",
  marginLeft: "50px",
  marginRight: "50px",
  color: "white"
}
const overlay_tab = {
  zIndex: 1,
  backgroundColor: "white",
  height: "320px",
  left: "20px",
  borderRadius: "5px",
  overflow: "hidden",
  position: "absolute",
  top: "300px",
  width: "500px",

  color: "white"
}
// const overlay_corosal={
//   zIndex: 1,  
//   backgroundColor: "red",
//   height: "100px",
//   left: "20px",
//   overflow: "hidden",
//   position: "absolute",
//   top: "1010px",
//   width:"100%",

//   color: "white"
// }
const overlay_text = {

  color: "white",
  fontSize: "35px",
  fontWeight: "Bold",
  textAlign: "center",
  margin: "15px"
}
const overlay_text2 = {

  color: "white",
  fontSize: "20px",
  fontWeight: "normal",
  textAlign: "center",
  margin: "10px"
}
class FirstImage extends Component {
  render() {
    return (

      <div >

        <div style={k}>
          <div style={overlay}>
            <p style={overlay_text}>Book a City Taxi to your destination in town </p>
            <p style={overlay_text2}> Choose from a range of categories and prices</p>
          </div>
          <div >
            <MainTab />

          </div>
          <div >  <Carouselme /></div>




          <div>
            <img src="https://cms-web.olacabs.com/00000000383.jpg" alt="image failed to load">
            </img>

          </div>
        </div>
        <div style={{ backgroundColor: "white", height: "700px", width: "100%" }}><Threeimg /></div>
        <div style={{ backgroundColor: "white", height: "auto", width: "100%" }}><Whyoladesk /></div>
        <div style={{ backgroundColor: "white", height: "auto", width: "100%", float: "left" }}> <h2 style={{ margin: " 0  0px", color: "black",marginTop:"50px" }}>Meet our Awesome Fleet</h2>
          <br />
          <h5 style={{ marginLeft: "0px", color: "rgba(0, 0, 0, 0.92)", opacity: "0.5" }}>The widest variety of cars to choose from </h5>
          <Fleetdesk /></div>

        <hr></hr>
      </div>
    );
  }
}


export default FirstImage;