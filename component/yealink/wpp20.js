import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



import wpp201 from '../../img/yealink/wpp201.png';
import wpp202 from '../../img/yealink/wpp202.png';
import wpp203 from '../../img/yealink/wpp203.png';
import wpp204 from '../../img/yealink/wpp204.png';
import wpp205 from '../../img/yealink/wpp205.png';
import wpp206 from '../../img/yealink/wpp206.png';
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



class WPP20 extends Component{
render(){
  return (
    <div className="App">
    	<Nav1/>
    	<div class="container-fluid yealink_banner">

    	</div>
    	<div class="container">
    		<h1 class="yealink_pro_head">Yealink WPP20 Wireless Presentation Pod</h1>
    		<div >
    			<Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
				  <Tab eventKey="home" title="Overview">
				    <div class="yealink-tab-cnt">

				    	<h3 class="yealink_pro_sub_head " >Plug and Play - The Easiest Way of Content Sharing </h3>
				    	
				    			<p class="yealink_pro_para ">WPP20 is a wireless presentation pod that partners with the Yealink new generation video conferencing system to offer a high-quality content sharing experience. Adopting 5G Wi-Fi network connectivity, WPP20 enables content sharing on an external display with just a single tap. When paired with the Yealink video conferencing system and a touchscreen television, WPP20’s embedded meeting assistant software offers rich functionality such as inviting participants, conference recording and even reverse control of the laptop from the television screen. This rich feature set transforms any conference room into a hassle-free space for team collaboration.</p>
				    			
				    		
				    			<img class="img-fluid" src={wpp201} />		
				    		
				    	<h3 class="yealink_pro_sub_head">One-click, Trouble-free Presentations</h3>
				    	<ul class="yealink_pro_para">
				    		<li> Easy Sharing. WPP20 connects to Yealink’s 5GHz 802.11ac Wi-Fi network without the need for a router. With its excellent anti-interference capability, content sharing is smoother and easier than ever.</li>
				    		<li> Instant installation. Simply plug in WPP20 to a laptop via the universal USB port for a quick connection with the conferencing system. Users can click the button and start content sharing immediately, without any additional apps or software.</li>
				    		<li> Eliminate cabling. The wireless connectivity eliminates the cabling mess in the area between the display and the conference desk, reducing deployment costs and enabling a clutter-free meeting space.</li>
				    		
				    	</ul>
				    	
				    	<img class="img-fluid" src={wpp202} />		

				    		
				    	<h3 class="yealink_pro_sub_head">Low Latency Multipoint FHD Sharing</h3>
				    	<ul class="yealink_pro_para">
				    		<li> Immediate response, smooth and easy presenting. WPP20 ensures an up to 1080P@30FPS high quality and low latency content sharing.</li>
				    		<li> WPP20 supports up to eight device connections at the same time and four streams can be presented simultaneously on the main screen.</li>
				    		
				    	</ul>
				    	<img class="img-fluid" src={wpp203} />		
				    	
						<h3 class="yealink_pro_sub_head">Feature-rich Control Functionality</h3>
				    	<p class="yealink_pro_para">WPP20’s embedded meeting assistant software offers rich functionality such as inviting participants and conference recording, ensuring a fluid workflow and more effective meeting experience.</p>
				    	<img class="img-fluid" src={wpp204} />		

				    		
				    	<h3 class="yealink_pro_sub_head">Intuitive Reverse Control for Interactive Television</h3>
				    	<p class="yealink_pro_para">Interoperable with a touchscreen television, reverse control of the computer or laptop is easily enabled by clicking or dragging directly on your interactive television when paired with the Yealink video conferencing system and a touchscreen television.</p>
				    	
				    	<img class="img-fluid" src={wpp205} />		

				    	<h3 class="yealink_pro_sub_head">Broad Compatibility</h3>
				    	<p class="yealink_pro_para">Yealink WPP20 is compatible with almost all devices. Whether you use Windows or macOS, content sharing can be activated instantly with a single tap.</p>
				    	
				    	<img class="img-fluid" src={wpp206} />		

				    	
				    </div>
				  </Tab>
				  <Tab eventKey="profile" title="Specifications">
				    <div class="yealink-tab-cnt">
				    	<table class="table table-bordered">
						  <tbody>
						    <tr class="">
						      <td rowspan="9" >Software Features</td>
						      <td>Resolution</td>
						      <td>Up to 1080p/30fps</td>
						    </tr>
						    <tr class="">
						      
						      <td>Device connections Simultaneously</td>
						      <td>Up to 8</td>
						    </tr>
						    <tr>
						      <td>Content Streams Simultaneously</td>
						      <td>Up to 4*</td>
						      
						    </tr>
						    <tr>
						      <td>Supported Operation System</td>
						      <td>Windows 7/8/10<br/>macOS 10.10 or later</td>
						      
						    </tr>
						    <tr>
						      <td>Average Latency</td>
						      <td>120ms</td>
						      
						    </tr>
						    <tr>
						      <td>AirPlay</td>
						      <td><BsCheckCircle/></td>
						      
						    </tr>
						    <tr>
						      <td>PC Desktop Sharing</td>
						      <td><BsCheckCircle/></td>
						      
						    </tr>
						    <tr>
						      <td>Content sharing with Audio</td>
						      <td><BsCheckCircle/></td>
						      
						    </tr>
						    <tr>
						      <td>Specified Window Sharing</td>
						      <td><BsCheckCircle/>**</td>
						      
						    </tr>
						    <tr>
						      <td rowspan="2">Meeting Assistant**</td>
						      <td>Video Recording </td>
						      <td><BsCheckCircle/> (Recording to PC)</td>
						    </tr>
						    <tr>
						      <td>Meeting & Device Control</td>
						      <td>Invite, End Call, Start/Stop Content Sharing, Volume,<br/> Mute, Camera Control, Layout, Member List, DTMF, DND</td>
						    </tr>
						    <tr>
						      <td rowspan="3">Wireless Features</td>
						      <td>Wi-Fi Protocol</td>
						      <td>802.11b/g/n/ac</td>
						    </tr>
						    <tr>
						      <td>Wi-Fi Frequency</td>
						      <td>2.4GHz/5GHz</td>
						    </tr>
						    <tr>
						      <td>Encryption</td>
						      <td>WPA-PSK/WPA2-PSK</td>
						    </tr>
						    <tr>
						      <td rowspan="6">Hardware Features</td>
						      <td>Interface</td>
						      <td>USB 2.0 x 1</td>
						    </tr>
						    <tr>
						      <td>Button</td>
						      <td>START/STOP Button x 1</td>
						    </tr>
						    <tr>
						      <td>LED</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      
						      <td>Input Power</td>
						      <td>5V/500mA</td>
						    </tr>
						    <tr>
						    
						      <td>Power Consumption</td>
						      <td>2.5W</td>
						    </tr>
						    <tr>
						      <td>Dimensions (W x D x H)</td>
						      <td>26mm x 183.2mm x 9mm</td>
						      
						    </tr>
						    <tr>
						      
						      <td colspan="3">*VC880/VC800/VC500 supports 4 WPP20 sharing content simultaneously. VC200 only supports one stream at one time. **macOS is not supported.</td>
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

export default WPP20;
