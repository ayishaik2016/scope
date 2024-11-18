import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



import test1 from '../../img/yealink/test1.png';
import test2 from '../../img/yealink/test2.png';
import test3 from '../../img/yealink/test3.png';
import test4 from '../../img/yealink/test4.png';
import test5 from '../../img/yealink/test5.png';
import test6 from '../../img/yealink/test6.png';
import test7 from '../../img/yealink/test7.png';



import Lets from '../lets.js';
import Footer from '../footer.js';


import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom';



import { BsCheckCircle } from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';



class CP960_conf extends Component{
render(){
  return (
    <div className="App">
    	<Nav1/>
    	<div class="container-fluid yealink_banner">

    	</div>
    	<div class="container">
    		<h1 class="yealink_pro_head">Yealink CP960 Conference Phone</h1>
    		<div >
    			<Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
				  <Tab eventKey="home" title="Overview">
				    <div class="yealink-tab-cnt">
				    	<h3 class="yealink_pro_sub_head">Easy Conferencing, Clear Communication</h3>
				    	<p class="yealink_pro_para">The Yealink CP960 is an enterprise-grade conference phone for mid-and-large-sized meeting rooms. With the outstanding speakerphone elements, the CP960 sets new standards for sound quality and immerses conference participants in every discussion. Marrying a wide range and dead-zone-free voice pickup with Yealink’s Noise Proof technology, the CP960 is the perfect match for day-to-day business conference conversations.</p>
				    	<img class="img-fluid" src={test1} />

				    	<h3 class="yealink_pro_sub_head">Pure and Powerful Sound Quality</h3>
				    	<p class="yealink_pro_para">The Yealink CP960 conference phone harness advanced acoustic technologies to make every audio conference experience amazingly clear and inspiring. In combination with Yealink’s sophisticated HD voice technology, the Yealink CP960 immerses every conference participant in extraordinarily clear and balanced sound quality. The performance-oriented phone faithfully reproduces voices for day-to-day business conferences.</p>
				    	<img class="img-fluid" src={test2} />
				    	
				    	<h3 class="yealink_pro_sub_head">Wide-range Voice Pickup, Dead-zone Free</h3>
				    	<ul class="yealink_pro_para">
				    		<li>Featuring 20-foot 360-degree dead-zone-free voice pickup, the Yealink CP960 conference phone provides a full sound experience to both medium and large audio conferencing environments.</li>
				    		<li>A pair of Yealink wireless microphones utilizing Yealink’s DECT technology can increase voice pickup distance to 60 feet, allowing every meeting participant to be involved and clearly heard while optimizing mobility within the local meeting environment.</li>
				    	</ul>
				    	<img class="img-fluid" src={test3} />
				    	
				    	<h3 class="yealink_pro_sub_head">Yealink Noise Proof Technology for Smart and Powerful Noise Elimination</h3>
				    	<p class="yealink_pro_para">Yealink Noise Proof Technology is our noise reduction technology that frees business conversations from annoying noise to optimize conference efficiency and to minimize distractions. The Yealink Noise Proof technology includes two interrelated functions:</p>
				    	<ul class="yealink_pro_para">
				    		<li>During a conference, Noise Proof reduces constant background noise from sources such as typing, air conditioners, etc.</li>
				    		<li>When a person is not speaking, Noise Proof automatically mutes the microphone(s) until the sound of a human voice is detected.</li>
				    	</ul>
				    	<img class="img-fluid" src={test4} />

				    	<h3 class="yealink_pro_sub_head">Ergonomic Design, Best-in-Class Experience</h3>
				    	<ul class="yealink_pro_para">
				    		<li>Stylish and professional, the CP960 features metallic sliver and a UV process design, bringing an upscale touch to any meeting room.</li>
				    		<li>The five-inch high-resolution 1280x720 multi-touch screen puts fast and smooth controls at your fingertips.</li>
				    		<li>The elegant hardware and software design add simplicity and comfort to the business conference conversation.</li>
				    	</ul>
				    	<img class="img-fluid" src={test5} />

				    	<h3 class="yealink_pro_sub_head">Pentagon Meeting Room</h3>
				    	<ul class="yealink_pro_para">
				    		<li>The CP960 creates a virtual meeting room user interface -- the Yealink Pentagon Meeting Room -- that mimics the sense of physical conferencing that demanding professionals expect.</li>
				    		<li>Offering up to five-party conferencing, the phone allows meeting organizers to create a meeting simply by sending invitations at a single touch to selected participants. Organizers can seamlessly invite or join participants without pausing or interrupting the ongoing conversation.</li>
				    		<li>Say goodbye to “who is speaking” -- the Yealink Active Speaker automatically displays the current speaker’s info on the screen.</li>
				    	</ul>
				    	<img class="img-fluid" src={test6} />
				    	
				    	<h3 class="yealink_pro_sub_head">Pentagon Meeting Room</h3>
				    	<ul class="yealink_pro_para">
				    		<li>The CP960 expertly enables the Hybrid UC Meeting with extraordinary clarity and convenience.</li>
				    		<li>When using a softphone on your PC (e.g., Skype for Business) or mobile phone, you can route the call to the CP960 via the USB port or Bluetooth pairing to join the conference.</li>
				    		<li>You can also route the call to the CP960 and then invite other parties to make a conference call.</li>
				    		<li>With the CP960, boosting audio conferencing productivity has never been easier.</li>
				    	</ul>
				    	<img class="img-fluid" src={test7} />
				    	
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
						      <td>Android 5.1</td>
						      
						    </tr>
						    <tr class="head_tab">
						      <td colspan="3" >Interface</td>
						    </tr>
						    <tr>
						      <td>LCD</td>
						      <td>5" 720 x 1280-pixel capacitive touch screen</td>
						    </tr>
						    <tr>
						      <td>LCD Backlight</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Touch Keypad</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>USB Port (2.0 Compliant)</td>
						      <td>2</td>
						    </tr>
						    <tr>
						      <td>USB 2.0 Micro-B Device Port</td>
						      <td>1 (Connect to PC)</td>
						    </tr>
						    <tr>
						      <td>Ethernet Port</td>
						      <td>10/100Mbps</td>
						    </tr>
						    <tr>
						      <td>Wired Mic</td>
						      <td>0 (Optional)</td>
						    </tr>
						    <tr>
						      <td>Wireless Mic</td>
						      <td>2 (Optional)</td>
						    </tr>
						    <tr>
						      <td>3.5 mm Jack</td>
						      <td>1</td>
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
						      <td>G.722, G722.1C, Opus</td>
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
						      <td>IEEE 802.3af</td>
						    </tr>
						    <tr>
						      <td>Built-In Bluetooth</td>
						      <td>Bluetooth 4.0</td>
						    </tr>
						    <tr>
						      <td>Built-In Wi-Fi</td>
						      <td>802.11a/b/g/n/ac</td>
						    </tr>
						    <tr>
						      <td>Battery</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Talk Time</td>
						      <td><ImCancelCircle/></td>
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
						      <td><BsCheckCircle/> (Via USB flash drive)</td>
						    </tr>
						    <tr>
						      <td>Five-way Conferencing</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Create meeting directly</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Yealink Active Speaker</td>
						      <td><BsCheckCircle/></td>
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
						      <td><BsCheckCircle/> ( up to 4 units)</td>
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

export default CP960_conf;
