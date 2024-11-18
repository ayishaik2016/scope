import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



import w53p1 from '../../img/yealink/w53p1.png';
import w53p2 from '../../img/yealink/w53p2.png';
import w53p3 from '../../img/yealink/w53p3.png';
import w53p4 from '../../img/yealink/w53p4.png';
import test5 from '../../img/yealink/test5.png';
import test6 from '../../img/yealink/test6.png';
import test7 from '../../img/yealink/test7.png';




import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom';



import { BsCheckCircle } from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';

import Lets from '../lets.js';
import Footer from '../footer.js';



class W53P extends Component{
render(){
  return (
    <div className="App">
    	<Nav1/>
    	<div class="container-fluid yealink_banner">

    	</div>
    	<div class="container">
    		<h1 class="yealink_pro_head">Yealink Wireless DECT Phone W53P</h1>
    		<div >
    			<Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
				  <Tab eventKey="home" title="Overview">
				    <div class="yealink-tab-cnt">
				    	
				    	<p class="yealink_pro_para">The Yealink W53P Wireless DECT Phone is a reliable and cost-effective choice for customers who are looking for a mid-level DECT IP phone for their moderate-to-active on-the-move communications.</p>
				    	

				    	<h3 class="yealink_pro_sub_head">Premium HD Audio Quality</h3>
				    	<p class="yealink_pro_para">Based on wireless CAT-iq2.0 DECT standard to offer premium and stable HD audio quality for efficient and clear communication.</p>
				    	<img class="img-fluid" src={w53p1} />
				    	
				    	<h3 class="yealink_pro_sub_head">Ergonomic Design</h3>
				    	<ul class="yealink_pro_para">
				    		<li> Right fit in your palm industry design at just 150mm tall and 25mm deep allows you to carry or put in your pocket with comfort</li>
				    		<li>A professional and stylish silver-grey metallic appearance</li>
				    		<li> Easy and quick operation with 1.8" 128x160 pixel colour screen. </li>
				    	</ul>
				    	<img class="img-fluid" src={w53p1} />
				    	
				    	<h3 class="yealink_pro_sub_head">Dependable and Rugged</h3>
				    	
				    	<ul class="yealink_pro_para">
				    		<li> Installed with Li-ion battery, ready for long time communication with 18 hours talk time and 200 hours standby time.</li>
				    		<li>Support optional protective case with water and dustproof, and break resistance features. </li>
				    	</ul>
				    	<img class="img-fluid" src={w53p3} />

				    	<h3 class="yealink_pro_sub_head">Seamless compatibility with Yealink W60B DECT Base</h3>
				    	<ul class="yealink_pro_para">
				    		<li>The Yealink W60B is a powerful scalable DECT Base that supports up to 8 handsets, 8 SIP accounts and 8 concurrent calls. Equipped with robust hardware and rich features, it perfectly caters to your busy small- to medium-sized office.</li>
				    		<li>Compact as it is, the Yealink W60B DECT Base works seamlessly with the entire Yealink DECT handset range and repeater.</li>
				    		<li>It also supports efficient provisioning and mass deployment with the Yealink Redirection and Provisioning Service and Booth Mechanism as to realize zero-touch provisioning.</li>
				    	</ul>
				    	<img class="img-fluid" src={w53p4} />
				    	
				    </div>
				  </Tab>
				  <Tab eventKey="profile" title="Specifications">
				    <div class="yealink-tab-cnt">
				    	<table class="table table-bordered">
						  <tbody>
						    <tr class="">
						      <td rowspan="2" >Display</td>
						      <td>LCD Display</td>
						      <td>1.8" 128 x 160 TFT colour display</td>
						    </tr>
						    <tr>
						      <td>LCD Backlight</td>
						      <td><BsCheckCircle/></td>
						      
						    </tr>
						    <tr>
						      <td rowspan="12">Features</td>
						      <td>Standby Time</td>
						      <td>200h </td>
						    </tr>
						    <tr>
						      <td>Talk Time</td>
						      <td>18h</td>
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
						      <td>Opus, AMR-WB (optional), G.722</td>
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

export default W53P;
