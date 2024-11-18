import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



import t19p1 from '../../img/yealink/t19p1.png';
import t19p2 from '../../img/yealink/t19p2.png';
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



class SIP_T19P extends Component{
render(){
  return (
    <div className="App">
    	<Nav1/>
    	<div class="container-fluid yealink_banner">

    	</div>
    	<div class="container">
    		<h1 class="yealink_pro_head">Yealink SIP-T19(P) E2</h1>
    		<div >
    			<Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
				  <Tab eventKey="home" title="Overview">
				    <div class="yealink-tab-cnt">
				    	<div class="row" style={{margin:"0"}}>
				    		<div class="col-md-8">
				    			<h3 class="yealink_pro_sub_head">Entry-level IP Phone with 1 Line</h3>
				    			<p class="yealink_pro_para">The SIP-T19(P) E2 is one of Yealink’s latest answers for the entry-level IP phone that offers features and performance normally associated with much more advanced phones. The quite intentional choice of high-quality materials, combined with a generously large 132x64-pixel graphical LCD that gives a clear 5-line display, guarantees both smoother user experience and easier access to much more visual information at a glance. Dual 10/100 Mbps network ports with integrated PoE makes SIP-T19P E2 an ideal choice for extended network use. The SIP-T19(P) E2 supports single VoIP account, simple, flexible and secure installation options, plus IPv6 and SRTP/HTTPS/TLS, VLAN and QoS. It includes headset use, wall-mountable and has been designed very specifically for better business.</p>
				    		</div>
				    		<div class="col-md-4">
				    			<img class="img-fluid" src={t19p1} />		
				    		</div>
				    	</div>	
				    	<img class="img-fluid" src={t19p2} />		
				    	
				    	<h3 class="yealink_pro_sub_head">Key Features and Benefits</h3>
				    	
				    	<h3 class="yealink_pro_sub_head text-left" style={{padding:"0"}}>Enhanced Call Management</h3>
				    	<p class="yealink_pro_para">The SIP-T19(P) E2 supports vast productivity-enhancing features such as XML Browser, call park, call pickup, call forward, call transfer, 3-way conference, which makes it the natural and obvious efficiency tool for today’s busy small and large offices environment.</p>

				    	
				    	
				    	<h3 class="yealink_pro_sub_head text-left" style={{padding:"0"}}>Efficient Installation and Provisioning</h3>
				    	<p class="yealink_pro_para">The Yealink SIP-T19(P) E2 supports efficient provisioning and effortless mass deployment with Yealink’s Redirection and Provisioning Service (RPS) and Boot mechanism to help you realize the Zero Touch Provisioning without any complex manual settings, which makes the SIP-T19(P) E2 simple to deploy, easy to maintain and upgrade.</p>

				    	
				    	<h3 class="yealink_pro_sub_head text-left" style={{padding:"0"}}>Highly secure transport and interoperability</h3>
				    	<p class="yealink_pro_para">The communicator uses SIP over Transport Layer Security (TLS/SSL) to provide service providers with the latest technology for enhanced network security. The range is certified compatible with 3CX and Broadsoft Broadworks, ensuring excellent compatibility with leading soft switch suppliers.</p>
				    	
				    	

				    </div>
				  </Tab>
				  <Tab eventKey="profile" title="Specifications">
				    <div class="yealink-tab-cnt">
				    	<table class="table table-bordered">
						  <tbody>
						    <tr class="head_tab">
						      <td colspan="3" >T19 (P) E2</td>
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
						      <td>1</td>
						    </tr>
						    <tr>
						      <td>PoE</td>
						      <td><BsCheckCircle/> (T19P E2)</td>
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
						      <td>0</td>
						    </tr>
						    <tr>
						      <td>Memory Key</td>
						      <td>0</td>
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

export default SIP_T19P;
