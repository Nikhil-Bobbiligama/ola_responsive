import React, { Component } from "react";

import "./styles/Fleet.css"

export default class Fleet extends Component {
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
            bigImage:"", 
            heading:"",
            subheading:"",
            content:"",
            simg1:"",
            simg2:"",
            simg3:"",
            simg4:"",
        }
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
        if (x === "autoInactive")
            this.setState({ auto: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-auto.svg" })
        if (x === "bikeInactive") {
            this.setState({ bike: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-bike.svg" });
        }
        if (x === "shareInactive") {
            this.setState({ share: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-share.svg" });
        }
        if (x === "microInactive") {
            this.setState({ micro: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-micro.svg" });
        }
        if (x === "miniInactive") {
            this.setState({ mini: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-mini.svg" });
        }
        if (x === "primeSedanInactive") {
            this.setState({ share: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-sedan.svg" });
        }
        if (x === "primePlayInactive") {
            this.setState({ primePlay: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-play.svg" });
        }
        if (x === "primeSUVInactive") {
            this.setState({ primeSUV: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-suv.svg" });
        }
        if (x === "LUXInactive") {
            this.setState({ primeLux: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-lux.svg" });
        }
        if (x === "eRickShawInactive") {
            this.setState({ eRickshaw: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-e-rick.svg" });
        }
        if (x === "kaliPeliInactive") {
            this.setState({ kaliPeli: "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-kaali-peeli.svg" });
        }
    }
    clickimg(x)
    {
        if(x==="auto"){
    this.setState({bigImage:"https://www.olacabs.com/webstatic/img/fleet-image/auto.png"});
    this.setState({heading:"Auto",subheading:"Get an Auto at your doorstep",
    content:"The all too familiar auto ride, minus the hassle of waiting and haggling for price. A convenient way to travel everyday." })
        }
    }
    render() {

        return (

            <div>
                <div style={{backgroundColor:"white"}}>
                    <h2 style={{ margin: "30px 0 -30px 0px", color: "black" }}>Meet our Awesome Fleet</h2>
                    <br />
                    <h5 style={{ marginLeft: "0px", color: "rgba(0, 0, 0, 0.92)", opacity: "0.5" }}>The widest variety of cars to choose from </h5>
                    <div style={{paddingTop:"20px"}}>
                        <div className="scrollme" style={{paddingTop:"20px", backgroundColor: "white", position: "relative",height: "120px" }}>
                            <div className="autoDiv hov" style={{ backgroundColor: "white" }}  onMouseOver={this.hoverimg.bind(this, "autoActive")} onMouseLeave={this.outimg.bind(this, "autoInactive")} onClick={this.clickimg.bind(this,"auto")}><img src={this.state.auto}></img>
                            </div>
                            <div className="hov" style={{ float: "left",paddingTop:"20px", width: "100px", height: "auto", top: "2px", position: "absolute", marginLeft: "210px", paddingRight: "0px" }} onMouseOver={this.hoverimg.bind(this, "bikeActive")} onMouseLeave={this.outimg.bind(this, "bikeInactive")}><img style={{ width: "85px", height: "85px" }} src={this.state.bike}></img>
                            </div>
                            <div className="hov" style={{  float: "left", width: "100px",paddingTop:"20px", height: "auto", top: "2px", position: "absolute", marginLeft: "420px", paddingRight: "-20px" }}onMouseOver={this.hoverimg.bind(this, "shareActive")} onMouseLeave={this.outimg.bind(this, "shareInactive")}><img style={{ width: "85px", height: "85px" }} src={this.state.share}></img>
                            </div>
                            <div className="hov" style={{ float: "left", width: "100px",paddingTop:"20px", height: "auto", top: "2px", position: "absolute", marginLeft: "630px", paddingRight: "-20px" }}onMouseOver={this.hoverimg.bind(this, "microActive")} onMouseLeave={this.outimg.bind(this, "microInactive")}><img style={{ width: "85px", height: "85px" }} src={this.state.micro}></img>
                            </div>
                            <div className="hov" style={{  float: "left", width: "100px", paddingTop:"20px",height: "auto", top: "2px", position: "absolute", marginLeft: "840px", paddingRight: "-20px" }}onMouseOver={this.hoverimg.bind(this, "miniActive")} onMouseLeave={this.outimg.bind(this, "miniInactive")}><img style={{ width: "85px", height: "85px" }} src={this.state.mini}></img>
                            </div>
                            <div className="hov" style={{  float: "left", width: "100px", paddingTop:"20px",height: "auto", top: "2px", position: "absolute", marginLeft: "1050px", paddingRight: "-20px" }}onMouseOver={this.hoverimg.bind(this, "primeSedanActive")} onMouseLeave={this.outimg.bind(this, "primeSedanInactive")}><img style={{ width: "85px", height: "85px" }} src={this.state.primeSedan}></img>
                            </div>
                            <div className="hov" style={{  float: "left", width: "100px",paddingTop:"20px", height: "auto", top: "2px", position: "absolute", marginLeft: "1260px", paddingRight: "-20px" }}onMouseOver={this.hoverimg.bind(this, "primePlayActive")} onMouseLeave={this.outimg.bind(this, "primePlayInactive")}><img style={{ width: "85px", height: "85px" }} src={this.state.primePlay}></img>
                            </div>
                            <div className="hov" style={{  float: "left", width: "100px", paddingTop:"20px",height: "auto", top: "2px", position: "absolute", marginLeft: "1470px", paddingRight: "-20px" }}onMouseOver={this.hoverimg.bind(this, "primeSUVActive")} onMouseLeave={this.outimg.bind(this, "primeSUVInactive")}><img style={{ width: "85px", height: "85px" }} src={this.state.primeSUV}></img>
                            </div>
                            <div className="hov" style={{  float: "left", width: "100px", paddingTop:"20px",height: "auto", top: "2px", position: "absolute", marginLeft: "1680px", paddingRight: "-20px" }}onMouseOver={this.hoverimg.bind(this, "LUXActive")} onMouseLeave={this.outimg.bind(this, "LUXInactive")}><img style={{ width: "85px", height: "85px" }} src={this.state.primeLux}></img>
                            </div>
                            <div className="hov" style={{  float: "left", width: "100px", paddingTop:"20px",height: "auto", top: "2px", position: "absolute", marginLeft: "1890px", paddingRight: "-20px" }}onMouseOver={this.hoverimg.bind(this, "eRickShawActive")} onMouseLeave={this.outimg.bind(this, "eRickShawInactive")}><img style={{ width: "85px", height: "85px" }} src={this.state.eRickshaw}></img>
                            </div>
                            <div className="hov" style={{  float: "left", width: "100px",paddingTop:"20px", height: "auto", top: "2px", position: "absolute", marginLeft: "2100px", paddingRight: "-20px" }}onMouseOver={this.hoverimg.bind(this, "kaliPeliActive")} onMouseLeave={this.outimg.bind(this, "kaliPeliInactive")}><img style={{ width: "85px", height: "85px" }} src={this.state.kaliPeli}></img>
                            </div>
                           


                        </div>
                    </div>
                    <div style={{backgroundColor:"#EDEDED",height:"400px", width:"100%"}}><center> <img style={{height:"200px",left:"40%"}} src={this.state.bigImage} ></img></center></div>
                    <div style={{backgroundColor:"#EDEDED",height:"auto", width:"auto", margin:"20px"}}>
                    <h1>{this.state.heading} </h1>
                    <h4>{this.state.subheading}</h4>
                    <p>{this.state.content}</p>
                    
                    </div>
                    
                   

                </div>
               
            </div>

        );
    }


} 