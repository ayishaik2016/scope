import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



import ctp201 from '../../img/yealink/ctp201.png';
import ctp202 from '../../img/yealink/ctp202.png';
import ctp203 from '../../img/yealink/ctp203.png';
import ctp204 from '../../img/yealink/ctp204.png';
import ctp205 from '../../img/yealink/ctp205.png';
import vc8006 from '../../img/yealink/vc8006.png';
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



class CTP20 extends Component{
render(){
  return (
    <div className="App">
    	<Nav1/>
    	<div class="container-fluid yealink_banner">

    	</div>
    	<div class="container">
    		<h1 class="yealink_pro_head">Yealink CTP20 Collaboration Touch Panel</h1>
    		<div >
    			<Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
				  <Tab eventKey="home" title="Overview">
				    <div class="yealink-tab-cnt">

				    	<h3 class="yealink_pro_sub_head " >A collaborative meeting experience at your fingertips</h3>
				    	
				    			<p class="yealink_pro_para ">CTP20 is a collaborative touch panel that can be paired with Yealink’s new generation video conference solutions. Its user-centred interactive design allows users to join a meeting quickly and effortlessly. The built-in annotation and whiteboard signiﬁcantly improve meeting efﬁciency by enabling easy annotation on shared content and immediate discussion on the whiteboard. Adopting an industry-leading 13.3-inch touch screen and equipped with an active capacitive pen, CTP20 creates a realistic writing environment where customers can focus more on communication. The integrated touchable meeting control, annotation and whiteboard features of CTP20 offers a comfortable and productive collaborative meeting experience.</p>
				    			
				    		
				    			<img class="img-fluid" src={ctp201} />		
				    		
				    	<h3 class="yealink_pro_sub_head">Ultimate meeting control assists you to achieve more</h3>
				    	<p class="yealink_pro_para">The touch control of the IPS screen outperforms traditional control modes magnificently. A“ meeting controls can be navigated on CTP20, including previewing and adjusting the camera, joining a meeting, inviting, recording, etc.</p>
				    	<p class="yealink_pro_para">When paired with the Yealink Wireless Presentation Pod WPP20, you can gain reverse control from CTP20 over your computer, resulting in multi-screen interaction which assists you to achieve more.</p>
				    	<img class="img-fluid" src={ctp202} />		

				    		
				    	<h3 class="yealink_pro_sub_head">Robust collaboration functionalities make the meetings simple and efficient</h3>
				    	<ul class="yealink_pro_para">
				    		<li> Multiple participants can annotate at the same time with various kinds of markups. The real-time handwriting presentation, allows participants to see what is being written with no latency, making discussions much more effective.</li>
				    		<li> CTP20 features a built-in whiteboard. One Yealink video conferencing device can be connected with up to 4 CTP20 units. Users are enabled to write on the whiteboard synchronously, which helps participants to meet their discussion objectives more quickly.</li>
				    		
				    	</ul>
				    	<img class="img-fluid" src={ctp203} />		
				    	
						<h3 class="yealink_pro_sub_head">Natural writing free of distraction so you can focus on your ideas</h3>
				    	<p class="yealink_pro_para">The industry-leading 13.3-inch touch screen has been combined with a scalable canvas, such that every single idea can be recorded on the ample space provided by CTP20. In addition, the new active capacitive pen mimics a real writing experience, facilitating participants to focus on the topics of discussions instead of the technology.</p>
				    	<img class="img-fluid" src={ctp204} />		

				    		
				    	<h3 class="yealink_pro_sub_head">PoE and Wi-Fi connection offers a clutter-free meeting space</h3>
				    	<p class="yealink_pro_para">CTP20 supports PoE where one cable carries both data and power for the device. Data transmission between CTP20 and the terminal is realized either by cable or Wi-Fi, which eliminates the tricky wiring connections between the screen area and the conference table, making clean and well-organized meeting spaces a reality.</p>
				    	
				    	<img class="img-fluid" src={ctp205} />		

				    	
				    </div>
				  </Tab>
				  <Tab eventKey="profile" title="Specifications">
				    <div class="yealink-tab-cnt">
				    	<table class="table table-bordered">
						  <tbody>
						    <tr class="">
						      <td >System Compatibility</td>
						      <td colspan="2">Compatible with Yealink video conferencing endpoints，including VC880/VC800/VC500/VC200 Connect to VCS endpoint via cable or via Wi-Fi Up to 4 CTP20 units in one system *</td>
						      
						    </tr>
						    <tr class="">
						      <td rowspan="3" >Display</td>
						      <td>Screen</td>
						      <td>13.3-inch IPS FHD capacitive touch screen</td>
						    </tr>
						    <tr class="">
						      
						      <td>Resolution</td>
						      <td>1920*1080 (16:9)</td>
						    </tr>
						    <tr>
						      <td>Touch</td>
						      <td>10 points multi-touch</td>
						      
						    </tr>
						    <tr>
						      <td>Microphone</td>
						      <td>Built-in Microphone</td>
						      <td>1 x Omni-directional microphone for voice pickup **</td>
						    </tr>
						    <tr>
						      <td>Wireless Network</td>
						      <td>Wi-Fi</td>
						      <td>2.4G/5G Wi-Fi IEEE 802.11n/ac</td>
						    </tr>
						    <tr>
						      <td rowspan="4">Interface</td>
						      <td>USB </td>
						      <td>1 x USB 2.0 Type-A for connecting the USB flash drive to <br/>save recording files 1 x USB 2.0 Type-C for content <br/>sharing when connecting with PC **</td>
						    </tr>
						    <tr>
						      <td>RJ45</td>
						      <td>1 x RJ45 Ethernet for power and data connection</td>
						    </tr>
						    <tr>
						      <td>Security Lock Slot</td>
						      <td>1 x Security lock slot</td>
						    </tr>
						    <tr>
						      <td>Reset Slot</td>
						      <td>1 x Reset slot</td>
						    </tr>
						    <tr>
						      <td rowspan="5">Other Physical Features</td>
						      <td>Power Input</td>
						      <td>PoE 48V/0.27A</td>
						    </tr>
						    <tr>
						      <td>Power Consumption</td>
						      <td>7W</td>
						    </tr>
						    <tr>
						      <td>USB Output</td>
						      <td>5V 500mA</td>
						    </tr>
						    <tr>
						      
						      <td>Stand</td>
						      <td>Adjustable angle (15°~70°)</td>
						    </tr>
						    <tr>
						    
						      <td>Dimension</td>
						      <td>321.5mm x 118mm x 196mm</td>
						    </tr>
						    <tr>
						      <td>Accessories</td>
						      <td>Pen</td>
						      <td>1 x Active Pen with 1024 pressure levels</td>
						    </tr>
						    <tr>
						      
						      <td colspan="3">* VC880/VC800/VC500 supports up to 4 CTP20 simultaneously, VC200 only supports one CTP20 at one time. ** Content sharing and microphone functions will be supported through software updates.</td>
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

export default CTP20;
