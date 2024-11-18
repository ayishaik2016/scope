import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



import t29g1 from '../../img/yealink/t29g1.png';
import t29g2 from '../../img/yealink/t29g2.png';
import t29g3 from '../../img/yealink/t29g3.png';
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



class SIP_T29G extends Component{
render(){
  return (
    <div className="App">
    	<Nav1/>
    	<div class="container-fluid yealink_banner">

    	</div>
    	<div class="container">
    		<h1 class="yealink_pro_head">Yealink SIP-T29G</h1>
    		<div >
    			<Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
				  <Tab eventKey="home" title="Overview">
				    <div class="yealink-tab-cnt">
				    	<div class="row" style={{MARGIN:"0"}}>
				    		<div class="col-md-8">
				    			<h3 class="yealink_pro_sub_head">Professional Gigabit Phone with Color LCD</h3>
				    			<p class="yealink_pro_para">SIP-T29G IP Phone is the most advanced model in the Yealink T2 IP phone series. It has a high-resolution T FT colour display and delivers a rich visual experience. It adopts Yealink Optima HD technology which enables rich, clear and life-like voice communications. The phone also supports Gigabit Ethernet and a variety of device connections including EHS headset and USB. With programmable keys, the IP Phone ensures vast productivity with enhanced features.</p>
				    		</div>
				    		<div class="col-md-4">
				    			<img class="img-fluid" src={t29g1} />
				    		</div>
				    	</div>
				    	<h3 class="yealink_pro_sub_head">Reliable Desktop Voice Solution with HD Voice Quality and Great Value.
T2 Series of Business-grade IP Phones </h3>
				    	<p class="yealink_pro_para">The Yealink T2 series of business-grade IP phones feature compact appearance, robust performance and cost-efficiency for daily desktop voice communications. The series delivers the industry’s leading HD audio quality and a wide range of telephony features to ensure efficient collaboration. With advanced features such as Gigabit Ethernet, USB connectivity and a paperless design, the Yealink T2 series helps all business users and SMBs in particular to enjoy added value and a productivity boost.</p>
				    	<img class="img-fluid" src={t29g2} />
				    	
				    	


				    	
				    	<h3 class="yealink_pro_sub_head">HD Voice</h3>
				    	<p class="yealink_pro_para">The Yealink T2 delivers an efficient and productive call experience with Yealink’s HD Voice Technology by incorporating premium software and hardware design, advanced acoustic clarity technologies and the addition of Opus* to its comprehensive list of supported audio codecs.</p>
				    	<img class="img-fluid" src={t29g3} />
				    	<p class="yealink_pro_para">By supporting Opus, Yealink T2 series delivers better audio quality in both high-bandwidth and poor network conditions, comparing to other wideband or narrowband codecs.</p>

				    	
				    	<h3 class="yealink_pro_sub_head">Gigabit Support</h3>
				    	<p class="yealink_pro_para">The T23G, T27G and T29G from the T2 series include an integrated Gigabit Ethernet (GigE) switch for advanced connectivity. With support for today's high-speed networks, these models ensure greater convenience and efficiency.</p>
				    	<img class="img-fluid" src={t29g4} />
				    	
				    	<h3 class="yealink_pro_sub_head">Appearance, UI and Paperless Design</h3>
				    	<p class="yealink_pro_para">To ensure an enjoyable visual and operation experience, great care has been taken to provide the T2 series with a more user-friendly interface and a refined visual appearance. Moreover, all the models have multiple paperless programmable keys to ensure shortcut functions for features such as fast-dialling, BLA and BLF, which are indicated by red and green lights.</p>
				    	<img class="img-fluid" src={t29g5} />
				    	
				    	<h3 class="yealink_pro_sub_head">USB Connectivity for Extended Functionalities</h3>
				    	<p class="yealink_pro_para">The T27G and T29G from the T2 series feature a built-in USB port, supporting extended functions such as USB call recording, Bluetooth and Wi-Fi connectivity for more flexibility and convenience.</p>
				    	<img class="img-fluid" src={t29g6} />
				    	

				    </div>
				  </Tab>
				  <Tab eventKey="profile" title="Specifications">
				    <div class="yealink-tab-cnt">
				    	<table class="table table-bordered">
						  <tbody>
						    <tr class="head_tab">
						      <td colspan="3" >T29G</td>
						    </tr>
						    <tr>
						      <td>LCD</td>
						      <td>4.3" color LCD</td>
						      
						    </tr>
						    <tr>
						      <td>Resolution</td>
						      <td>480 x 272 </td>
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
						      <td>2 adjustable angles</td>
						    </tr>
						    <tr>
						      <td>USB Port (2.0 compliant)</td>
						      <td>1</td>
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
						      <td> AC 100~240V input and DC 5V/2A output</td>
						    </tr>
						    <tr>
						      <td>Line Key</td>
						      <td>10</td>
						    </tr>
						    <tr>
						      <td>Memory Key</td>
						      <td>27 (3 pages of 9 keys)</td>
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
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Yealink EHS36 Wireless Headset Adapter<br/>
(Accessory, purchased separately)</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Yealink YHS32 Headset<br/>
(Accessory, purchased separately)</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Yealink Bluetooth Adapter BT40<br/>
(Accessory, purchased separately)</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Yealink Wi-Fi Adapter WF40<br/>
(Accessory, purchased separately)</td>
						      <td><BsCheckCircle/></td>
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

export default SIP_T29G;
