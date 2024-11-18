    import MetaTags from 'react-meta-tags';

import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';
import Tab from 'react-bootstrap/Tab';

import Lets from '../lets.js';
import Footer from '../footer.js';

import Tabs from 'react-bootstrap/Tabs';
import t_s_banner_img from '../../img/service/t_s_banner_img.png';
import t_c_img_1 from '../../img/service/t_s_img_1.png';
import t_c_img_2 from '../../img/service/t_s_img_2.png';
import t_c_img_3 from '../../img/service/t_s_img_3.png';
import seo_type_3 from '../../img/service/smo_type_3.png';
import seo_type_4 from '../../img/service/smo_type_2.png';
import seo_type_5 from '../../img/service/smo_type_1.png';
import ScrollAnimation from 'react-animate-on-scroll';
class Tech_support extends Component{
render(){
  return (
    <div className="App">


<MetaTags>
            <title>Technical support services for software & application| IT support service</title>
            <meta id="meta-description" name="description" content="Scope Tech provides technical support services such as helpdesk support,  Remote Network support, Voice, Email &Online chat support, Resolution Management, Application support, Reporting and decision support. " />
            <meta id="" property="keywords" content="Technical support service, IT support service" />
            
</MetaTags>
    


    	<Nav1/>
    	<div class="container-fluid support_t_s_banner">
    		<div class="t_c_banner_main">
                <ScrollAnimation animateIn="fadeInDown" delay="800" duration="1.5"><h1 class="banner_heading_cnt">
                    Service Supporting
                </h1></ScrollAnimation>

                
    			<ScrollAnimation animateIn="fadeInDown" delay="0" duration="1.5"><img class="img-fluid" src={t_s_banner_img} /></ScrollAnimation>
    		</div>
    	</div>
    	<ScrollAnimation animateIn="fadeIn" delay="100" duration="1.5"><div class="container smo_cont_1">
            <div class="row">
                <div class="col-md-7">
                <div style={{margin:"auto 0"}}>
                    <h4 class="page_main_head">Best Technical Support Services</h4>
                    
                    <p class="para_cnt">Consider Scope Tech if you are facing any challenges in technical support as we are leading technical support providers in Saudi Arabia. </p>
                    <p class="para_cnt">We build team of technical support professionals who can understand business environment and provide business solutions. </p>
                    <p class="para_cnt">So we can effectively provide technical support services to take your business to the next level. Our services include</p>
                    <ul class="t_c_list">
                        <li class="para_cnt">Remote support</li>
                        <li class="para_cnt">Voice, Email and Online chat support in level 1 and 2</li>
                        <li class="para_cnt">Network Support</li>
                        <li class="para_cnt">Application support</li>
                        <li class="para_cnt">Reporting and decision support</li>
                    </ul>
                    
                 </div>
                </div>
                <div class="col-md-5 t_c_col_img">
                    <img class="img-fluid" src={t_c_img_1} />
                </div>
            </div>
        </div></ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" delay="100" duration="1.5">    
        <div class="container smo_cont_1 t_c_cnt">
            <div class="row">
                <div class="col-md-5 t_c_col_img">
                    <img class="img-fluid" src={t_c_img_2} />
                </div>
                <div class="col-md-7 t_c_col_cnt">
                <div style={{margin:"auto 0"}}>
                    <h4 class="page_main_head">Customer Support</h4>
                    <h5 class="page_sub_main_head">Top Among Customer Support Services</h5>
                    
                    <p class="para_cnt">We are passionate about solving challenges for our customers by providing robust customer support. We are the best customer support service provider in Saudi Arabia as we have well talented team and can change bumpy situations into a success</p>
                    <h5 class="page_sub_main_head">Why US?</h5>
                    <ul class="t_c_list_1">
                        <li class="para_cnt">Improve Customer Experience</li>
                        <li class="para_cnt">Level Up your business</li>
                        <li class="para_cnt">Save Department Costs</li>
                    </ul>
                    <h5 class="page_sub_main_head">Types of support</h5>
                    
                    <p class="para_cnt">Voice ,  Chat, Video Chat, E-mail, Messaging, SMS</p>
                    
                    
                 </div>
                </div>
            </div>
        </div></ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" delay="100" duration="1.5">      
        <div class="container smo_cont_1 t_c_cnt">
            <div class="row">
                <div class="col-md-7 text-left cs_ts_left">
                <div style={{margin:"auto 0"}}>
                    <h4 class="page_main_head">Sales Support Services</h4>
                    <h5 class="page_sub_main_head">We Transform Your Business</h5>
                    
                    <p class="para_cnt">Scope Tech, a reliable sales support service provider offers efficient sales support to strengthen client’s sales and revenue. We deeply understand and visualize the business goals and competency of our clients. So it’s time to choose the best sales support service provider for you to improve your sales force 
</p>
                    <h5 class="page_sub_main_head">Our sales support service includes:
</h5>
                    <ul class="t_c_list_1">
                        <li class="para_cnt">Contact Discovery Services</li>
                        <li class="para_cnt">Appointment Setting Services
</li>
                        <li class="para_cnt">Event Data Management Services</li>
                        <li class="para_cnt">Lead Qualification Services</li>

                    </ul>
                    {/*<h4 class="page_sub_main_head" style={{color:"#522a73"}}>Why choosing Scope Tech for sales support?
</h4>
                    
                    <ul class="t_c_list_1 ">
                        <li class="para_cnt">cost effectiveness</li>
                        <li class="para_cnt">quick response time and 
</li>
                        <li class="para_cnt">Customer satisfaction</li>
                        

                    </ul>
                    */}
                    
                 </div>
                </div>
                <div class="col-md-5 t_c_col_img">
                    <img class="img-fluid" src={t_c_img_1} />
                </div>
            </div>
        </div></ScrollAnimation>
            
<Lets/>
<Footer/>      
    </div>    
  );
}
}

export default Tech_support;
