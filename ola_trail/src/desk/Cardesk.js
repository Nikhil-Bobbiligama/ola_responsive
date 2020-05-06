import React, { Component } from 'react';
// import ThreeImages from './ThreeImages'
import '../App.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import mainLogo from './images/ola_icon.jpeg';
// import WhyOla from './WhyOla'

// import React, { Component } from "react";
// import "./App.css";
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
const overlay_corosal = {
    zIndex: 1,
    backgroundColor: "red",
    height: "auto",

    overflow: "hidden",
    position: "absolute",
    top: "400px",
    width: "auto",
    marginLeft: "150px",
    marginRight: "150px",
    color: "white"
}
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

    backgroundColor: "",
    // margin: "5px",

    // marginRight: "10px",
    margin: "20px",
    marginRight: "1px",
    marginTop: "10px",
    color: "black",
    height: "50px",
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

// class Cardesk extends Component {


//     render() {

//         return (
//             <div>
//                 {/* <div style ={{border:"2px solid #E2E2E2",marginLeft:"50px",marginRight:"50px",top:"-100px",zIndex:"1"}}> */}
//                 <div >                <Carousel autoPlay infiniteLoop={true} backgroundColor="white"  >
//                     <a id="a1" href="https://www.olacabs.com/outstation">   <div style={{ width: "100%", height: "auto", display: "inline-block", alignContent: "left", backgroundColor: "white" }}>


//                         <div style={simple_header}>
//                             <a href="/"> <div style={content_left}>   <img src="https://cms-web.olacabs.com/00000000362.jpeg"></img></div></a>
//                             <div style={content_left_no_border_outstation}><div style={{ marginTop: "20px" }}> <a id="a1" style={{ alignContent: "left" }} href="https://www.olacabs.com/outstation">Get yourself a Share Pass</a></div><div style={{ color: "black", marginTop: "10px", alignContent: "left" }}>Enjoy cheapest rides on the go</div></div><br />

//                         </div>
//                     </div>
//                     </a>



//                     <a id="a1" href="https://www.olacabs.com/outstation">   <div style={{ width: "100%", height: "auto", display: "inline-block", alignContent: "left", backgroundColor: "white" }}>


//                         <div style={simple_header}>
//                             <a href="/"> <div style={content_left}>   <img src="https://cms-web.olacabs.com/00000000360.jpeg"></img></div></a>
//                             <div style={content_left_no_border_outstation}><div style={{ marginTop: "20px" }}> <a id="a1" style={{ alignContent: "left" }} href="https://www.olacabs.com/outstation"> Upgrade to OLA select</a></div><div style={{ color: "black", marginTop: "10px", alignContent: "left" }}>Explore the benfits of OLA select</div></div><br />

//                         </div>
//                     </div></a>
//                     <a id="a1" href="https://www.olacabs.com/outstation">   <div style={{ width: "100%", height: "auto", display: "inline-block", alignContent: "left", backgroundColor: "white" }}>


//                         <div style={simple_header}>
//                             <a href="/"> <div style={content_left}>   <img src="https://cms-web.olacabs.com/00000000363.svg"></img></div></a>
//                             <div style={content_left_no_border_outstation}><div style={{ marginTop: "20px" }}> <a id="a1" style={{ alignContent: "left" }} href="https://www.olacabs.com/outstation"> Sign up for Ola corporate</a></div><div style={{ color: "black", marginTop: "10px", alignContent: "left" }}>Employee travel management made easy</div></div><br />

//                         </div>
//                     </div>
//                     </a>
//                     <a id="a1" href="https://www.olacabs.com/outstation">   <div style={{ width: "100%", height: "auto", display: "inline-block", alignContent: "left", backgroundColor: "white" }}>


//                         <div style={simple_header}>
//                             <a href="/"> <div style={content_left}>   <img src="https://cms-web.olacabs.com/00000000361.jpeg"></img></div></a>
//                             <div style={content_left_no_border_outstation}><div style={{ marginTop: "20px" }}> <a id="a1" style={{ alignContent: "left" }} href="https://www.olacabs.com/outstation"> Be entertained with Ola play</a></div><div style={{ color: "black", marginTop: "10px", alignContent: "left" }}>Discover movies and music with Ola play</div></div><br />

//                         </div>
//                     </div>
//                     </a>

//                     <div style={{ backgroundColor: "grey", height: "auto", width: "0%" }}>
//                         <img src="http://lorempixel.com/output/cats-q-c-640-4807.jpg" alt="" />
//                     </div>

