import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



import t41s1 from '../../img/yealink/t40g1.png';
import t41s2 from '../../img/yealink/t40g2.png';
import t46s3 from '../../img/yealink/t46s3.png';
import t46s4 from '../../img/yealink/t46s4.png';
import t46s5 from '../../img/yealink/t46s5.png';
import t46s6 from '../../img/yealink/t46s6.png';
import t46s7 from '../../img/yealink/t46s7.png';
import t46s8 from '../../img/yealink/t46s8.png';
// import t48s9 from '../../img/yealink/t48s9.png';
// import cp9205 from '../../img/yealink/cp9205.png';
// import test6 from '../../img/yealink/test6.png';
// import test7 from '../../img/yealink/test7.png';


import Lets from '../lets.js';
import Footer from '../footer.js';



import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom';



import { BsCheckCircle } from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';



class SIP_T40G extends Component{
render(){
  return (
    <div className="App">
    	<Nav1/>
    	<div class="container-fluid yealink_banner">

    	</div>
    	<div class="container">
    		<h1 class="yealink_pro_head">Yealink SIP-T40G</h1>
    		<div >
    			<Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
				  <Tab eventKey="home" title="Overview">
				    <div class="yealink-tab-cnt">
				    	<h3 class="yealink_pro_sub_head">Remarkable Quality and Design</h3>
				    	<p class="yealink_pro_para">The Yealink T4 series represents the cutting edge of VoIP technology and is intended for discerning users with extremely high expectations for IP phones. Revolutionary in appearance and technical design, the T4 series is pleasurable and practical to use. Advanced features include support for gigabit networks, rich programmable DSS keys that tailor the IP phone features to specific needs, and support for Bluetooth headsets that give users more freedom at work. Enhanced sound quality is delivered by the Optima HD Voice system, which meets TIA 920 certification standards. Yealink's T4 series is the ideal marriage of perfection and performance.</p>
				    	<img class="img-fluid" src={t41s1} />
				    	<img class="img-fluid" src={t41s2} />
				    	


				    	
				    	<h3 class="yealink_pro_sub_head">Ultimate Performance, Cutting-edge Innovation</h3>
				    	<p class="yealink_pro_para">The Yealink T4 series represents the cutting edge of VoIP technology and is intended for discerning users with extremely high expectations for IP phones. Revolutionary in appearance and technical design, the T4 series is pleasurable and practical to use. Advanced features include support for gigabit networks, rich programmable DSS keys that tailor the IP phone features to specific needs, and support for Bluetooth headsets that give users more free­dom at work. Enhanced sound quality is delivered by the Optima HD Voice system, which meets TIA 920 certifica­tion standards. Yealink's T4 series is the ideal marriage of perfection and performance.</p>



				    	
				    	<h3 class="yealink_pro_sub_head">Remarkable Quality and Design</h3>
				    	<p class="yealink_pro_para">The Yealink T4 series represents the cutting edge of VoIP technology and is intended for discerning users with extremely high expectations for IP phones. Revolutionary in appearance and technical design, the T4 series is pleasurable and practical to use. Advanced features include support for gigabit networks, rich programmable DSS keys that tailor the IP phone features to specific needs, and support for Bluetooth headsets that give users more freedom at work. Enhanced sound quality is delivered by the Optima HD Voice system, which meets TIA 920 certification standards. Yealink's T4 series is the ideal marriage of perfection and performance.</p>

				    	
				    	<h3 class="yealink_pro_sub_head">Optima HD Voice</h3>
				    	<p class="yealink_pro_para">Yealink T4 Series' Optima HD Voice system, which meets TIA 920 certification standards, maximizes acoustic performance and  creates a virtual face-to-face experience.</p>
				    	

				    </div>
				  </Tab>
				  <Tab eventKey="profile" title="Specifications">
				    <div class="yealink-tab-cnt">
				    	<table class="table table-bordered">
						  <tbody>
						    <tr class="head_tab">
						      <td colspan="3" >T40G</td>
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
						      <td>3</td>
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
						      <td>2 adjustable angles</td>
						    </tr>
						    <tr>
						      <td>USB Port (2.0 compliant)</td>
						      <td><ImCancelCircle/></td>
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
						      <td>AC 100~240V input and DC 5V/600mA output</td>
						    </tr>
						    <tr>
						      <td>Line Key</td>
						      <td>3</td>
						    </tr>
						    <tr>
						      <td>Memory Key</td>
						      <td>3</td>
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
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Yealink YHS32 Headset<br/>
(Accessory, purchased separately)</td>
						      <td><ImCancelCircle/></td>
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
						      <td>G.722，Opus</td>
						    </tr>
						    <tr>
						      <td>Narrow-band Codecs</td>
						      <td>G.711(A/µ), G.729A/B, G.726, iLBC</td>
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

export default SIP_T40G;
