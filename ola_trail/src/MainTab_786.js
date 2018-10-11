import React, { Component } from "react";
import "./App786.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carouselme from './Classcarousel'
import { Carousel } from "react-responsive-carousel";
const overlay_corosal={
    zIndex: 1,  
    backgroundColor: "white",
    height: "auto",
   
    overflow: "hidden",
    position: "absolute",
    top: "410px",
    width:"100%",
    
    color: "white"
  }
const overlay_tab = {


    height: "auto",

    borderRadius: "5px",
    overflow: "hidden",
    position: "absolute",
    right: "1px",

    backgroundColor: "white",
    //   left: "1px",
    width: "100%",

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

    // margin: "5px",

    // marginRight: "10px",

    color: "black",
    height: "auto",
    width: "33.33%"

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
    width: "33.33%"

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
    width: "33.33%"

}
export default class MainTab_786 extends Component {

    render() {
        return (
            <div>
                <div>
                    <div style={{
                        alignItems: "center", marginLeft: "40%", marginRight: "40%"
                    }}><img src="https://www.olacabs.com/webstatic/img/ola-logo.svg" alt="fireSpot" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </div>

                </div>
                <div style={overlay_tab}>
                    <div style={simple_header}>
                        <a href="/"> <div style={content_left}>     CITY TAXI</div></a>
                        <a id="a1" href="https://www.olacabs.com/outstation">  <div style={content_left_no_border_outstation}> OUTSTATION</div></a>
                        <a id="a1" href="https://www.olacabs.com/rentals">  <div style={content_left_no_border} > RENTALS</div></a>
                    </div>
                    <div style={{ height: "1px", width: "100%", backgroundColor: "black" }}></div>
                    <div className="MainTabBookCab1">

                        <div className="MainTabBookCab1_Head">
                            <div>
                                Your everyday travel partner
                            </div>     </div>
                        <div className="MainTabBookCab1_SubHead">
                            AC Cabs for point to point travel
          </div>
                    </div>
                    <div className="MainTabBookCab1_rows">
                        <div className="MainTabBookCab1_rows_Heading" style={{ width: "100%" }}>pickup</div>
                        <div className="MainTabBookCab1_rows_Option" style={{ width: "100%" }}>Current location</div>
                    </div>
                    <div className="MainTabBookCab1_rows">
                        <div className="MainTabBookCab1_rows_Heading">drop</div>
                        <div className="MainTabBookCab1_rows_Option placeholder-booking">
                            Enter drop for ride estimate</div>

                    </div>
                    <div>
                        <div className="MainTabBookCab1_rows">
                            <div className="MainTabBookCab1_rows_Heading">WHEN</div>
                            <div className="MainTabBookCab1_rows_select_icon">
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
               
                <div style={overlay_corosal}>

          {/* <CarouselClass /> */}
          <Carouselme />
          </div>
          
            </div>

        );
    }
}




// import React, { Component } from "react";
// import "./App.css";
// const overlay_tab = {
//   zIndex: 1,

//   height: "auto",

//   borderRadius: "5px",
//   overflow: "hidden",
//   position: "absolute",
//   top: "200px",
//   backgroundColor: "WHITE",

//   width: "100%",
//   margin: "45px 10px 10px 0px",
//   padding: "5px",
//   color: "white"
// };
// const simple_header = {
//   backgroundColor: 'white',
//   height: '45px',
//   width: '100%',
//   position: 'relative',
//   fontSize: 14,
//   fontWeight: "bold",

//   color: 'black',
//   alignContent: 'left'


// }
// const content_left = {
//   float: "left",

//   textAlign: "center",
//   backgroundColor: "#CDDC39",

//   borderRadius: "15px",

//   margin: "5px",
//   marginLeft: "20px",

//   padding: "0.5em",
//   paddingLeft: "1.2em",
//   paddingRight: "1.2em",
//   color: "black",
//   height: "auto",
//   width: "auto"

// }
// const content_left_no_border = {
//   float: "left",

//   textAlign: "center",
//   backgroundColor: "white",

//   borderRadius: "15px",

//   margin: "5px",
//   marginLeft: "15px",

//   padding: "0.5em",
//   paddingLeft: "1.2em",
//   paddingRight: "1.2em",
//   textWeight: "bold",
//   height: "auto",
//   width: "auto"

// }
// export default class MainTab extends Component {

//   render() {
//     return (
//       <div style={overlay_tab}>
//         <div style={simple_header}>
//           <a href="/"> <div style={content_left}>     CITY TAXI</div></a>
//           <a id="a1" href="https://www.olacabs.com/outstation">  <div style={content_left_no_border}> OUTSTATION</div></a>
//           <a id="a1" href="https://www.olacabs.com/rentals">  <div style={content_left_no_border}> RENTALS</div></a>

//         </div>
//         <div style={{ background: "#898989", height: "1px", width: "100%" }}></div>
//         <div className="MainTabBookCab1">

//           <div className="MainTabBookCab1_Head">

//             Your everyday travel partner
//           </div>
//           <div className="MainTabBookCab1_SubHead">
//             AC Cabs for point to point travel
//           </div>
//         </div>
//         <div className="MainTabBookCab1_rows">
//           <div className="MainTabBookCab1_rows_Heading">pickup</div>
//           <div className="MainTabBookCab1_rows_Option">Current location</div>
//         </div>
//         <div className="MainTabBookCab1_rows">
//           <div className="MainTabBookCab1_rows_Heading">drop</div>
//           <div className="MainTabBookCab1_rows_Option placeholder-booking">
//             Enter drop for ride estimate</div>

//         </div>
//         <div>
//           <div className="MainTabBookCab1_rows">
//             <div className="MainTabBookCab1_rows_Heading">WHEN</div>
//             <div className="MainTabBookCab1_rows_select_icon">
//               <select className="option-selector">
//                 <option value="NOW">Now</option>
//                 <option value="LATER">Schedule for later</option>
//               </select>
//             </div>
//           </div>
//         </div>
//         <button type="button" className="search-button">
//           Search Cabs
//         </button>

//       </div>
//     );
//   }
// }




