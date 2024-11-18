    import MetaTags from 'react-meta-tags';
import React,{ Component,setState } from 'react';

import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from './nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import cp960_wired from '../img/yealink/cp960_wired.png';
import cp960_wireless from '../img/yealink/cp960_wireless.png';
import cp930w from '../img/yealink/cp930w.png';
import cp920 from '../img/yealink/cp920.png';
import cp920_pstn from '../img/yealink/cp920-pstn.png';
import vp59 from '../img/yealink/vp59.png';
import t58a from '../img/yealink/t58a.png';
import t58a_camera from '../img/yealink/t58a_camera.png';
import t57w from '../img/yealink/t57w.png';
import t54w from '../img/yealink/t54w.png';
import t48s from '../img/yealink/t48s.png';
import t46s from '../img/yealink/t46s.png';
import t42s from '../img/yealink/t42s.png';
import t41s from '../img/yealink/t41s.png';
import t40g from '../img/yealink/t40g.png';
import w52p from '../img/yealink/w52p.png';
import w53p from '../img/yealink/w53p.png';
import w60p from '../img/yealink/w60p.png';
import w41p from '../img/yealink/w419.png';
import yms1 from '../img/yealink/yms1.png';
import yms2 from '../img/yealink/yms2.png';
import yms3 from '../img/yealink/yms3.jfif';
import yms4 from '../img/yealink/yms4.png';
import yms5 from '../img/yealink/yms5.png';
import yms6 from '../img/yealink/yms6.png';
import yms7 from '../img/yealink/yms7.png';
import pcds1 from '../img/yealink/pcds1.png';
import pcds2 from '../img/yealink/pcds2.png';
import pcds3 from '../img/yealink/pcds3.png';
import pcds4 from '../img/yealink/pcds4.png';
import pcds5 from '../img/yealink/pcds5.png';
import pcds6 from '../img/yealink/pcds6.png';
import vcm1 from '../img/yealink/vcm1.png';
import vcm2 from '../img/yealink/vcm2.png';
import vcm3 from '../img/yealink/vcm3.png';
import vcm4 from '../img/yealink/vcm4.png';
import vcm5 from '../img/yealink/vcm5.png';
import vcm6 from '../img/yealink/vcm6.png';
import vccm1 from '../img/yealink/vccm1.jpg';
import vccm2 from '../img/yealink/vccm2.png';



import Lets from './lets.js';
import Footer from './footer.js';



import { BsCheckCircle } from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';



import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom';





