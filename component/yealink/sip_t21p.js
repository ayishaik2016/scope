import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



import t21p1 from '../../img/yealink/t21p1.jpg';
import t21p2 from '../../img/yealink/t21p2.png';
import t21p3 from '../../img/yealink/t21p3.png';
import t29g4 from '../../img/yealink/t29g4.png';
import t29g5 from '../../img/yealink/t29g5.png';
import t29g6 from '../../img/yealink/t29g6.png';
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



class SIP_T21P extends Component{
render(){
  return (
    <div className="App">
    	<Nav1/>
    	<div class="container-fluid yealink_banner">

    	</div>
    	<div class="container">
    		<h1 class="yealink_pro_head">Yealink SIP-T21(P) E2</h1>
    		<div >
    			<Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
				  <Tab eventKey="home" title="Overview">
				    <div class="yealink-tab-cnt">
				    	<div class="row" style={{margin:"0"}}>
				    		<div class="col-md-7">
				    			<h3 class="yealink_pro_sub_head">Professional IP Phone with 3 Lines & HD Voice</h3>
				    			<p class="yealink_pro_para">Yealink’s new SIP-T21(P) E2 takes entry-level IP phones to a level never achieved before. Making full-use of high-quality materials, plus an extra-large 132x64-pixel graphical LCD with backlight showing a clear 5-line data display, it offers a smoother user experience, much more visual information at a glance, plus HD Voice characteristics. Meanwhile, the dual 10/100 Mbps network ports with integrated PoE makes T21P E2 an ideal choice for extended network use. The T21(P) E2 supports two VoIP accounts, simple, flexible and secure installation options, plus support for IPv6, Open VPN and a redundancy server. It also operates with SRTP/ HTTPS/ TLS, 802.1x. As a very cost-effective and powerful IP solution, the T21(P) E2 maximizes productivity in both small and large office environments.</p>
				    		</div>
				    		<div class="col-md-5">
				    			<img class="img-fluid" src={t21p1} />		
				    		</div>
				    	</div>	
				    	<div class="row" style={{margin:"0"}}>
				    		<div class="col-md-6">
				    			<img class="img-fluid" src={t21p2} />
				    		</div>
				    		<div class="col-md-6">
				    			<img class="img-fluid" src={t21p3} />
				    		</div>
				    	</div>	
				    	
				    	
				    	
				    	<h3 class="yealink_pro_sub_head">Key Features and Benefits</h3>
				    	<h3 class="yealink_pro_sub_head text-left" style={{padding:"0"}}>HD Audio</h3>
				    	<p class="yealink_pro_para">Yealink HD voice refers to the combination of software and hardware design as well as the implementation of wideband technology to maximize the acoustic performance. Coupled with advanced acoustic clarity technology such as full duplex, echo cancellation, adaptive jitter buffer, etc, the SIP-T21 (P) E2 provides clearer, more lifelike voice communications. </p>
				    	
				    	
				    	


				    	
				    	<h3 class="yealink_pro_sub_head text-left" style={{padding:"0"}}>Enhanced Call Management</h3>
				    	<p class="yealink_pro_para">The SIP-T21(P) E2 supports vast productivity-enhancing features such as XML Browser, call park, call pickup, BLF, call forward, call transfer, 3-way conference, which makes it the natural and obvious efficiency tool for today’s busy small and large offices environment.</p>

				    	
				    	
				    	<h3 class="yealink_pro_sub_head text-left" style={{padding:"0"}}>Efficient Installation and Provisioning</h3>
				    	<p class="yealink_pro_para">The Yealink SIP-T21(P) E2 supports efficient provisioning and effortless mass deployment with Yealink’s Redirection and Provisioning Service (RPS) and Boot mechanism to help you realize the Zero Touch Provisioning without any complex manual settings, which makes it simple to deploy, easy to maintain and upgrade.</p>

				    	
				    	<h3 class="yealink_pro_sub_head text-left" style={{padding:"0"}}>Highly secure transport and interoperability</h3>
				    	<p class="yealink_pro_para">The communicator uses SIP over Transport Layer Security (TLS/SSL) to provide service providers with the latest technology for enhanced network security. The range is certified compatible with 3CX and Broadsoft Broadworks, ensuring excellent compatibility with leading soft switch suppliers</p>
				    	
				    	

				    </div>
				  </Tab>
				  <Tab eventKey="profile" title="Specifications">
				    <div class="yealink-tab-cnt">
				    	<table class="table table-bordered">
						  <tbody>
						    <tr class="head_tab">
						      <td colspan="3" >T23P</td>
						    </tr>
						    <tr>
						      <td>LCD</td>
						      <td>2.3" graphical LCD</td>
						      
						    </tr>
						    <tr>
						      <td>Resolution</td>
						      <td>132 x 64 </td>
						    </tr>
						    <tr>
						      <td>LCD Backlight</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Line</td>
						      <td>2</td>
						    </tr>
						    <tr>
						      <td>PoE</td>
						      <td><BsCheckCircle/> (T21P E2)</td>
						    </tr>
						    <tr>
						      <td>GigE</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Wall Mounting</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Foot Stand</td>
						      <td>1 adjustable angles</td>
						    </tr>
						    <tr>
						      <td>USB Port (2.0 compliant)</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Ethernet Port</td>
						      <td>2 x RJ45 10/100M Ethernet ports</td>
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
						      <td>  AC 100~240V input and DC 5V/600mA output   <br/>
(T21 E2: Standard/T21P E2: Optional)</td>
						    </tr>
						    <tr>
						      <td>Line Key</td>
						      <td>2</td>
						    </tr>
						    <tr>
						      <td>Memory Key</td>
						      <td>2</td>
						    </tr>
						    <tr>
						      <td>Yealink EXP50 Expansion Module <br/>
(Accessory, purchased separately)</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Yealink EXP40 Expansion Module <br/>
(Accessory, purchased separately)</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Yealink EXP20 Expansion Module <br/>
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
						      <td><ImCancelCircle/></td>
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
						      <td>G.722</td>
						    </tr>
						    <tr>
						      <td>Narrow-band Codecs</td>
						      <td>G.711(A/µ), G.723, G.729AB, G.726, iLBC</td>
						    </tr>
						    <tr>
						      <td>LCD Type</td>
						      <td>Fixed</td>
						    </tr>
						    <tr>
						      <td>Operating System</td>
						      <td>Linux</td>
						    </tr>
						    <tr>
						      <td>Built-in Bluetooth</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Built-in Wi-Fi</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>USB Headset<br/>
(Accessory, purchased separately)</td>
						      <td><ImCancelCircle/></td>
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
						      <td>Video Codecs</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>3-way Video Conferencing</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>5-way video/audio mixed conferencing</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>HDMI </td>
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

export default SIP_T21P;
