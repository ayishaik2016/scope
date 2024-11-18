import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



import vp5911 from '../../img/yealink/vp5911.png';
import vp5912 from '../../img/yealink/vp5912.png';
import vp5913 from '../../img/yealink/vp5913.png';
import vp5914 from '../../img/yealink/vp5914.png';
import vp5915 from '../../img/yealink/vp5915.png';
import vp5916 from '../../img/yealink/vp5916.png';
import vp5917 from '../../img/yealink/vp5917.png';
import vp5918 from '../../img/yealink/vp5918.png';
import vp5919 from '../../img/yealink/vp5919.png';
// import vc8008 from '../../img/yealink/w56p8.png';
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



class VP59 extends Component{
render(){
  return (
    <div className="App">
    	<Nav1/>
    	<div class="container-fluid yealink_banner">

    	</div>
    	<div class="container">
    		<h1 class="yealink_pro_head">Yealink VP59 Video Phone</h1>
    		<div >
    			<Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
				  <Tab eventKey="home" title="Overview">
				    <div class="yealink-tab-cnt">

				    	<h3 class="yealink_pro_sub_head " >Embrace the Revolutionary Future of Desktop Video Collaboration</h3>
				    	
				    			<p class="yealink_pro_para ">Yealink Flagship Smart Video Phone VP59 embodies the future of collaboration, as it's specially designed to optimize communication for in-demand executives and teleworkers alike. Its intuitive, aesthetically advanced design and easy to use yet rich functionality enabled the VP59 to easily deliver one of the industry's most advanced audio and video experiences. The solution offers users the utmost in business communication and collaboration and, as such, represents an ideal endpoint choice for desktop video collaboration.</p>
				    			<img class="img-fluid" src={vp5911} />		
				    	<h3 class="yealink_pro_sub_head">Immersive Video Experience</h3>
				    	<div class="row">
				    		<div class="col-md-4">
				    			<img class="img-fluid" src={vp5912} />		
				    		</div>
				    		<div class="col-md-8">
				    			<p class="yealink_pro_para">The VP59 boasts an advanced HD front camera that supports 1080p resolution - the highest video quality standard for desktop phones. The solution's support for the H.264 High Yealink Profile further ensures smooth high-quality video.</p>
				    			<img class="img-fluid" src={vp5913} />		
				    		</div>
				    	</div>
				    	<h3 class="yealink_pro_sub_head">One-click, TroubIe-free Presenting</h3>
						<div class="row">
				    		<div class="col-md-7">
				    			<p class="yealink_pro_para">Paired with Yealink WPP20, VP59 can support wireless content sharing. Simply plug in WPPZO to a laptop via the universal USB port for a quick connection with the VP59. Users can click the button and start content sharing immediately, without any additional apps or software.</p>
				    				
				    		</div>
				    		<div class="col-md-5">
				    			<img class="img-fluid" src={vp5914} />		
				    		</div>
				    	</div>
				    	<h3 class="yealink_pro_sub_head">Remarkable Video Collaboration Experience</h3>
				    	<div class="row">
				    		<div class="col-md-4">
				    			<img class="img-fluid" src={vp5915} />		
				    		</div>
				    		<div class="col-md-8">
				    			<p class="yealink_pro_para">The VP59 supports up to six mixed audio and video conferencing extensions and is compatible with video conferencing equipment offered by today's mainstream vendors.</p>
				    				
				    		</div>
				    	</div>
				    	<h3 class="yealink_pro_sub_head">Revolutionary Design and Solution Highlights</h3>
				    	
				    	<img class="img-fluid" src={vp5916} />		

				    		
				    	<h3 class="yealink_pro_sub_head">Smooth and Pleasant Operations</h3>
				    	<p class="yealink_pro_para">When developing the VP59, Yealink kept even the smallest of details in mind for users. For example:</p>
				    	<ul class="yealink_pro_para">
				    		<li>The large, eight-inch touch screen boasts support for multi-touch operations, offering unbelievable ease of use.</li>
				    		<li>The full keyboard and intelligent search support simplify user input.</li>
				    		<li>The new client-centric user interface design reduces the learning curve for users. People can quickly enter and control meetings at ease with VP59.</li>
				    		
				    	</ul>
				    	<img class="img-fluid" src={vp5917} />		
				    	
						<h3 class="yealink_pro_sub_head">Rich Media Ports for Maximizing Functionalities</h3>
				    	<ul class="yealink_pro_para">
				    		<li>The High-Definition Multimedia Interface (HDMI) connection further extends users' video experiences.</li>
				    		<li>The solution's built-in USBZ.0 port offers users multiple benefits including local HD call recording and screenshot functionalities using a USB flash drive, as well as power charging for smartphones and other devices.</li>
				    		
				    		
				    	</ul>
				    	<img class="img-fluid" src={vp5918} />		

				    		
				    	<h3 class="yealink_pro_sub_head">Flexible Deployment Options for A Comfortable Workspace</h3>
				    	<img class="img-fluid" src={vp5919} />		
				    	<p class="yealink_pro_para">The VP59 supports dual-mode(Wi-Fi/AP) and dual-band(SGHz/2.4GHZ) wireless connection, allowing users to quickly access the network. Not only that, but VP59 also supports Power over Ethernet, users can use simple one cable to carry power and data to the device, keeping the table clean and clutter-free.</p>
				    	
				    	

				    	
				    </div>
				  </Tab>
				  <Tab eventKey="profile" title="Specifications">
				    <div class="yealink-tab-cnt">
				    	<table class="table table-bordered">
						  <tbody>
						    <tr class="">
						      <td rowspan="5" >Display</td>
						      <td>Size</td>
						      <td>8-inch</td>
						    </tr>
						    <tr>
						      <td>Type</td>
						      <td>Capacitive touchscreen</td>
						      
						    </tr>
						    <tr>
						      <td>Resolution</td>
						      <td>1280 x 800</td>
						      
						    </tr>
						    <tr>
						      <td>Angle</td>
						      <td>Adjustable</td>
						      
						    </tr>
						    <tr>
						      <td>Multi-touch</td>
						      <td>10 points</td>
						      
						    </tr>
						    <tr>
						      <td rowspan="5">Camera</td>
						      <td>Camera</td>
						      <td>2M pixel camera with privacy shutter</td>
						    </tr>
						    <tr>
						      <td>Horizontal field of view</td>
						      <td>84°</td>
						    </tr>
						    <tr>
						      <td>Vertical field of view</td>
						      <td>54°</td>
						    </tr>
						    <tr>
						      <td>Plug and play</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Adjustable Camera (up and down)</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td rowspan="6">Video Features</td>
						      <td>Video codec</td>
						      <td>H.264 High Profile, H.264, H.263</td>
						    </tr>
						    <tr>
						      <td>Video call quality</td>
						      <td>up to 1080p30fps</td>
						    </tr>
						    <tr>
						      <td>Content sharing</td>
						      <td>up to 1080p</td>
						    </tr>
						    <tr>
						      <td>Video/audio mixed conference</td>
						      <td>up to 6-way</td>
						    </tr>
						    <tr>
						      <td>Video packet loss recovery</td>
						      <td>30%</td>
						    </tr>
						    <tr>
						      <td>Local HD recording</td>
						      <td><BsCheckCircle/>(USB flash drive or internal storage)</td>
						    </tr>
						    <tr>
						      <td rowspan="3">Audio Features</td>
						      <td>Audio codec </td>
						      <td>ARES, Opus, G.722.1C, G.722.1, G.722, G.711 (PCMU/PCMA)</td>
						    </tr>
						    <tr>
						      <td>HD speaker</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>HD handset</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td rowspan="4">Network & Security</td>
						      <td>TCP/IP</td>
						      <td>IPv4 & IPv6</td>
						    </tr>
						    <tr>
						      <td>Communication protocols</td>
						      <td>H.323 / SIP</td>
						    </tr>
						    <tr>
						      <td>Traversal features</td>
						      <td>ICE/TURN/STUN/NAT/H.460</td>
						    </tr>
						    <tr>
						      
						      <td>Encryption</td>
						      <td>SRTP/TLS/H.235/AES 256-bit*</td>
						    </tr>
						    <tr>
						    <td rowspan="7">Physical Connections</td>
						      <td>Video output</td>
						      <td>IPv41 x HDMI</td>
						    </tr>
						    <tr>
						      <td>USB</td>
						      <td>1 x USB 2.0</td>
						    </tr>
						    <tr>
						      <td>Network interface</td>
						      <td>1 x 10/100/1000M Ethernet</td>
						    </tr>
						    <tr>
						       
						      <td>Power over Ethernet</td>
						      <td>IEEE 802.3af</td>
						    </tr>
						    <tr>
						       
						      <td>External universal AC Adapter</td>
						      <td>12V/1A</td>
						    </tr>
						    <tr>
						       
						      <td>Bluetooth</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						       
						      <td>Wi-Fi</td>
						      <td> Dual-band (2.4GHz/5GHz), work as client or AP</td>
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

export default VP59;
