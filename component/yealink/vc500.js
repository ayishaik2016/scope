import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



import Lets from '../lets.js';
import Footer from '../footer.js';

import vc5001 from '../../img/yealink/vc5001.png';
import vc5002 from '../../img/yealink/vc5002.png';
import vc5003 from '../../img/yealink/vc5003.png';
import vc5004 from '../../img/yealink/vc5004.png';
import vc5005 from '../../img/yealink/vc5005.png';
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



class VC500 extends Component{
render(){
  return (
    <div className="App">
    	<Nav1/>
    	<div class="container-fluid yealink_banner">

    	</div>
    	<div class="container">
    		<h1 class="yealink_pro_head">Yealink VC500 VC Room System</h1>
    		<div >
    			<Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
				  <Tab eventKey="home" title="Overview">
				    <div class="yealink-tab-cnt">

				    	<h3 class="yealink_pro_sub_head " >Ultimate Simplicity, Perfect for Small and Medium Rooms</h3>
				    	
				    			<p class="yealink_pro_para ">Yealink VC500 is ideally designed to ensure everyone to have an immersive communication in the workspace. Equipped with the 5x optical zoom PTZ camera, it supports 1080P/60FPS video calls to make your business discussion be as life-like and interactive as possible. It possesses an all-in-one design and the first-class video and audio technology that creates an easier and more effective collaboration experience.</p>
				    			<p class="yealink_pro_para ">As the newest generation of Yealink VC series video conferencing endpoints, the VC500 adopts an intuitive user interface that makes meeting control simpler. Featuring H.265/HEVC and Opus, this new release facilitates more immersive audio-visual collaboration. By leveraging Yealink Meeting Server (YMS), the VC500 seamlessly supports Meeting Scheduling and One-touch Meeting Access. All combine to make VC500 one of the perfect solutions for the small-to-medium meeting rooms.</p>
				    		
				    			<img class="img-fluid" src={vc5001} />		
				    		
				    	<h3 class="yealink_pro_sub_head">Life-like Communication for Small and Medium Meeting Rooms</h3>
				    	<p class="yealink_pro_para">VC500 delivers a lifelike face-to-face conferencing experience for small and medium meeting rooms. Its wide-angle lens provides an expanded 83-degree horizontal field of view to ensure that everyone in the room is visible during the meeting. Equipped with a 1080P60 and 5X optical PTZ camera, VC500 offers a vivid image as well as a clear concentration.</p>
				    	<img class="img-fluid" src={vc5002} />		

				    		
				    	<h3 class="yealink_pro_sub_head">All-in-one Design Creates Simpler Deployment</h3>
				    	<ul class="yealink_pro_para">
				    		<li>Deployment is simpler than ever. VC500 can be installed on top of the display, ﬁts seamlessly on TV with thickness from 1mm to 77mm, making your meeting room clutter-free.</li>
				    		<li>Yealink VC500 is a sleek, compact device including an integrated HD camera and a codec, only one standard network cable could connect TV area and conference table, saving more time and space for better communication.</li>
				    		
				    	</ul>
				    	<img class="img-fluid" src={vc5003} />		
				    	
						<h3 class="yealink_pro_sub_head">Two Packages to Enhance Diversity</h3>
				    	<ul class="yealink_pro_para">
				    		<li>VC500 offers two packages to ﬁt in diversified needs.</li>
				    		<li>VC500-Wireless Micpod utilizes Yealink’s DECT technology, featuring two wireless microphones to optimize mobility within the meeting room by providing a stable voice transmission. Thanks to Yealink’s DECT technology, your table can be kept tidy and clutter-free.</li>
				    		<li>VC500-VCM34-CTP20 includes a microphone featuring 360 ° omnidirectional high-quality voice pickup in radius of 6 meters and a touch panel which enables multi-party collaboration to upgrade users' experience significantly.</li>
				    		
				    	</ul>
				    	<img class="img-fluid" src={vc5004} />		

				    		
				    	<h3 class="yealink_pro_sub_head">Interaction and Collaboration Enhance the Conference Experience Comprehensively</h3>
				    	<ul class="yealink_pro_para">
				    		<li>Multiple participants can annotate content sharing at the same time, assisting high-efﬁcient video conference.</li>
				    		<li>Multi-party interaction on electronic whiteboard, real-time synchronization of each party's writing track, and a variety of handwriting options all help to bring a better collaborative experience.</li>
				    		<li>Supports local multi-screen interaction. Paring with WPPZO, users can easily realize reverse control of computer via touchable TV or CTP20.</li>
				    		
				    	</ul>
				    	
				    	<img class="img-fluid" src={vc5005} />		

				    	
				    </div>
				  </Tab>
				  <Tab eventKey="profile" title="Specifications">
				    <div class="yealink-tab-cnt">
				    	<table class="table table-bordered">
						  <tbody>
						    <tr class="">
						      <td rowspan="3" >Camera Features</td>
						      <td>Zoom</td>
						      <td>5X optical</td>
						    </tr>
						    <tr>
						      <td>Frame rate</td>
						      <td>60 FPS</td>
						      
						    </tr>
						    <tr>
						      <td>Horizontal field of view</td>
						      <td>83°</td>
						      
						    </tr>
						    <tr>
						      <td rowspan="5">Video Features</td>
						      <td>Video call quality</td>
						      <td>Up to 1080p60fps </td>
						    </tr>
						    <tr>
						      <td>H.265/HEVC</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Bandwidth requirement</td>
						      <td>1080P from 512kbps in H.265</td>
						    </tr>
						    <tr>
						      <td>Video packet loss recovery </td>
						      <td>30%</td>
						    </tr>
						    <tr>
						      <td>Local HD recording to USB flash drive </td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td rowspan="4">Microphone</td>
						      <td>Microphone Model</td>
						      <td>VCM34</td>
						    </tr>
						    <tr>
						      <td>Voice pickup distance</td>
						      <td>20ft / 6 meters</td>
						    </tr>
						    <tr>
						      <td>3-microphone array</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Noise proof technology</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td rowspan="3">Collaboration Touch Panel</td>
						      <td>Display </td>
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
						      <td>SRTP/TLS/H.235/AES 128-bit</td>
						    </tr>
						    <tr>
						      <td rowspan="6">Physical
Connections</td>
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
						      <td>USB interface</td>
						      <td>2 x USB2.0 in VC500 codec<br/>
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
						      <td colspan="2">ARES, Opus (8-48kHz), G.722.1C, G.722.1, G.722, G.711 (PCMU/PCMA), G.729</td>
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

export default VC500;
