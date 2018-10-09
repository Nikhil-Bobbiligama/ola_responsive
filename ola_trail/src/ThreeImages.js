import React, { Component } from 'react';

import './App.css';
import './styles/ThreeImages.css'
import WhyOla from './WhyOla'

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
    opacity: "0.5",
    textAlign: "middle",


    // margin: "5px",    marginLeft:"10px",

    // marginRight: "10px",
    // margin: "20px",
    // marginLeft: "2px",
    // marginRight: "1px",
    marginTop: "30px",
    color: "black",
    height: "auto",
    width: "25%"

}
const content_right = {
    float: "right",
    opacity: "0.5",
    textAlign: "middle",


    // margin: "5px",

    // marginRight: "10px",
    // margin: "20px",
    // marginLeft: "2px",
    // marginRight: "1px",
    marginTop: "30px",
    color: "black",
    marginRight: "-10px",
    height: "auto",
    width: "30%"

}
const content_left_no_border = {
    float: "right",

    textAlign: "center",
    backgroundColor: "white",

    borderRadius: "15px",

    // margin: "5px",
    // marginRight: "10px",
    // marginLeft: "5px",

    marginTop: "30px",

    textWeight: "bold",
    height: "auto",
    width: "30%"

}
const overlay = {
    zIndex: 1,
    backgroundColor: "transparent",
    height: "auto",

    overflow: "hidden",
    position: "absolute",
    right: "20px",
    marginTop: "-50px",
    width: "auto",

    color: "white"
}
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
const simple_header2 = {

    height: 'auto',
    width: '84%',
    position: 'relative',
    fontSize: 14,
    left: "5px",
    margin: "2px 60px 20px 5px",
    display: "inline-block",
    fontWeight: "bold",
    backgroundColor: "white",
    color: 'black',
    alignContent: 'left'


}
const content_left_no_border_outstation = {
    float: "left",

    textAlign: "center",
    backgroundColor: "white",

    borderRadius: "15px",

    // margin: "5px 2px 5px 5px",
    // marginRight: "10px",


    margin: "20px",
    marginTop: "30px",
    marginBottom: "50px",
    textWeight: "bold",
    height: "auto",
    width: "20%"

}

class ThreeImages extends Component {


