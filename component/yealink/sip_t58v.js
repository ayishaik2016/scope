import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



import t56a1 from '../../img/yealink/t56a1.jpg';
import t56a2 from '../../img/yealink/t56a2.jpg';
import t56a3 from '../../img/yealink/t56a3.jpg';
import t56a4 from '../../img/yealink/t56a4.jpg';
import t56a5 from '../../img/yealink/t56a5.jpg';
// import cp9205 from '../../img/yealink/cp9205.png';
// import test6 from '../../img/yealink/test6.png';
// import test7 from '../../img/yealink/test7.png';


import Lets from '../lets.js';
import Footer from '../footer.js';



import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom';



import { BsCheckCircle } from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';



class SIP_T58V extends Component{
render(){
  return (
    <div className="App">
    	<Nav1/>
    	<div class="container-fluid yealink_banner">

    	</div>
    	<div class="container">
    		<h1 class="yealink_pro_head">Yealink SIP-T58V</h1>
    		<div >
    			<Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
				  <Tab eventKey="home" title="Overview">
				    <div class="yealink-tab-cnt">
				    	
				    	<img class="img-fluid" src={t56a1} />
				    	
				    	<p class="yealink_pro_para">The Yealink SIP-T58V is a simple-to-use smart media phone that provides an enriched HD audio and video calling experience for business professionals. This all-new smart media phone enables productivity-enhancing visual communication with the ease of a standard phone. Based on Android 5.1.1 operating system, the SIP-T58V features a seven-inch adjustable multi-point touch screen, a removable two-megapixel HD camera CAM50, integrated Wi-Fi and Bluetooth 4.0+ EDR, and it is coupled with a built-in web browser, calendar, recorder and more, which also support the installation of third-party applications for business customization. The Yealink SIP-T5 Smart Media Phone Series strikes an exquisite balance between simplicity and sophistication, offering an all-in-one communications solution for today's busy executives, managers and teleworkers.</p>
				    	

				    	
				    	<h3 class="yealink_pro_sub_head">Effortless Business Customization</h3>
				    	<ul class="yealink_pro_para">
				    		<li>Based on the Android OS, the phones feature great capabilities that integrate seamlessly with third-party applications. Officially supported apps include BroadSoft Communicator, Skype, Skype for Business and Zoom Meeting.</li>
				    		<li>Support for Yealink’s SDK (Software Development Kit) allows service providers and Yealink to work together to strengthen and deepen integration and to jointly develop app features on the phone. Help improve communication efficiency by lowering the learning curve, providing more features and unifying user experiences.</li>
				    		
				    	</ul>
				    	
				    	<img class="img-fluid" src={t56a2} />

				    	
				    	<h3 class="yealink_pro_sub_head">Enhanced HD Video and Voice for Exceptionally Clear Communication</h3>
				    	
				    	<ul class="yealink_pro_para">
				    		<li>T5S Smart Media Phones deliver crystal-clear immersive conversations thanks to Optima HD voice and Yealink Noise Proof technology that effectively eliminate non-human background noise.</li>
				    		<li>The T58V and the T58A support HD video communication with Yealink’s CAM50 (optional on the T58A). In addition to an adjustable seven-inch touchscreen interface, the phones enable users to access lifelike video calls easily and to adjust the viewing angle flexibly. Increase communication productivity by making every conversation clear, comfortable and focused.</li>
				    		

				    	</ul>
				    	<img class="img-fluid" src={t56a3} />


				    	<h3 class="yealink_pro_sub_head">One-touch Operation and Control</h3>
				    	<ul class="yealink_pro_para">
				    		<li>Yealink Smart Media Phones feature a seven-inch capacitive touch-screen for smooth and delightful operation and control. The intuitive touchscreen enables users to access and manage the telephony features with a simple touch of the screen.</li>
				    		<li>The phones offer multiple adjustable elements, including an adjustable screen and camera on T58V(A), and a two-angle stand on T56A. This flexibility accommodates a user’s preferred viewing angle and base height and integrates into a variety of usage scenarios.</li>
				    		
				    	</ul>
				    	<img class="img-fluid" src={t56a4} />
				    	<h3 class="yealink_pro_sub_head">Deliver Versatility with Deep IP Intercom Integration</h3>
				    	<p class="yealink_pro_para">Customers can enjoy a high ROI by making the phone a two-in-one tool for both business collaboration and for door monitoring and unlocking. Versatile and smart, the T58V and T58A integrate with IP video intercom systems from major vendors in the market, including 2N, Baudisch and CyberData. Deliver true ROI and cost-efficiency to customers.</p>
				    	<p class="yealink_pro_para">Advanced features include:</p>
				    	<ul class="yealink_pro_para">
				    		<li>Visitor preview before picking up the phone;</li>
				    		<li>One-touch door open (with or without answering the phone);</li>
				    		<li>Easy monitoring by connecting via the video intercom or video surveillance, a setup that is ideal for warehouses and logistics.</li>
				    		
				    	</ul>
				    	
				    	<img class="img-fluid" src={t56a5} />
				    </div>
				  </Tab>
				  <Tab eventKey="profile" title="Specifications">
				    <div class="yealink-tab-cnt">
				    	<table class="table table-bordered">
						  <tbody>
						    <tr class="head_tab">
						      <td colspan="3" >SIP T58V</td>
						    </tr>
						    <tr>
						      <td>LCD</td>
						      <td>7" capacitive touch screen</td>
						      
						    </tr>
						    <tr>
						      <td>Resolution</td>
						      <td>1024 x 600</td>
						    </tr>
						    <tr>
						      <td>LCD Backlight</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Line</td>
						      <td>16</td>
						    </tr>
						    <tr>
						      <td>PoE</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>GigE</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Wall Mounting</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Foot Stand</td>
						      <td>1 adjustable angle</td>
						    </tr>
						    <tr>
						      <td>USB Port (2.0 compliant)</td>
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
						      <td>External Yealink AC Adapter (optional)</td>
						      <td>AC 100~240V input and DC 5V/2A output</td>
						    </tr>
						    <tr>
						      <td>Line Key</td>
						      <td>0</td>
						    </tr>
						    <tr>
						      <td>Memory Key</td>
						      <td>27</td>
						    </tr>
						    <tr>
						      <td>Yealink EXP50 Expansion Module<br/>
(Accessory, purchased separately)</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Yealink EXP40 Expansion Module<br/>
(Accessory, purchased separately)</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Yealink EXP20 Expansion Module<br/>
(Accessory, purchased separately)</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Yealink EHS36 Wireless Headset Adapter<br/>
(Accessory, purchased separately)</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Yealink YHS32 Headset<br/>
(Accessory, purchased separately)</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Yealink Bluetooth Adapter BT40<br/>
(Accessory, purchased separately)</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Yealink Wi-Fi Adapter WF40<br/>
(Accessory, purchased separately)</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>USB Recording</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>3-way Conferencing</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>HD Voice</td>
						      <td>HD Speaker<br/>
HD Handset</td>
						    </tr>
						    <tr>
						      <td>Wide-band Codecs</td>
						      <td>Opus, G.722, G.722.1, G.722.1C</td>
						    </tr>
						    <tr>
						      <td>Narrow-band Codecs</td>
						      <td>Opus,G.711 (A/µ), G.723, G.726, G.729AB, iLBC</td>
						    </tr>
						    <tr>
						      <td>LCD Type</td>
						      <td>Adjustable</td>
						    </tr>
						    <tr>
						      <td>Operating System</td>
						      <td>Android 5.1.1</td>
						    </tr>
						    <tr>
						      <td>Built-in Bluetooth</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Built-in Wi-Fi</td>
						      <td>2.4G</td>
						    </tr>
						    <tr>
						      <td>USB Headset<br/>
(Accessory, purchased separately)</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Camera</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Video Resolution </td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Video Codecs </td>
						      <td>H.264HP, H.264,VP8</td>
						    </tr>
						    <tr>
						      <td>3-way Video Conferencing</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>5-way video/audio mixed conferencing</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>HDMI</td>
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

export default SIP_T58V;
