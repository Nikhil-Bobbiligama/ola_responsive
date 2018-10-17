import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './App.css';
import SecondNavbar from './SecondNavbar'
import FirstImage from './FirstImage'
import MainTab786 from './MainTab_786'

class App extends Component {
  render() {
    return (

      <div >
       
        <MediaQuery query="(max-device-width: 768px)">
          <div>You are a tablet or mobile phone
            <MainTab786 />
            </div>
        </MediaQuery>
        <div>

          <MediaQuery query="(min-device-width: 769px)">
            <div>You are a desktop or laptop</div>
            <div id="toptwo" className="App" >

              <div className="div1" >
                <div className="div2"><a id="a" href="https://www.olacabs.com/">Support  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </a> </div>
                <div className="div2"><a id="a" href="https://www.olacabs.com/">Offers  &nbsp; </a>|</div>
                <div className="div2"><a id="a" href="https://www.olacabs.com/">Share   &nbsp; </a> |   </div>
                <div className="div2"><a id="a" href="https://www.olacabs.com/">Ola Corporate &nbsp;  </a> |    </div>
                <div className="div2"><a id="a" href="https://www.olacabs.com/">Ola Money   &nbsp;</a> |</div>
                <div className="div2"><a id="a" href="https://www.olacabs.com/">Drive with Ola     &nbsp;  </a>  |   </div>
              </div>
              <SecondNavbar />
            </div>
            <div>
              <FirstImage />
            </div>
            <div>
                                     

            </div>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 10px)">
          <div style={{height:"400px",width:"1200px",backgroundColor:"black"}}>
            <h1>heyyyyyyyyyyyyyyyyyyy</h1>
          </div>
          </MediaQuery>

        </div>



      </div>


    );
  }
}

export default App;