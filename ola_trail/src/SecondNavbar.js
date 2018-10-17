import React, { Component } from 'react';

import './App.css';
import mainLogo from'./images/ola_icon.jpeg';
const white_div = {
  backgroundColor: 'white',
  height: 'auto',
  width: '100%',
  position: 'relative',
  fontSize: 14,
  color: 'black',

  alignContent: 'left'
  


};

const div1 = {

  backgroundColor: "white",
  height: "auto",
  overflow: "auto",
  width: "100%"
};
const div3 = {
  float: "right",

  color: "white",
  margin: 23,
  height: "auto",
  width: "auto"
};

const div2 = {
  float: "left",

  color: "red",
  margin:13,
  marginLeft:"60px",
  backgroundColor:"white",
  height: "auto",
  width: "auto",

}


class SecondNavbar extends Component {
  render() {
    return (

      <div className="App" style={white_div} >

        <div style={div1}>
         <a className="App" id="a2" href="http://localhost:3000/book_now">  <div id="div4">Book Now   </div></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           
          <div style={div3}><a id="a1" href="https://www.olacabs.com/">features   &nbsp; </a>    </div>
          <div style={div3}><a id="a1" href="https://www.olacabs.com/">Ola fleet &nbsp;  </a>    </div>
          <div style={div3}><a id="a1" href="https://www.olacabs.com/">Ola Select   &nbsp;</a> </div>
          <div style={div2}><img  src="https://www.olacabs.com/webstatic/img/ola-logo.svg" alt="fireSpot"/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </div>


        </div>

       </div>
    );
  }
}


export default SecondNavbar;