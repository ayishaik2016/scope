import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



import vc2001 from '../../img/yealink/vc2001.png';
import vc2002 from '../../img/yealink/vc2002.png';
import vc2003 from '../../img/yealink/vc2003.png';
import vc2004 from '../../img/yealink/vc2004.png';
import vc2005 from '../../img/yealink/vc2005.png';
import vc8006 from '../../img/yealink/vc8006.png';
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



class VC200 extends Component{
render(){
  return (
    <div className="App">
    	<Nav1/>
    	<div class="container-fluid yealink_banner">

    	</div>
    	<div class="container">
    		<h1 class="yealink_pro_head">Yealink VC200 VC Room System</h1>
    		<div >
    			<Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
				  <Tab eventKey="home" title="Overview">
				    <div class="yealink-tab-cnt">

				    	<h3 class="yealink_pro_sub_head " >Smart Video Conferencing Endpoint for Small and Huddle Room</h3>
				    	
				    			<p class="yealink_pro_para ">Based on Android 7.1 operating system, the Yealink VC200 is an entry-level smart video conferencing endpoint designed for small and huddle room. Its UltraHD 4K camera and 103° super-wide-angle lens deliver outstanding video quality and additional boost face-to-face collaboration. With 6 beamforming microphone arrays for direct voice pickup and Yealink Noise Proof Technology, VC200 brings excellent sound in small rooms and ensures that everyone can be heard as well as seen. For its compact six-in-one design, VC200 integrates a built-in camera, codec, microphone, Bluetooth, Wi-Fi and bracket, which provides you a turnkey solution that can be easily and consistently deployed with only two cables. The Yealink VC200 is an ideal communications choice to help ensure your teams can concentrate fully on effective collaboration.</p>
				    			
				    		
				    			<img class="img-fluid" src={vc2001} />		
				    		
				    	<h3 class="yealink_pro_sub_head">Ultra HD 4K Camera and Super—wide Angle Lens</h3>
				    	<p class="yealink_pro_para">The Ultra HD 4K camera supports 4x digital zoom and e-PTZ, with super-wide 103° horizontal field of view, covering every seat at the table.</p>
				    	<p class="yealink_pro_para">1080P full HD video conferencing and H.265/H EVC codecs, resisting up to 30% video loss.</p>
				    	<img class="img-fluid" src={vc2002} />		

				    		
				    	<h3 class="yealink_pro_sub_head">Clearer Voice with 6 Beamforming Microphone Arrays</h3>
				    	<ul class="yealink_pro_para">
				    		<li> With the most advanced Beamforming technology, VC200’s 6 built-in microphone arrays support directed voice pickup, ensuring a clearer voice by automatically identifying and comparing voice.</li>
				    		<li>Automatically filtering unrelated noise, thanks to Yealink’s Smart Noise Proof technology, video conferencing can be more concentrated.</li>
				    		
				    	</ul>
				    	<img class="img-fluid" src={vc2003} />		
				    	
						<h3 class="yealink_pro_sub_head">Compact Design, 1 Minute Deployment</h3>
				    	<ul class="yealink_pro_para">
				    		<li>With all-in-one design by integrating codec, camera, microphone and bracket, VC200 can easily fit TV ranging from 6mm to 50mm thick.</li>
				    		<li> VC200 supports PoE supply; Connect network and HDMI cables and you are ready for a video conference.</li>
				    		<li>Based on Android OS and TV-styled interactive user interface, VC200 provides all functions with one-touch operation. What you see is what you get, with no training cost.</li>
				    		
				    	</ul>
				    	<img class="img-fluid" src={vc2004} />		

				    		
				    	<h3 class="yealink_pro_sub_head">Wireless Application, CIutter-free Meeting Room</h3>
				    	<ul class="yealink_pro_para">
				    		<li> Easily connect the VC200 through Bluetooth or Wi-Fi, you can utilize wireless application including one-click wireless content sharing. No installation nor messy cables, VC200 greatly saves your effort of deployment.</li>
				    		<li>With optional wireless microphones, VC200 can extend the range of sound pickup.</li>
				    		
				    		
				    	</ul>
				    	
				    	<img class="img-fluid" src={vc2005} />		

				    	
				    </div>
				  </Tab>
				  <Tab eventKey="profile" title="Specifications">
				    <div class="yealink-tab-cnt">
				    	<table class="table table-bordered">
						  <tbody>
						    <tr class="">
						      <td rowspan="4" >Camera Features</td>
						      <td>Pixel</td>
						      <td>8 Million Pixels</td>
						    </tr>
						    <tr class="">
						      
						      <td>Zoom</td>
						      <td>4X digital</td>
						    </tr>
						    <tr>
						      <td>Frame rate</td>
						      <td>30 FPS</td>
						      
						    </tr>
						    <tr>
						      <td>Horizontal field of view</td>
						      <td>103°</td>
						      
						    </tr>
						    <tr>
						      <td rowspan="4">Video Features</td>
						      <td>Video call quality</td>
						      <td>up to 1080p30fps</td>
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
						      <td>Local HD recording </td>
						      <td><BsCheckCircle/> (USB flash drive or local storage)</td>
						    </tr>
						    <tr>
						      <td rowspan="4">Microphone</td>
						      <td>Microphone </td>
						      <td>6 built-in beamforming microphone array</td>
						    </tr>
						    <tr>
						      <td>Voice pickup distance</td>
						      <td>16ft / 5 meters</td>
						    </tr>
						    <tr>
						      <td>Wireless microphones</td>
						      <td>Optional</td>
						    </tr>
						    <tr>
						      <td>Noise proof technology</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Collaboration Touch Panel</td>
						      <td>Collaboration Touch Panel </td>
						      <td>Optional</td>
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
						    <td rowspan="6">Network & Security</td>
						      <td>Wi-Fi</td>
						      <td>2.4GHz/5GHz Dual Mode</td>
						    </tr>
						    <tr>
						      <td>Bluetooth</td>
						      <td>Bluetooth 4.2</td>
						    </tr>
						    <tr>
						    
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
						      <td>SRTP/TLS/H.235/AES 256-bit</td>
						    </tr>
						    <tr>
						      <td rowspan="6">Physical
Connections</td>
						      <td>Video output</td>
						      <td>1 x HDMI</td>
						    </tr>
						    <tr>
						      <td>Video input for content</td>
						      <td>Optional WPP20 or VCH50</td>
						    </tr>
						    <tr>
						      <td>Line-in</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Line-out</td>
						      <td>3.5mm</td>
						    </tr>
						    <tr>
						      
						      <td>USB interface</td>
						      <td>2 x USB 2.0</td>
						    </tr>
						    <tr>
						      <td>Network interface</td>
						      <td>1 x 10/100 Ethernet</td>
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
						      
						      <td colspan="3">*Reverse control needs to be used with WPP20</td>
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

export default VC200;
