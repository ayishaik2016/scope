import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



import t54w from '../../img/yealink/t54w.png';
import t57w1 from '../../img/yealink/t57w1.png';
import t57w2 from '../../img/yealink/t57w2.png';
import t57w3 from '../../img/yealink/vp57w3.png';
import t57w4 from '../../img/yealink/t57w4.png';
import T58A_Right from '../../img/yealink/T58A_Cam.jpg';
// import cp9205 from '../../img/yealink/cp9205.png';
// import test6 from '../../img/yealink/test6.png';
// import test7 from '../../img/yealink/test7.png';



import Lets from '../lets.js';
import Footer from '../footer.js';


import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom';



import { BsCheckCircle } from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';



class SIP_T54W extends Component{
render(){
  return (
    <div className="App">
    	<Nav1/>
    	<div class="container-fluid yealink_banner">

    	</div>
    	<div class="container">
    		<h1 class="yealink_pro_head">Yealink SIP-T54W</h1>
    		<div >
    			<Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
				  <Tab eventKey="home" title="Overview">
				    	<img class="img-fluid" src={t57w1} />
				  	<p class="yealink_pro_para">The Yealink T5 Prime Business Phones T53, T53W, T54W and T57W are for today’s highly active voice communication users, providing them with advanced telephony features, next-generation HD communication experience and great flexibility. The phones give businesses of all sizes high quality, future-proof and unparalleled solution that will unleash the power of remote communication and collaboration and eventually improve productivity.</p>
				    <div class="yealink-tab-cnt">
				    	<div class="row" style={{margin:"0"}}>
				    		<div class="col-md-6">
				    			<img class="img-fluid" src={t54w} />
				    		</div>
				    		<div class="col-md-6">
				    			<h3 class="yealink_pro_sub_head">Prime Business Phone T57W</h3>
				    			<p class="yealink_pro_para">Mid-level phone, ideal for professionals and managers with moderate call load</p>
				    			<ul class="yealink_pro_para">
						    		<li>4.3" 480x272-pixel colour display, fully adjustable</li>
						    		<li>HD Voice with Yealink Shield technology</li>
						    		<li>10 line keys, 16 SIP accounts, 27 memory keys</li>
						    		<li>Built-in Bluetooth, Wi-Fi</li>
						    		<li>Dual-port Gigabit Ethernet</li>
						    		<li>1xUSB port for call recording and wireless USB headset</li>
						    	</ul>
				    	
				    		</div>
				    	</div>
				    	
				    	

				    	
				    	

				    	
				    	<h3 class="yealink_pro_sub_head">Ergonomic Design with Adjustable Displays</h3>
				    	<ul class="yealink_pro_para">
				    		<li>Upgraded elegant and sleek design with large, backlit and high-resolution displays and LED indicators to provide optimized viewing and navigation experience.</li>
				    		<li>Fully adjustable display to fulfil the viewing needs at a variety of angles and under a variety of lighting conditions.</li>
				    		
				    	</ul>
				    	
				    	<img class="img-fluid" src={t57w2} />

				    	
				    	<h3 class="yealink_pro_sub_head">Distraction-Free HD Collaborations</h3>
				    	
				    	<ul class="yealink_pro_para">
				    		<li>Designed with Yealink Acoustic Shield technology to deliver distraction-free voice clarity for remote participants.</li>
				    		<li>Yealink Acoustic Shield technology uses multiple microphones to create a virtual “shield” between the speaker and the outside sound source. Once enabled, it intelligently blocks or mutes sounds from outside the “shield” so that the person on the other end hears you only and follows you clearly.</li>
				    		<li>Ideal for busy and noisy workspace such as call centres and office area by dramatically reducing frustration and improving productivity.</li>
				    		

				    	</ul>
				    	<img class="img-fluid" src={t57w3} />


				    	<h3 class="yealink_pro_sub_head">Explore Many More Possibilities</h3>
				    	<ul class="yealink_pro_para">
				    		<li>Instant content sharing with the people on the other end of the call. It enables quick discussion and speeds up decision making </li>
				    		<li>Supports DECT handset compatibility via a DECT dongle Yealink DD10K, up to 4 cordless handsets</li>
				    		<li>Seamless switching of calls between the desktop phone and the cordless DECT handset</li>
				    		<li>Built-in Bluetooth and Wi-Fi</li>
				    		
				    	</ul>
				    	<img class="img-fluid" src={t57w4} />
				    	
				    </div>
				  </Tab>
				  <Tab eventKey="profile" title="Specifications">
				    <div class="yealink-tab-cnt">
				    	<table class="table table-bordered">
						  <tbody>
						    <tr class="head_tab">
						      <td colspan="3" >Overview</td>
						    </tr>
						    <tr>
						      <td>Operating System</td>
						      
						      <td>Linux Based</td>
						    </tr>
						    <tr class="head_tab">
						      <td colspan="3" >Interface</td>
						    </tr>
						    <tr>
						      <td>LCD Display</td>
						      <td>4.3" 480 x 272 Pixels Color Display</td>
						    </tr>
						    <tr>
						      <td>LCD Type</td>
						      <td>Adjustable</td>
						    </tr>
						    <tr>
						      <td>LED Indicators</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Line Keys</td>
						      <td>10</td>
						    </tr>
						    <tr>
						      <td>Memory Keys</td>
						      <td>27 (3 Pages of 9 Keys)</td>
						    </tr>
						    <tr>
						      <td>USB Port (2.0 Compliant)</td>
						      <td>10</td>
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
						      <td>Expansion Module<br/>
(Accessory, purchased separately)</td>
						      <td>Yealink EXP50</td>
						    </tr>
						    <tr>
						      <td>External Yealink AC Adapter (Optional)</td>
						      <td>AC 100~240V Input and DC 5V/2A Output</td>
						    </tr>
						    <tr class="head_tab">
						      <td colspan="3" >Audio Features</td>
						    </tr>
						    <tr>
						      <td>HD Voice</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Wide-Band Codecs</td>
						      <td>G.722, Opus</td>
						    </tr>
						    <tr>
						      <td>Narrow-Band Codecs</td>
						      <td>G.711(A/µ), G.729A/B, G.726, G.723.1, iLBC</td>
						    </tr>
						    <tr>
						      <td>Speakerphone</td>
						      <td>Full Duplex</td>
						    </tr>
						    <tr>
						      <td>HAC Handset</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Acoustic Shield</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Yealink Noise Proof</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr class="head_tab">
						      <td colspan="3" >Connectivity</td>
						    </tr>
						    <tr>
						      <td>PoE</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Headset</td>
						      <td>USB/Bluetooth/RJ9</td>
						    </tr>
						    <tr>
						      <td>Bluetooth</td>
						      <td>Built-in Bluetooth 4.2</td>
						    </tr>
						    <tr>
						      <td>Wi-Fi</td>
						      <td>Built-in（2.4G and 5G）</td>
						    </tr>
						    <tr>
						      <td>HDMI</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Foot Stand</td>
						      <td>1 Adjustable Angle</td>
						    </tr>
						    <tr>
						      <td>Wall Mountable</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Corded-Cordless Phone (via DD10K)</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Content Sharing</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Door Phone Integration</td>
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
						      <td>Video Codec</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr class="head_tab">
						      <td colspan="3" >Telephony Features</td>
						    </tr>
						    <tr>
						      <td>SIP Accounts</td>
						      <td>16</td>
						    </tr>
						    <tr>
						      <td>3-way Audio Conferencing </td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>5-way Video/Audio Mixed Conferencing</td>
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

export default SIP_T54W;