class Yealink_VC extends Component{
render(){
  return (
    <div className="App">



<MetaTags>
            <title>video conferencing hardware for zoom rooms |yealink| video solutions</title>
            <meta id="meta-description" name="Whether it's a huddle room, conference room, or training room, you want to jump in fast and make an impact. Do it the easy way with our native solutions for Zoom rooms. Video solutions for zoom rooms. Video conference hardware products +966 599226961 info@scopetech.sa" />
            <meta id="" property="keywords" content="Video solutions, video conference hardware " />
            
</MetaTags>
    


    	<Nav1/>
    	<div class="container-fluid yealink_banner_vc">

    	</div>
    	<div class="container-fluid" style={{padding:"2% 5%"}}>
    		<div >
    			<Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
				  <Tab eventKey="home" title="VC Room System">
				    <div class="yealink-tab-cnt">
				    	<div class="row" style={{margin:"0"}}>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/VC800"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src={cp960_wireless} alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">VC800</h5>
											<h5 class="yealink_cnt">Designed for mid-to-large Rooms</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/VC500"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src={cp960_wired} alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">VC500</h5>
											<h5 class="yealink_cnt">Perfect for Small and Medium Rooms</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/VC200"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src={cp930w} alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">VC200</h5>
											<h5 class="yealink_cnt">Ideal for Small and Huddle Room</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/CTP20"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src={cp920} alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">CTP20</h5>
											<h5 class="yealink_cnt">Collaboration touch panel</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/WPP20"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src={cp920_pstn} alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">WPP20</h5>
											<h5 class="yealink_cnt">Wireless Presentation pod</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/VC880"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src={cp920_pstn} alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">VC880</h5>
											<h5 class="yealink_cnt">Suitable for extra-large room and integration</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    	</div>
				    </div>
				  </Tab>
				  <Tab eventKey="T5" title=" Video Phones ">
				    <div class="yealink-tab-cnt">
				    	<div class="row" style={{margin:"0"}}>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/VP59"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src={vp59} alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">VP59</h5>
											<h5 class="yealink_cnt">Flagship smart video phone</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/t49g"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src={t58a_camera} alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">T49G</h5>
											<h5 class="yealink_cnt">FLagship level desktop video phone</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/T48V"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src={t58a} alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">T58V</h5>
											<h5 class="yealink_cnt">Smart Business phone</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    		
				    	</div>
				    </div>
				  </Tab>
				  <Tab eventKey="T4" title="Yealink Meeting Server">
				    <div class="yealink-tab-cnt">
				    	<h3 class="yealink_pro_sub_head">Yealink Meeting Server</h3>
				    	<img class="img-fluid" src={yms1}/>
				    	<Tabs defaultActiveKey="overview" id="uncontrolled-tab-example">
				    		<Tab eventKey="overview" title="Overview">
								<div class="yealink-tab-cnt">
									<h3 class="yealink_pro_sub_head">Powerful collaboration software makes meeting simpler</h3>
									<p class="yealink_pro_para">The increasing in modern communication means that a quality meeting management system is more important than ever. Yealink Meeting Server is a distributed cloud-based video conferencing infrastructure tailored for HD video conferencing collaboration in the modern workplace. As a powerful all-in-one meeting server, YMS brings together a host of key features and services: MCU, registrar server, directory server, traversal server, meeting and device management server, SIP Trunk, WebRTC server, GK & H.460 server, Microsoft SfB (Lync) gateway, recording server and collaboration server.</p>
									<p class="yealink_pro_para">YMS connects people with crystal-clear audio, HD video, content and web collaboration, bridging locations across any distance or device and providing users with an enjoyable conferencing experience while cutting costs and improving efficiency.</p>
									<img class="img-fluid" src={yms2}/>
									<img class="img-fluid" src={yms3}/>
								</div>
							</Tab>
							<Tab eventKey="features" title="Features">
								<div class="yealink-tab-cnt">
									<h3 class="yealink_pro_sub_head">Key Features of Yealink Meeting Server</h3>
									<div class="row text-left">
										<div class="col-md-8">
											<h3 class="yealink_pro_sub_head">Multiple modes to create conferences</h3>
											<p class="yealink_pro_para">YMS supports multiple video conference modes to satisfy diverse demands, including P2P calls, ad-hoc and scheduled conferences, and training mode. Integrated with OA features, it enables people to schedule video conferences and meeting rooms at the same time through a PC Client, on the Web or via Microsoft Outlook. Conference reminder and one-touch conference access are displayed on endpoints for quick user engagement.</p>
										</div>
										<div class="col-md-4">
											<img class="img-fluid" src={yms4}/>		
										</div>
									</div>
									<div class="row text-right">
										<div class="col-md-4">
											<img class="img-fluid" src={yms5}/>		
										</div>
										<div class="col-md-8">
											<h3 class="yealink_pro_sub_head">Visually connect colleagues from any device, anywhere</h3>
											<p class="yealink_pro_para">Enabling multiple ways to join a conference, YMS offers an effective real-time experience, putting an end to typical network and conferencing challenges. At the office, users can enjoy a simple HD video conference thanks to the room system. On the road, they can join a conference with their PC or mobile device software, or even by simply opening a web browser, attending by dial-in is also available.</p>
										</div>
									</div>
									<div class="row text-left">
										<div class="col-md-8">
											<h3 class="yealink_pro_sub_head">Optimal conference experience</h3>
											<p class="yealink_pro_para">YMS addresses the needs of various conferencing scenarios with rich conference control features, including mute/unmute, turning on/off camera, sharing meeting info, recording, customizing conference video layout for each participant, etc. In addition, YMS supports collaboration features including content sharing, whiteboard and annotation, which greatly improves conference efficiency.</p>
										</div>
										<div class="col-md-4">
											<img class="img-fluid" src={yms6}/>		
										</div>
									</div>
									<div class="row text-right">
										<div class="col-md-4">
											<img class="img-fluid" src={yms7}/>		
										</div>
										<div class="col-md-8">
											<h3 class="yealink_pro_sub_head">Conference statistical analysis</h3>
											<p class="yealink_pro_para">Graphic display of conferences, MCU resources and call detail records effectively improve resource statistics and analysis for the administrator. Remote diagnosis and management improve the management efficiency of the YMS platform. Adding an external recording server enables media recording, storage and on-demand learning.</p>
										</div>
									</div>
									
								</div>
							</Tab>
							<Tab eventKey="benefite" title="Benefits">
								<div class="yealink-tab-cnt">
									<h3 class="yealink_pro_sub_head">Benefits of Yealink Meeting Server</h3>
									<h3 class="yealink_pro_sub_head text-left" style={{padding:"0"}}>All-in-One</h3>
									<p class="yealink_pro_para">Brings MCU, Registrar Server, Traversal Server, Meeting and Device Management Server, Enterprise Directory Server, SIP Trunk Server, WebRTC Server, GK & H.460 Server, Microsoft SfB (Lync) Gateway Server, Recording Server and Collaboration Server together.</p>
									<h3 class="yealink_pro_sub_head text-left" style={{padding:"0"}}>Comprehensive Compatibility</h3>
									<p class="yealink_pro_para">With H.323/SIP protocols and embedded GK & H.460 Server, YMS is compatible with mainstream endpoints and MCU products. What’s more, YMS supports interoperability with Microsoft SfB (Lync) clients for audio, video and content sharing.</p>
									<h3 class="yealink_pro_sub_head text-left" style={{padding:"0"}}>Security and Reliability</h3>
									<p class="yealink_pro_para">Based on advanced distributed architecture and server cluster technologies, YMS realizes multi-host hot standby and node management. Powerful FEC & bandwidth dynamic adaptive adjustment ensure real-time communication even in a weak network environment.</p>
									<h3 class="yealink_pro_sub_head text-left" style={{padding:"0"}}>Ultra-Large Conference Capacity</h3>
									<p class="yealink_pro_para">YMS provides multiple large-scale conferencing solutions. The federation cascading solution meets the needs of multi-level government organizations. Our exclusive interactive broadcast conferencing solution supports webinars with up to 1500 participants. YMS can also support more than 10,000 online viewers to watch an RTMP Live meeting simultaneously.</p>
									<h3 class="yealink_pro_sub_head text-left" style={{padding:"0"}}>Extensibility and Openness</h3>
									<p class="yealink_pro_para">Rest API, PC and mobile soft client SDK are open to third-party developers, which supports system integration customization.</p>
									
								</div>
							</Tab>
							<Tab eventKey="Specifications" title="Specifications">
								<div class="yealink-tab-cnt">
									<table class="table table-bordered">
									  <tbody>
									    <tr class="">
									      
									      <td colspan="2">Features</td>
									      <td>Yealink Meeting Server</td>
									    </tr>
									    <tr>
									      <td>Server Module</td>
									      <td>All-in-One</td>
									      <td>MCU, Registrar Server, Traversal Server,<br/>
Meeting and Device Management Server, <br/>Enterprise Directory Server,<br/>
SIP Trunk Server (Video & Audio), WebRTC Server, <br/>GK& H.460 Server, SfB (Lync) Gateway, <br/>Recording Server, Collaboration Server</td>
									      
									    </tr>
									    <tr>
									      <td rowspan="4">Conference Capability</td>
									      <td class="text-center">Concurrent Calls</td>
									      <td class="text-center">By license</td>
									      
									    </tr>
									    <tr>
									      <td>Additional Audio Calls</td>
									      <td>40 ways</td>
									      
									    </tr>
									    <tr>
									      <td>Concurrent VMR</td>
									      <td>Unlimited</td>
									      
									    </tr>
									    <tr>
									      
									      <td>Broadcasting Interactive Conference</td>
									      <td>Up to 1,500 parties from External Server</td>
									    </tr>
									    <tr>
									      <td rowspan="4">Communication Protocols and Codecs</td>
									      <td>Communication Protocols</td>
									      <td>SIP / H.323 / RTMP</td>
									      
									    </tr>
									    <tr>
									      <td>Dual Stream Protocols</td>
									      <td>BFCP / H.239 / RDP</td>
									      
									    </tr>
									    <tr>
									      <td>Video Codecs</td>
									      <td>H.264 High Profile, H.264, H.263+, H.263, VP8</td>
									      
									    </tr>
									    <tr>
									      
									      <td>Audio Codecs</td>
									      <td>Yealink ARES, Opus, G.722.1C, G.722.1, G.722, <br/>G.711(μ/A), G.729, AAC-LC</td>
									    </tr>
									    <tr>
									      <td rowspan="11">MCU Features</td>
									      <td>Resolution</td>
									      <td>Up to 1080P60</td>
									      
									    </tr>
									    <tr>
									      <td>Distributed Architecture</td>
									      <td>Server Cluster Management & Multi-host Hot <br/>Standby</td>
									      
									    </tr>
									    <tr>
									      <td>Server Federation</td>
									      <td>Server Federation Management & Multi-server<br/> Cascading</td>
									      
									    </tr>
									    <tr>
									      
									      <td>Universal Transcoding & Continuous<br/> Presence</td>
									      <td><BsCheckCircle/></td>
									    </tr>
									    <tr>
									      <td>MCU Stack Technology</td>
									      <td><BsCheckCircle/></td>
									    </tr>
									    <tr>
									      <td>Cascading Video Conference</td>
									      <td><BsCheckCircle/></td>
									    </tr>
									    <tr>
									      <td>Automatic Dialing & Redialing</td>
									      <td><BsCheckCircle/></td>
									    </tr>
									    <tr>
									      <td>Flexible Layouts</td>
									      <td>Equal NxN (N=2, 3, 4, 5, 6, 7), onePlusN (N=0, 4, 7, 9,<br/> 12, 16, 20), twoPlusN (N=8), Overlay and Selected<br/> Speaker</td>
									    </tr>
									    <tr>
									      
									      <td>Microsoft SfB Interoperability</td>
									      <td>P2P call and join conference with video, audio and <br/>content sharing</td>
									    </tr>
									    <tr>
									      <td>Join With Browser (WebRTC)</td>
									      <td>Chrome (52+), Firefox (52+), Safari (11+)</td>
									    </tr>
									    <tr>
									      <td>Recording</td>
									      <td>Recording, VOD and  Management</td>
									    </tr>
									    <tr>
									      <td>Other Functions</td>
									      <td colspan="2">RTMP Live, Audio IVR, Display Native Video and Content, Display audio parties, Chat in Conference</td>
									    </tr>
									    <tr>
									      <td rowspan="3">Safety and Reliability</td>
									      <td>Bandwidth Dynamic Adaptive <br/>Adjustment</td>
									      <td>Anti 30% video and70%audio packet loss，QoS</td>
									    </tr>
									    <tr>
									      <td>Security Protocols</td>
									      <td>TLS / SRTP / HTTPS / SSH, AES-256bit</td>
									    </tr>
									    <tr>
									      
									      <td>Firewall Traversal</td>
									      <td>Deploy conferencing nodes in a public DMZ: Enables <br/>deployment of privately-addressed conferencing <br/>nodes behind NAT firewalls; allowing external parties <br/>to connect directly via a public address.</td>
									    </tr>
									    <tr>
									      <td rowspan="6">Meeting Management Features</td>
									      <td>Schedule Video Conference & Meeting <br/>Room</td>
									      <td>Through Web or Outlook Plugin or PC Client</td>
									    </tr>
									    <tr>
									      <td>Multiple Conferencings</td>
									      <td>P2P Call, Meet Now, Ad Hoc, Scheduled <br/>Conferencing, Permanent VMR</td>
									    </tr>
									    <tr>
									      
									      <td>Multiple Conference Mode</td>
									      <td>Training Mode, Discussion Mode and Lecturer View</td>
									    </tr>
									    <tr>
									      <td>Integration with Yealink VC Endpoints</td>
									      <td>Sync Conference Information, Conference Reminder, <br/>One-touch Conference Access, Apply for Speaking</td>
									    </tr>
									    <tr>
									      <td>Conference Control</td>
									      <td>Invite/Remove, Lock/Unlock/End Conference, <br/>Conference Lobby, Conference <br/>Monitoring,Mute/Unmute Video & Audio, <br/>Block/Unblock Audio, Change Roles, Roll Call, Call <br/>Statistics, Conference Banner / Subtitle / Agenda, <br/> FECC</td>
									    </tr>
									    <tr>
									      
									      <td>Personal Layout</td>
									      <td>Voice Activated Speaker, Video Carousel, <br/>Customized Layout and Application Parties</td>
									    </tr>
									    <tr>
									    
									      <td rowspan="5">Registrar and Traversal Features</td>
									      <td>User Accounts</td>
									      <td>Organizational Structure and up to 100,000accounts</td>
									    </tr>
									    <tr>
									      <td>Enterprise Directory Synchronization</td>
									      <td><BsCheckCircle/><br/>
			HD Handset</td>
									    </tr>
									    <tr>
									      <td>LDAP</td>
									      <td>Synchronize directory from Microsoft AD Server </td>
									    </tr>
									    <tr>
									       
									      <td>Third-party Device Registration</td>
									      <td>SIP / H.323</td>
									    </tr>
									    <tr>
									       
									      <td>Traversal Features</td>
									      <td>ICE / TURN / STUN / NAT / H.460</td>
									    </tr>
									    <tr>
									      <td rowspan="10">System & Device Management</td>
									      <td>Virtualization Deployment</td>
									      <td>Vmware & Hyper-V</td>
									    </tr>
									    <tr>
									       
									      <td>Web Management</td>
									      <td>Friendly Web UI and Setup wizard</td>
									    </tr>
									    <tr>
									       
									      <td>Customization</td>
									      <td>Web & Logo, Email Template, Audio IVR and SIP <br/>Trunk IVR</td>
									    </tr>
									    <tr>
									       
									      <td>Administrator Authority Management</td>
									      <td>Multilevel Administrator Management Authority</td>
									    </tr>
									    <tr>
									       
									      <td>System Status Monitoring</td>
									      <td>Web-based real-time dashboard & data update on <br/>capacity and system information</td>
									    </tr>
									    <tr>
									       
									      <td>Resource Statistics Management</td>
									      <td>Graphic display and statistics & analysis of <br/>conferences, MCU resources and CDR</td>
									    </tr>
									    <tr>
									       
									      <td>System Maintenance Management</td>
									      <td>Remote Upgrade, Backup/Restore, Reboot/Factory <br/>Reset and Syslog</td>
									    </tr>
									    <tr>
									       
									      <td>Device Remote Management</td>
									      <td>Device firmware auto upgrade and device log remote <br/>exported</td>
									    </tr>
									    <tr>
									       
									      <td>System Security Management</td>
									      <td>Blacklist, Whitelist and Intelligent Security Strategy</td>
									    </tr>
									    <tr>
									       
									      <td>Language Support </td>
									      <td>English, Russian, Portuguese, Spanish, Polish, <br/>Simplified and Traditional Chinese</td>
									    </tr>
									  </tbody>
									</table>
								</div>
							</Tab>
				    	</Tabs>
				    </div>
				  </Tab>
				  <Tab eventKey="T2" title="PC Desktop Software">
				    <div class="yealink-tab-cnt">
				    	<h3 class="yealink_pro_sub_head">Yealink PC Desktop Software</h3>
				    	<img class="img-fluid" src={pcds1}/>
				    	<p class="yealink_pro_para">Yealink VC Desktop is the latest addition to Yealink’s innovative One-stop Video Conferencing Solution, mainly for the people who work in the office, in business travel or at home. Yealink VC Desktop is a high-quality, best-in-class high definition (HD) video collaboration program created to streamline communication for today’s businesses. The product offers an optimal one-click setup process with rapid automatic installation, eliminating the need for lengthy, manual efforts. End users will also benefit from the product’s easy navigability over an HD display. Yealink VC Desktop is highly-compatible with Windows® 7 or later, and also compatible with Mac OS X 10.8 or later. What’s more, Yealink VC Desktop supports Network Address Translation (NAT), as well as Yealink’s Intelligent Firewall Traversal for risk-free video conferencing. With its superior bandwidth adaptability as well as up to 30% video and 50% audio packet loss resistance, Yealink VC Desktop is without question an ideal option for first-class video conferencing and collaboration.</p>
				    	<Tabs defaultActiveKey="overview" id="uncontrolled-tab-example">
				    		<Tab eventKey="overview" title="Overview">
								<div class="yealink-tab-cnt">
									
									<p class="yealink_pro_para">Yealink VC Desktop is a powerful and easy-to-use collaboration software for personal that brings HD video conferencing to you. Whether you are in the office, at home, or on a business trip, thanks to Yealink VC Desktop, now you could join a face-to-face video communication just by one simple click. Featuring intuitive user interface, 1080P resolution, better network adaptability, H.323/SIP protocol and advanced packet loss recovery technology, Yealink VC Desktop offers ultimate user experience via collaboration with Yealink Meeting Server and Yealink VC Cloud Management Service.</p>

									<img class="img-fluid" src={pcds2}/>
									<h3 class="yealink_pro_sub_head">Full HD Video Quality</h3>

									<p class="yealink_pro_para">Yealink VC Desktop allows you to enjoy 1080P full HD video conferencing and content sharing from anywhere, thus creating a barrier-free communication. </p>

									<img class="img-fluid" src={pcds3}/>
									<h3 class="yealink_pro_sub_head">Rich Conference Functions</h3>

									<p class="yealink_pro_para">Cooperating with Yealink Meeting Server, Yealink VC Desktop provides rich functions including Meet Now, schedule and conference reminder, one-touch conference access, conference control, etc., which enable you to enjoy the advanced video conference solution. </p>

									<img class="img-fluid" src={pcds4}/>
									<h3 class="yealink_pro_sub_head">Excellent Audio & Video Algorithm</h3>

									<p class="yealink_pro_para">Yealink VC Desktop is enhanced in network adaptability thanks to the new audio and video algorithm. The advanced H.264 High Profile codec efficiently saves 50% of bandwidth. With excellent audio and video packet loss recovery technology, Yealink VC Desktop resists up to 30% audio and video packet loss to ensure clear communication in an unstable network environment.</p>

									<img class="img-fluid" src={pcds5}/>
									<h3 class="yealink_pro_sub_head">H.323 & SIP Protocols</h3>

									<p class="yealink_pro_para">Based on supporting standard H.323 and SIP protocols, Yealink VC Desktop stands out in greater compatibility with Yealink Meeting Server, room system, video phone, mobile, etc., whether from Yealink or other manufacturers, further contributing to flexibility and efficiency.</p>

									<img class="img-fluid" src={pcds6}/>
								</div>
							</Tab>
							<Tab eventKey="Specifications" title="Specifications">
								<div class="yealink-tab-cnt">
									<table class="table table-bordered">
									  <tbody>
									    <tr class="">
									      
									      <td rowspan="3">Protocol</td>
									      <td>H.323</td>
									      <td>H.245, H.225, H.235, H.241</td>
									    </tr>
									    <tr>
									      <td>SIP</td>
									      <td>SIP v1 (RFC2543), SIP v2 (RFC3261)</td>
									      
									    </tr>
									    <tr>
									      
									      <td>Content sharing</td>
									      <td>H.239 (H.323) / BFCP (SIP)</td>
									      
									    </tr>
									    <tr>
									      <td rowspan="3">Video Resolution</td>
									      <td>Decode</td>
									      <td>1080P30</td>
									      
									    </tr>
									    <tr>
									      <td>Encode</td>
									      <td>1080P30</td>
									      
									    </tr>
									    <tr>
									      
									      <td>Content sharing</td>
									      <td>1080P</td>
									    </tr>
									    <tr>
									      <td rowspan="6">Video Features and Network Adaptability</td>
									      <td>Video Codecs</td>
									      <td>H.264 High Profile, H.264, H.263</td>
									      
									    </tr>
									    <tr>
									      <td>Dual Stream Protocols</td>
									      <td><BsCheckCircle/></td>
									      
									    </tr>
									    <tr>
									      <td>Video packet loss recovery</td>
									      <td><BsCheckCircle/></td>
									      
									    </tr>
									    <tr>
									      
									      <td>Max Bandwidth Capability</td>
									      <td>30%</td>
									    </tr>
									    <tr>
									      
									      <td>Bandwidth dynamic adaptive adjustment</td>
									      <td>2000Kbps</td>
									      
									    </tr>
									    <tr>
									      <td>Bandwidth Custom Setting</td>
									      <td><BsCheckCircle/></td>
									      
									    </tr>
									    <tr>
									      <td rowspan="9">Audio Features</td>
									      <td>Audio Codecs</td>
									      <td>ARES, Opus, G.722.1.C, G.722.1, G.722 (7KHz)，G.711 u/a</td>
									      
									    </tr>
									    <tr>
									      
									      <td>Audio packet loss recovery</td>
									      <td>50%</td>
									    </tr>
									    <tr>
									      <td>Yealink Noise Proof Technology</td>
									      <td><BsCheckCircle/></td>
									    </tr>
									    <tr>
									      <td>AEC (Acoustic Echo Canceling)</td>
									      <td><BsCheckCircle/></td>
									    </tr>
									    <tr>
									      <td>VAD (Voice Activity Detection)</td>
									      <td><BsCheckCircle/></td>
									    </tr>
									    <tr>
									      <td>CNG (Comfort Noise Generator)</td>
									      <td><BsCheckCircle/></td>
									    </tr>
									    <tr>
									      
									      <td>PLC (Packet Loss Concealment)</td>
									      <td><BsCheckCircle/></td>
									    </tr>
									    <tr>
									      <td>AJB (Adaptive Jitter Buffer)</td>
									      <td><BsCheckCircle/></td>
									    </tr>
									    <tr>
									      <td>AGC (Automatic Gain Control)</td>
									      <td><BsCheckCircle/></td>
									    </tr>
									    <tr>
									      <td rowspan="4">Network and Security</td>
									      <td>TCP/IP, DHCP/Static IP</td>
									      <td><BsCheckCircle/></td>
									    </tr>
									    <tr>
									      
									      <td>AES Encryption</td>
									      <td><BsCheckCircle/></td>
									    </tr>
									    <tr>
									      <td>TLS/SRTP, H.235</td>
									      <td><BsCheckCircle/></td>
									    </tr>
									    <tr>
									      <td>Traversal Features</td>
									      <td>NAT, H.460, STUN, TURN, ICE</td>
									    </tr>
									    <tr>
									      
									      <td rowspan="2">System Requirement</td>
									      <td>Windows devices</td>
									      <td>Windows 7/8/10</td>
									    </tr>
									    <tr>
									      
									      <td>Mac devices</td>
									      <td>Mac OS 10.8 or later</td>
									    </tr>
									    <tr>
									      <td>Features</td>
									      <td colspan="2">Support Yealink Cloud Service, Yealink Meeting Server, H.323/SIP Call, Meet Now, P2P ugrade to <br/>multi-party conference, Interacting with Microsoft SfB (Lync) client for audio and video and <br/>content sharing, Joining conference from VCD by clicking the invitation link, Schedule <br/>Conference, Conference Synchronization and Conference Reminder, Cloud Contacts, Local <br/>Contacts, Call History, Call Encryption Protection, DTMF (inbound, RFC 2833, SIPINFO), PIP <br/>(pictuce in picture), Audio Mute, Member List and Conference Control, Call Statistics</td>
									    </tr>
									    
									  </tbody>
									</table>
								</div>
							</Tab>
				    	</Tabs>
				    </div>
				  </Tab>
				  <Tab eventKey="DECT" title="VC Mobile App">
				    <div class="yealink-tab-cnt">
				    	<h3 class="yealink_pro_sub_head">VC Mobile App</h3>
				    	<img class="img-fluid" src={vcm1}/>
				    	<p class="yealink_pro_para">Yealink VC Mobile, compatible with iOS 9.0, Android 4.4 or later, as a new type app launched by Yealink used for a high definition video conferencing, extended this kind of video conferencing to such mobile staff as a tablet or smartphone. In accordance with your device type, it will accordingly display the user interface and provide you with the most comfortable and intuitive experience, be it a tablet or a smartphone. It is equipped with multiple network traversal modes for greater adaptability, including NAT, H.460, STUN, TURN, ICE. In addition, superior bandwidth adaptability and up to 30% video packet and 50% audio loss resistance guarantee the smooth course of a video conferencing to the maximum. Carried with Yealink VC Cloud Management Service and no messing around with settings, Yealink VC Mobile enables you to make interconnections easily with any Yealink Cloud users at any time, at any place and in any network environment. As a new and very innovative product, Yealink VC Mobile is the ideal partner for you to have a mobile and HD video conferencing.</p>
				    	<Tabs defaultActiveKey="overview" id="uncontrolled-tab-example">
				    		<Tab eventKey="overview" title="Overview">
								<div class="yealink-tab-cnt">
									
									<p class="yealink_pro_para">Yealink VC Mobile is a powerful and easy-to-use collaboration application, which represents a reliable one-stop solution for remote and mobile workers who want to join high-quality video conferences from their mobile devices wherever they go. Featuring intuitive user interface, 1080P resolution, better network adaptability, H.323/SIP protocol and advanced packet loss recovery technology, Yealink VC Mobile offers ultimate user experience via collaboration with Yealink Meeting Server and Yealink VC Cloud Management Service.</p>

									<img class="img-fluid" src={vcm2}/>
									<h3 class="yealink_pro_sub_head">Rich Conference Functions</h3>

									<p class="yealink_pro_para">Cooperating with Yealink Meeting Server and Yealink VC Cloud Management Service, Yealink VC Mobile provides rich functions including one-touch create Virtual Meeting Room (VMR), automatic conference synchronization, one-touch conference access, conference control etc., enabling you to enjoy the advanced video conference solution.</p>

									<img class="img-fluid" src={vcm3}/>
									<h3 class="yealink_pro_sub_head">Full HD Video Quality</h3>

									<p class="yealink_pro_para">Yealink VC Mobile allows you to enjoy 1080p full HD video conferencing and content sharing from anywhere, thus creating a barrier-free communication.</p>

									<img class="img-fluid" src={vcm4}/>
									<h3 class="yealink_pro_sub_head">Excellent Audio & Video Algorithm</h3>

									<p class="yealink_pro_para">Yealink VC Mobile is enhanced in network adaptability thanks to the new video algorithm. The advanced H.264 high profile codec efficiently saves 50% of bandwidth. With an excellent video packet loss recovery technology, Yealink VC Mobile resists up to 30% video packet loss to ensure a clear video communication in unstable network environment</p>

									<img class="img-fluid" src={vcm5}/>
									<h3 class="yealink_pro_sub_head">H.323 & SIP Protocols</h3>

									<p class="yealink_pro_para">Based on standard H.323/SIP dual-protocol support, Yealink VC Mobile stands out in greater compatibility with video conferencing systems, soft endpoints, IP phones etc., whether from Yealink or other manufacturers, further contributing to flexibility and efficiency.</p>

									<img class="img-fluid" src={vcm6}/>
								</div>
							</Tab>
							<Tab eventKey="Specifications" title="Specifications">
								<div class="yealink-tab-cnt">
									<table class="table table-bordered">
									  <tbody>
									    <tr class="">
									      
									      <td rowspan="3">Protocol</td>
									      <td>H.323</td>
									      <td>H.245, H.225, H.235, H.241</td>
									    </tr>
									    <tr>
									      <td>SIP</td>
									      <td>SIP v1 (RFC2543)，SIP v2 (RFC3261)</td>
									      
									    </tr>
									    <tr>
									      
									      <td>Content sharing</td>
									      <td>H.239 (H.323) / BFCP (SIP)</td>
									      
									    </tr>
									    <tr>
									      <td rowspan="3">Video Resolution</td>
									      <td>Decode</td>
									      <td>1080P30</td>
									      
									    </tr>
									    <tr>
									      <td>Encode</td>
									      <td>720P30</td>
									      
									    </tr>
									    <tr>
									      
									      <td>Content sharing</td>
									      <td>1080P</td>
									    </tr>
									    <tr>
									      <td rowspan="6">Video Features and Network Adaptability</td>
									      <td>Video Codecs</td>
									      <td>H.264 High Profile, H.264, H.263</td>
									      
									    </tr>
									    <tr>
									      <td>Dual Stream Protocols</td>
									      <td><BsCheckCircle/></td>
									      
									    </tr>
									    <tr>
									      <td>Video packet loss recovery</td>
									      <td>30%</td>
									      
									    </tr>
									    <tr>
									      
									      <td>Max Bandwidth Capability</td>
									      <td>2000Kbps</td>
									    </tr>
									    <tr>
									      
									      <td>Bandwidth dynamic adaptive adjustment</td>
									      <td><BsCheckCircle/></td>
									      
									    </tr>
									    <tr>
									      <td>Bandwidth Custom Setting</td>
									      <td><BsCheckCircle/></td>
									      
									    </tr>
									    <tr>
									      <td rowspan="9">Audio Features</td>
									      <td>Audio Codecs</td>
									      <td>ARES, Opus, G.722.1.C, G.722.1, G.722 (7KHz)，G.711 u/a</td>
									      
									    </tr>
									    <tr>
									      
									      <td>Audio packet loss recovery</td>
									      <td>50%</td>
									    </tr>
									    <tr>
									      <td>Yealink Noise Proof Technology</td>
									      <td><BsCheckCircle/></td>
									    </tr>
									    <tr>
									      <td>AEC (Acoustic Echo Canceling)</td>
									      <td><BsCheckCircle/></td>
									    </tr>
									    <tr>
									      <td>VAD (Voice Activity Detection)</td>
									      <td><BsCheckCircle/></td>
									    </tr>
									    <tr>
									      <td>CNG (Comfort Noise Generator)</td>
									      <td><BsCheckCircle/></td>
									    </tr>
									    <tr>
									      
									      <td>PLC (Packet Loss Concealment)</td>
									      <td><BsCheckCircle/></td>
									    </tr>
									    <tr>
									      <td>AJB (Adaptive Jitter Buffer)</td>
									      <td><BsCheckCircle/></td>
									    </tr>
									    <tr>
									      <td>AGC (Automatic Gain Control)</td>
									      <td><BsCheckCircle/></td>
									    </tr>
									    <tr>
									      <td rowspan="4">Network and Security</td>
									      <td>TCP/IP, DHCP/Static IP</td>
									      <td><BsCheckCircle/></td>
									    </tr>
									    <tr>
									      
									      <td>AES Encryption</td>
									      <td><BsCheckCircle/></td>
									    </tr>
									    <tr>
									      <td>TLS/SRTP, H.235</td>
									      <td><BsCheckCircle/></td>
									    </tr>
									    <tr>
									      <td>Traversal Features</td>
									      <td>NAT, H.460, STUN, TURN, ICE</td>
									    </tr>
									    <tr>
									      
									      <td rowspan="2">System Requirement</td>
									      <td>iOS devices</td>
									      <td>iOS 9.0 or above</td>
									    </tr>
									    <tr>
									      
									      <td>Android Devices</td>
									      <td>Android 4.4 or above</td>
									    </tr>
									    <tr>
									      <td>Features</td>
									      <td colspan="2">Support Yealink Cloud Service, Yealink Meeting Server, H.323/SIP Call, Meet Now, P2P ugrade to <br/>multi-party conference, Interacting with Microsoft SfB (Lync) client for audio and video and <br/>content sharing, Conference Synchronization and Conference Reminder, Cloud Contacts, Local <br/>Contacts, Call History, Call Encryption Protection, DTMF (inbound, RFC 2833, SIPINFO), PIP <br/>(pictuce in picture), Audio Mute, Camera On/Off, Member List and Conference Control, Screen <br/>Lock, Call Statistics, Switch between front and rear cameras.</td>
									    </tr>
									    
									  </tbody>
									</table>
								</div>
							</Tab>
				    	</Tabs>
				    </div>
				  </Tab>
				  <Tab eventKey="vccm" title="VC Cloud Management">
				    <div class="yealink-tab-cnt">
				    	<h3 class="yealink_pro_sub_head">VC Cloud Management</h3>
				    	<p class="yealink_pro_para">The Yealink VC Cloud Management Service (VCMS) is a value-added cloud-based service platform for Yealink video conferencing endpoints and apps, including the VC series of room systems, T49G desktop video phone and VC Desktop/Mobile. VCMS offers significant convenience and cost-savings to integrators and business customers in terms of deployment, configuration and usage.</p>
				    	
				    	<h3 class="yealink_pro_sub_head">Features and Benefits</h3>
				    	<img class="img-fluid" src={vccm1}/>
				    	
				    	<h3 class="yealink_pro_sub_head">Global Server Networks</h3>
				    	<p class="yealink_pro_para">Yealink’s global VCMS server configuration, covering Asia-Pacific, Europe and North America, ensures that worldwide customers enjoy reliable and high-quality service.</p>
				    	<img class="img-fluid" src={vccm2}/>
				    	
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

export default Yealink_VC;
