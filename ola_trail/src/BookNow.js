import React, { Component } from 'react';

import './App.css';
import './styles/ThreeImages.css'
import './styles/BookNow.css'
// import WhyOla from './WhyOla'
const overlay = {
    zIndex: 1,
    backgroundColor: "transparent",
    height: "auto",
    left: "0px",
    overflow: "hidden",
    position: "relative",
    top: "200px",
    width: "auto",

    color: "white"
}

const overlay_text = {

    color: "white",
    fontSize: "30px",
    fontWeight: "Bold",
    textAlign: "left",
    margin: "15px",
    marginLeft: "40px",
}
const overlay_text2 = {

    color: "white",
    fontSize: "15px",
    fontWeight: "normal",
    textAlign: "left",
    margin: "10px",
    marginLeft: "40px",

}
const overlay_text3 = {

    color: "#CCE500",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "left",
    margin: "10px",
    marginLeft: "40px",

}
const overlay_tab = {


    height: "auto",

    borderRadius: "5px",
    overflow: "hidden",
    position: "relative",
    right: "1px",

    backgroundColor: "white",
    //   left: "1px",
    width: "98%",

    padding: "5px",
    color: "white"
};
const simple_header = {

    height: 'auto',
    width: '100%',
    position: 'relative',
    fontSize: 14,
    left: "5px",
    margin: "2px 10px 20px 10px",

    fontWeight: "bold",
    backgroundColor: "white",
    color: 'black',
    alignContent: 'left'


}
const content_left = {
    float: "left",

    textAlign: "center",
    backgroundColor: "#CDDC39",

    borderRadius: "15px",
    marginTop: "-5px",
    paddingTop: "5px",

    // margin: "5px",

    // marginRight: "10px",

    color: "black",
    height: "auto",
    width: "32%"

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
    width: "32%"

}
const content_left_no_border_outstation = {
    float: "left",

    textAlign: "center",
    backgroundColor: "white",

    borderRadius: "15px",

    // margin: "5px 2px 5px 5px",
    // marginRight: "10px",



    textWeight: "bold",
    height: "auto",
    width: "32%"

}

