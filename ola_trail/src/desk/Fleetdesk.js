import React, { Component } from "react";
import MediaQuery from 'react-responsive';
import "../styles/Fleet.css"
import "../styles/Fleetfoot.css"
import "../styles/WhyOla.css"
// import Footer from './Footer'
const phef = { textDecoration: "none", fontSize: "10px", };

//  <style>
//      .ser{
//   color=white


//  };
//  ser:hover {

// color= "#CEE300"
//  }
//      </style>
export default class Fleetdesk extends Component {
    constructor() {
        super();
        this.state = {
            auto: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-auto.svg",

            bike: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-bike.svg",

            share: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-share.svg",

            micro: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-micro.svg",

            mini: " https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-mini.svg",

            primeSedan: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-sedan.svg",

            primePlay: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-play.svg",

            primeSUV: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-suv.svg",

            primeLux: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-lux.svg",

            eRickshaw: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-e-rick.svg",
            kaliPeli: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-kaali-peeli.svg",
            bigImage: "",
            heading: "",
            subheading: "",
            content: "",
            simg1: "",
            simg2: "",
            simg3: "",
            simg4: "",
            auto_clicked: true,
            bike_clicked: false,
            share_clicked: false,
            micro_clicked: false,
            mini_clicked: false,
            primeSedan_clicked: false,
            primePlay_clicked: false,
            primeSUV_clicked: false,
            primeLux_clicked: false,
            eRickshaw_clicked: false,
            kalipeli_clicked: false,
            clickedclass: "",
            foot1: "",
            foot2: "",
            foot3: "",
            foot4: "",
            foot5: "",
            clickedclass3: "",
            clickedclass4: "",
            clickedclass5: "",
        }
    }
    componentWillMount() {
        this.clickimg("auto")
    }
    hoverimg(x) {
        if (x === "autoActive")
            this.setState({ auto: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-auto-active.svg" });
        if (x === "bikeActive") {
            this.setState({ bike: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-bike-active.svg" });
        }
        if (x === "shareActive") {
            this.setState({ share: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-share-active.svg" });
        }
        if (x === "microActive") {
            this.setState({ micro: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-micro-active.svg" });
        }
        if (x === "miniActive") {
            this.setState({ mini: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-mini-active.svg" });
        }
        if (x === "primeSedanActive") {
            this.setState({ primeSedan: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-sedan-active.svg" });
        }
        if (x === "primePlayActive") {
            this.setState({ primePlay: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-play-active.svg" });
        }
        if (x === "primeSUVActive") {
            this.setState({ primeSUV: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-suv-active.svg" });
        }
        if (x === "LUXActive") {
            this.setState({ primeLux: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-lux-active.svg" });
        }
        if (x === "eRickShawActive") {
            this.setState({ eRickshaw: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-e-rick-active.svg" });
        }
        if (x === "kaliPeliActive") {
            this.setState({ kaliPeli: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-kaali-peeli-active.svg" });
        }

    }
    outimg(x) {
        if (x === "autoInactive") {

            if (this.state.auto_clicked === true) {
                this.setState({ auto: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-auto-active.svg" })
            }
            else { this.setState({ auto: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-auto.svg" }) }
        }
        if (x === "bikeInactive") {
            if (this.state.bike_clicked === true) {
                this.setState({ bike: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-bike-active.svg" });
            }
            else {
                this.setState({ bike: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-bike.svg" });

            }
        }
        if (x === "shareInactive") {
            if (this.state.share_clicked === true) {
                this.setState({ share: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-share-active.svg" });
            } else
                this.setState({ share: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-share.svg" });
        }
        if (x === "microInactive") {
            if (this.state.micro_clicked === true) {
                this.setState({ micro: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-micro-active.svg" });
            } else
                this.setState({ micro: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-micro.svg" });


        }
        if (x === "miniInactive") {

            if (this.state.mini_clicked === true) {
                this.setState({ mini: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-mini-active.svg" });
            } else
                this.setState({ mini: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-mini.svg" });


        }
        if (x === "primeSedanInactive") {

            if (this.state.primeSedan_clicked === true) {
                this.setState({ primeSedan: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-sedan-active.svg" });
            } else
                this.setState({ primeSedan: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-sedan.svg" });

        }
        if (x === "primePlayInactive") {
            if (this.state.primePlay_clicked === true) {
                this.setState({ primePlay: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-play-active.svg" });
            } else
                this.setState({ primePlay: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-play.svg" });


        }
        if (x === "primeSUVInactive") {
            if (this.state.primeSUV_clicked === true) {
                this.setState({ primeSUV: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-suv-active.svg" });
            } else
                this.setState({ primeSUV: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-suv.svg" });

        }
        if (x === "LUXInactive") {
            if (this.state.primeLux_clicked === true) {
                this.setState({ primeLux: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-lux-active.svg" });
            } else
                this.setState({ primeLux: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-lux.svg" });

        }
        if (x === "eRickShawInactive") {
            if (this.state.eRickshaw_clicked === true) {
                this.setState({ eRickshaw: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-e-rick-active.svg" });
            } else
                this.setState({ eRickshaw: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-e-rick.svg" });

        }
        if (x === "kaliPeliInactive") {
            this.setState({ kaliPeli: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-kaali-peeli.svg" });
            if (this.state.eRickshaw_clicked === true) {
                this.setState({ kaliPeli: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-kaali-peeli-active.svg" });
            } else
                this.setState({ kaliPeli: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-kaali-peeli.svg" });

        }
    }
    clickimg(x) {
        this.setState({
            auto_clicked: false, clickedclass: "hovaround",
            bike_clicked: false,
            share_clicked: false,
            micro_clicked: false,
            mini_clicked: false,
            primeSedan_clicked: false,
            primePlay_clicked: false,
            primeSUV_clicked: false,
            primeLux_clicked: false,
            eRickshaw_clicked: false,
            kalipeli_clicked: false,
            foot1: "",
            foot2: "",
            foot3: "",
            foot4: "",
            foot5: "",
            auto: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-auto.svg",

            bike: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-bike.svg",

            share: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-share.svg",

            micro: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-micro.svg",

            mini: " https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-mini.svg",

            primeSedan: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-sedan.svg",

            primePlay: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-play.svg",

            primeSUV: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-suv.svg",

            primeLux: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-lux.svg",

            eRickshaw: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-e-rick.svg",
            kaliPeli: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-kaali-peeli.svg",

        })
        if (x === "auto") {
            this.setState({ bigImage: "https://www.olacabs.com/webstatic/img/fleet-image/auto.png" });
            this.setState({
                heading: "Auto", subheading: "Get an Auto at your doorstep",
                content: "The all too familiar auto ride, minus the hassle of waiting and haggling for price. A convenient way to travel everyday."
                , auto_clicked: true
            })
            this.setState({
                auto: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-auto-active.svg",
                foot1: "https://www.olacabs.com/webstatic/img/car-features/eco-friendly.svg",
                foot2: "https://www.olacabs.com/webstatic/img/car-features/value-money.svg",
                foot3: "https://www.olacabs.com/webstatic/img/car-features/cashless.svg",
                foot4: "",
                foot5: "",
                clickedclass3: "hovme",
                clickedclass4: "nohov",
                clickedclass5: "nohov",
            });

        }

        if (x === "bike") {
            this.setState({ bigImage: "https://www.olacabs.com/webstatic/img/fleet-image/bike.png" });
            this.setState({
                heading: "Bike", subheading: "On Time, Every time.",
                content: "                                        Hate waiting in the snarling traffic each day? Not anymore as with Ola Bike you can now reduce your travel time by at least 50%. Simply book a bike with a tap of a button and ride away within minutes and all this at the most affordable rates in town! "
                , bike_clicked: true,
                foot1: "https://www.olacabs.com/webstatic/img/car-features/value-money.svg",
                foot2: "https://www.olacabs.com/webstatic/img/car-features/cashless.svg",
                foot3: "",
                foot4: "",
                foot5: "",
                clickedclass3: "nohov",
                clickedclass4: "nohov",
                clickedclass5: "nohov",
            })
            this.setState({ bike: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-bike-active.svg", });

        }
        if (x === "share") {
            this.setState({ bigImage: "https://www.olacabs.com/webstatic/img/fleet-image/share.png" });
            this.setState({
                heading: "Share", subheading: "Eco-friendly rides at pocket-friendly rates",
                content: "   Fully air conditioned cars that you can share with others depending on your route and location."
                , share_clicked: true,
                foot1: "https://www.olacabs.com/webstatic/img/car-features/ac.svg",
                foot2: "https://www.olacabs.com/webstatic/img/car-features/route-sharing.svg",
                foot3: "https://www.olacabs.com/webstatic/img/car-features/cashless.svg",
                foot4: "https://www.olacabs.com/webstatic/img/car-features/value-money.svg",
                foot5: "",
                clickedclass3: "hovme",
                clickedclass4: "hovme",
                clickedclass5: "nohov",
            })
            this.setState({
                share: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-share-active.svg",
            });

        }
        if (x === "micro") {
            this.setState({ bigImage: "https://www.olacabs.com/webstatic/img/fleet-image/micro.png" });
            this.setState({
                heading: "Micro", subheading: "Small fares for short rides",
                content: "Compact yet comfortable AC cars that seat up to 3 people and give you great value for your money. Small fares for short rides."
                , micro_clicked: true,
                foot1: "https://www.olacabs.com/webstatic/img/car-features/ac.svg",
                foot2: "https://www.olacabs.com/webstatic/img/car-features/value-money.svg",
                foot3: "https://www.olacabs.com/webstatic/img/car-features/compact-hatchback.svg",
                foot4: "https://www.olacabs.com/webstatic/img/car-features/baggage-2.svg",
                foot5: "",
                clickedclass3: "hovme",
                clickedclass4: "hovme",
                clickedclass5: "nohov",
            })
            this.setState({
                micro: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-micro-active.svg",
            });

        }
        if (x === "mini") {
            this.setState({ bigImage: "https://www.olacabs.com/webstatic/img/fleet-image/mini.png" });
            this.setState({
                heading: "Mini", subheading: "Everyday dependable ride",
                content: " A regular comfortable AC hatchback that becomes your everyday dependable ride. An economical option for daily commute."
                , mini_clicked: true,
                foot1: "https://www.olacabs.com/webstatic/img/car-features/ac.svg",
                foot2: "https://www.olacabs.com/webstatic/img/car-features/value-money.svg",
                foot3: "https://www.olacabs.com/webstatic/img/car-features/regular-hatchback.svg",
                foot4: "https://www.olacabs.com/webstatic/img/car-features/baggage-2.svg",
                foot5: "",
                clickedclass3: "hovme",
                clickedclass4: "hovme",
                clickedclass5: "nohov",
            })
            this.setState({ mini: " https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-mini-active.svg", });

        }
        if (x === "primeSedan") {
            this.setState({ bigImage: "https://www.olacabs.com/webstatic/img/fleet-image/prime-sedan.png" });
            this.setState({
                heading: "Prime Sedan", subheading: "Sedans with free Wi-Fi and top drivers",
                content: "Top rated drivers, and a hand-picked fleet of the best cars with extra legroom and boot space."
                , primeSedan_clicked: true,
                foot1: "https://www.olacabs.com/webstatic/img/car-features/ac.svg",
                foot2: "https://www.olacabs.com/webstatic/img/car-features/wifi.svg",
                foot3: "https://www.olacabs.com/webstatic/img/car-features/leg-room.svg",
                foot4: "https://www.olacabs.com/webstatic/img/car-features/boot-space.svg",
                foot5: "https://www.olacabs.com/webstatic/img/car-features/exec-ride.svg",
                clickedclass3: "hovme",
                clickedclass4: "hovme",
                clickedclass5: "hovme",
            })
            this.setState({ primeSedan: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-sedan-active.svg", });

        }
        if (x === "primePlay") {
            this.setState({ bigImage: "https://www.olacabs.com/webstatic/img/fleet-image/prime-play.png" });
            this.setState({
                heading: "Prime Play", subheading: "Enjoy music, radio, videos on the go",
                content: "Cars with in-cab entertainment consoles that allow you to watch movies, listen to music and stay connected while on the move."
                , primePlay_clicked: true,
                foot1: "https://www.olacabs.com/webstatic/img/car-features/ola-play.svg",
                foot2: "https://www.olacabs.com/webstatic/img/car-features/ac.svg",
                foot3: "https://www.olacabs.com/webstatic/img/car-features/wifi.svg",
                foot4: "https://www.olacabs.com/webstatic/img/car-features/family.svg",
                foot5: "https://www.olacabs.com/webstatic/img/car-features/baggage-3.svg",
                clickedclass3: "hovme",
                clickedclass4: "hovme",
                clickedclass5: "hovme",
            })
            this.setState({ primePlay: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-play-active.svg", });

        }
        if (x === "primeSUV") {
            this.setState({ bigImage: "https://www.olacabs.com/webstatic/img/fleet-image/prime-suv.png" });
            this.setState({
                heading: "Prime SUV", subheading: "SUVs with free Wi-Fi and top drivers",
                content: "A perfect choice of car for your weekend getaways, with plenty of room for everyone including that extra bag."
                , primeSUV_clicked: true,
                foot1: "https://www.olacabs.com/webstatic/img/car-features/leg-room.svg",
                foot2: "https://www.olacabs.com/webstatic/img/car-features/ac.svg",
                foot3: "https://www.olacabs.com/webstatic/img/car-features/wifi.svg",
                foot4: "https://www.olacabs.com/webstatic/img/car-features/family.svg",
                foot5: "https://www.olacabs.com/webstatic/img/car-features/baggage-3.svg",
                clickedclass3: "hovme",
                clickedclass4: "hovme",
                clickedclass5: "hovme",
            })
            this.setState({ primeSUV: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-suv-active.svg", });

        }




        if (x === "LUX") {
            this.setState({ bigImage: "https://www.olacabs.com/webstatic/img/fleet-image/lux.png" });
            this.setState({
                heading: "Lux", subheading: "The new luxury ride in town",
                content: "Top-of-the-line luxury cars like Mercedes, BMW, and Audis powered by auto-connect Wi-Fi, at unbeatable fares & attractive hourly rental packages."
                , primeLux_clicked: true,
                foot1: "https://www.olacabs.com/webstatic/img/car-features/leg-room.svg",
                foot2: "https://www.olacabs.com/webstatic/img/car-features/water-bottle.svg",
                foot3: "https://www.olacabs.com/webstatic/img/car-features/lux-ride.svg",
                foot4: "https://www.olacabs.com/webstatic/img/car-features/usb.svg",
                foot5: "",
                clickedclass3: "hovme",
                clickedclass4: "hovme",
                clickedclass5: "nohov",
            })
            this.setState({ primeLux: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-lux-active.svg", });

        }
        if (x === "eRickShaw") {
            this.setState({ bigImage: "https://www.olacabs.com/webstatic/img/fleet-image/e-rick.png" });
            this.setState({
                heading: "E-Rick", subheading: "         ",
                content: "Go green by booking yourself an e-rickshaw ride online and travel short distances without the hassle of managing and arranging change."
                , eRickshaw_clicked: true,
                foot1: "https://www.olacabs.com/webstatic/img/car-features/eco-friendly.svg",
                foot2: "https://www.olacabs.com/webstatic/img/car-features/value-money.svg",
                foot3: "https://www.olacabs.com/webstatic/img/car-features/cashless.svg",
                foot4: "",
                foot5: "",
                clickedclass3: "hovme",
                clickedclass4: "nohov",
                clickedclass5: "nohov",
            })
            this.setState({ eRickshaw: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-e-rick-active.svg", });

        }
        if (x === "kaliPeli") {
            this.setState({ bigImage: "https://www.olacabs.com/webstatic/img/fleet-image/kaali-peeli.png" });
            this.setState({
                heading: "Kaali Peeli", subheading: "Haggle-free cashless rides",
                content: "This offering by Ola allows you to book a local black-yellow cab like any other Ola cab."
                , kalipeli_clicked: true,
                foot1: "https://www.olacabs.com/webstatic/img/car-features/value-money.svg",
                foot2: "https://www.olacabs.com/webstatic/img/car-features/cashless.svg",
                foot3: "",
                foot4: "",
                foot5: "",
                clickedclass3: "nohov",
                clickedclass4: "nohov",
                clickedclass5: "nohov",
            })
            this.setState({ kaliPeli: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-kaali-peeli-active.svg", });

        }
    }
    render() {

        return (

            <div>
                <div style={{ backgroundColor: "white" }}>
                    <div style={{ paddingTop: "20px" }}>

                        <div className="scrollme" style={{ paddingTop: "20px", backgroundColor: "white", position: "relative", height: "120px" }}>
                            <div className="autoDiv hov" style={{ backgroundColor: "white" }} onMouseOver={this.hoverimg.bind(this, "autoActive")} onMouseLeave={this.outimg.bind(this, "autoInactive")} onClick={this.clickimg.bind(this, "auto")}><img src={this.state.auto}></img>
                            </div>
                            <div className="hov " style={{ float: "left", paddingTop: "20px", width: "100px", height: "auto", top: "2px", position: "absolute", marginLeft: "210px", paddingRight: "0px" }} onClick={this.clickimg.bind(this, "bike")} onMouseOver={this.hoverimg.bind(this, "bikeActive")} onMouseLeave={this.outimg.bind(this, "bikeInactive")}><img style={{ width: "85px", height: "85px", marginLeft: "5px" }} src={this.state.bike}></img>
                            </div>
                            <div className="hov" style={{ float: "left", width: "100px", paddingTop: "20px", height: "auto", top: "2px", position: "absolute", marginLeft: "420px", paddingRight: "-20px" }} onClick={this.clickimg.bind(this, "share")} onMouseOver={this.hoverimg.bind(this, "shareActive")} onMouseLeave={this.outimg.bind(this, "shareInactive")}><img style={{ width: "85px", height: "85px", marginLeft: "5px", }} src={this.state.share}></img>
                            </div>
                            <div className="hov" style={{ float: "left", width: "100px", paddingTop: "20px", height: "auto", top: "2px", position: "absolute", marginLeft: "630px", paddingRight: "-20px" }} onClick={this.clickimg.bind(this, "micro")} onMouseOver={this.hoverimg.bind(this, "microActive")} onMouseLeave={this.outimg.bind(this, "microInactive")}><img style={{ width: "85px", height: "85px", marginLeft: "5px" }} src={this.state.micro}></img>
                            </div>
                            <div className="hov" style={{ float: "left", width: "100px", paddingTop: "20px", height: "auto", top: "2px", position: "absolute", marginLeft: "840px", paddingRight: "-20px" }} onClick={this.clickimg.bind(this, "mini")} onMouseOver={this.hoverimg.bind(this, "miniActive")} onMouseLeave={this.outimg.bind(this, "miniInactive")}><img style={{ width: "85px", height: "85px", marginLeft: "5px" }} src={this.state.mini}></img>
                            </div>
                            <div className="hov" style={{ float: "left", width: "100px", paddingTop: "20px", height: "auto", top: "2px", position: "absolute", marginLeft: "1050px", paddingRight: "-20px" }} onClick={this.clickimg.bind(this, "primeSedan")} onMouseOver={this.hoverimg.bind(this, "primeSedanActive")} onMouseLeave={this.outimg.bind(this, "primeSedanInactive")}><img style={{ width: "85px", height: "85px", marginLeft: "5px" }} src={this.state.primeSedan}></img>
                            </div>
                            <div className="hov" style={{ float: "left", width: "100px", paddingTop: "20px", height: "auto", top: "2px", position: "absolute", marginLeft: "1260px", paddingRight: "-20px" }} onClick={this.clickimg.bind(this, "primePlay")} onMouseOver={this.hoverimg.bind(this, "primePlayActive")} onMouseLeave={this.outimg.bind(this, "primePlayInactive")}><img style={{ width: "85px", height: "85px", marginLeft: "5px" }} src={this.state.primePlay}></img>
                            </div>
                            <div className="hov" style={{ float: "left", width: "100px", paddingTop: "20px", height: "auto", top: "2px", position: "absolute", marginLeft: "1470px", paddingRight: "-20px" }} onClick={this.clickimg.bind(this, "primeSUV")} onMouseOver={this.hoverimg.bind(this, "primeSUVActive")} onMouseLeave={this.outimg.bind(this, "primeSUVInactive")}><img style={{ width: "85px", height: "85px", marginLeft: "5px" }} src={this.state.primeSUV}></img>
                            </div>
                            <div className="hov" style={{ float: "left", width: "100px", paddingTop: "20px", height: "auto", top: "2px", position: "absolute", marginLeft: "1680px", paddingRight: "-20px" }} onClick={this.clickimg.bind(this, "LUX")} onMouseOver={this.hoverimg.bind(this, "LUXActive")} onMouseLeave={this.outimg.bind(this, "LUXInactive")}><img style={{ width: "85px", height: "85px", marginLeft: "5px" }} src={this.state.primeLux}></img>
                            </div>
                            <div className="hov" style={{ float: "left", width: "100px", paddingTop: "20px", height: "auto", top: "2px", position: "absolute", marginLeft: "1890px", paddingRight: "-20px" }} onClick={this.clickimg.bind(this, "eRickShaw")} onMouseOver={this.hoverimg.bind(this, "eRickShawActive")} onMouseLeave={this.outimg.bind(this, "eRickShawInactive")}><img style={{ width: "85px", height: "85px", marginLeft: "5px" }} src={this.state.eRickshaw}></img>
                            </div>
                            <div className="hov" style={{ float: "left", width: "100px", paddingTop: "20px", height: "auto", top: "2px", position: "absolute", marginLeft: "2100px", paddingRight: "-20px" }} onClick={this.clickimg.bind(this, "kaliPeli")} onMouseOver={this.hoverimg.bind(this, "kaliPeliActive")} onMouseLeave={this.outimg.bind(this, "kaliPeliInactive")}><img style={{ width: "85px", height: "85px", marginLeft: "5px" }} src={this.state.kaliPeli}></img>
                            </div>



                        </div>
                    </div>
                </div>
                <div style={{ width: "100%", height: "545px", display: "inlineBlock", backgroundColor: "" }}>
                    <div style={{ backgroundColor: "#EDEDED", float: "left", width: "55%", height: "auto" }}> <div style={{ backgroundColor: "#EDEDED", height: "400px", width: "100%" }}><center> <img style={{ height: "350px", width: "455px", paddingTop: "50px" }} src={this.state.bigImage} ></img></center></div></div>
                    <div style={{ backgroundColor: "#EDEDED", float: "left", width: "45%", height: "auto" }}>
                        <div style={{ backgroundColor: "#EDEDED", height: "360px", color: "black", width: "auto", margin: "20px" }}>
                            <h1>{this.state.heading} </h1>
                            <h4>{this.state.subheading}</h4>
                            <p>{this.state.content}</p>
                            <div style={{ height: "90px", width: "100%", marginLeft: "-10px", }}>
                                <div className="hovme   " > <center><img style={{ height: "20px", width: "20px", marginTop: "10px" }} src={this.state.foot1} alt=""></img></center>
                                </div>
                                <div className="hovme   " style={{ marginLeft: "50" }}> <center><img style={{ height: "20px", width: "20px", marginTop: "10px" }} src={this.state.foot2} alt=""></img></center>
                                </div>
                                <div className={this.state.clickedclass3} style={{ marginLeft: "100" }}> <center><img style={{ height: "20px", width: "20px", marginTop: "10px" }} src={this.state.foot3} alt=""></img></center>
                                </div>
                                <div className={this.state.clickedclass4} style={{ marginLeft: "150" }}> <center><img style={{ height: "20px", width: "20px", marginTop: "10px" }} src={this.state.foot4} alt=""></img></center>
                                </div>
                                <div className={this.state.clickedclass5} style={{ marginLeft: "200" }}> <center><img style={{ height: "20px", width: "20px", marginTop: "10px" }} src={this.state.foot5} alt=""></img></center>
                                </div>


                            </div>

                        </div>
                    </div>

                </div>
                <div style={{ backgroundColor: "green", height: "12px", width: "100%" }}></div>
                {/* <div style={{ backgroundColor: "#EDEDED", height: "400px", width: "100%" }}><center> <img style={{ height: "200px", width: "250px", left: "40%", paddingTop: "50px" }} src={this.state.bigImage} ></img></center></div>
                <div style={{ backgroundColor: "#EDEDED", height: "auto", color: "black", width: "auto", margin: "20px" }}>
                    <h1>{this.state.heading} </h1>
                    <h4>{this.state.subheading}</h4>
                    <p>{this.state.content}</p>
                    <div style={{ height: "90px", width: "100%", marginLeft: "-10px", }}>
                        <div className="hovme   " > <center><img style={{ height: "20px", width: "20px", marginTop: "10px" }} src={this.state.foot1} alt=""></img></center>
                        </div>
                        <div className="hovme   " style={{ marginLeft: "50" }}> <center><img style={{ height: "20px", width: "20px", marginTop: "10px" }} src={this.state.foot2} alt=""></img></center>
                        </div>
                        <div className={this.state.clickedclass3} style={{ marginLeft: "100" }}> <center><img style={{ height: "20px", width: "20px", marginTop: "10px" }} src={this.state.foot3} alt=""></img></center>
                        </div>
                        <div className={this.state.clickedclass4} style={{ marginLeft: "150" }}> <center><img style={{ height: "20px", width: "20px", marginTop: "10px" }} src={this.state.foot4} alt=""></img></center>
                        </div>
                        <div className={this.state.clickedclass5} style={{ marginLeft: "200" }}> <center><img style={{ height: "20px", width: "20px", marginTop: "10px" }} src={this.state.foot5} alt=""></img></center>
                        </div>


                    </div>

                </div> */}
                <div style={{ backgroundColor: "#EDEDED", height: "auto", width: "100%" }}>
                    <div style={{ backgroundColor: "#EDEDED", marginTop: "10px" }}>
                        <div style={{ display: "inlineBlock", width: "100%", height: "auto" }}>
                            <div style={{ backgroundColor: "", height: "250px", width: "50%", float: "left" }}>  <div>
                                <div style={{ backgroundColor: "#EDEDED", width: "100%", height: "auto" }}>
                                    <h2 style={{ margin: "30px 0 -30px 0px", color: "black" }}>Book an Ola from the App</h2>
                                    <br />
                                    <h5 style={{ fontSize: "light", marginLeft: "0px", color: "rgba(0, 0, 0, 0.92)", opacity: "0.5" }}>Download the app for exclusive deals and ease of booking</h5>
                                </div>
                            </div>
                                <div style={{ height: "90px", width: "100%", marginLeft: "5px", }}>
                                    <div> <img style={{ height: "40px", width: "140px", marginTop: "10px" }} src="https://www.olacabs.com/webstatic/img/playstore.png" alt=""></img>
                                        <img style={{ height: "40px", width: "140px", marginTop: "10px", paddingLeft: "20px" }} src="https://www.olacabs.com/webstatic/img/appstore.png" alt=""></img>
                                        <img style={{ height: "40px", width: "140px", marginTop: "10px", paddingLeft: "20px" }} src="https://www.olacabs.com/webstatic/img/windowstore.png" alt=""></img>
                                    </div>


                                </div></div>
                            <div style={{ backgroundColor: "", height: "auto", width: "50%", float: "left" }}><img style={{ height: "auto", marginLeft: "10px", marginRight: "10px", width: "95%", marginTop: "15px" }} src="https://www.olacabs.com/webstatic/img/ola-booking.png"></img></div>
                        </div>
                    </div>
                </div>

                <div>
                    <div style={{ backgroundColor: "#EDEDED", width: "100%", height: "auto" }}>
                        <h2 style={{ margin: "30px 0 -30px 0px", color: "black" }}>.</h2>
                        <br />
                        <h5 style={{ fontSize: "light", marginLeft: "0px", color: "rgba(0, 0, 0, 0.92)", opacity: "0.5" }}></h5>
                    </div>
                </div>

                <div style={{ width: "100% ", display: "inlineBlock", border: "2px solid black" }}>
                    <div style={{ backgroundColor: "#EDEDED", height: "200px", width: "33.33%", float: "left" }}>
                        <div style={{ marginLeft: "10px", marginRight: "10px", display: "inlineBlock" }}>
                            <div style={{ backgroundColor: "#EDEDED", width: "100%", height: "auto" }}>

                                <div style={{ backgroundColor: "#EDEDED" }}>
                                    <div style={{ backgroundColor: "#EDEDED", float: "left" }}><img style={{ width: "80px", height: "80px", top: "2px", position: "relative", paddingBottom: "-10px", paddingRight: "-20px" }} src="https://www.olacabs.com/webstatic/img/ola-support.svg" ></img>

                                        <div style={{ float: "right", backgroundColor: "#EDEDED", color: "black", width: "57%", height: "auto" }}>
                                            <h3>24/7 Customer Support </h3>
                                            <p style={{ color: "black" }}>
                                                A dedicated 24x7 customer support team always at your service to help solve any problem
                             </p>
                                        </div></div></div></div></div>

                    </div>
                    <div style={{ backgroundColor: "#EDEDED", height: "200px", width: "33.33%", float: "left" }}>
                        <div style={{ marginLeft: "10px", marginRight: "10px", display: "inlineBlock" }}>
                            <div style={{ backgroundColor: "#EDEDED", width: "100%", height: "auto" }}>

                                <div style={{ backgroundColor: "#EDEDED" }}>
                                    <div style={{ backgroundColor: "#EDEDED", float: "left" }}><img style={{ width: "80px", height: "80px", top: "2px", position: "relative", paddingBottom: "-10px", paddingRight: "-20px" }} src="https://www.olacabs.com/webstatic/img/send_out_succour.svg" ></img>

                                        <div style={{ float: "right", backgroundColor: "#EDEDED", color: "black", width: "57%", height: "auto" }}>
                                            <h3>Your Safety First </h3>
                                            <p style={{ color: "black" }}>
                                                Keep your loved ones informed about your travel routes or call emergency services when in need
                             </p>
                                        </div></div></div></div></div>

                    </div>
                    <div style={{ backgroundColor: "#EDEDED", height: "200px", width: "33.33%", float: "left" }}>
                        <div style={{ marginLeft: "10px", marginRight: "10px", display: "inlineBlock" }}>
                            <div style={{ backgroundColor: "#EDEDED", width: "100%", height: "auto" }}>

                                <div style={{ backgroundColor: "#EDEDED" }}>
                                    <div style={{ backgroundColor: "#EDEDED", float: "left" }}><img style={{ width: "80px", height: "80px", top: "2px", position: "relative", paddingBottom: "-10px", paddingRight: "-20px" }} src="https://www.olacabs.com/webstatic/img/ola-best-driver.svg" ></img>

                                        <div style={{ float: "right", backgroundColor: "#EDEDED", color: "black", width: "57%", height: "auto" }}>
                                            <h3>Top Rated Driver-Partners </h3>
                                            <p style={{ color: "black" }}>
                                                All our driver-partners are background verified and trained to deliver only the best experience
                             </p>
                                        </div></div></div></div></div>


                    </div>
                </div>
                {/* <div style={{ height: "auto", width: "100%", backgroundColor: "#EDEDED", marginTop: "15px" }}>
                    <div style={{ marginLeft: "10px", marginRight: "10px", display: "inlineBlock" }}>
                        <div style={{ backgroundColor: "#EDEDED", width: "100%", height: "auto" }}>

                            <div style={{ backgroundColor: "#EDEDED" }}>
                                <div style={{ backgroundColor: "#EDEDED", float: "left" }}><img style={{ width: "80px", height: "80px", top: "2px", position: "relative", paddingBottom: "-10px", paddingRight: "-20px" }} src="https://www.olacabs.com/webstatic/img/ola-support.svg" ></img>

                                    <div style={{ float: "right", backgroundColor: "#EDEDED", color: "black", width: "57%", height: "auto" }}>
                                        <h3>24/7 Customer Support </h3>
                                        <p style={{ color: "black" }}>
                                            A dedicated 24x7 customer support team always at your service to help solve any problem
                             </p>
                                    </div></div></div></div></div>




                </div> */}
                {/* <div style={{ height: "auto", width: "100%", backgroundColor: "#EDEDED", marginTop: "15px" }}>
                    <div style={{ marginLeft: "10px", marginRight: "10px", display: "inlineBlock" }}>
                        <div style={{ backgroundColor: "#EDEDED", width: "100%", height: "auto" }}>

                            <div style={{ backgroundColor: "#EDEDED" }}>
                                <div style={{ backgroundColor: "#EDEDED", float: "left" }}><img style={{ width: "80px", height: "80px", top: "2px", position: "relative", paddingBottom: "-10px", paddingRight: "-20px" }} src="https://www.olacabs.com/webstatic/img/send_out_succour.svg" ></img>

                                    <div style={{ float: "right", backgroundColor: "#EDEDED", color: "black", width: "57%", height: "auto" }}>
                                        <h3>Your Safety First </h3>
                                        <p style={{ color: "black" }}>
                                            Keep your loved ones informed about your travel routes or call emergency services when in need
                             </p>
                                    </div></div></div></div></div>




                </div> */}
                {/* <div style={{ height: "auto", width: "100%", backgroundColor: "#EDEDED", marginTop: "15px" }}>
                    <div style={{ marginLeft: "10px", marginRight: "10px", display: "inlineBlock" }}>
                        <div style={{ backgroundColor: "#EDEDED", width: "100%", height: "auto" }}>

                            <div style={{ backgroundColor: "#EDEDED" }}>
                                <div style={{ backgroundColor: "#EDEDED", float: "left" }}><img style={{ width: "80px", height: "80px", top: "2px", position: "relative", paddingBottom: "-10px", paddingRight: "-20px" }} src="https://www.olacabs.com/webstatic/img/ola-best-driver.svg" ></img>

                                    <div style={{ float: "right", backgroundColor: "#EDEDED", color: "black", width: "57%", height: "auto" }}>
                                        <h3>Top Rated Driver-Partners </h3>
                                        <p style={{ color: "black" }}>
                                            All our driver-partners are background verified and trained to deliver only the best experience
                             </p>
                                    </div></div></div></div></div>
                </div> */}

                {/* start of footer */}
                <div style={{ backgroundColor: "white", height: "12px", width: "100%" }}></div>
                <div style={{ color: "white", marginTop: "100px" }}>
                    <div style={{ height: "auto", width: "100%", backgroundColor: "white" }}>
                        <div style={{ marginLeft: "10px", marginRight: "10px", marginBottom: "-10px", }}>



                            <div style={{ backgroundColor: "#3f3f3f", color: "white", float: "left", height: "auto", width: "100%", paddingTop: "20px", paddingBottom: "20px" }}>
                                <h3> Top Visited Cities</h3>
                                <div style={{ backgroundColor: "white", height: "1px", width: "100%" }}></div>
                            </div>

                        </div>




                    </div>
                    {/* routes  */}
                    <div style={{ width: "100%", height: "auto", backgroundColor: "#3f3f3f", display: "inlineBlock" }}>
                        <div style={{ width: "31%", height: "auto", backgroundColor: "#3f3f3f", float: "left" }}>
                            <h3 style={{ color: "white" }}>  Popular Outstation Routes </h3>
                        </div>
                        <div style={{ width: "23%", height: "auto", backgroundColor: "#3f3f3f", float: "left" }}>
                            <center style={{ marginBottom: "40px" }}>
                                <h5 style={{ color: "white" }}>Northern India</h5>

                                <a style={{ phef }} id="ao" href="/">  Delhi to Chandigarh Outstation Cabs
                                </a>
                                <a style={{ phef }} id="ao" href="/"> <p> Delhi to Agra Outstation Cabs</p>
                                </a>
                                <a style={{ phef }} id="ao" href="/"> <p> Delhi to Jaipur Outstation Cabs</p>
                                </a>
                                <a style={{ phef }} id="ao" href="/"> <p> Delhi to Shimla Outstation Cabs</p>
                                </a>
                                <a style={{ phef }} id="ao" href="/"> <p> Delhi to Nainital Outstation Cabs</p>
                                </a>
                                <a style={{ phef }} id="ao" href="/"> <p>Jaipur to Delhi Outstation Cabs</p>
                                </a>


                            </center>
                        </div>
                        <div style={{ width: "23%", height: "auto", backgroundColor: "#3f3f3f", float: "left" }}>
                            <center style={{ marginBottom: "40px" }}><h3 style={{ color: "white" }}></h3>
                                <h5 style={{ color: "white" }}>Southern India</h5>

                                <a style={{ phef }} id="ao" href="/"> <p> Chennai to Pondicherry Outstation Cabs</p>
                                </a>
                                <a style={{ phef }} id="ao" href="/"> <p> Chennai to Tirupati Outstation Cabs</p>
                                </a>
                                <a style={{ phef }} id="ao" href="/"> <p> Chennai to Vellore Outstation Cabs</p>
                                </a>
                                <a style={{ phef }} id="ao" href="/"> <p> Hyderabad to Vijayawada Outstation Cabs</p>
                                </a>
                                <a style={{ phef }} id="ao" href="/"> <p> Hyderabad to Warangal Outstation Cabs</p>
                                </a>
                                <a style={{ phef }} id="ao" href="/"> <p>Hyderabad to Tirupati Outstation Cabs</p>
                                </a>


                            </center>
                        </div>
                        <div style={{ width: "23%", height: "auto", backgroundColor: "#3f3f3f", float: "left" }}>
                            <center style={{ marginBottom: "40px" }}><h3 style={{ color: "white" }}></h3>
                                <h5 style={{ color: "white" }}>East & West India</h5>

                                <a style={{ phef }} id="ao" href="/"> <p> Mumbai to Pune Outstation Cabs</p>
                                </a>
                                <a style={{ phef }} id="ao" href="/"> <p> Mumbai to Mahabaleshwar Outstation Cabs</p>
                                </a>
                                <a style={{ phef }} id="ao" href="/"> <p> Mumbai to Lonavala Outstation Cabs</p>
                                </a>
                                <a style={{ phef }} id="ao" href="/"> <p> Mumbai to Nashik Outstation Cabs</p>
                                </a>
                                <a style={{ phef }} id="ao" href="/"> <p> Mumbai to Matheran Outstation Cabs</p>
                                </a>
                                <a style={{ phef }} id="ao" href="/"> <p>Mumbai to Shirdi Outstation Cabs</p>
                                </a>


                            </center>
                        </div>
                        <div style={{ backgroundColor: "red", height: "1px", width: "100%", marginLeft: "10px", marginRight: "10px" }}></div>

                        {/* <div style={{ height: "auto", width: "100%", }}>
                        <div style={{ marginLeft: "-10px", marginRight: "-10px", display: "inlineBlock" }}>
</div>


                            <div style={{ backgroundColor: "#3f3f3f", float: "left", height: "auto", width: "100%" }}>
                                <center style={{ marginBottom: "40px" }}><h3 style={{ color: "white" }}>  Popular Outstation Routes </h3>
                                    <h5 style={{ color: "white" }}>Northern India</h5>

                                    <a style={phef} id="cl" href="/">  Delhi to Chandigarh Outstation Cabs
                                </a>
                                    <a style={phef} id="cl" href="/"> <p> Delhi to Agra Outstation Cabs</p>
                                    </a>
                                    <a style={phef} id="cl" href="/"> <p> Delhi to Jaipur Outstation Cabs</p>
                                    </a>
                                    <a style={phef} id="cl" href="/"> <p> Delhi to Shimla Outstation Cabs</p>
                                    </a>
                                    <a style={phef} id="cl" href="/"> <p> Delhi to Nainital Outstation Cabs</p>
                                    </a>
                                    <a style={phef} id="cl" href="/"> <p>Jaipur to Delhi Outstation Cabs</p>
                                    </a>


                                </center>
                                <center style={{ marginBottom: "40px" }}><h3 style={{ color: "white" }}></h3>
                                    <h5 style={{ color: "white" }}>Southern India</h5>

                                    <a style={phef} id="cl" href="/"> <p> Chennai to Pondicherry Outstation Cabs</p>
                                    </a>
                                    <a style={phef} id="cl" href="/"> <p> Chennai to Tirupati Outstation Cabs</p>
                                    </a>
                                    <a style={phef} id="cl" href="/"> <p> Chennai to Vellore Outstation Cabs</p>
                                    </a>
                                    <a style={phef} id="cl" href="/"> <p> Hyderabad to Vijayawada Outstation Cabs</p>
                                    </a>
                                    <a style={phef} id="cl" href="/"> <p> Hyderabad to Warangal Outstation Cabs</p>
                                    </a>
                                    <a style={phef} id="cl" href="/"> <p>Hyderabad to Tirupati Outstation Cabs</p>
                                    </a>


                                </center>
                                <center style={{ marginBottom: "40px" }}><h3 style={{ color: "white" }}></h3>
                                    <h5 style={{ color: "white" }}>East & West India</h5>

                                    <a style={phef} id="cl" href="/"> <p> Mumbai to Pune Outstation Cabs</p>
                                    </a>
                                    <a style={phef} id="cl" href="/"> <p> Mumbai to Mahabaleshwar Outstation Cabs</p>
                                    </a>
                                    <a style={phef} id="cl" href="/"> <p> Mumbai to Lonavala Outstation Cabs</p>
                                    </a>
                                    <a style={phef} id="cl" href="/"> <p> Mumbai to Nashik Outstation Cabs</p>
                                    </a>
                                    <a style={phef} id="cl" href="/"> <p> Mumbai to Matheran Outstation Cabs</p>
                                    </a>
                                    <a style={phef} id="cl" href="/"> <p>Mumbai to Shirdi Outstation Cabs</p>
                                    </a>
                                    <a style={phef} id="cl" href="/"> <p>+ Expand more routes</p>
                                    </a>

                                </center>
                            </div></div>
 */}



                    </div>
                    {/* social links */}
                    <div style={{ height: "auto", width: "100%", }}>
                        <div style={{ marginLeft: "-10px", marginRight: "-10px", display: "inlineBlock" }}>



                            <div style={{ backgroundColor: "#3f3f3f", float: "left", height: "auto", width: "100%" }}>
                                <center style={{ marginTop: "10px", marginBottom: "10px" }} ><a id="a" href="/"> <h5>+ Expand more routes</h5></a></center>
                                <center style={{ marginTop: "10px", marginBottom: "10px" }} > <h4>Social Links</h4>
                                    <a href="/">
                                        <div>
                                            <img style={{ padding: "25px", paddingTop: "15px" }} src="https://www.olacabs.com/webstatic/img/footer/fb-footer-icon.svg"></img>
                                            <img style={{ padding: "25px", paddingTop: "15px" }} src="https://www.olacabs.com/webstatic/img/footer/insta-footer-icon.svg"></img>
                                            <img style={{ padding: "25px", paddingTop: "15px" }} src="https://www.olacabs.com/webstatic/img/footer/youtube-footer-icon.svg"></img>
                                            <img style={{ padding: "25px", paddingTop: "15px" }} src="https://www.olacabs.com/webstatic/img/footer/twitter-footer-icon.svg"></img>
                                        </div>
                                    </a></center>
                            </div></div>



                    </div>

                    {/* discover ola */}
                    <div style={{ backgroundColor: "#3f3f3f", marginLeft: "-10px", marginRight: "-10px" }} >

                        <MediaQuery query="( min-device-width: 769px)">
                            <div style={{ height: "auto", width: "100%", }}>
                                <div style={{ marginLeft: "-10px", marginRight: "-10px", display: "inlineBlock", }}>



                                    <div style={{ backgroundColor: "#3f3f3f", float: "left", height: "auto", width: "100%", display: "inlineBlock", minWidth: "500px" }}>
                                        <div style={{ margin: "20px", position: "absolute" }}>
                                            <div style={{ position: "absolute", fontSize: "12px", width: "70px", float: "left", }}>About-Ola</div>
                                            <div style={{ position: "absolute", fontSize: "12px", marginLeft: "150px", float: "left", }}>Carrers</div>
                                            <div style={{ position: "absolute", fontSize: "12px", marginLeft: "230px", float: "left", }}>Offers</div>
                                            <div style={{ marginLeft: "300px", position: "absolute", fontSize: "12px", width: "80px" }}>Contact us</div>
                                            <div style={{ position: "absolute", fontSize: "12px", marginLeft: "420px", marginTop: "  ", float: "left", width: "100px" }}>Media Center</div>
                                            <div style={{ marginLeft: "570px", position: "absolute", fontSize: "12px", marginTop: "  ", width: "80px" }}>Book a ride</div>
                                        </div>
                                        <div style={{ margin: "20px", position: "absolute" }}>



                                            <div style={{ position: "absolute", fontSize: "12px", marginLeft: "250px", marginTop: "50px  ", float: "left", width: "100px" }}>Become a driver</div>
                                        </div>
                                        <div style={{ margin: "20px", position: "absolute" }}>



                                        </div>
                                        {/* <div style={{margin:"20px",margintop:"200px",position:"absolute"}}>
<div style={{ position: "absolute", fontSize: "14px" }}>Book a ride</div>
<div style={{ position: "absolute", fontSize: "14px", marginLeft: "100px", float: "left", }}>Become a driver</div>

</div> */}
                                    </div>
                                </div>

                            </div>
                        </MediaQuery>
                        {/* <MediaQuery query="( max-device-width: 768px)">  <center style={{ marginTop: "10px", paddingBottom: "10px" }} > <h4>DiscoverOla</h4></center>
                        </MediaQuery> */}
                        <MediaQuery query="( min-device-width: 640px)">

                            <MediaQuery query="( max-device-width: 768px)">
                                <div style={{ height: "auto", width: "100%", }}>
                                    <div style={{ marginLeft: "-10px", marginRight: "-10px", display: "inlineBlock", }}>



                                        <div style={{ backgroundColor: "#3f3f3f", float: "left", height: "auto", width: "100%", display: "inlineBlock", minWidth: "500px" }}>
                                            <div style={{ margin: "20px", position: "absolute" }}>
                                                <div style={{ position: "absolute", fontSize: "12px", width: "70px", float: "left", }}>About-Ola</div>
                                                <div style={{ position: "absolute", fontSize: "12px", marginLeft: "150px", float: "left", }}>Carrers</div>
                                                <div style={{ position: "absolute", fontSize: "12px", marginLeft: "230px", float: "left", }}>Offers</div>
                                                <div style={{ marginLeft: "300px", position: "absolute", fontSize: "12px", width: "80px" }}>Contact us</div>
                                                <div style={{ position: "absolute", fontSize: "12px", marginLeft: "420px", marginTop: "  ", float: "left", width: "100px" }}>Media Center</div>
                                                <div style={{ marginLeft: "570px", position: "absolute", fontSize: "12px", marginTop: "  ", width: "80px" }}>Book a ride</div>
                                            </div>
                                            <div style={{ margin: "20px", position: "absolute" }}>



                                                <div style={{ position: "absolute", fontSize: "12px", marginLeft: "250px", marginTop: "50px  ", float: "left", width: "100px" }}>Become a driver</div>
                                            </div>
                                            <div style={{ margin: "20px", position: "absolute" }}>



                                            </div>
                                            {/* <div style={{margin:"20px",margintop:"200px",position:"absolute"}}>
<div style={{ position: "absolute", fontSize: "14px" }}>Book a ride</div>
<div style={{ position: "absolute", fontSize: "14px", marginLeft: "100px", float: "left", }}>Become a driver</div>

</div> */}
                                        </div>
                                    </div>

                                </div>
                            </MediaQuery>
                        </MediaQuery>
                        <MediaQuery query="( min-device-width: 518px)">

                            <MediaQuery query="( max-device-width: 639px)">
                                <div style={{ height: "auto", width: "100%", }}>
                                    <div style={{ marginLeft: "-10px", marginRight: "-10px", display: "inlineBlock", }}>



                                        <div style={{ backgroundColor: "#3f3f3f", float: "left", height: "auto", width: "100%", display: "inlineBlock" }}>
                                            <div style={{ margin: "20px", position: "absolute" }}>
                                                <div style={{ position: "absolute", fontSize: "12px", width: "70px", float: "left", }}>About-Ola</div>
                                                <div style={{ position: "absolute", fontSize: "12px", marginLeft: "150px", float: "left", }}>Carrers</div>
                                                <div style={{ position: "absolute", fontSize: "12px", marginLeft: "230px", float: "left", }}>Offers</div>
                                                <div style={{ marginLeft: "300px", position: "absolute", fontSize: "12px", width: "80px" }}>Contact us</div>
                                                <div style={{ position: "absolute", fontSize: "12px", marginLeft: "420px", marginTop: "  ", float: "left", width: "100px" }}>Media Center</div>
                                            </div>
                                            <div style={{ margin: "20px", position: "absolute" }}>


                                                <div style={{ marginLeft: "150px", position: "absolute", fontSize: "12px", marginTop: "50px  ", width: "80px" }}>Book a ride</div>
                                                <div style={{ position: "absolute", fontSize: "12px", marginLeft: "250px", marginTop: "50px  ", float: "left", width: "100px" }}>Become a driver</div>
                                            </div>
                                            <div style={{ margin: "20px", position: "absolute" }}>



                                            </div>
                                            {/* <div style={{margin:"20px",margintop:"200px",position:"absolute"}}>
  <div style={{ position: "absolute", fontSize: "14px" }}>Book a ride</div>
  <div style={{ position: "absolute", fontSize: "14px", marginLeft: "100px", float: "left", }}>Become a driver</div>
 
</div> */}
                                        </div>
                                    </div>

                                </div>
                            </MediaQuery></MediaQuery>

                        <MediaQuery query="( min-device-width: 397px)">

                            <MediaQuery query="( max-device-width: 517px)">
                                <div style={{ height: "auto", width: "100%", }}>
                                    <div style={{ marginLeft: "-10px", marginRight: "-10px", display: "inlineBlock", }}>



                                        <div style={{ backgroundColor: "#3f3f3f", float: "left", height: "auto", width: "100%", display: "inlineBlock" }}>    <div style={{ margin: "20px", position: "absolute" }}>
                                            <div style={{ position: "absolute", fontSize: "12px", width: "70px", float: "left", }}>About-Ola</div>
                                            <div style={{ position: "absolute", fontSize: "12px", marginLeft: "150px", float: "left", }}>Carrers</div>
                                            <div style={{ position: "absolute", fontSize: "12px", marginLeft: "230px", float: "left", }}>Offers</div>
                                            <div style={{ marginLeft: "300px", position: "absolute", fontSize: "12px", width: "80px" }}>Contact us</div>
                                        </div>
                                            <div style={{ margin: "20px", position: "absolute" }}>

                                                <div style={{ position: "absolute", fontSize: "12px", marginLeft: "20px", marginTop: "50px  ", float: "left", width: "100px" }}>Media Center</div>
                                                <div style={{ marginLeft: "150px", position: "absolute", fontSize: "12px", marginTop: "50px  ", width: "80px" }}>Book a ride</div>
                                                <div style={{ position: "absolute", fontSize: "12px", marginLeft: "250px", marginTop: "50px  ", float: "left", width: "100px" }}>Become a driver</div>
                                            </div>
                                            <div style={{ margin: "20px", position: "absolute" }}>



                                            </div>
                                            {/* <div style={{margin:"20px",margintop:"200px",position:"absolute"}}>
                          <div style={{ position: "absolute", fontSize: "14px" }}>Book a ride</div>
                          <div style={{ position: "absolute", fontSize: "14px", marginLeft: "100px", float: "left", }}>Become a driver</div>
                         
                      </div> */}
                                        </div>
                                    </div>

                                </div>
                            </MediaQuery></MediaQuery>

                        <MediaQuery query="( min-device-width: 351px) ">
                            <MediaQuery query="( max-device-width: 396px) ">

                                <div style={{ height: "auto", width: "100%", }}>
                                    <div style={{ marginLeft: "-10px", marginRight: "-10px", display: "inlineBlock", }}>



                                        <div style={{ backgroundColor: "#3f3f3f", float: "left", height: "auto", width: "100%", display: "inlineBlock" }}>    <div style={{ margin: "20px", position: "absolute" }}>
                                            <div style={{ position: "absolute", fontSize: "12px", width: "70px", float: "left", }}>About-Ola</div>
                                            <div style={{ position: "absolute", fontSize: "12px", marginLeft: "150px", float: "left", }}>Carrers</div>
                                            <div style={{ position: "absolute", fontSize: "12px", marginLeft: "270px", float: "right", }}>Offers</div>
                                        </div>
                                            <div style={{ margin: "20px", position: "absolute" }}>
                                                <div style={{ marginLeft: "20px", position: "absolute", fontSize: "12px", marginTop: "50px  ", width: "80px" }}>Contact us</div>
                                                <div style={{ position: "absolute", fontSize: "12px", marginLeft: "150px", marginTop: "50px  ", float: "left", width: "100px" }}>Media Center</div>
                                                <div style={{ marginLeft: "250px", position: "absolute", fontSize: "12px", marginTop: "50px  ", width: "80px" }}>Book a ride</div>
                                            </div>
                                            <div style={{ margin: "20px", position: "absolute" }}>

                                                <div style={{ position: "absolute", fontSize: "12px", marginLeft: "150px", marginTop: "100px  ", float: "left", width: "100px" }}>Become a driver</div>

                                            </div>
                                            {/* <div style={{margin:"20px",margintop:"200px",position:"absolute"}}>
                          <div style={{ position: "absolute", fontSize: "14px" }}>Book a ride</div>
                          <div style={{ position: "absolute", fontSize: "14px", marginLeft: "100px", float: "left", }}>Become a driver</div>
                         
                      </div> */}
                                        </div>
                                    </div>




                                </div>
                            </MediaQuery>
                        </MediaQuery>


                        <MediaQuery query="(max-device-width: 350px)">


                            <div style={{ height: "auto", width: "100%", }}>
                                <div style={{ marginLeft: "-10px", marginRight: "-10px", display: "inlineBlock", backgroundColor: "#3f3f3f" }}>



                                    <div style={{ backgroundColor: "#3f3f3f", float: "left", height: "auto", width: "100%", display: "inlineBlock" }}>    <div style={{ margin: "20px", position: "absolute" }}>
                                        <div style={{ position: "absolute", fontSize: "12px", width: "70px", float: "left", }}>About-Ola</div>
                                        <div style={{ position: "absolute", fontSize: "12px", marginLeft: "100px", float: "left", }}>Carrers</div>
                                        <div style={{ position: "absolute", fontSize: "12px", marginLeft: "180px", float: "left", }}>Offers</div>
                                    </div>
                                        <div style={{ margin: "20px", position: "absolute" }}>
                                            <div style={{ marginLeft: "20px", position: "absolute", fontSize: "12px", marginTop: "50px  ", width: "80px" }}>Contact us</div>
                                            <div style={{ position: "absolute", fontSize: "12px", marginLeft: "150px", marginTop: "50px  ", float: "left", width: "100px" }}>Media Center</div>

                                        </div>
                                        <div style={{ margin: "20px", position: "absolute" }}>
                                            <div style={{ marginLeft: "20px", position: "absolute", fontSize: "12px", marginTop: "100px  ", width: "80px" }}>Book a ride</div>
                                            <div style={{ position: "absolute", fontSize: "12px", marginLeft: "150px", marginTop: "100px  ", float: "left", width: "100px" }}>Become a driver</div>

                                        </div>

                                    </div>
                                </div>




                            </div>
                        </MediaQuery>
                    </div>

                    <div style={{ height: "auto", width: "100%", }}>
                        <div style={{ marginLeft: "-10px", marginRight: "-10px", display: "inlineBlock" }}>



                            <div style={{ backgroundColor: "#3f3f3f", float: "left", height: "175px", width: "100%" }}>

                            </div></div>




                    </div>
                    <div style={{ height: "auto", width: "100%", }}>
                        <div style={{ marginLeft: "-10px", marginRight: "-10px", display: "inlineBlock" }}>



                            <div style={{ backgroundColor: "#3f3f3f", float: "left", height: "175px", width: "100%" }}>
                                <center> <img src="https://www.olacabs.com/webstatic/img/footer-ola-logo.svg"></img></center>
                                <div style={{ marginTop: "10px" }}>
                                    <div style={{ marginLeft: "10px", position: "absolute", width: "32%", fontSize: "12px" }}><center>Notices</center></div>
                                    <div style={{ position: "absolute", width: "33%", marginLeft: "33%", fontSize: "12px" }}><center>T&C</center></div>
                                    <div style={{ position: "absolute", width: "33%", marginLeft: "67%", fontSize: "12px" }}><center>Privacy Policy</center></div>
                                    <div></div>
                                </div>
                                <center style={{ marginTop: "70px", fontSize: "11px" }}>Copyright © 2018 ANI Technologies Pvt. Ltd. All rights reserved.</center>
                            </div></div>




                    </div>
                    {/* <div style={{ backgroundColor: "red", height: "500px", width: "100%", position: "absolute" }}></div> */}
                </div>
            </div>

        );
    }


} 