    render() {

        return (
            <div style={{ height: "auto", backgroundColor: "white" }}>
                <h2 style={{ margin: "10px 0 -30px 20px", color: "black" }}> A car for every occasion</h2> <br />
                <h5 style={{ marginLeft: "20px", color: "rgba(0, 0, 0, 0.92)", opacity: "0.5" }}>Ola offers city taxis, inter-city cabs, and local cabs at hourly packages </h5>
                <div style={{ height: " auto", backgroundColor: "white", borderRadius: "5px", border: " 1px solid grey  ", margin: "10px" }}>
                    <div style={{ width: "100%" }}>
                        <img style={{ width: "100%", height: "200px", borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }} src="https://cms-web.olacabs.com/00000000356.jpg"></img>
                        <div style={overlay}>
                            <div class="circleBase type1">
                                <div style={{ top: "2px", position: "relative", paddingBottom: "-60px", paddingRight: "-20px" }}> <img src="https://www.olacabs.com/webstatic/img/service-type/ola-prime-sedan-active.svg"></img>   </div>
                            </div></div>  <div>
                            <div style={{ top: "-60px", color: "black" }}> <h3>CITY TAXI </h3> <br />   <br /> <br />
                                <div style={{ color: "rgba(0, 0, 0, 0.6)", top: "-100px", margin: "20px", marginTop: "-50px" }}>     The perfect way to get through your everyday travel needs. City taxis are available 24/7 and you can book and travel in an instant. With rides starting from as low as Rs. 6/km, you can choose from a wide range of options! You can also opt to do your bit for the environment with Ola Share!</div>
                            </div>
                            <div style={{ height: "90px", width: "100%", backgroundColor: "transparent" }}>
                                <div style={simple_header2}>
                                    <a href="/"> <div style={content_left}>
                                        <img style={{ width: "auto", height: "30px", opacity: "1", paddingRight: "25px" }} src="https://www.olacabs.com/webstatic/img/service-type/ct_1.svg" ></img>
                                        <p style={{ marginTop: "-35px", marginLeft: "30px", marginRight: "60px" }}>AC <br /> Cabs</p>
                                    </div>
                                    </a>
                                    <a href="/"> <div style={content_left}>
                                        <img style={{ width: "auto", height: "30px", marginLeft: "10px" }} src="https://www.olacabs.com/webstatic/img/service-type/ct_2.svg"  ></img>
                                        <p style={{ marginTop: "-35px", marginLeft: "40px" }}>Pocket <br /> Friendly</p>
                                    </div>
                                    </a>
                                    <a href="/"> <div style={content_right}>
                                        <img style={{ width: "auto", height: "30px" }} src="https://www.olacabs.com/webstatic/img/service-type/ct_3.svg" ></img>
                                        <p style={{ marginTop: "-35px", marginLeft: "30px" }}>Cashless <br /> Rides</p>
                                    </div>
                                    </a>
                                </div>

                            </div>



                        </div></div>


                </div>
                <div style={{ height: " auto", backgroundColor: "white", borderRadius: "5px", border: " 1px solid grey  ", margin: "10px" }}>
                    <div style={{ width: "100%" }}>
                        <img style={{ width: "100%", height: "200px", borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }} src="https://cms-web.olacabs.com/00000000357.jpg"></img>
                        <div style={overlay}>
                            <div class="circleBase type1">
                                <div style={{ top: "2px", position: "relative", paddingBottom: "-60px", paddingRight: "-20px" }}> <img src="https://www.olacabs.com/webstatic/img/service-type/ola-outstation-active.svg"></img>   </div>
                            </div></div>  <div>
                            <div style={{ top: "-60px", color: "black" }}> <h3>OUTSTATION </h3> <br />   <br /> <br />
                                <div style={{ color: "rgba(0, 0, 0, 0.6)", top: "-100px", margin: "20px", marginTop: "-50px" }}>                                         Ride out of town at affordable one-way and round-trip fares with Ola’s intercity travel service. Choose from a range of AC cabs driven by top partners, available in 1 hour or book upto 7 days in advance. We have you covered across India with presence in 90+ cities with over 500 one way routes.</div>
                            </div>
                            <div style={{ height: "120px", width: "100%", backgroundColor: "transparent" }}>
                                <div style={simple_header2}>
                                    <a href="/"> <div style={content_left}>
                                        <img style={{ width: "auto", height: "30px", opacity: "1", paddingRight: "25px" }} src="https://www.olacabs.com/webstatic/img/service-type/os_1.svg" ></img>
                                        <p style={{ marginTop: "-35px", marginLeft: "30px", marginRight: "0px" }}>One-Way <br /> Trips</p>
                                    </div>
                                    </a>
                                    <a href="/"> <div style={content_left}>
                                        <img style={{ width: "auto", height: "30px", marginLeft: "10px" }} src="https://www.olacabs.com/webstatic/img/service-type/os_2.svg"  ></img>
                                        <p style={{ marginTop: "-35px", marginLeft: "40px" }}>Advanced <br /> Booking</p>
                                    </div>
                                    </a>
                                    <a href="/"> <div style={content_right}>
                                        <img style={{ width: "auto", height: "30px" }} src="https://www.olacabs.com/webstatic/img/service-type/os_3.svg" ></img>
                                        <p style={{ marginTop: "-35px", marginLeft: "40px" }}>Safe <br /> Rides</p>
                                    </div>
                                    </a>
                                </div>

                            </div>



                        </div></div>


                </div>
                <div style={{ height: " auto", backgroundColor: "white", borderRadius: "5px", border: " 1px solid grey  ", margin: "10px" }}>
                    <div style={{ width: "100%" }}>
                        <img style={{ width: "100%", height: "200px", borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }} src="https://cms-web.olacabs.com/00000000380.jpg"></img>
                        <div style={overlay}>
                            <div class="circleBase type1">
                                <div style={{ top: "2px", position: "relative", paddingBottom: "-60px", paddingRight: "-20px" }}> <img style={{width:"80px", marginTop:"20px"}} src="https://www.olacabs.com/webstatic/img/service-type/ola-prime-suv-active.svg"></img>   </div>
                            </div></div>  <div>
                            <div style={{ top: "-60px", color: "black" }}> <h3>RENTALS </h3> <br />   <br /> <br />
                                <div style={{ color: "rgba(0, 0, 0, 0.6)", top: "-100px", margin: "20px", marginTop: "-50px" }}>
                                    With Ola Rentals you get a cab at your disposal. So be it a  day long business meeting, a shopping trip with your friends or just a day out in a new city, we have you covered. Packages start at 1 hour and can be extended upto 12 hours!
                                </div>
                            </div>
                            <div style={{ height: "120px", width: "100%", backgroundColor: "transparent" }}>
                                <div style={simple_header2}>
                                    <a href="/"> <div style={content_left }>
                                        <img style={{ width: "auto", height: "30px", opacity: "1", paddingRight: "25px" }} src="https://www.olacabs.com/webstatic/img/service-type/rental_1.svg" ></img>
                                        <p style={{ marginTop: "-35px", marginLeft: "20px", marginRight: "60px", fontSize:"12px" }}>Hourly <br /> Packages</p>
                                    </div>
                                    </a>
                                    <a href="/"> <div style={content_left}>
                                        <img style={{ width: "auto", height: "30px", marginLeft: "10px" }} src="https://www.olacabs.com/webstatic/img/service-type/rental_2.svg"  ></img>
                                        <p style={{ marginTop: "-35px", marginLeft: "40px" }}>Multiple <br /> Stops</p>
                                    </div>
                                    </a>
                                    <a href="/"> <div style={content_right}>
                                        <img style={{ width: "auto", height: "30px" }} src="https://www.olacabs.com/webstatic/img/service-type/rental_3.svg" ></img>
                                        <p style={{ marginTop: "-35px", marginLeft: "40px", fontSize:"12px" }}>Top-Rated <br /> Partners</p>
                                    </div>
                                    </a>
                                </div>

                            </div>



                        </div></div>


                </div>


            </div>
        );
    }
}

export default ThreeImages;