//                 </Carousel>

//                 </div>
//                 {/* <div style={{backgroundColor:"green", width:"100%",height:"500px"}}></div> */}
//                 {/* <div>  <ThreeImages /></div>
//            <div> <WhyOla /></div> */}
//             </div>
//         );
//     }
// }

// export default Cardesk;


const overlay_tab = {
    zIndex: 1,

    height: "120px",

    borderRadius: "5px",
    overflow: "hidden",
    position: "absolute",
    top: "950px",
    // backgroundColor: "WHITE",

    width: "100%",
    // marginTop:"45px",
    // marginLeft:"10px",
    marginLeft:"-2px",
    // margin: "45px 20px 10px 20px",
    // padding: "5px",
    color: "white"
};

export default class Cardesk extends Component {

    render() {
        return (
            <div style={overlay_tab}>

                <div style = {{marginLeft:"10px",marginRight:"10px",borderRadius: "5px",padding:"5px"}}>
                    <Carousel autoPlay infiniteLoop={true} backgroundColor="blue" borderRadius= "55px" >
                        <a id="a1" href="https://www.olacabs.com/outstation">   <div style={{ width: "100%", height: "auto", display: "inline-block", alignContent: "left", backgroundColor: "white" }}>


                            <div style={simple_header}>
                                <a href="/"> <div style={content_left}>   <img style={{ height: "70px", width: "70px" }} src="https://cms-web.olacabs.com/00000000362.jpeg"></img></div></a>
                                <div style={content_left_no_border_outstation}><div style={{ marginTop: "0px" }}> <a id="a1" style={{ alignContent: "left" }} href="https://www.olacabs.com/outstation">Get yourself a Share Pass</a></div><div style={{ color: "black", marginTop: "10px", alignContent: "left" }}>Enjoy cheapest rides on the go</div></div><br />

                            </div>
                        </div>
                        </a>



                        <a id="a1" href="https://www.olacabs.com/outstation">   <div style={{ width: "100%", height: "auto", display: "inline-block", alignContent: "left", backgroundColor: "white" }}>


                            <div style={simple_header}>
                                <a href="/"> <div style={content_left}>   <img style={{ height: "70px", width: "70px" }} src="https://cms-web.olacabs.com/00000000360.jpeg"></img></div></a>
                                <div style={content_left_no_border_outstation}><div style={{ marginTop: "0px" }}> <a id="a1" style={{ alignContent: "left" }} href="https://www.olacabs.com/outstation"> Upgrade to OLA select</a></div><div style={{ color: "black", marginTop: "10px", alignContent: "left" }}>Explore the benfits of OLA select</div></div><br />

                            </div>
                        </div></a>
                        <a id="a1" href="https://www.olacabs.com/outstation">   <div style={{ width: "100%", height: "auto", display: "inline-block", alignContent: "left", backgroundColor: "white" }}>


                            <div style={simple_header}>
                                <a href="/"> <div style={content_left}>   <img style={{ height: "70px", width: "70px" }} src="https://cms-web.olacabs.com/00000000363.svg"></img></div></a>
                                <div style={content_left_no_border_outstation}><div style={{ marginTop: "0px" }}> <a id="a1" style={{ alignContent: "left" }} href="https://www.olacabs.com/outstation"> Sign up for Ola corporate</a></div><div style={{ color: "black", marginTop: "10px", alignContent: "left" }}>Employee travel management made easy</div></div><br />

                            </div>
                        </div>
                        </a>
                        <a id="a1" href="https://www.olacabs.com/outstation">   <div style={{ width: "100%", height: "auto", display: "inline-block", alignContent: "left", backgroundColor: "white" }}>


                            <div style={simple_header}>
                                <a href="/"> <div style={content_left}>   <img style={{ height: "70px", width: "70px" }} src="https://cms-web.olacabs.com/00000000361.jpeg"></img></div></a>
                                <div style={content_left_no_border_outstation}><div style={{ marginTop: "0px" }}> <a id="a1" style={{ alignContent: "left" }} href="https://www.olacabs.com/outstation"> Be entertained with Ola play</a></div><div style={{ color: "black", marginTop: "10px", alignContent: "left" }}>Discover movies and music with Ola play</div></div><br />

                            </div>
                        </div>
                        </a>

                        <div style={{ backgroundColor: "grey", height: "auto", width: "0%" }}>
                            <img src="http://lorempixel.com/output/cats-q-c-640-4807.jpg" alt="" />
                        </div>

                    </Carousel>

                </div>

            </div>
        );
    }
}




