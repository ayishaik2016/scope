import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



import cp9201 from '../../img/yealink/cp9201.png';
import cp9202 from '../../img/yealink/cp9202.png';
import cp9203 from '../../img/yealink/cp9203.png';
import cp9204 from '../../img/yealink/cp9204.png';
import cp9205 from '../../img/yealink/cp9205.png';
// import test6 from '../../img/yealink/test6.png';
// import test7 from '../../img/yealink/test7.png';



import Lets from '../lets.js';
import Footer from '../footer.js';


import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom';



import { BsCheckCircle } from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';



class CP920_PSTN extends Component{
render(){
  return (
    <div className="App">
    	<Nav1/>
    	<div class="container-fluid yealink_banner">

    	</div>
    	<div class="container">
    		<h1 class="yealink_pro_head">Yealink CP920 Conference Phone</h1>
    		<div >
    			<Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
				  <Tab eventKey="home" title="Overview">
				    <div class="yealink-tab-cnt">
				    	
				    	<p class="yealink_pro_para">Yealink designs its audio conferencing solutions to suit a range of different meeting environments. The CP960 and the CP920 address today’s audio conferencing challenges and unify a clear-and-easy conferencing communication experience for both in-room and remote participants. The CP960 targets mid-to-large-sized meetings while the CP920 covers small-to-mid-sized meetings.</p>
				    	

				    	<h3 class="yealink_pro_sub_head">Pure and Powerful Sound Quality</h3>
				    	<p class="yealink_pro_para">Enterprise-grade and performance-oriented, Yealink conference phones deliver best-in-class HD audio quality for everyone in a meeting to keep pace with the team’s collaboration and contribute inspired work.</p>
				    	<img class="img-fluid" src={cp9201} />

				    	
				    	<h3 class="yealink_pro_sub_head">Wide-range Voice Pickup, Dead-zone Free</h3>
				    	<p class="yealink_pro_para">Featuring 20-foot 360-degree dead-zone-free voice pickup, the coverage area of the CP920 adapts to multiple room environments and provides a full sound experience.</p>
				    	<img class="img-fluid" src={cp9202} />

				    	
				    	<h3 class="yealink_pro_sub_head">Yealink Noise Proof Technology for Smart and Powerful Noise Elimination</h3>
				    	<p class="yealink_pro_para">Yealink’s Noise Proof Technology frees business voice collaboration from annoying noise and optimizes conference efficiency by minimizing distractions. The Yealink Noise Proof technology includes two interrelated functions:</p>
				    	<ul class="yealink_pro_para">
				    		<li>During a conference, Noise Proof reduces constant background noise from sources such as typing, air conditioners, etc. and</li>
				    		<li>When a person is not speaking, Noise Proof automatically mutes the mic(s) until the sound of a human voice is detected.</li>
				    	</ul>
				    	<img class="img-fluid" src={cp9203} />


				    	<h3 class="yealink_pro_sub_head">Ergonomic Design, Best-in-Class Experience</h3>
				    	<ul class="yealink_pro_para">
				    		<li>Stylish and professional, Yealink conference phones adopt a Y-shaped metallic sliver body design. For users who prefer a traditional key system, the CP920 offers a familiar touchable keypad for less stress and more comfort.</li>
				    		<li>One-touch quick meeting starts and no interruption to the ongoing conversation make the CP920 incredibly user-friendly.</li>
				    		
				    	</ul>
				    	<img class="img-fluid" src={cp9204} />

				    	<h3 class="yealink_pro_sub_head">Hybrid UC Meeting Enabled</h3>
				    	<p class="yealink_pro_para">The CP960 and CP920 enable the Hybrid UC Meeting for extraordinary convenience. With Bluetooth and USB connectivity, you can easily pair the conference phone with a PC or mobile phone. Join or create a conference by simply merging the calls.</p>
				    	<img class="img-fluid" src={cp9205} />
				    	
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
						      <td>Linux</td>
						      
						    </tr>
						    <tr class="head_tab">
						      <td colspan="3" >Interface</td>
						    </tr>
						    <tr>
						      <td>LCD</td>
						      <td>3.1" 248 x 120-pixel graphical LCD</td>
						    </tr>
						    <tr>
						      <td>LCD Backlight</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Touch Keypad</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>USB Port (2.0 Compliant)</td>
						      <td>1</td>
						    </tr>
						    <tr>
						      <td>USB 2.0 Micro-B Device Port</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Ethernet Port</td>
						      <td>10/100Mbps</td>
						    </tr>
						    <tr>
						      <td>Wired Mic</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Wireless Mic</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>3.5 mm Jack</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Security Slot</td>
						      <td><BsCheckCircle/></td>
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
						      <td>G.722, G722.1C, Opus</td>
						    </tr>
						    <tr>
						      <td>Narrow-Band Codecs</td>
						      <td>G.711(A/µ), G726, G729, G723, iLBC</td>
						    </tr>
						    <tr>
						      <td>Built-In 3-Microphone Array</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Microphone Pickup</td>
						      <td>13ft</td>
						    </tr>
						    <tr>
						      <td>Yealink Noise Proof Technology</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Noise Suppression</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr class="head_tab">
						      <td colspan="3" >Connectivity</td>
						    </tr>
						    <tr>
						      <td>Built-In PoE</td>
						      <td>IEEE 802.3af</td>
						    </tr>
						    <tr>
						      <td>Built-In Bluetooth</td>
						      <td>Bluetooth 4.0</td>
						    </tr>
						    <tr>
						      <td>Built-In Wi-Fi</td>
						      <td>802.11a/b/g/n</td>
						    </tr>
						    <tr>
						      <td>Battery</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Talk Time</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Standby Time</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr class="head_tab">
						      <td colspan="3" >Telephony Features</td>
						    </tr>
						    <tr>
						      <td>Recording</td>
						      <td><BsCheckCircle/> (Via USB flash drive)</td>
						    </tr>
						    <tr>
						      <td>Five-way Conferencing</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Create meeting directly</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Yealink Active Speaker</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Hybrid UC Meeting</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>PSTN</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Star Connection</td>
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

export default CP920_PSTN;
