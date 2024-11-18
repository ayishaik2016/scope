import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



import cp9301 from '../../img/yealink/cp9301.jpg';
import cp9302 from '../../img/yealink/cp9302.jpg';
import cp9303 from '../../img/yealink/cp9303.jpg';
import cp9304 from '../../img/yealink/cp9304.jpg';
import cp9305 from '../../img/yealink/cp9305.png';
// import test6 from '../../img/yealink/test6.png';
// import test7 from '../../img/yealink/test7.png';



import Lets from '../lets.js';
import Footer from '../footer.js';


import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom';



import { BsCheckCircle } from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';



class CP930 extends Component{
render(){
  return (
    <div className="App">
    	<Nav1/>
    	<div class="container-fluid yealink_banner">

    	</div>
    	<div class="container">
    		<h1 class="yealink_pro_head">Yealink CP930W - Base Conference Phone</h1>
    		<div >
    			<Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
				  <Tab eventKey="home" title="Overview">
				    <div class="yealink-tab-cnt">
				    	
				    	<p class="yealink_pro_para">The CP930W is the first Wireless DECT Conference Phone in Yealink’s product portfolio. Based on reliable and secure DECT technology, the CP930W frees users from the limitations of power outlets and Internet ports and meets the mobility requirement of the organization. By associating with the Yealink DECT base, it is completely wireless for the users to hold the meeting anywhere within the DECT base coverage, which is 50 meters indoor and 300 meters outdoor.</p>
				    	<p class="yealink_pro_para">The built-in rechargeable battery supports 24 hours of talk time and requires less than 4 hours to be fully charged. It ensures a weekday’s frequent usage of the phone without recharging!</p>
				    	<img class="img-fluid" src={cp9301} />

				    	<h3 class="yealink_pro_sub_head">Easy Deployment</h3>
				    	<p class="yealink_pro_para">Enable the CP930W by pairing with the Yealink W60B base station. Yealink W60B DECT base can handle up to 8 Yealink DECT handsets, 8 accounts and 8 simultaneous calls.</p>
				    	<img class="img-fluid" src={cp9302} />
				    	
				    	<h3 class="yealink_pro_sub_head">First Rate Voice Clarity</h3>
				    	<ul class="yealink_pro_para">
				    		<li>The Yealink CP930W delivers HD Voice with a frequency range of 60Hz-16kHz. Fully enabled to capture the tone and inflexion of the speech.</li>
				    		<li>It is built with Yealink Noise Proof Technology which intelligently eliminates background noises and reduces misunderstandings.</li>
				    	</ul>
				    	<img class="img-fluid" src={cp9303} />
				    	
				    	<h3 class="yealink_pro_sub_head">You’re Within the Coverage</h3>
				    	
				    	<ul class="yealink_pro_para">
				    		<li>The Yealink CP930W is designed with 3 microphone arrays which support 20-foot and 360-degree HD voice pickup.</li>
				    		<li>It provides mobility for participants to walk around in the meeting room freely and delivers the flexibility to meet the coverage needs of different meeting sizes.</li>
				    	</ul>
				    	<img class="img-fluid" src={cp9304} />

				    	<h3 class="yealink_pro_sub_head">Easy Control and Operation</h3>
				    	<ul class="yealink_pro_para">
				    		<li>Incorporated with a 3.1” 248x120-pixel graphical LCD display for easy information browsing</li>
				    		<li>A sensitive touch keypad which puts main conferencing function keys at the user’s fingertips.</li>
				    		<li>Three one-touch mute buttons with LED indicators allow switch between mute and unmute with ease, and reduce accidental operations.</li>
				    	</ul>
				    	

				    	<h3 class="yealink_pro_sub_head">Advanced Features</h3>
				    	<ul class="yealink_pro_para">
				    		<li>The CP930W is packed with multiple useful features to make conferencing easy. It supports Bluetooth or USB Micro-B port pairing to connect with personal devices. So you are able to route and merge calls on your personal devices into a Yealink Hybrid UC Meeting on the CP930W. </li>
				    		<li>The CP930W also supports call recording via Micro SD card to make sure no critical conference details are forgotten.</li>
				    		
				    	</ul>
				    	<img class="img-fluid" src={cp9305} />
				    	
				    </div>
				  </Tab>
				  <Tab eventKey="profile" title="Specifications">
				    <div class="yealink-tab-cnt">
				    	<table class="table table-bordered">
						  <tbody>
						    <tr class="head_tab">
						      <td colspan="3" >Overview</td>
						    </tr>
						    <tr>
						      <td>Operating System</td>
						      <td>RTK-E</td>
						      
						    </tr>
						    <tr class="head_tab">
						      <td colspan="3" >Interface</td>
						    </tr>
						    <tr>
						      <td>LCD</td>
						      <td>3.1" 248 x 120-pixel graphical LCD</td>
						    </tr>
						    <tr>
						      <td>LCD Backlight</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Touch Keypad</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>USB Port (2.0 Compliant)</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>USB 2.0 Micro-B Device Port</td>
						      <td>1 (Connect to PC)</td>
						    </tr>
						    <tr>
						      <td>Ethernet Port</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Wired Mic</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Wireless Mic</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>3.5 mm Jack</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Security Slot</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr class="head_tab">
						      <td colspan="3" >Audio Features</td>
						    </tr>
						    <tr>
						      <td>HD Voice</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Wide-Band Codecs</td>
						      <td>Opus, G.722</td>
						    </tr>
						    <tr>
						      <td>Narrow-Band Codecs</td>
						      <td>G.711 (A/µ), G726, G729, G723, iLBC</td>
						    </tr>
						    <tr>
						      <td>Built-In 3-Microphone Array</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Microphone Pickup</td>
						      <td>20ft</td>
						    </tr>
						    <tr>
						      <td>Yealink Noise Proof Technology</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Noise Suppression</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr class="head_tab">
						      <td colspan="3" >Connectivity</td>
						    </tr>
						    <tr>
						      <td>Built-In PoE</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Built-In Bluetooth</td>
						      <td>Bluetooth 4.0 (For Mobile Phone)</td>
						    </tr>
						    <tr>
						      <td>Built-In Wi-Fi</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Battery</td>
						      <td>Li-ion，3.6V 7800mAh</td>
						    </tr>
						    <tr>
						      <td>Talk Time</td>
						      <td>24h</td>
						    </tr>
						    <tr>
						      <td>Standby Time</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr class="head_tab">
						      <td colspan="3" >Telephony Features</td>
						    </tr>
						    <tr>
						      <td>Recording</td>
						      <td><BsCheckCircle/> (Via Micro SD card)</td>
						    </tr>
						    <tr>
						      <td>Five-way Conferencing</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Create meeting directly</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Yealink Active Speaker</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Hybrid UC Meeting</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>PSTN</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Star Connection</td>
						      <td><ImCancelCircle/></td>
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

export default CP930;