class BookNow extends Component {
    constructor() {
        super();
        this.state = {
            bigimage: "https://olawebcdn.com/images/v1/bg_city.jpg",
            rounddiv: "",
            imgtitle: "",
            imgsubtitle1: "",
            imgsubtitle2: "",
            leftcontent1: "",
            leftcontent2: "",
            hint2: "",
            thirdrow:"Notvisibleme",
            visibleme:true,
            row4div:"hidden",

        }


    }
    componentWillMount()
    {
        this.headingclick("daily");
    }
    clicklater(str) {
     
        this.setState({row4div:true})

    }
    clicknow(str){
        this.setState({row4div:"hidden"})
    }
    headingclick(str) {

        if (str === "rentals") {
            this.setState({
                rounddiv: "content_left",
                bigimage: "https://olawebcdn.com/images/v1/bg_rentals.jpg",
                imgtitle:"Rent cabs by the hour",
                imgsubtitle1:"Flexible packages at affordable fares",
                thirdrow:"Notvisibleme",
                visibleme:"hidden",
                leftcontent1:"Package",
                hint2:"Select a package"
            });
        }

        if (str === "daily") {
            this.setState({
                rounddiv: "content_left",
                bigimage: "https://olawebcdn.com/images/v1/bg_city.jpg",
                imgtitle:"Every day city commute",
                imgsubtitle1:"Affordable AC cabs rides at",
                imgsubtitle2:"your door step",
                thirdrow:"Notvisibleme",
                visibleme:true, 
                leftcontent1:"to",
                hint2:"Search for a locality or landmark"
            });
        }
        if (str === "outstation") {
            this.setState({
                rounddiv: "content_left",
                bigimage: "https://olawebcdn.com/images/v1/bg_outstation.jpg",
                imgtitle:"Ride out of twon",
                imgsubtitle1:"Book and depart in an hour",
                thirdrow:"Notvisibleme",
                visibleme:"hidden",
                leftcontent1:"to",
                hint2:"Enter a city, hotel or address"
            });
        }
    }
    render() {

        return (
            <div style={{ height: "100%", backgroundColor: "white", marginTop: "00px", width: "100%", display: "inlineBlock" }}>
                <div style={{ backgroundColor: "white", width: "42%", height: "600px", float: "left" }}>

                    <div>
                        <div style={{
                            alignItems: "center", marginLeft: "40%", marginRight: "40%"
                        }}><img src="https://www.olacabs.com/webstatic/img/ola-logo.svg" alt="fireSpot" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </div>

                    </div>

                    <div style={overlay_tab}>
                        <div style={simple_header}>
                            <div id="a1" style={{ cursor: "pointer" }} onClick={this.headingclick.bind(this, "daily")}> <div style={content_left}>     DAILY RIDES</div></div>
                            <div id="a1" style={{ cursor: "pointer" }} onClick={this.headingclick.bind(this, "outstation")}>  <div style={content_left_no_border_outstation}> OUTSTATION</div></div>
                            <div id="a1" style={{ cursor: "pointer" }} onClick={this.headingclick.bind(this, "rentals")}>  <div className={this.state.rounddiv} > RENTALS</div></div>
                        </div>
                        <div style={{ height: "5px", width: "100%", backgroundColor: "white" }}></div>

                        <div className="MainTabBookCab1_rows">
                            <div className="MainTabBookCab1_rows_Heading" style={{ width: "100%" }}>from</div>
                            <div className="MainTabBookCab1_rows_Option" style={{ width: "100%" }}>Enter pickup location </div>
                        </div>
                        <div className="MainTabBookCab1_rows">
                            <div className="MainTabBookCab1_rows_Heading">{this.state.leftcontent1}</div>
                            <div className="MainTabBookCab1_rows_Option placeholder-booking">
                               {this.state.hint2}</div>

                        </div>
                        <div style={{visibility:this.state.visibleme}} >
                            <div className="MainTabBookCab1_rows">
                                <div className="MainTabBookCab1_rows_Heading">WHEN</div>
                                <div className="MainTabBookCab1_rows_select_icon">
                                    <select className="option-selector">
                                        <option value="NOW" onClick={this.clicknow.bind(this, "now")}>Now</option>
                                        <option value="LATER" onClick={this.clicklater.bind(this, "later")}>Schedule for later</option>
                                    </select>
                                </div>
                            </div>
                            <div style={{visibility:this.state.row4div}} className="MainTabBookCab1_rows">
                            <div className="MainTabBookCab1_rows_Heading"></div>
                            <div className="MainTabBookCab1_rows_Option placeholder-booking">
                              </div>

                        </div>
                        </div>
                        

                    </div>
                    <div style={{height:"300px",width:"350px",backgroundColor:"white",margin:"100px",marginTop:"-100px"}}>
                    
                    <div> <img style={{height:"30px",width:"30px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLdouK6iftYrWcuwmqY0jmakM-xkF4-ql-ijHeH_4jRbTOBpbPqw"></img></div>
                   <p style={{color:"black"}}> for an accurate pick up- please  allow location access
                   </p> </div>

                </div>
                <div style={{ backgroundColor: "black", width: "58%", height: "auto", float: "left" }}>
                    <div style={overlay}>
                        <p style={overlay_text}>{this.state.imgtitle} </p>
                        <p style={overlay_text2}> {this.state.imgsubtitle1}</p>
                        <p style={overlay_text2}> {this.state.imgsubtitle2}</p><br />
                        <p style={overlay_text3}> #OlaForWeb </p>
                    </div>
                    <img style={{ height: "auto", width: "100%", marginTop: "-172px", overflow: "hidden" }} src={this.state.bigimage}>
                        
                    </img>

                </div>
            </div>
        );
    }
}

export default BookNow;


