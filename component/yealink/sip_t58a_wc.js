import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



import vp591 from '../../img/yealink/vp591.png';
import vp592 from '../../img/yealink/vp592.png';
import vp593 from '../../img/yealink/vp593.png';
import vp594 from '../../img/yealink/vp594.png';
import T58A_Right from '../../img/yealink/T58A_Cam.jpg';
// import cp9205 from '../../img/yealink/cp9205.png';
// import test6 from '../../img/yealink/test6.png';
// import test7 from '../../img/yealink/test7.png';


import Lets from '../lets.js';
import Footer from '../footer.js';



import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom';



import { BsCheckCircle } from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';



class SIP_T58A_WC extends Component{
render(){
  return (
    <div className="App">
    	<Nav1/>
    	<div class="container-fluid yealink_banner">

    	</div>
    	<div class="container">
    		<h1 class="yealink_pro_head">Yealink SIP-T58A</h1>
    		<div >
    			<Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
				  <Tab eventKey="home" title="Overview">
				    <div class="yealink-tab-cnt">
				    	<div class="row" style={{margin:"0"}}>
				    		<div class="col-md-6">
				    			<img class="img-fluid" src={T58A_Right} />
				    		</div>
				    		<div class="col-md-6">
				    			<h3 class="yealink_pro_sub_head">Smart Business Phone SIP-T58A</h3>
				    			<p class="yealink_pro_para">Android-based smartphone, well suited for executives and busy managers with collaboration demands</p>
				    			<ul class="yealink_pro_para">
						    		<li>HD voice with Yealink Acoustic Shield and Noise Proof technologies</li>
						    		<li>7” 1024x600-pixel colour touch display, fully adjustable</li>
						    		<li>Plug and play 720p HD video camera</li>
						    		<li>27 touch memory keys, 16 SIP accounts</li>
						    		<li>Built-in Bluetooth and Wi-Fi</li>
						    		<li>Call recording and wireless headset support</li>
						    	</ul>
				    	
				    		</div>
				    	</div>
				    	
				    	

				    	
				    	<p class="yealink_pro_para">Yealink Smart Business Phone T58A and T58A with Camera, as well as the Flagship Smart Video Phone VP59 are the most professional desktop collaboration tools in the market. The phones are well suited for executive offices and huddle rooms, delivering cutting-edge telephony capabilities and affordable access to professional HD video. These phones aim to introduce the best possible personalized collaboration experience and enhance productivity and team performance.</p>
				    	<img class="img-fluid" src={vp591} />

				    	
				    	<h3 class="yealink_pro_sub_head">Ergonomic Design with Adjustable Displays</h3>
				    	<ul class="yealink_pro_para">
				    		<li>Elegant and sleek design with large, backlit and high resolution color touchscreen</li>
				    		<li>Simple operation with an intuitive layout of hard keys and dual-color LED indicators</li>
				    		<li>Fully adjustable display to fulfill the viewing needs at a variety of angles and under a variety of lighting conditions.</li>
				    	</ul>
				    	
				    	<img class="img-fluid" src={vp592} />

				    	
				    	<h3 class="yealink_pro_sub_head">Distraction-Free HD Collaborations</h3>
				    	
				    	<ul class="yealink_pro_para">
				    		<li>Designed with Yealink Acoustic Shield technology to deliver distraction-free voice clarity for remote participants.</li>
				    		<li>Yealink Acoustic Shield technology uses multiple microphones to create a virtual “shield” between the speaker and the outside sound source. Once enabled, it intelligently blocks or mutes sounds from outside the “shield” so that the person on the other end hears you only and follows you clearly. </li>
				    		<li>Built-in with Yealink Noise Proof Technology for small group sessions. The innovative Yealink Noise Proof technology intelligently eliminates non-human voices so as to guarantee the productivity of the group discussion in huddle rooms or open workspace.</li>

				    	</ul>
				    	<img class="img-fluid" src={vp593} />


				    	<h3 class="yealink_pro_sub_head">Explore Many More Possibilities</h3>
				    	<ul class="yealink_pro_para">
				    		<li>Instant content sharing with the people on the other end of the call. It enables quick discussion and speeds up decision making.</li>
				    		<li>Supports DECT handset compatibility via a DECT dongle Yealink DD10K, up to 4 cordless handsets.</li>
				    		<li>Seamless switching of calls between the desktop phone and the cordless DECT handset.</li>
				    		<li>Intercom system integration for reception applications, featuring one-touch door opening, visitor viewing and monitoring to simplify daily reception work.</li>
				    		
				    	</ul>
				    	<img class="img-fluid" src={vp594} />
				    	<div class="row" style={{margin:"0"}}>
				    		<div class="col-md-6">
				    			<img class="img-fluid" src={vp592} />
				    		</div>
				    		<div class="col-md-6">
				    			<h3 class="yealink_pro_sub_head">Ergonomic Design with Adjustable Displays</h3>
				    			
				    			<ul class="yealink_pro_para">
						    		<li>Elegant and sleek design with a large, backlit and high-resolution colour touchscreen</li>
						    		<li>Simple operation with an intuitive layout of hard keys and dual-color LED indicators</li>
						    		<li>Fully adjustable display to fulfil the viewing needs at a variety of angles and under a variety of lighting conditions.</li>
						    		
						    	</ul>
				    	
				    		</div>
				    	</div>
				    	
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
						      <td>LCD Display</td>
						      <td>7" 1024 x 600 Capacitive Touch Screen</td>
						    </tr>
						    <tr>
						      <td>LCD Type</td>
						      <td>Adjustable</td>
						    </tr>
						    <tr>
						      <td>LED Indicators</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Line Keys</td>
						      <td>0</td>
						    </tr>
						    <tr>
						      <td>Memory Keys</td>
						      <td>27 Touch Keys</td>
						    </tr>
						    <tr>
						      <td>USB Port (2.0 Compliant)</td>
						      <td>2</td>
						    </tr>
						    <tr>
						      <td>Ethernet Port</td>
						      <td>Dual-port Gigabit Ethernet</td>
						    </tr>
						    <tr>
						      <td>Handset Port (RJ-9)</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Headset Port (RJ-9)</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Expansion Module<br/>
(Accessory, purchased separately)</td>
						      <td>Yealink EXP50</td>
						    </tr>
						    <tr>
						      <td>External Yealink AC Adapter (Optional)</td>
						      <td>AC 100~240V Input and DC 12V/1A Output</td>
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
						      <td>G.722, Opus</td>
						    </tr>
						    <tr>
						      <td>Narrow-Band Codecs</td>
						      <td>G.711(A/µ), G.729A/B, G.726, G.723.1, iLBC</td>
						    </tr>
						    <tr>
						      <td>Speakerphone</td>
						      <td>Full Duplex</td>
						    </tr>
						    <tr>
						      <td>HAC Handset</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Acoustic Shield</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Yealink Noise Proof</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr class="head_tab">
						      <td colspan="3" >Connectivity</td>
						    </tr>
						    <tr>
						      <td>PoE</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Headset</td>
						      <td>USB/Bluetooth/RJ9</td>
						    </tr>
						    <tr>
						      <td>Bluetooth</td>
						      <td>Built-in Bluetooth 4.2</td>
						    </tr>
						    <tr>
						      <td>Wi-Fi</td>
						      <td>Built-in（2.4G and 5G）</td>
						    </tr>
						    <tr>
						      <td>HDMI</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Foot Stand</td>
						      <td>1 Adjustable Angle</td>
						    </tr>
						    <tr>
						      <td>Wall Mountable</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Corded-Cordless Phone (via DD10K)</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Content Sharing</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Door Phone Integration</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Camera</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Video Resolution</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Video Codec</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr class="head_tab">
						      <td colspan="3" >Telephony Features</td>
						    </tr>
						    <tr>
						      <td>SIP Accounts</td>
						      <td>16</td>
						    </tr>
						    <tr>
						      <td>3-way Audio Conferencing </td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>5-way Video/Audio Mixed Conferencing</td>
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

export default SIP_T58A_WC;
