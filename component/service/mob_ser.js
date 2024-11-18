import React,{ Component,setState } from 'react';
import MetaTags from 'react-meta-tags';
import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import Lets from '../lets.js';
import Footer from '../footer.js';



import ser_web_main from '../../img/service/ser_mob_banner_1.png';
import ser_web_img_1 from '../../img/service/ser_web_img_1.png';
import ser_circle_1 from '../../img/service/ser_circle_1.png';
import type1 from '../../img/service/mob_type_1.png';
import type2 from '../../img/service/mob_type_2.png';
import type3 from '../../img/service/mob_type_3.png';
import type4 from '../../img/service/mob_type_4.png';
import abt1 from '../../img/service/mob_ser_abt1.png';
import abt2 from '../../img/service/mob_ser_abt2.png';
// import test6 from '../../img/yealink/test6.png';
// import test7 from '../../img/yealink/test7.png';


import ScrollAnimation from 'react-animate-on-scroll';

import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom';



import { BsCheckCircle } from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';



class Mob_Ser extends Component{
render(){
  return (
    <div className="App">
    



<MetaTags>
            <title>Top mobile app development company| Best app development| Android &IOS</title>
            <meta id="meta-description" name="description" content="Top mobile application development company. Best Android & iPhone App Development Services. We develop custom mobile applications for iOS &Android platforms. Avail best services from one of the best mobile app development company chat with us+966 599 226 961" />
            <meta id="" property="keywords" content="mobile application development, android app development, mobile app development" />
            
</MetaTags>
    


    	<Nav1/>
<div class="container-fluid ban_main_cont service_md_banner" style={{height:"70vh"}}>
            <div class="row mar_top_30" style={{width:"100%", paddingLeft:"15%",paddingRight:"15%"}}>
                <div class="col-md-6 text-left" style={{margin:"auto"}}>
                    <ScrollAnimation animateIn="fadeInLeft" delay="100"><h1 class="banner_heading_cnt text-left" style={{color:"#fff"}}>Right Choice for Mobile
App Development</h1></ScrollAnimation>
<ScrollAnimation animateIn="fadeInLeft" delay="300"><p class="banner_sub_head_cnt">
</p></ScrollAnimation>
                </div>
                <div class="col-md-6 text-center" style={{margin:"auto"}}>
                    <img class="img-fluid " id="img_ui" style={{height:"auto",width:"80%",margin:"auto"}}  src={ser_web_main}/>
                </div>
            </div>
        </div>
        
   	<div style={{position:"relative",padding:"0"}} class="container-fluid text-center">
{/*         <div class="container-fluid service_md_banner banner_main">
            <div class="container" style={{margin:"auto"}}>
                <div class="row" style={{margin:"auto"}}>
                    <div class="col-md-5 mob_ban_cnt" style={{margin:"auto"}}>
                        <ScrollAnimation animateIn="fadeInLeft" delay="100"><h1 class="banner_heading_cnt text-left"></h1></ScrollAnimation>

                    </div>
                    <div class="col-md-7 text-center mob_ban_main">
                        <ScrollAnimation animateIn="fadeIn" delay="150" duration="1.5"><img class="img-fluid mob_ban_img" id="img_ui" style={{width:"80%"}}  src={ser_web_main}/></ScrollAnimation>
                    </div>
                </div>
                
            </div>
        </div>*/}
        <ScrollAnimation animateIn="fadeInUp" delay="100" duration="1.5"><div class="ser_mob_over_banner">
    			<h4 class="page_sub_main_head">Mobile App development has been made easy</h4>
    			<p class="para_cnt text-center" style={{margin:"auto"}}>Scope Tech, leading mobile app Development Company in Saudi Arabia, assists the clients in all possible ways. We offer one stop solution for mobile app development on OS such as android and IOS. Your search for best Android or IOS app Development Company ends here.</p>
    		</div></ScrollAnimation>
    	</div>
    	
    	<ScrollAnimation animateIn="fadeIn" delay="100" duration="1.5"><div class="container ser_mob_cont_1">
    		<div class="row">
    				<div class="col-md-6" style={{margin:"auto"}}>
    					<div class="ser_web_abt_cnt">
    						<h1 class="page_main_head">A perfect one-stop solution for your
mobile appdevelopment</h1>
    						<p class="para_cnt">We are experience in all sectors and we can create IOS /Android mobile app development irrespective of your industry. Scope Tech, top among leading mobile app Development Company in Saudi Arabia always offers the one-stop solution for you in all aspects. Our amazing latest technology, expert developers, 24/7 support quietlycreates a distinguished name in the field of Mobile App Development in Saudi Arabia. Reach us and avail the best service you can ever dream off.
</p>

    					</div>
    					
    				</div>
    				<div class="col-md-6 row" style={{margin:"auto"}}>
    					<div class="col-6" style={{padding:"0"}}><img class="img-fluid" src={abt1} /></div>
    					<div class="col-6" style={{padding:"0", margin:"0"}}><img class="img-fluid" src={abt2} /></div>
    				</div>
    			</div>
    			
    	</div></ScrollAnimation>
    	<ScrollAnimation animateIn="fadeIn" delay="100" duration="1.5">
    	<div class="container ser_mob_cont_2">
    		<h3 class="page_main_head">
    			Why have a mobile app from Scope Tech?
    		</h3>
    		<div class="row">
    			<div class="col-md-3">
    				<div class="main_type_mob">
    					<div class="main_type_mob_img_main"><img class="main_type_mob_img img-fluid" src={type1} /></div>
    					<div class="main_type_mob_head"><h6>Latest Technology</h6></div>
    				</div>

    			</div>
    			<div class="col-md-3">
    				<div class="main_type_mob">
    					<div class="main_type_mob_img_main"><img class="main_type_mob_img img-fluid" src={type2} /></div>
    					<div class="main_type_mob_head"><h6>Experience and Expertise</h6></div>
    				</div>

    			</div>
    			<div class="col-md-3">
    				<div class="main_type_mob">
    					<div class="main_type_mob_img_main"><img class="main_type_mob_img img-fluid" src={type3} /></div>
    					<div class="main_type_mob_head"><h6>On Time Delivery</h6></div>
    				</div>

    			</div>
    			<div class="col-md-3">
    				<div class="main_type_mob">
    					<div class="main_type_mob_img_main"><img class="main_type_mob_img img-fluid" src={type4} /></div>
    					<div class="main_type_mob_head"><h6>24/7 Support</h6></div>
    				</div>

    			</div>
    			<div class="col-md-4"></div>
    			<div class="col-md-4"></div>
    			<div class="col-md-4"></div>
    		</div>
    	</div></ScrollAnimation>
    <Lets/>
    <Footer/>
    </div>    
  );
}
}

export default Mob_Ser;
