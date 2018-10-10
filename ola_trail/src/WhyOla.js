import React, { Component } from "react";
import "./App.css";
import "./styles/WhyOla.css"
import Fleet from './Fleet'
export default class WhyOla extends Component {

    render() {
        return (
            <div>
            <div style={{ marginLeft: "10px", marginRight: "10px", display: "inlineBlock" }}>
                <div style={{ backgroundColor: "white", width: "100%", height: "auto" }}>
                    <h2 style={{ margin: "30px 0 -30px 0px", color: "black" }}> Why ride with Ola?</h2>
                    <br />
                    <h5 style={{ marginLeft: "0px", color: "rgba(0, 0, 0, 0.92)", opacity: "0.5" }}>The best way to travel to your destination  </h5>

                    <div className="bind" style={{ backgroundColor: "white" }}>
                        <div style={{ backgroundColor: "white" }}><img style={{ width: "40%", height: "auto", top: "2px", position: "relative", paddingBottom: "-10px", paddingRight: "-20px" }} src="https://cms-web.olacabs.com/00000000368.jpg" ></img>

                            <div style={{ float: "right", backgroundColor: "white", width: "57%", height: "auto" }}>
                                <h3>Cabs for Every Pocket </h3>
                                <p style={{ color: "black" }}>
                                    From Sedans and SUVs to Luxury cars for special occasions, we have cabs to suit every pocket
                             </p>
                            </div></div></div>

                    <div className="bind" style={{ backgroundColor: "white" }}>
                        <div style={{ backgroundColor: "white" }}><img style={{ width: "40%", height: "auto", top: "2px", position: "relative", paddingBottom: "-10px", paddingRight: "-20px" }} src="https://cms-web.olacabs.com/00000000374.jpg" ></img>

                            <div style={{ float: "right", backgroundColor: "white", width: "57%", height: "auto" }}>
                                <h3>Ola Select  </h3>
                                <p style={{ color: "black" }}>
                                    A membership program with Ola that lets you ride a Prime Sedan at Mini fares, book cabs without peak pricing and has zero wait time
 </p>
                            </div></div></div>


                    <div className="bind" style={{ backgroundColor: "white" }}>
                        <div style={{ backgroundColor: "white" }}><img style={{ width: "40%", height: "auto", top: "2px", position: "relative", paddingBottom: "-10px", paddingRight: "-20px" }} src="https://cms-web.olacabs.com/00000000382.jpg" ></img>

                            <div style={{ float: "right", backgroundColor: "white", width: "57%", height: "auto" }}>
                                <h3>Share and Express  </h3>
                                <p style={{ color: "black" }}>
                                    To travel with the lowest fares choose Ola Share. For a faster travel experience we have Share Express on some fixed routes with zero deviations. Choose your ride and zoom away!
 </p>
                            </div></div></div>


                    <div className="bind" style={{ backgroundColor: "white" }}>
                        <div style={{ backgroundColor: "white" }}><img style={{ width: "40%", height: "auto", top: "2px", position: "relative", paddingBottom: "-10px", paddingRight: "-20px" }} src="https://cms-web.olacabs.com/00000000370.jpg" ></img>

                            <div style={{ float: "right", backgroundColor: "white", width: "57%", height: "auto" }}>
                                <h3>Secure and Safer Rides  </h3>
                                <p style={{ color: "black" }}>
                                    Verified drivers, an emergency alert button, and live ride tracking are some of the features that we have in place to ensure you a safe travel experience.
 </p>
                            </div></div></div>

                    <div className="bind" style={{ backgroundColor: "white" }}>
                        <div style={{ backgroundColor: "white" }}><img style={{ width: "40%", height: "auto", top: "2px", position: "relative", paddingBottom: "-10px", paddingRight: "-20px" }} src="https://cms-web.olacabs.com/00000000371.jpg" ></img>

                            <div style={{ float: "right", backgroundColor: "white", width: "57%", height: "auto" }}>
                                <h3>In Cab Entertainment </h3>
                                <p style={{ color: "black" }}>
                                    Play music, watch videos and a lot more with Ola Play! Also stay connected even if you are travelling through poor network areas with our free wifi facility.
 </p>
                            </div></div></div>

                    <div className="bind" style={{ backgroundColor: "white" }}>
                        <div style={{ backgroundColor: "white" }}><img style={{ width: "40%", height: "auto", top: "2px", position: "relative", paddingBottom: "-10px", paddingRight: "-20px" }} src="https://cms-web.olacabs.com/00000000372.jpg" ></img>

                            <div style={{ float: "right", backgroundColor: "white", width: "57%", height: "auto" }}>
                                <h3>Cashless Rides  </h3>
                                <p style={{ color: "black" }}>
                                    Now go cashless and travel easy. Simply recharge your Ola money or add your credit/debit card to enjoy hassle free payments.  </p>
                            </div></div></div>
               
                            <div className="bind" style={{ backgroundColor: "#EDEDED", height: "auto", width: "100%" }}><Fleet /></div>
                </div>
                
            </div>
          
            </div>
        );
    }
}




