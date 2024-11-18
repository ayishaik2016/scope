import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



import w56p1 from '../../img/yealink/w56p1.png';
import w56p2 from '../../img/yealink/w56p2.png';
import w56p3 from '../../img/yealink/w56p3.png';
import w56p4 from '../../img/yealink/w56p4.png';
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



class W56P extends Component{
render(){
  return (
    <div className="App">
    	<Nav1/>
    	<div class="container-fluid yealink_banner">

    	</div>
    	<div class="container">
    		<h1 class="yealink_pro_head">Yealink W56P DECT IP Phone</h1>
    		<div >
    			<Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
				  <Tab eventKey="home" title="Overview">
				    <div class="yealink-tab-cnt">

				    	<h3 class="yealink_pro_sub_head " >Charge Up Your Business W56P DECT Phone</h3>
				    	<p class="yealink_pro_para text-center">Yealink’s upgraded DECT phone W56P is developed to enhance communication for on-the-go workers in various industries such as warehousing, catering and retailing. Featuring a big 2.4-inch color screen, an elegant industrial design, excellent battery performance and other multiple usabilities and phone management upgrades, the W56P ensures busy workers can enjoy a pleasant user experience and are always online.</p>
				    	<img class="img-fluid" src={w56p1} />
				    	<div class="row" style={{margin:"0"}}>
				    		<div class="col-md-6">
					    		<h3 class="yealink_pro_sub_head " >Cordless VoIP solution for small businesses</h3>
					    		
					    		<ul class="yealink_pro_para " style={{lineHeight:"1.5"}}>
					    			<li>High-end ID design</li>
					    			<li>Exceptional HD sound with wideband technology</li>
					    			<li>Up to 4 simultaneous voice calls</li>
					    			<li>Up to 5 DECT cordless handsets</li>
					    			<li>Up to 5 Multiple Lines </li>
					    			<li>2.4" 240 x 320 colour screen with an intuitive user interface</li>
					    			<li>Up to 30 hours talk time, Up to 400 hours standby time</li>
					    			<li>Quick charging: 10 mins charge time for 2 hours talk time</li>
					    			<li>USB Charger Cradle</li>
					    			<li>Headset connection via 3.5 mm jack</li>
					    			<li>Charger wall mountable</li>
					    			<li>New belt clip with better user experience</li>
					    		</ul>
					    	</div>
				    		<div class="col-md-6"><img class="img-fluid" src={w56p2} /></div>
				    	</div>
				    	<img class="img-fluid" src={w56p3} />
				    	
				    	<p class="yealink_pro_para">Yealink W56P is the next-generation SIP Cordless Phone System combining quality, reliability and flexibility. Offering the convenience of cordless with a simple add-on device without losing the SIP features, it brings a seamless call management for our users while “on-the-go”. With more functions, lines and mobility, it empowers users with the convenience of wireless communication along with the widely accepted benefits and feature richness of Voiceover-IP telephony. In addition, the Yealink W56P delivers the typical benefits of the DECT world such as long talk time, high standby time and superior speech quality, providing excellent value for money and is ideally suited for small and medium-sized businesses.</p>
				    	<img class="img-fluid" src={w56p4} />
				    	
				    	
				    	<h3 class="yealink_pro_sub_head " >Excellent Battery Performance Keeps Users “Always Online”</h3>
				    	<p class="yealink_pro_para ">With its advanced Li-ion battery, the W56P boasts industry-leading talk time and standby time. To take the user experience to the next level, it offers quick-charge and easy USB charge features.</p>
				    	<img class="img-fluid" src={w56p5} />
				    	
				    	<h3 class="yealink_pro_sub_head " >User-centric Design for a More Pleasant Experience</h3>
				    	<p class="yealink_pro_para ">Details matter. The W56P has a larger 2.4-inch 240x320-pixel color screen with backlit that clearly presents an intuitive user interface. The model also features a larger and more comfortable backlit keypad that on-the-go users will find especially convenient to use.</p>
				    	<img class="img-fluid" src={w56p6} />
				    	
				    	<h3 class="yealink_pro_sub_head " >Effortless Deployment and Flexible Management</h3>
				    	<p class="yealink_pro_para ">The W56P is also an IT-friendly solution. With Yealink’s free Redirection and Provisioning Service (RPS), the W56P supports auto-provisioning and updates, which greatly simplifies mass deployment. Furthermore, the W56P supports three levels of user access, which allows for the customization of access permission for configuration, bringing greater flexibility and security to phone management.</p>
				    	<img class="img-fluid" src={w56p7} />
				    	
				    	<h3 class="yealink_pro_sub_head " >Additional Convenience</h3>
				    	<p class="yealink_pro_para ">The W56P’s 3.5mm standard headset jack connects the phone with a hands-free headset, bringing added convenience to call experience, especially when multitasking. In addition, Yealink’s new belt clip makes the W56P wearable when not in use.</p>
				    	<img class="img-fluid" src={w56p8} />
				    	

				    </div>
				  </Tab>
				  <Tab eventKey="profile" title="Specifications">
				    <div class="yealink-tab-cnt">
				    	<table class="table table-bordered">
						  <tbody>
						    <tr class="">
						      <td rowspan="2" >Display</td>
						      <td>LCD Display</td>
						      <td>2.4" 240 x 320  TFT colour display</td>
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
						      <td>30h</td>
						    </tr>
						    <tr>
						      <td>Battery</td>
						      <td>Lithium</td>
						    </tr>
						    <tr>
						      <td>Headset </td>
						      <td>3.5 mm</td>
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

export default W56P;
