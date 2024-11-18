import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



import vc8801 from '../../img/yealink/vc8801.png';
import vc8802 from '../../img/yealink/vc8802.png';
import vc8803 from '../../img/yealink/vc8803.png';
import vc8804 from '../../img/yealink/vc8804.png';
import wpp205 from '../../img/yealink/wpp205.png';
import wpp206 from '../../img/yealink/wpp206.png';
import vc8007 from '../../img/yealink/vc8007.png';
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



class VC880 extends Component{
render(){
  return (
    <div className="App">
    	<Nav1/>
    	<div class="container-fluid yealink_banner">

    	</div>
    	<div class="container">
    		<h1 class="yealink_pro_head">Yealink VC880 VC Room System</h1>
    		<div >
    			<Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
				  <Tab eventKey="home" title="Overview">
				    <div class="yealink-tab-cnt">

				    	<h3 class="yealink_pro_sub_head " >Full HD Video Conferencing System Designed for Better Collaboration </h3>
				    	
				    			<p class="yealink_pro_para ">Yealink VC880, a full HD video conferencing system, is designed to maximize your collaboration experience with cutting-edge technologies. Equipped with the strongest embedded MCU within the industry, VC880 supports 24-site HD video conferencing; Moreover, the industry-leading multi-camera solution grants you to connect up to nine VCC22 video conferencing cameras and other accessories via an Ethernet cable and a PoE switch, getting multi-way and multi-view video conferencing as easily as you can. Owning the rich physical interfaces for audio and video connection, VC880 can be connected to the 3rd-party camera or access to the video matrix. In addition, it comes with the professional RCA-in/out interface that integrates the mixer with the gooseneck microphone. Yealink VC880 is with a split-type structure to meet the deploy requirement of the control room which separates from a large conference room. To minimize cable clutter and lower the cost, we combine three cables (power cord, video cable and control line) into one cable, giving you a clean and tidy work environment.</p>
				    			
				    		
				    			<img class="img-fluid" src={vc8801} />		
				    		
				    	<h3 class="yealink_pro_sub_head">Spilt Type for Integration in Conference Room</h3>
				    	<p class="yealink_pro_para ">Spilt type, multi-camera solution (up to nine VCC22 cameras can be connected), only one Ethernet cable – are definitely optimized for the control room which separates from the conference room, helping you make deployment as easy as possible without costly room remediation. For multi-camera solution, only one PoE switch and an Ethernet cable are enough, skipping the complex video matrix and saving your time and cost. Support RCA-in/out and 3rd-party camera connection to make deployment simple and efficient</p>
				    	<img class="img-fluid" src={vc8802} />		

				    		
				    	<h3 class="yealink_pro_sub_head">3rd-party camera connection, Strong Compatibility</h3>
				    	<p class="yealink_pro_para ">An exclusive HDMI interface permits the video input from the 3rd-party camera or video matrix, and you can put the video image both different cameras together like a puzzle, as well as change the video layout. Besides, coming with the profession RCA-in/out interface, VC880 perfectly integrates the mixer with the gooseneck microphone.</p>
				    	<img class="img-fluid" src={vc8803} />		
				    	
						<h3 class="yealink_pro_sub_head">Compatibility and Integration</h3>
				    	<p class="yealink_pro_para">Yealink VC880 supports standard H.323/SIP dual-protocol. It is not only deeply integrated with Yealink Meeting Server(YMS), supporting Meeting Scheduling and One-touch Meeting Access; but also worked with Yealink Cloud Management Service, bringing quick deployment. Besides, it supports the 3rd-party room system and integrates with the leading cloud platforms.</p>
				    	<img class="img-fluid" src={vc8804} />		

				    		
				    	<h3 class="yealink_pro_sub_head">Better Network Adaptability</h3>
				    	<p class="yealink_pro_para">Thanks to Yealink anti-packet loss technology, VC880 can resist up to 30% video and 70% audio packet loss which guarantees smooth video and audio communication.</p>

				    	
				    </div>
				  </Tab>
				  <Tab eventKey="profile" title="Specifications">
				    <div class="yealink-tab-cnt">
				    	<table class="table table-bordered">
						  <tbody>
						    <tr class="">
						      
						      <td>People Video Quality</td>
						      <td>1080P/60fps</td>
						    </tr>
						    <tr class="">
						      
						      <td>Content Sharing Video Quality</td>
						      <td>1080P/60fps</td>
						    </tr>
						    <tr>
						      <td>Camera Model</td>
						      <td>VCC22(optional) </td>
						      
						    </tr>
						    <tr>
						      <td>Image Quality</td>
						      <td>1080P/60fps</td>
						      
						    </tr>
						    <tr>
						      <td>Zoom</td>
						      <td>12× optical zoom</td>
						      
						    </tr>
						    <tr>
						      <td>Field of View</td>
						      <td>70°</td>
						      
						    </tr>
						    <tr>
						      <td>PTZ</td>
						      <td><BsCheckCircle/></td>
						      
						    </tr>
						    <tr>
						      <td>Pickup </td>
						      <td>VCS Phone CP960(optional)</td>
						      
						    </tr>
						    <tr>
						      <td>Pickup Mic</td>
						      <td>3</td>
						      
						    </tr>
						    <tr>
						      
						      <td>Expansion Mic </td>
						      <td>2</td>
						    </tr>
						    <tr>
						      <td>Speaker</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      
						      <td>LCD Screen</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Dial Key</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Mute Key</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      
						      <td>Voice Pickup Range</td>
						      <td>6 metres</td>
						    </tr>
						    <tr>
						      <td>Built-in MCU's Capacity</td>
						      <td>24 sites</td>
						    </tr>
						    <tr>
						      <td>Built-in MCU's Resolution</td>
						      <td>24 sites at 1080P</td>
						    </tr>
						    <tr>
						      
						      <td>Additional One-way Audio Call</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						    
						      <td>Standard Communication Protocol	</td>
						      <td>H.323/SIP</td>
						    </tr>
						    <tr>
						      <td>Dual Stream</td>
						      <td>Receive&Send</td>
						      
						    </tr>
						    <tr>
						      <td>H.264 HP Codecs</td>
						      <td><BsCheckCircle/></td>
						      
						    </tr>
						    <tr>
						      <td>HD Recording</td>
						      <td><BsCheckCircle/></td>
						      
						    </tr>
						    <tr>
						      <td>Intelligent Firewall Traversal</td>
						      <td><BsCheckCircle/></td>
						      
						    </tr>
						    <tr>
						      <td>HDMI Output</td>
						      <td>2×HDMI</td>
						      
						    </tr>
						    <tr>
						      <td>Camera Input</td>
						      <td>1×HDMI</td>
						      
						    </tr>
						    <tr>
						      <td>Input for Content Sharing</td>
						      <td>1×HDMI + 1×Mini-DP(optional)</td>
						      
						    </tr>
						    <tr>
						      <td>Line-in</td>
						      <td>1×RCA</td>
						      
						    </tr>
						    <tr>
						      <td>Line-out</td>
						      <td>1×RCA</td>
						      
						    </tr>
						    <tr>
						      <td>USB</td>
						      <td>3×USB 2.0</td>
						      
						    </tr>
						    <tr>
						      <td>Power Adapter</td>
						      <td>48V/0.7A</td>
						      
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

export default VC880;
