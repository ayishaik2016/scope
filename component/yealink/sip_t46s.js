import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


import Lets from '../lets.js';
import Footer from '../footer.js';


import t46s1 from '../../img/yealink/t46s1.png';
import t46s2 from '../../img/yealink/t46s2.png';
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




import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom';



import { BsCheckCircle } from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';



class SIP_T46S extends Component{
render(){
  return (
    <div className="App">
    	<Nav1/>
    	<div class="container-fluid yealink_banner">

    	</div>
    	<div class="container">
    		<h1 class="yealink_pro_head">Yealink SIP-T46S</h1>
    		<div >
    			<Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
				  <Tab eventKey="home" title="Overview">
				    <div class="yealink-tab-cnt">
				    	<h3 class="yealink_pro_sub_head">Remarkable Quality and Design</h3>
				    	<p class="yealink_pro_para">The Yealink T4 series represents the cutting edge of VoIP technology and is intended for discerning users with extremely high expectations for IP phones. Revolutionary in appearance and technical design, the T4 series is pleasurable and practical to use. Advanced features include support for gigabit networks, rich programmable DSS keys that tailor the IP phone features to specific needs, and support for Bluetooth headsets that give users more freedom at work. Enhanced sound quality is delivered by the Optima HD Voice system, which meets TIA 920 certification standards. Yealink's T4 series is the ideal marriage of perfection and performance.</p>
				    	<img class="img-fluid" src={t46s1} />
				    	<img class="img-fluid" src={t46s2} />
				    	


				    	
				    	<h3 class="yealink_pro_sub_head">Enrich Collaboration, Improve Productivity</h3>
				    	<p class="yealink_pro_para">Yealink’s T4S series is the upgraded IP phone line of Yealink’s former T4 series. Designed for today’s busy executives and managers, the T4S series features an elegant appearance, Optima high-definition audio quality and remarkable phone experience. Integrating cutting-edge features like Wi-Fi and Bluetooth connectivity, the T4S series enriches business users’ daily collaboration. It also protects business users’ investment with its effortless deployment and broad interoperability with UC platforms and IP PBX systems.</p>

				    	<img class="img-fluid" src={t46s3} />

				    	
				    	<h3 class="yealink_pro_sub_head">Optima HD Audio</h3>
				    	<p class="yealink_pro_para">With Yealink’s Optima HD audio technologies, industry-leading acoustic clarity and newly-added support for Opus* to its broad audio codec list, the Yealink T4S guarantees a lifelike collaboration experience. * By supporting Opus, Yealink T4S series delivers better audio quality in both high-bandwidth and poor network conditions, comparing to other wideband or narrowband codecs.</p>
				    	<img class="img-fluid" src={t46s4} />
				    	
				    	<h3 class="yealink_pro_sub_head">Elegant Industrial Design</h3>
				    	<p class="yealink_pro_para">The cutting-edge design of the Yealink T4S series includes telephony superiority as well as an elegant appearance. The use of premium materials testifies to its manufacturing excellence</p>
				    	<img class="img-fluid" src={t46s5} />
				    	
						<h3 class="yealink_pro_sub_head">Remarkable User Experience</h3>
				    	<p class="yealink_pro_para">The Yealink T4S series delivers excellent stability and performance with its latest advanced components. The phones feature an optimized interface for smartphone-like user experience. Its rich one-touch soft keys allow for customization, bringing additional convenience and increasing productivity.</p>
				    	<img class="img-fluid" src={t46s6} />

				    	<h3 class="yealink_pro_sub_head">Additional Convenience and Flexibility</h3>
				    	<p class="yealink_pro_para">In addition to the T46S and the T48S, the new T41S and T42S are equipped with a built-in USB port, meaning the entire T4S series supports extended functions such as USB call recording, Bluetooth and Wi-Fi connectivity for more flexibility and functionalities.</p>
				    	
				    	<img class="img-fluid" src={t46s7} />

				    	<h3 class="yealink_pro_sub_head">Effortless Configuration and Upgrade</h3>
				    	<p class="yealink_pro_para">The Yealink T4S supports efficient provision and effortless mass deployment with Yealink’s free Redirection and Provisioning Service (RPS). Furthermore, the T4S features a unified firmware and an auto-p template that apply to all phone models (T41S, T42S, T46S and T48S), saving even more time and IT costs for businesses.</p>
				    	<img class="img-fluid" src={t46s8} />


				    </div>
				  </Tab>
				  <Tab eventKey="profile" title="Specifications">
				    <div class="yealink-tab-cnt">
				    	<table class="table table-bordered">
						  <tbody>
						    <tr class="head_tab">
						      <td colspan="3" >T46S</td>
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
						      <td>AC 100~240V input and DC 5V/2A output</td>
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
						      <td><BsCheckCircle/></td>
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
						      <td>G.722，Opus</td>
						    </tr>
						    <tr>
						      <td>Narrow-band Codecs</td>
						      <td>G.711(A/µ), G.729A/B, G.726,<br/>
G.723.1, iLBC, Opus</td>
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
						      <td><BsCheckCircle/></td>
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

export default SIP_T46S;
