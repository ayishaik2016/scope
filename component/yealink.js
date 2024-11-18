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
import SIP_T58V from '../img/yealink/SIP-T58V.jpg';

import t23p from '../img/new/t23p.png';
import t23g from '../img/new/t23g.png';
import t27g from '../img/new/t27g.png';
import t29g from '../img/new/t29g.png';


import vp_t49g from '../img/new/vp-t49g.png';

import Lets from './lets.js';
import Footer from './footer.js';


import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom';





class Yealink extends Component{
render(){
  return (
    <div className="App">



<MetaTags>
            <title>Conference phones at best price| Yealink|Audio conferencing products
</title>
            <meta id="meta-description" name="description" content="Experience the Yealink standard when it comes to conference call systems. Poly strives to deliver the highest quality systems for your voice conferencing needs. price details of companies selling Conference Phone" />
            <meta id="" property="keywords" content="conference phones, audio conference products" />
            
</MetaTags>
    


    	<Nav1/>
    	<div class="container-fluid yealink_banner">

    	</div>
    	<div class="container-fluid" style={{padding:"2% 5%"}}>
    		<div >
    			<Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
				  <Tab eventKey="home" title="Conference Phones">
				    <div class="yealink-tab-cnt">
				    	<div class="row" style={{margin:"0"}}>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/CP960"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src={cp960_wireless} alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">CP960 with Wireless Mic</h5>
											<h5 class="yealink_cnt">Optima HD IP Conference Phone</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/CP960-Conference"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src={cp960_wired} alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">CP960 Conference Phone</h5>
											<h5 class="yealink_cnt">Optima HD IP Conference Phone</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/CP930"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src={cp930w} alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">CP930W - Base</h5>
											<h5 class="yealink_cnt">Wireless DECT Conference Phone</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/CP920"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src={cp920} alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">CP920</h5>
											<h5 class="yealink_cnt">Touch HD IP Conference Phone</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/CP920-PSTN"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src={cp920_pstn} alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">CP920 - PSTN</h5>
											<h5 class="yealink_cnt">Touch HD IP Conference Phone</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    	</div>
				    </div>
				  </Tab>
				  <Tab eventKey="T5" title=" T5 Series Phones ">
				    <div class="yealink-tab-cnt">
				    	<div class="row" style={{margin:"0"}}>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/SIP-VP59"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src={vp59} alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">SIP-VP59</h5>
											<h5 class="yealink_cnt">Flagship Smart Video Phone</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/SIP-T58A-With-Camera"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src={t58a_camera} alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">SIP-T58A with Camera</h5>
											<h5 class="yealink_cnt">Smart Business Phone</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/SIP-T58A"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src={t58a} alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">SIP-T58A</h5>
											<h5 class="yealink_cnt">Smart Business Phone</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/SIP-T58V"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src={SIP_T58V} alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">SIP-T58V</h5>
											<h5 class="yealink_cnt">Smart Business Video Phone</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/SIP-T57W"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src={t57w} alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">SIP-T57W</h5>
											<h5 class="yealink_cnt">Prime Business Phone</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/SIP-T56A"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/61AZYb%2Bz-PL._SX679_.jpg" alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">SIP-T56A</h5>
											<h5 class="yealink_cnt">Smart Business Phone</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/SIP-T54W"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src={t54w} alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">SIP-T54W</h5>
											<h5 class="yealink_cnt">Prime Business Phone</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/SIP-T53W"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71cFz%2BH1x-L._AC_SL1500_.jpg" alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">SIP-T53W</h5>
											<h5 class="yealink_cnt">Prime Business Phone</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/SIP-T53"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src="https://www.bechtle.com/shop/medias/5d3f056c154fe229363183c7-900Wx900H-820Wx820H?context=bWFzdGVyfHJvb3R8NzcyNzV8aW1hZ2UvanBlZ3xoN2YvaGU0LzEwNzgzNTQ2ODM0OTc0LmpwZ3xmODdiMjlhODU3MmU2ZTlkZmI3YjAzNzhhZWY3NWZjNjE3ODc1OWU2Y2RlNGJhYjUwNTkyMDgyNmZiMGNkN2M3" alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">SIP-T53</h5>
											<h5 class="yealink_cnt">Prime Business Phone</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    	</div>
				    </div>
				  </Tab>
				  <Tab eventKey="T4" title=" T4 Series Phones ">
				    <div class="yealink-tab-cnt">
				    	<div class="row" style={{margin:"0"}}>

				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/SIP-T49G"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src={vp_t49g} alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">SIP VP-T49G</h5>
											<h5 class="yealink_cnt">Flagship level desktop video phone</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/SIP-T48S"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src={t48s} alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">SIP-T48S</h5>
											<h5 class="yealink_cnt">Ultra elegant business IP Phone</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/SIP-T46S"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src={t46s} alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">SIP-T46S</h5>
											<h5 class="yealink_cnt">Ultra elegant business IP Phone</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/SIP-T42S"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src={t42s} alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">SIP-T42s</h5>
											<h5 class="yealink_cnt">Ultra elegant business IP Phone</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/SIP-T41S"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src={t41s} alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">SIP-T41s</h5>
											<h5 class="yealink_cnt">Ultra elegant business IP Phone</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/SIP-T40G"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src={t40g} alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">SIP-T40G</h5>
											<h5 class="yealink_cnt">Ultra elegant business IP Phone</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    	</div>
				    </div>
				  </Tab>
				  <Tab eventKey="T2" title=" T2 Series Phones ">
				    <div class="yealink-tab-cnt">
				    	<div class="row" style={{margin:"0"}}>

				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/SIP-T29G"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src={t29g} alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">SIP-T29G</h5>
											<h5 class="yealink_cnt">High-end colour screen paperless IP phone</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/SIP-T27G"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src={t27g} alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">SIP-T27G</h5>
											<h5 class="yealink_cnt">Cost-effective multi-line IP phone</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/SIP-T23G"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src={t23g} alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">SIP-T23G</h5>
											<h5 class="yealink_cnt">Cost-effective enterprise level IP phone</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/SIP-T23P"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src={t23p} alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">SIP-T23P</h5>
											<h5 class="yealink_cnt">Cost-effective HD voice IP phone</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/SIP-T21P"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src="https://tympanus.net/Development/HoverEffectIdeas/img/18.jpg" alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">SIP-T21(P) E2</h5>
											<h5 class="yealink_cnt">Dual-line entry level IP phone</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/SIP-T19p"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src="https://tympanus.net/Development/HoverEffectIdeas/img/18.jpg" alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">SIP-T19(P) E2</h5>
											<h5 class="yealink_cnt">Single line entry level IP phone</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    	</div>
				    </div>
				  </Tab>
				  <Tab eventKey="DECT" title="DECT Phones">
				    <div class="yealink-tab-cnt">
				    	<div class="row" style={{margin:"0"}}>

				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/W41P"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src={w41p} alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">W41P</h5>
											<h5 class="yealink_cnt">DECT DESK phone</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/W60P"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src={w60p} alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">W60P</h5>
											<h5 class="yealink_cnt">Premium wireless DECT IP phone</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/W56P"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src="https://tympanus.net/Development/HoverEffectIdeas/img/18.jpg" alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">W56P</h5>
											<h5 class="yealink_cnt">Mid level premium wireless DECT IP phone</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/W53P"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src={w53p} alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">W53P</h5>
											<h5 class="yealink_cnt">Entry-mid level premium wireless DECT IP phone</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    		<div class="col-md-3">
				    			<div class="">
									<Link className="nav_link" to={"/Yealink/W52P"}>
										<div class="grid">
											<figure class="effect-apollo">
												<img class="img-fluid" src={w52p} alt="img18"/>
												<figcaption class="hover_cnt_yea">
													
													
													
												</figcaption>			
											</figure>
											<h5 class="yealink_head">W52P</h5>
											<h5 class="yealink_cnt">Entry-mid level premium wireless DECT IP phone</h5>
											
										</div>
									</Link>
				    			</div>
				    		</div>
				    	</div>
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

export default Yealink;
