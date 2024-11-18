import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



import w52p1 from '../../img/yealink/w52p1.jfif';
import w52p2 from '../../img/yealink/w52p2.jpg';
import w52p3 from '../../img/yealink/w52p3.jpg';
import w52p4 from '../../img/yealink/w52p4.png';
import w56p5 from '../../img/yealink/w56p5.png';
import w56p6 from '../../img/yealink/w56p6.png';
import w56p7 from '../../img/yealink/w56p7.png';
import w56p8 from '../../img/yealink/w56p8.png';
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



class W52P extends Component{
render(){
  return (
    <div className="App">
    	<Nav1/>
    	<div class="container-fluid yealink_banner">

    	</div>
    	<div class="container">
    		<h1 class="yealink_pro_head">Yealink W52P DECT IP Phone</h1>
    		<div >
    			<Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
				  <Tab eventKey="home" title="Overview">
				    <div class="yealink-tab-cnt">

				    	<h3 class="yealink_pro_sub_head " >Easy DECT, Easy Business</h3>
				    	<div class="row" style={{margin:"0"}}>
				    		<div class="col-md-8">
				    			<p class="yealink_pro_para ">The next generation Yealink DECT Phone W52P is a SIP Cordless Phone System designed specifically for small businesses and SOHO operations in the market for cost-saving, scalable SIP-based mobile communication systems. The epitome of everything we’ve learned over the past decade about designing extremely powerful yet delicate business IP phones, W52P carries forward Yealink’s eternal pursuit of cutting-edge VoIP technology, featuring supreme quality under the strictest testing and the highest level of operation simplicity. Yealink W52P won’t just fulfil all your cordless phone needs, it’ll make every day calling an outright pleasant, engaging experience.</p>
				    		</div>
				    		<div class="col-md-4">
				    			<img class="img-fluid" src={w52p1} />		
				    		</div>
				    	</div>
				    	<h3 class="yealink_pro_sub_head">Key Benefits</h3>
				    	<ul class="yealink_pro_para">
				    		<li>Stable HD Voice makes every call clear and efficient</li>
				    		<li>1.8” 128x160-pixel LCD display for easy information browsing</li>
				    		<li>Compact design, comfortable to carry and handle</li>
				    	</ul>
				    	<div class="row" style={{margin:"0"}}>
				    		<div class="col-md-8">
				    			<img class="img-fluid" src={w52p2} />
				    		</div>
				    		<div class="col-md-4">
				    			<img class="img-fluid" src={w52p3} />		
				    		</div>
				    	</div>
				    	<div class="row" style={{margin:"0"}}>
				    		<div class="col-md-8">
				    			<h3 class="yealink_pro_sub_head text-left" style={{padding:"0"}}>HD Voice</h3>
				    			<p class="yealink_pro_para ">The DECT Phone - W52P is equipped with a full-duplex speakerphone in G.722 bandwidth, meeting the highest professional HD Voice standards and meant to impress with its original and brilliant broadband voice.</p>
				    		</div>
				    		<div class="col-md-4">
				    			<img class="img-fluid" src={w52p4} />		
				    		</div>
				    	</div>
				    	<h3 class="yealink_pro_sub_head text-left" style={{padding:"0"}}>PoE</h3>
				    	<p class="yealink_pro_para ">The DECT Phone - W52P is integrated with PoE technology, pushing forward modern standards of installation and allowing any sized organization to enjoy more flexible and efficient network designs, while providing environmental protection and low–carbon emission.</p>
				    	
				    	<h3 class="yealink_pro_sub_head text-left" style={{padding:"0"}}>Broadest Compatibility</h3>
				    	<p class="yealink_pro_para ">The DECT Phone - W52P has inherited all the functions and interoperability of its predecessor- the SIP-T2X, lauded by All-Over-IP Forum as the best all-around series of IP phone ensuring you additional best-in-class capabilities without compromising its existing infrastructure</p>

				    </div>
				  </Tab>
				  <Tab eventKey="profile" title="Specifications">
				    <div class="yealink-tab-cnt">
				    	<table class="table table-bordered">
						  <tbody>
						    <tr class="">
						      <td rowspan="2" >Display</td>
						      <td>LCD Display</td>
						      <td>1.8" 128 x 160 TFT Color Display</td>
						    </tr>
						    <tr>
						      <td>LCD Backlight</td>
						      <td><BsCheckCircle/></td>
						      
						    </tr>
						    <tr>
						      <td rowspan="12">Features</td>
						      <td>Standby Time</td>
						      <td>400h </td>
						    </tr>
						    <tr>
						      <td>Talk Time</td>
						      <td>10h</td>
						    </tr>
						    <tr>
						      <td>Battery</td>
						      <td>NiMH</td>
						    </tr>
						    <tr>
						      <td>Headset </td>
						      <td>2.5 mm</td>
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
						      <td>5</td>
						    </tr>
						    <tr>
						      <td>Simultaneous Voice Call</td>
						      <td>4</td>
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
						      <td>G.722</td>
						    </tr>
						    <tr>
						      <td>Narrowband Codec</td>
						      <td>PCMU, PCMA, G.723, G.726, G.729, iLBC</td>
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
						      <td>2</td>
						    </tr>
						    <tr>
						      <td>Navigation Key</td>
						      <td>5</td>
						    </tr>
						    <tr>
						      <td>Line Key</td>
						      <td><ImCancelCircle/></td>
						    </tr>
						    <tr>
						      <td>Function Key</td>
						      <td>6</td>
						    </tr>
						    <tr>
						      <td>Volume Control Key</td>
						      <td>0</td>
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

export default W52P;
