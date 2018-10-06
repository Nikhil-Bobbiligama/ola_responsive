import React, { Component } from "react";
import "./App.css";
const overlay_tab={
  zIndex: 1,  
 
  height: "auto",
  left: "40px",
  borderRadius: "5px",
  overflow: "hidden",
  position: "absolute",
  top: "200px",
  backgroundColor:"WHITE",
  
  width: "390px",
  margin: "45px 10px 10px 0px",
  padding: "5px",
  color: "white"
};
const simple_header={
  backgroundColor: 'white',
  height: '45px',
  width: '100%',
  position: 'relative',
  fontSize: 14,
  fontWeight:"bold",
 
  color: 'black',
  alignContent: 'left'
  

}
const content_left={
  float :"left",
 
  textAlign:"center",
  backgroundColor:"#CDDC39",
 
  borderRadius: "15px",
 
  margin: "5px",
  marginLeft: "20px",
  
  padding: "0.5em",
  paddingLeft:"1.2em", 
  paddingRight: "1.2em",
  color:"black",
  height: "auto",
  width: "auto"

}
const content_left_no_border={
  float :"left",
 
  textAlign:"center",
  backgroundColor:"white",
 
  borderRadius: "15px",
 
  margin: "5px",
  marginLeft: "15px",
  
  padding: "0.5em",
  paddingLeft:"1.2em", 
  paddingRight: "1.2em",
  textWeight:"bold",
  height: "auto",
  width: "auto"

}
export default class MainTab extends Component {
 
  render() {
    return (
      <div style={overlay_tab}>
      <div style={simple_header}>
     <a href="/"> <div style={content_left}>     CITY TAXI</div></a>
      <a id="a1" href="/">  <div style={content_left_no_border}> OUTSTATION</div></a>
      <a id="a1" href="/">  <div style={content_left_no_border}> RENTALS</div></a>
     
      </div>
     <div style={{background:"#898989",height:"1px",width:"100%"}}></div>
        <div className="category-container-booking">
       
          <div className="category-header-booking">
       
            Your everyday travel partner
          </div>
          <div className="category-subheader-booking">
            AC Cabs for point to point travel
          </div>
        </div>
        <div className="booking-rows">
          <div className="left-booking">pickup</div>
          <div className="middle-booking">Current location</div>
        </div>
        <div className="booking-rows">
          <div className="left-booking">drop</div>
          <div className="middle-booking placeholder-booking">
            Enter drop for ride estimate</div>
          
        </div>
        <div>
          <div className="booking-rows">
            <div className="left-booking">WHEN</div>
            <div className="right-booking">
              <select className="option-selector">
                <option value="NOW">Now</option>
                <option value="LATER">Schedule for later</option>
              </select>
            </div>
          </div>
        </div>
        <button type="button" className="search-button">
          Search Cabs
        </button>
      
      </div>
    );
  }
}


	
	
