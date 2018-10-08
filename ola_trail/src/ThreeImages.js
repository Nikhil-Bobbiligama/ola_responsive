import React, { Component } from 'react';

import './App.css';


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
    margin: 13,
    marginLeft: "60px",
    backgroundColor: "white",
    height: "auto",
    width: "auto",

}
const simple_header = {

    height: 'auto',
    width: '100%',
    position: 'relative',
    fontSize: 14,
    left: "5px",
    margin: "2px 10px 20px 10px",

    fontWeight: "bold",
    backgroundColor: "white",

    alignContent: 'left'


}
const content_left = {
    float: "left",

    textAlign: "center",


    // margin: "5px",

    // marginRight: "10px",
    margin: "20px",
    marginRight: "1px",
    marginTop: "30px",
    color: "black",
    height: "auto",
    width: "10%"

}
const content_left_no_border = {
    float: "right",

    textAlign: "center",
    backgroundColor: "white",

    borderRadius: "15px",

    // margin: "5px",
    // marginRight: "10px",
    // marginLeft: "5px",



    textWeight: "bold",
    height: "auto",
    width: "80%"

}
const content_left_no_border_outstation = {
    float: "left",

    textAlign: "center",
    backgroundColor: "white",

    borderRadius: "15px",

    // margin: "5px 2px 5px 5px",
    // marginRight: "10px",


    margin: "20px",
    marginBottom: "50px",
    textWeight: "bold",
    height: "auto",
    width: "50%"

}

class ThreeImages extends Component {


    render() {

        return (
            <div style={{ height: "auto", backgroundColor: "white" }}>
                <h2 style={{ margin: "10px 0 -30px 20px", color: "black" }}> A car for every occasion</h2> <br />
                <h5 style={{ marginLeft: "20px", color: "rgba(0, 0, 0, 0.92)", opacity: "0.5" }}>Ola offers city taxis, inter-city cabs, and local cabs at hourly packages </h5>
                <div style={{ height: " auto", backgroundColor: "green" }}>
                    <div style={{ width: "100%" }}>
                        <img style={{ width: "100%", height: "200px" }} src="https://cms-web.olacabs.com/00000000356.jpg"></img>
                        <div style={{ zIndex: "2", top: "15px", left: "80%", float: "right", backgroundColor: "blue", height: "50px" }} > heyyyyyyyyyyyyyyyyyyyyyyyy</div>
                        <div>
                            City Taxi  <br />           The perfect way to get through your everyday travel needs. City taxis are available 24/7 and you can book and travel in an instant. With rides starting from as low as Rs. 6/km, you can choose from a wide range of options! You can also opt to do your bit for the environment with Ola Share!</div>
                   <div></div>
                   
                    </div>
                </div>




                <div style={{ height: " 200px", backgroundColor: "white" }}></div>
                <div style={{ height: " 200px", backgroundColor: "black" }}></div>
            </div>
        );
    }
}

export default ThreeImages;


