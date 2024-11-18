import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



import t49g1 from '../../img/yealink/t49g1.png';
import t49g2 from '../../img/yealink/t49g2.png';
import t49g3 from '../../img/yealink/t49g3.png';
import t49g4 from '../../img/yealink/t49g4.png';
import t49g5 from '../../img/yealink/t49g5.png';
import t49g6 from '../../img/yealink/t49g6.png';
// import cp9205 from '../../img/yealink/cp9205.png';
// import test6 from '../../img/yealink/test6.png';
// import test7 from '../../img/yealink/test7.png';



import Lets from '../lets.js';
import Footer from '../footer.js';


import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom';



import { BsCheckCircle } from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';



class SIP_T49G extends Component{
render(){
  return (
    <div className="App">
    	<Nav1/>
    	<div class="container-fluid yealink_banner">

    	</div>
    	<div class="container">
    		<h1 class="yealink_pro_head">Yealink SIP-T49G</h1>
    		<div >
    			<Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
				  <Tab eventKey="home" title="Overview">
				    <div class="yealink-tab-cnt">
				    	<h3 class="yealink_pro_sub_head">Embrace the Revolutionary Future of Desktop Video Collaboration</h3>
				    	<p class="yealink_pro_para">Yealink’s SIP VP-T49G high definition (HD) touch screen video phone embodies the future of collaboration, as it’s specially designed to optimize communication for in-demand executives and teleworkers alike. Its intuitive, aesthetically advanced design and easy to use yet rich functionality enabled the SIP VP-T49G to easily deliver one of the industry’s most advanced audio and video experiences. The solution offers users the utmost in business communication and collaboration and, as such, represents an ideal endpoint choice for desktop video collaboration.</p>
				    	<img class="img-fluid" src={t49g1} />
				    	


				    	
				    	<h3 class="yealink_pro_sub_head">Immersive Video Experience</h3>
				    	<p class="yealink_pro_para">The SIP VP-T49G boasts an advanced HD front camera that supports 1080p resolution - the highest video quality standard for desktop phones. The solution’s support for the H.264 High Profile further ensures smooth high-quality video. </p>

				    	<img class="img-fluid" src={t49g2} />

				    	
				    	<h3 class="yealink_pro_sub_head">Unparalleled Voice Quality</h3>
				    	<p class="yealink_pro_para">Yealink partners with world-renowned audio solutions manufacturer Harman Kardon to deliver a truly bleeding-edge voice solution with Optima HD voice, 360-degree pickup and full-duplex, among a number of other competitive advantages.</p>
				    	<img class="img-fluid" src={t49g3} />
				    	
				    	<h3 class="yealink_pro_sub_head">Revolutionary Design and Solution Highlights</h3>
				    	<img class="img-fluid" src={t49g4} />
				    	
						<h3 class="yealink_pro_sub_head">Smooth and Pleasant Operations</h3>
				    	<p class="yealink_pro_para">When developing the SIP VP-T49G, Yealink kept even the smallest of details in mind for users. For example: </p>
				    	<ul class="yealink_pro_para">
				    		<li>The large, eight-inch touch screen boasts support for multi-touch operations, offering unbelievable ease of use. </li>
				    		<li>The full keyboard and intelligent search support simplify user input. </li>
				    		<li>The easily manageable Control Center and Notification Center functions empower users with one-button access to frequently used functions, streamlining and accelerating day-to-day use.</li>
				    		

				    	</ul>
				    	<img class="img-fluid" src={t49g5} />

				    	<h3 class="yealink_pro_sub_head">Rich Media Ports for Maximizing Functionalities</h3>
				    	<ul class="yealink_pro_para">
				    		<li>The High-Definition Multimedia Interface (HDMI) connection further extends users’ video experiences.</li>
				    		<li>The solution’s built-in USB2.0 port offers users multiple benefits including local HD call recording and screenshot functionalities using a USB flash drive, as well as power charging for smartphones and other devices.</li>
				    		
				    		
				    	</ul>
				    	
				    	<img class="img-fluid" src={t49g6} />

				    	<h3 class="yealink_pro_sub_head">Wireless Technology for Added Convenience and Flexibility</h3>
				    	<p class="yealink_pro_para">The solution boasts a built-in Wi-Fi connection, as well as Bluetooth functionality for hands-free use and phonebook synchronization between the solution and users’ smartphones, adding freedom and flexibility to the office environment.</p>
				    	
				    </div>
				  </Tab>
				  <Tab eventKey="profile" title="Specifications">
				    <div class="yealink-tab-cnt">
				    	<table class="table table-bordered">
						  <tbody>
						    <tr class="head_tab">
						      <td colspan="3" >T49G</td>
						    </tr>
						    <tr>
						      <td>Camera</td>
						      <td>2 megapixel Camera with privacy shutter</td>
						      
						    </tr>
						    <tr>
						      <td>Video call</td>
						      <td>1080p@30fps Full-HD video call</td>
						    </tr>
						    <tr>
						      <td>Video Codec</td>
						      <td>H.263、H.264、H.264HP</td>
						    </tr>
						    <tr>
						      <td>Horizontal field of view</td>
						      <td>63.5°</td>
						    </tr>
						    <tr>
						      <td>Vertical field of view</td>
						      <td>37°</td>
						    </tr>
						    <tr>
						      <td>Plug and play</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Adjustable camera</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>HD voice</td>
						      <td>HD handset, HD speaker</td>
						    </tr>
						    <tr>
						      <td>Audio Codec</td>
						      <td>G.722、G.711(A/μ)、G.729AB、G.723、G.726、iLBC、Opus</td>
						    </tr>
						    <tr>
						      <td>Ethernet</td>
						      <td>10/100/1000Mbps</td>
						    </tr>
						    <tr>
						      <td>External Yealink power adapter</td>
						      <td>AC 100~240V input and DC 12V/2A output</td>
						    </tr>
						    <tr>
						      <td>HDMI output port</td>
						      <td>1</td>
						    </tr>
						    <tr>
						      <td>USB 2.0</td>
						      <td>2</td>
						    </tr>
						    <tr>
						      <td>Built-in Bluetooth</td>
						      <td>Bluetooth 4.0+ EDR</td>
						    </tr>
						    <tr>
						      <td>Built-in Wi-Fi</td>
						      <td>Dual band, 2.4GHz & 5GHz, 802.11a/b/g/n</td>
						    </tr>
						    <tr>
						      <td>LCD</td>
						      <td>8" 1280 x 800 capacitive touch screen IPS LCD</td>
						    </tr>
						    <tr>
						      <td>LCD type</td>
						      <td>Adjustable</td>
						    </tr>
						    <tr>
						      <td>Touch screen</td>
						      <td>capacitive touch screen</td>
						    </tr>
						    <tr>
						      <td>Multi-touch surface</td>
						      <td>10 points multi-touch surface</td>
						    </tr>
						    <tr>
						      <td>Screen saver</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Onscreen keyboard</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>DSS keys</td>
						      <td>29 one-touch DSS keys</td>
						    </tr>
						    <tr>
						      <td>Softkey</td>
						      <td>4</td>
						    </tr>
						    <tr>
						      <td>Navigation keys</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Volume keys</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Feature keys</td>
						      <td>Message, headset, mute, hold, transfer, video, redial, speakerphone</td>
						    </tr>
						    <tr>
						      <td>Illuminated key</td>
						      <td>Mute, hands-free speakerphone, handset, message</td>
						    </tr>
						    <tr>
						      <td>SIP account</td>
						      <td>16</td>
						    </tr>
						    <tr>
						      <td>Notification centre</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Control centre</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>3-way video conferencing</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>5-way video/audio mixed conferencing</td>
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

export default SIP_T49G;
