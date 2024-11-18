import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



import w41p1 from '../../img/yealink/w41p1.jpg';
import w41p2 from '../../img/yealink/w41p2.jpg';
import w41p3 from '../../img/yealink/w41p3.jpg';
import w41p4 from '../../img/yealink/w41p4.png';
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



class W41P extends Component{
render(){
  return (
    <div className="App">
    	<Nav1/>
    	<div class="container-fluid yealink_banner">

    	</div>
    	<div class="container">
    		<h1 class="yealink_pro_head">Yealink W41P DECT Desk Phone</h1>
    		<div >
    			<Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
				  <Tab eventKey="home" title="Overview">
				    <div class="yealink-tab-cnt">
				    	
				    	<p class="yealink_pro_para text-center">In an office dominated by wireless DECT phones, the YealinkW41P DECT Desk Phone is one of a kind for executives, managers and reception desk which requires IP phone experience with extraordinary HD audio, larger display and larger and multiple function keys.</p>
				    	
				    	<h3 class="yealink_pro_sub_head " >A Clean Wireless Office</h3>
				    	<p class="yealink_pro_para text-center">The W41P sheds the needs for physical network connections and additional deployment, the phone is made a great complement by adding comfort and tidiness to your wireless office with only one power cable.</p>
				    	<img class="img-fluid" src={w41p1} />
				    	
				    	
				    	<h3 class="yealink_pro_sub_head " >Premium HD Voice Quality</h3>
				    	<p class="yealink_pro_para text-center">The W41P Delivers exceptional call clarity with Yealink sophisticated HD voice technology.</p>
				    	<img class="img-fluid" src={w41p2} />
				    	
				    	<h3 class="yealink_pro_sub_head " >Rich Features</h3>
				    	<p class="yealink_pro_para text-center">Intuitive user interface with a 2.7” graphical LCD display, 6 line key with LED indicators, large key pad for simple navigation and quick operation.</p>
				    	<img class="img-fluid" src={w41p3} />
				    	
				    	<h3 class="yealink_pro_sub_head " >Easy to Deploy</h3>
				    	<p class="yealink_pro_para text-center">By plugging the Yealink DD10K DECT Dongle into your T41S IP phone, the phone is ready to co-work with your DECT system and power up your communication at the desk.</p>
				    	<img class="img-fluid" src={w41p4} />
				    	

				    </div>
				  </Tab>
				  <Tab eventKey="profile" title="Specifications">
				    <div class="yealink-tab-cnt">
				    	<table class="table table-bordered">
						  <tbody>
						    <tr class="">
						      <td rowspan="2" >Display</td>
						      <td>LCD Display</td>
						      <td>2.4" 240 x 320  TFT Color Display</td>
						    </tr>
						    <tr>
						      <td>LCD Backlight</td>
						      <td><BsCheckCircle/></td>
						      
						    </tr>
						    <tr>
						      <td rowspan="12">Features</td>
						      <td>Standby Time</td>
						      <td><ImCancelCircle/> </td>
						    </tr>
						    <tr>
						      <td>Talk Time</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Battery</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Headset </td>
						      <td>RJ9/EHS</td>
						    </tr>
						    <tr>
						      <td>Indoor Range/Outdoor Range</td>
						      <td>50m/300m</td>
						    </tr>
						    <tr>
						      <td>Handset Number Per Base</td>
						      <td>Up to 8 handsets</td>
						    </tr>
						    <tr>
						      <td>SIP Accounts</td>
						      <td>8</td>
						    </tr>
						    <tr>
						      <td>Simultaneous Voice Call</td>
						      <td>8</td>
						    </tr>
						    <tr>
						      <td>Repeater</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>DECT Standard</td>
						      <td>CAT-iq 2.0</td>
						    </tr>
						    <tr>
						      <td>3-Way Conferencing</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Speed Dial</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td rowspan="3">Audio</td>
						      <td>Wideband Codec</td>
						      <td>Opus, AMR-WB (Optional), G.722</td>
						    </tr>
						    <tr>
						      <td>Narrowband Codec</td>
						      <td>PCMU, PCMA, G.726, G.729, iLBC</td>
						    </tr>
						    <tr>
						      <td>HD Voice</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td rowspan="4">Interface</td> 
						      <td>Etdernet Interface</td>
						      <td>10/100M</td>
						    </tr>
						    <tr>
						      <td>PoE</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td>Bluetooth</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Wall Mountable Base</td>
						      <td><BsCheckCircle/></td>
						    </tr>
						    <tr>
						      <td rowspan="5">Feature Keys</td> 
						      <td>Softkey</td>
						      <td>4</td>
						    </tr>
						    <tr>
						      <td>Navigation Key</td>
						      <td>6</td>
						    </tr>
						    <tr>
						      <td>Line Key</td>
						      <td>6</td>
						    </tr>
						    <tr>
						      <td>Function Key</td>
						      <td>5</td>
						    </tr>
						    <tr>
						      <td>Volume Control Key</td>
						      <td>2</td>
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

export default W41P;
