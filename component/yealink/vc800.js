import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


import Lets from '../lets.js';
import Footer from '../footer.js';

import vc8001 from '../../img/yealink/vc8001.png';
import vc8002 from '../../img/yealink/vc8002.png';
import vc8003 from '../../img/yealink/vc8003.png';
import vc8004 from '../../img/yealink/vc8004.png';
import vc8005 from '../../img/yealink/vc8005.png';
import vc8006 from '../../img/yealink/vc8006.png';
import vc8007 from '../../img/yealink/vc8007.png';
// import vc8008 from '../../img/yealink/w56p8.png';
// import t29g7 from '../../img/yealink/t29g7.png';
// import t46s8 from '../../img/yealink/t46s8.png';
// import t48s9 from '../../img/yealink/t48s9.png';
// import cp9205 from '../../img/yealink/cp9205.png';
// import test6 from '../../img/yealink/test6.png';
// import test7 from '../../img/yealink/test7.png';




import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom';



import { BsCheckCircle } from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';



class VC800 extends Component{
render(){
  return (
    <div className="App">
    	<Nav1/>
    	<div class="container-fluid yealink_banner">

    	</div>
    	<div class="container">
    		<h1 class="yealink_pro_head">Yealink VC800 VC Room System</h1>
    		<div >
    			<Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
				  <Tab eventKey="home" title="Overview">
				    <div class="yealink-tab-cnt">

				    	<h3 class="yealink_pro_sub_head " >Designed for Better Collaboration</h3>
				    	
				    			<p class="yealink_pro_para ">Yealink helps to cut long-distance communication costs and satisﬁes the multi-point conference needs of the modern workplace. The Yealink VC800 room system is ideal for medium and large meeting room environments. It features an all-in-one design and ﬁrst-class video and audio technology that creates an easier and more effective collaboration experience. As the newest generation of Yealink VC series video conferencing systems, the VC800 adopts an intuitive user interface that makes meeting control simpler. Featuring H.265/HEVC, Opus and HD voice, the Yealink VC800 facilitates more immersive audio-visual collaboration. By leveraging Yealink Meeting Server(YMS), the VC800 seamlessly supports Meeting Scheduling and One-touch Meeting Access.</p>
				    		
				    			<img class="img-fluid" src={vc8001} />		
				    		
				    	<h3 class="yealink_pro_sub_head">Satisfy Multipoint Conference Needs Thanks to the Powerful MCU</h3>
				    	<p class="yealink_pro_para">Yealink VC800 room system is designed to solve small and medium company's multi-party conference needs. Equipped with the powerful built-in MCU, Yealink VC800 supports 24-site HD video conferencing capacity and it can be divided into 2 Virtual Meeting Rooms which perfectly meets modern workplace long-distance communication needs.</p>
				    	<img class="img-fluid" src={vc8002} />		

				    		
				    	<h3 class="yealink_pro_sub_head">The Most Powerful Multi-Camera Solution Ever</h3>
				    	<p class="yealink_pro_para">The VC800 multi-camera solution enables up to 9 cameras to work at the same time. You can control each camera separately, put all cameras in one picture, or set certain picture larger/full screen. The deployment is simple by connecting VC800 and VCC22 cameras to PoE switch only with Ethernet cables, no need for extra power supplies for VCC22, or extra video matrix.</p>
				    	<img class="img-fluid" src={vc8003} />		

						<h3 class="yealink_pro_sub_head">Interaction And Collaboration Enhance The Conference Experience Comprehensively</h3>
				    	<ul class="yealink_pro_para">
				    		<li>Multiple participants can annotate content sharing at the same time, assisting a highly-efficient video conference.</li>
				    		<li>Multi-party interaction on an electronic whiteboard, real-time synchronization of each party's writing track, and a variety of handwriting options all help to bring a better collaborative experience.</li>
				    		<li>Supports local multi-screen interaction. Paring with WPP20, users can easily realize reverse control of computer via touchable TV or CTP20.</li>
				    	</ul>
				    	<img class="img-fluid" src={vc8004} />		
				    	
						<h3 class="yealink_pro_sub_head">6-Meter Full-Duplex High-Quality Sound Pickup, Smart Noise Proof</h3>
				    	<ul class="yealink_pro_para">
				    		<li>The microphone features 360 ° omnidirectional high-quality voice pickup in a radius of 6 meters. By maximum cascade of four microphones, the voice pickup scope can be effectively expanded. Matching with Yealink MSpeaker, the audio effect would be more excellent.</li>
				    		<li>Yealink patented smart noise proof technology eliminates the noise of keyboard, mouse click and other non-voice interference intelligently, making the communication more focused.</li>
				    		
				    	</ul>
				    	<img class="img-fluid" src={vc8005} />		

				    		
				    	<h3 class="yealink_pro_sub_head">All-in-one Design Creates Easier Meeting Experience and Simpler Deployment</h3>
				    	<p class="yealink_pro_para">Yealink VC800 owns a compact design which combines codec and camera together, only one CAT5E standard network cable could connect TV area and conference table. Brand-new intuitive user interface and touch panel make meeting simpler to control.</p>
				    	<img class="img-fluid" src={vc8006} />		


				    	<div class="row" style={{margin:"0"}}>
				    		<div class="col-md-8">
				    			<h3 class="yealink_pro_sub_head text-left">Compatibility and Integration</h3>
				    			<p class="yealink_pro_para">Support standard H.323/SIP dual-protocol. Deeply integrated with Yealink Meeting Server(YMS), Yealink VC800 supports Meeting Scheduling and, One-touch Meeting Access. By working with Yealink 5 Cloud Management Service, Yealink VC800 also brings quick deployment. Besides, it supports the 3rd-party room system and integrates with the leading cloud platforms.</p>
				    	
				    		</div>
				    		<div class="col-md-4">
				    			<img class="img-fluid" src={vc8007} />		
				    		</div>
				    	</div>
				    	
				    </div>
				  </Tab>
				  <Tab eventKey="profile" title="Specifications">
				    <div class="yealink-tab-cnt">
				    	<table class="table table-bordered">
						  <tbody>
						    <tr class="">
						      <td rowspan="3" >Multipoint</td>
						      <td>Maximum multipoint capability</td>
						      <td>up to 24 sites</td>
						    </tr>
						    <tr>
						      <td>Virtual meeting rooms</td>
						      <td>2</td>
						      
						    </tr>
						    <tr>
						      <td>Automatic voice-activated switching layout</td>
						      <td><BsCheckCircle/></td>
						      
						    </tr>
						    <tr>
						      <td rowspan="4">Camera Features</td>
						      <td>Zoom</td>
						      <td>12X optical </td>
						    </tr>
						    <tr>
						      <td>Frame rate</td>
						      <td>60 FPS</td>
						    </tr>
						    <tr>
						      <td>Horizontal field of view</td>
						      <td>70°</td>
						    </tr>
						    <tr>
						      <td>Multi-camera solution </td>
						      <td>Support up to 1+8 cameras</td>
						    </tr>
						    <tr>
						      <td rowspan="4">Video Features</td>
						      <td>Video call quality</td>
						      <td>up to 1080p60fps</td>
						    </tr>
						    <tr>
						      <td>Bandwidth requirement</td>
						      <td>1080P from 512kbps in H.265</td>
						    </tr>
						    <tr>
						      <td>Video packet Loss recovery</td>
						      <td>30%</td>
						    </tr>
						    <tr>
						      <td>Local HD recording to USB flash drive</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td rowspan="3">Collaboration Touch Panel</td>
						      <td>Display</td>
						      <td>13.3-inch full-fit capacitive touch screen</td>
						    </tr>
						    <tr>
						      <td>Maximum devices connections simultaneously</td>
						      <td>4</td>
						    </tr>
						    <tr>
						      <td>Touch Pen</td>
						      <td>support active pressure capacitance pen</td>
						    </tr>
						    <tr>
						      <td rowspan="4">Video Conferencing Microphone Array</td>
						      <td>3-microphone array</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>voice pickup range</td>
						      <td>20ft / 6 meters</td>
						    </tr>
						    <tr>
						      <td>Maximum devices connections simultaneously</td>
						      <td>4</td>
						    </tr>
						    <tr>
						      
						      <td>Yealink Noise Proof Technology</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						    <td rowspan="4">Collaboration Features</td>
						      <td>Whiteboard</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Annotation on content sharing</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Multi-screen interaction</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						       
						      <td>Reverse control</td>
						      <td><BsCheckCircle/>*</td>
						    </tr>
						    <tr>
						      <td rowspan="4">Network & Security</td>
						      <td>TCP/IP</td>
						      <td>IPv4 and IPv6</td>
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
						      <td>SRTP/TLS/H.235/AES 256-bit</td>
						    </tr>
						    <tr>
						      <td rowspan="7">Physical Connections</td>
						      <td>Video output</td>
						      <td>2 x HDMI</td>
						    </tr>
						    <tr>
						      <td>Video input for content</td>
						      <td>1 x HDMI &<br/>
1 x Mini Display Port</td>
						    </tr>
						    <tr>
						      <td>VCH/Phone port</td>
						      <td>1 x RJ45</td>
						    </tr>
						    <tr>
						      <td>Line-in/Line-out</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>USB interface</td>
						      <td>2 x USB2.0 in VC800 codec<br/>
1 x USB2.0 in VCH50 cable hub<br/>
1 x USB2.0 in CTP20</td>
						    </tr>
						    <tr>
						      <td>Network interface</td>
						      <td>1 x 10/100/1000M Ethernet</td>
						    </tr>
						    <tr>
						      <td>Power adapter</td>
						      <td>48V/0.7A</td>
						    </tr>

						    <tr>
						      <td>Video Codec</td>
						      <td colspan="2">H.265, H.264 High Profile, H.264, H.263, H.263+</td>
						    </tr>
						    <tr>
						      <td>Audio Codec</td>
						      <td colspan="2">ARES, Opus (8-48kHz), G.722.1C, G.722.1, G.722, G.711 (PCMU/PCMA), G.729+</td>
						    </tr>
						    <tr>
						      <td>Video Resolution</td>
						      <td colspan="2">1080P, 720P, 540P, 360P, 4CIF, CIF</td>
						    </tr>
						    <tr>
						      <td>Compatible Cloud</td>
						      <td colspan="2">Yealink Meeting Server, Yealink Cloud Management Service, Pexip, Mind, Zoom, BlueJeans</td>
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

export default VC800;
