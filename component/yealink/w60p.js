import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



import w60p1 from '../../img/yealink/w60p1.jpg';
import w60p2 from '../../img/yealink/w60p2.jpg';
import w60p3 from '../../img/yealink/w60p3.jpg';
import w60p4 from '../../img/yealink/w60p4.jpg';
import w60p5 from '../../img/yealink/w60p5.png';
import t29g6 from '../../img/yealink/t29g6.png';
// import t29g7 from '../../img/yealink/t29g7.png';
// import t46s8 from '../../img/yealink/t46s8.png';
// import t48s9 from '../../img/yealink/t48s9.png';
// import cp9205 from '../../img/yealink/cp9205.png';
// import test6 from '../../img/yealink/test6.png';
// import test7 from '../../img/yealink/test7.png';


import Lets from '../lets.js';
import Footer from '../footer.js';



import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom';



import { BsCheckCircle } from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';



class W60P extends Component{
render(){
  return (
    <div className="App">
    	<Nav1/>
    	<div class="container-fluid yealink_banner">

    	</div>
    	<div class="container">
    		<h1 class="yealink_pro_head">Yealink W60P DECT IP Phone</h1>
    		<div >
    			<Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
				  <Tab eventKey="home" title="Overview">
				    <div class="yealink-tab-cnt">
				    	
				    	<p class="yealink_pro_para text-center">The Yealink W60P Wireless DECT IP Phone is a premium phone designed with robust hardware, ideal for businesses that require the greater capability to handle a heavy call load.</p>
				    	<img class="img-fluid" src={w60p1} />

				    	<h3 class="yealink_pro_sub_head " >HD Audio Quality</h3>
				    	<p class="yealink_pro_para text-center">Based on wireless CAT-iq2.0 DECT standard to offer premium and stable HD audio quality for efficient and clear communication</p>
				    	<img class="img-fluid" src={w60p2} />
				    	
				    	
				    	<h3 class="yealink_pro_sub_head " >Long-life Battery</h3>
				    	<p class="yealink_pro_para text-center">Installed with a Li-ion battery, ready for your heavy call load with 18 hours talk time, 240 hours standby time and quick charging capability. </p>
				    	<img class="img-fluid" src={w60p3} />
				    	
				    	<h3 class="yealink_pro_sub_head " >Rich Features</h3>
				    	<p class="yealink_pro_para text-center">Enables quick user adoption and natural integration into the working environment with a thoughtful industry design, 2.4” 240x320 colour display and rich telephony features.</p>
				    	<img class="img-fluid" src={w60p4} />
				    	
				    	<h3 class="yealink_pro_sub_head " >Seamless compatibility with Yealink W60B DECT Base</h3>
				    	<ul class="yealink_pro_para">
				    		<li>The Yealink W60B is a powerful scalable DECT Base that supports up to 8 handsets, 8 SIP accounts and 8 concurrent calls. Equipped with robust hardware and rich features, it perfectly caters to your busy small-to-medium-sized office.</li>
				    		<li>Compact as it is, the Yealink W60B DECT Base works seamlessly with the entire Yealink DECT handset range and repeater.</li>
				    		<li>It also supports efficient provisioning and mass deployment with the Yealink Redirection and Provisioning Service and Booth Mechanism as to realize zero-touch provisioning.</li>

				    	</ul>
				    	<img class="img-fluid" src={w60p5} />
				    	

				    </div>
				  </Tab>
				  <Tab eventKey="profile" title="Specifications">
				    <div class="yealink-tab-cnt">
				    	<table class="table table-bordered">
						  <tbody>
						    <tr class="">
						      <td rowspan="2" >Display</td>
						      <td>LCD Display</td>
						      <td>2.4" 240 x 320 TFT colour display</td>
						    </tr>
						    <tr>
						      <td>LCD Backlight</td>
						      <td><BsCheckCircle/></td>
						      
						    </tr>
						    <tr>
						      <td rowspan="12">Features</td>
						      <td>Standby Time</td>
						      <td>400h </td>
						    </tr>
						    <tr>
						      <td>Talk Time</td>
						      <td>30h</td>
						    </tr>
						    <tr>
						      <td>Battery</td>
						      <td>Lithium</td>
						    </tr>
						    <tr>
						      <td>Headset </td>
						      <td>3.5 mm</td>
						    </tr>
						    <tr>
						      <td>Indoor Range/Outdoor Range</td>
						      <td>50m/300m</td>
						    </tr>
						    <tr>
						      <td>Handset Number Per Base</td>
						      <td>Up to 8 handsets</td>
						    </tr>
						    <tr>
						      <td>SIP Accounts</td>
						      <td>8</td>
						    </tr>
						    <tr>
						      <td>Simultaneous Voice Call</td>
						      <td>8</td>
						    </tr>
						    <tr>
						      <td>Repeater</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>DECT Standard</td>
						      <td>CAT-iq 2.0</td>
						    </tr>
						    <tr>
						      <td>3-Way Conferencing</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Speed Dial</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td rowspan="3">Audio</td>
						      <td>Wideband Codec</td>
						      <td>Opus, AMR-WB (Optional), G.722</td>
						    </tr>
						    <tr>
						      <td>Narrowband Codec</td>
						      <td>PCMU, PCMA, G.726, G.729, iLBC</td>
						    </tr>
						    <tr>
						      <td>HD Voice</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td rowspan="4">Interface</td> 
						      <td>Etdernet Interface</td>
						      <td>10/100M</td>
						    </tr>
						    <tr>
						      <td>PoE</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Bluetooth</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Wall Mountable Base</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						  </tbody>
						</table>
				    </div>
				  </Tab>
				  
				</Tabs>
    		</div>
    	</div>
    	<Footer/>
    </div>    
  );
}
}

export default W60P;
