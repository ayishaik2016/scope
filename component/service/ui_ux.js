import MetaTags from 'react-meta-tags';
import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import ser_ui_type1 from '../../img/new/ser_ui_type1.png';
import ser_ui_type2 from '../../img/new/ser_ui_type2.png';
import ser_ui_type3 from '../../img/new/ser_ui_type3.png';
import ser_ui_type4 from '../../img/new/ser_ui_type4.png';
import ser_ui_type5 from '../../img/new/ser_ui_type5.png';
import da_type_5 from '../../img/solutions/da_type_5.png';

import Lets from '../lets.js';
import Footer from '../footer.js';


import ui_ux_img_n1 from '../../img/solutions/ui_ux_img_n1.png';
import ui_ux_img_n2 from '../../img/solutions/ui_ux_img_n2.png';

import ser_ui_banner_main from '../../img/service/ser_ui_banner_main.png';
import ser_web_img_1 from '../../img/service/ser_web_img_1.png';
import ser_circle_1 from '../../img/service/ser_circle_1.png';
import ser_ui_img_2 from '../../img/service/ser_ui_img_2.png';
import ser_ui_img_1 from '../../img/service/ser_ui_img_1.png';
import ui_ux_type_1 from '../../img/service/ui_ux_type_1.png';
import ui_ux_type_2 from '../../img/service/ui_ux_type_2.png';
import ui_ux_type_3 from '../../img/service/ui_ux_type_3.png';
import ui_ux_type_4 from '../../img/service/ui_ux_type_4.png';
import ui_ux_type_5 from '../../img/service/ui_ux_type_5.png';

// import test6 from '../../img/yealink/test6.png';
// import test7 from '../../img/yealink/test7.png';




import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom';



import { BsCheckCircle } from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';

import ScrollAnimation from 'react-animate-on-scroll';

class Ui_ux extends Component{
render(){
  return (
    <div className="App">


<MetaTags>
            <title>Best UI/UX Design and Development Company | Scope Tech |Saudi Arabia</title>
            <meta id="meta-description" name="description" content="Best UIUX Design Company in Saudi Arabia. We imply digital designing for web & mobile application. UI UX Design Company. We are a team of passionate UI UX designers, developers & strategists ready to provide best in class User Experience UX design for your business now. Reach us at info@Scope Tech.sa+966 599 226 961

" />
            <meta id="" property="keywords" content="UI UX Design Company, UI UX designers, UX design" />
            
</MetaTags>
    

    	<Nav1/>
    	<div class="container-fluid ban_main_cont service_ui_banner" style={{height:"70vh"}}>
            <div class="row mar_top_50" style={{width:"100%", paddingLeft:"15%",paddingRight:"15%"}}>
                <div class="col-md-6 text-left" style={{margin:"auto"}}>
                    <ScrollAnimation animateIn="fadeInLeft" delay="100"><h1 class="banner_heading_cnt text-left" style={{color:"#fff"}}>UI/UX Design Company</h1></ScrollAnimation>
<ScrollAnimation animateIn="fadeInLeft" delay="300"><p class="banner_sub_head_cnt">We are Here to Transform Your Business into an Art. 
</p></ScrollAnimation>
                </div>
                <div class="col-md-6 text-center" style={{margin:"auto"}}>
                    <img class="img-fluid " id="img_ui" style={{height:"auto",width:"80%",margin:"auto"}}  src={ser_ui_banner_main}/>
                </div>
            </div>
        </div>
        {/*<div class="container-fluid service_ui_banner " >
            <div class="container ban_main_cont" style={{margin:"auto"}}>
                <div class="row" style={{margin:"auto",height:"60vh"}}>
                    <div class="col-md-6" style={{margin:"auto"}}>
                        <ScrollAnimation animateIn="fadeInLeft" delay="100"><h1 class="banner_heading_cnt text-left">UI/UX Design Company</h1></ScrollAnimation>
<ScrollAnimation animateIn="fadeInLeft" delay="300"><p class="banner_sub_head_cnt">We are Here to Transform Your Business into an Art. 
</p></ScrollAnimation>
                    </div>
                    <div class="col-md-6 text-center">
                        <ScrollAnimation animateIn="fadeIn" delay="150" duration="1.5"><img class="img-fluid " id="img_ui" style={{width:"80%"}} src={ser_ui_banner_main}/></ScrollAnimation>
                    </div>
                </div>
                
            </div>
        </div>
        
        <div class="container-fluid service_ui_banner banner_main">
            <div class="container" style={{margin:"auto"}}>
                <div class="row" style={{margin:"auto"}}>
                    <div class="col-md-6" style={{margin:"auto"}}>
                        <ScrollAnimation animateIn="fadeInLeft" delay="100"><h1 class="banner_heading_cnt text-left">UI/UX Design Company</h1></ScrollAnimation>
<ScrollAnimation animateIn="fadeInLeft" delay="300"><p class="banner_sub_head_cnt">We are Here to Transform Your Business into an Art. 
</p></ScrollAnimation>
                    </div>
                    <div class="col-md-6 text-center">
                        <ScrollAnimation animateIn="fadeIn" delay="150" duration="1.5"><img class="img-fluid " id="img_ui" style={{width:"80%"}} src={ser_ui_banner_main}/></ScrollAnimation>
                    </div>
                </div>
                
            </div>
        </div>*/}
        <div style={{position:"relative"}} class="container-fluid">
    	<ScrollAnimation animateIn="fadeIn" delay="150" ><div class="container ser_web_cont_1 text-center justify-content-center">
    					<div class="ser_ui_abt_cnt text-center justify-content-center">
    						
                            <div class="row">
                                <div class="col-md-7" style={{margin:"auto"}}>
                                <h3  class="page_main_head text-left" style={{paddingBottom:"6%"}}>We’re Top among the best UI/UX Design Companies</h3>
                                    <p class="para_cnt" style={{width:"100%"}}>We have highly professional UI/UX designers with creative vision and revolutionary concept. They have precise understanding of the product and have raised the bar for design standards.

                        Scope Tech has highly gifted team of UI/ UX designers who makes digital interaction a delightful user experience. This intuitive design experience of our designers improves user interaction, engagement resulting in high conversion and qualified output
</p>        
                                </div>
                                <div class="col-md-5 t_c_col_img ui_ux_main_img">
                                <img class="img-fluid" src={ui_ux_img_n1} /></div>
                            </div>
                            
<div class="row" style={{paddingTop:"2%"}}>
                                <div class="col-md-5 t_c_col_img ui_ux_main_img">
                                <img class="img-fluid" src={ui_ux_img_n2} /></div>
                                <div class="col-md-7" style={{margin:"auto"}}>
                                    
<p class="para_cnt">Our UI/UX Developers creates a mockup and provides visual draft. This enable our clients to refine suggest changes and corrections to meet their outputs in prior to actual design and development. 
We are serving best and have a long tail of happy clients by providing them a virtual tour and working prototype. It helps them to understand and predict the obstacles during project development.
Get Quote in one of the best UI/UX Development Company, we always strive to meet the highest professional standards and ensure your business and brand is in safe hands.

</p>        
                                </div>
                            </div>
                            

    						
    					</div>
    			
    	</div>
    	</ScrollAnimation>
        

    	{/*<div class="container-fluid ser_ui_cont_2">
    		<div class="ser_ui_tab_main_over">
    			<p class="page_main_head">How Our User Experience Design Services Benefit
Your Business </p>	
    		</div>
    			
    	</div>
    	<div class="container ser_ui_cont_3">
    		<div class="ser_ui_tab_main_set">
    			<Tab.Container id="left-tabs-example" defaultActiveKey="icr">
  <Row className="ui_tab">
    <Col sm={4} className="ui_tab_left">
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="icr">Improved Conversion Rate</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="eue">Enhanced User Engagement</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="bid">Brand Identity Building</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="cl">Customer Loyalty</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="ir">Increased Revenue</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={8} className="ui_tab_right">
      <Tab.Content>
        <Tab.Pane eventKey="icr">
            <h1>Improved Conversion Rate</h1>
	        <div class="tab_btm_border"></div>
			<p>A well-designed UI enables you to create seamless user-experience and fluid user-journey on the website or mobile app. Having a team of professionals with expertise in designing conversion-centric UX, we help you improve the conversion rate of your website.</p>
				          
        </Tab.Pane>
        <Tab.Pane eventKey="eue">
            <h1>Enhanced User Engagement</h1>
	        <div class="tab_btm_border"></div>
			<p>A well-designed UI enables you to create seamless user-experience and fluid user-journey on the website or mobile app. Having a team of professionals with expertise in designing conversion-centric UX, we help you improve the conversion rate of your website.</p>
				          
        </Tab.Pane>
        <Tab.Pane eventKey="bid">
            <h1>Brand Identity Building</h1>
	        <div class="tab_btm_border"></div>
			<p>A well-designed UI enables you to create seamless user-experience and fluid user-journey on the website or mobile app. Having a team of professionals with expertise in designing conversion-centric UX, we help you improve the conversion rate of your website.</p>
				          
        </Tab.Pane>
        <Tab.Pane eventKey="cl">
            <h1>Customer Loyalty</h1>
	        <div class="tab_btm_border"></div>
			<p>A well-designed UI enables you to create seamless user-experience and fluid user-journey on the website or mobile app. Having a team of professionals with expertise in designing conversion-centric UX, we help you improve the conversion rate of your website.</p>
				          
        </Tab.Pane>
        <Tab.Pane eventKey="ir">
            <h1>Increased Revenue</h1>
	        <div class="tab_btm_border"></div>
			<p>A well-designed UI enables you to create seamless user-experience and fluid user-journey on the website or mobile app. Having a team of professionals with expertise in designing conversion-centric UX, we help you improve the conversion rate of your website.</p>
				          
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>


    			
    		</div>
    			
    	</div> */}</div>
         <ScrollAnimation animateIn="fadeIn" delay="150" ><div
class="container ser_ui_cont_5"> <div class="row"> <div class="col-md-6
ser_ui_cnt_1"> <div class="ser_ui_cnt_1"> <h3
class="page_main_head" style={{textAlign:"left"}}>Mobile App UX</h3>
 <p class="para_cnt"  style={{margin:"auto"}}>We have professional expertise in developing unique and engaging mobile applications for the businesses in various types of industries. We have a long tail of happy clients as we develop agile, innovative and scalable UI UX designs. We develop for the leading companies in android, IOS, or windows. 
</p> 
{/*<h5>1. UX/UI Designs compatible with different
app platforms.<br/> (Android & iOS)</h5> <h5>2. Designs with improved
personalization</h5>*/}

    				</div>
    			</div>
    			<div class="col-md-6">
    				<img class="img-fluid" src={ser_ui_img_1} />
    			</div>
    		</div>
    	</div></ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" delay="150" >
    	<div class="container ser_ui_cont_6">
    		<div class="row">
    			<div class="col-md-6">
    				<img class="img-fluid" src={ser_ui_img_2} />
    			</div>
    			<div class="col-md-6 ser_ui_cnt_1">
    				<div class="ser_ui_cnt_1">
    					<h3 class="page_main_head" style={{textAlign:"left"}}>Website UX</h3>
    					<p class="para_cnt"  style={{margin:"auto"}}>Optimizing web applications and websites to be mobile friendly, convenient, and user friendly to search, explore, and purchase your products or services is the thing that we aptitude in. There are many benchmark works of interactive website applications and few have listed below. This interactive design and development increases engagement and conversion of the businesses
</p>
    					{/*<h5>1. Designs that convey the brand voice and identity</h5>
    					<h5 class="">2. Analysis & research-based UX designs</h5>*/}

    				</div>
    			</div>
    		</div>
    	</div>
        </ScrollAnimation>
    	{/*<div class="container-fluid ser_ui_cont_7">
    		<div class="ui_main_cnt_type">
    			<h4>UX and UI Design Process</h4>
    			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
    			<div class="row row_main_type_ui text-center justify-content-center" >
    				<div class="col-4 col-md-2">


						<div class="main_type_ui">
	    					<div class="main_type_ui_img_main"><img class="main_type_ui_img img-fluid" src={ui_ux_type_1} /></div>
	    					<div class="main_type_ui_head"><h6>Requirement
 Gathering</h6></div>
	    				</div>



    				</div>
    				<div class="col-4 col-md-2">


						<div class="main_type_ui">
	    					<div class="main_type_ui_img_main"><img class="main_type_ui_img img-fluid" src={ui_ux_type_2} /></div>
	    					<div class="main_type_ui_head"><h6>UX Research & 
Trend Check</h6></div>
	    				</div>



    				</div>
    				<div class="col-4 col-md-2">


						<div class="main_type_ui">
	    					<div class="main_type_ui_img_main"><img class="main_type_ui_img img-fluid" src={ui_ux_type_3} /></div>
	    					<div class="main_type_ui_head"><h6>Wireframe
 Creation</h6></div>
	    				</div>



    				</div>
    				<div class="col-4 col-md-2">


						<div class="main_type_ui">
	    					<div class="main_type_ui_img_main"><img class="main_type_ui_img img-fluid" src={ui_ux_type_4} /></div>
	    					<div class="main_type_ui_head"><h6>Design 
Creation</h6></div>
	    				</div>



    				</div>
    				<div class="col-4 col-md-2">


						<div class="main_type_ui">
	    					<div class="main_type_ui_img_main"><img class="main_type_ui_img img-fluid" src={ui_ux_type_5} /></div>
	    					<div class="main_type_ui_head"><h6>Implementation
Html- CSS</h6></div>
	    				</div>



    				</div>
    			</div>
    		</div>
    	</div>*/}
        {/*<div class="container-fluid" style={{padding:"0"}}>
        <h1 class="text-center page_main_head">Bridging the gap between business Idea & fully functional End Product</h1>
            <div class="row">
                <div class="col-md-6 au_cont_2_col_left">
                    <div class="vision_au">
                        <h5  class="page_sub_main_head">Why Choose Us?
</h5>
                        <ul class="ui_ux_choode_cnt">
                        <li ><label>Experienced Developers</label></li>
                        <li><label>Agile Methodology</label></li>
                        <li><label>Effective Communication</label></li>
                        <li><label>Maintenance & Support</label></li>
                    </ul>
                    </div>
                    
                </div>
                <div class="col-md-6 au_cont_2_col_left">
                    <div class="vision_au">
                        <h5 class="page_sub_main_head">Reasons To Work With Us</h5>
                        <ul class="ui_ux_choode_cnt">
                        <li><label>Feel Your Product Early</label></li>
                        <li><label>Simple and Latest Designs</label></li>
                        <li><label>Collaborative Communication</label></li>
                        <li><label>Integrated Documentation</label></li>
                    </ul>
                    </div>
                    
                </div>
                
            </div>
        </div>
        */}
        <ScrollAnimation animateIn="fadeIn" delay="100" duration="1.5"><div class="container-fluid smm_cont_1">
      <h3 style={{margin:"auto 0",paddingBottom:"3%",width:"100%"}} class="text-center page_main_head ui_ux_how_ever" >How our UI/UX design process enhance your business in this arrow mark changes in designer system
</h3>

        <div class="row da_type_cont text-center justify-content-center">
          <div class="col-md-2 ">
            <div class="da_type_main"><img class="img-fluid" src={ser_ui_type1} /></div>
            <h6>Research </h6>
            <p class="ui_ux_process_cnt">Analyzing help us to make the precise understanding of User Experience and to stand out from the competitors.</p>
          </div>
          <div class="col-md-2 ">
            <div class="da_type_main"><img class="img-fluid" src={ser_ui_type2} /></div>
            <h6>Wireframe  </h6>
            <p class="ui_ux_process_cnt">We build up a solution for all the user objectives will create a work flow or stories for various user objectives</p>
          </div>
          <div class="col-md-2 ">
            <div class="da_type_main"><img class="img-fluid" src={ser_ui_type3} /></div>
            <h6>Prototype  </h6>
            <p class="ui_ux_process_cnt">our prototypes clearly explain and let us to feel the final design of the project</p>
          </div>
          <div class="col-md-2 ">
            <div class="da_type_main"><img class="img-fluid" src={ser_ui_type4} /></div>
            <h6>Delivery  </h6>
            <p class="ui_ux_process_cnt">With the consent from the client side we create and design for all the resources that to be supported in all the screens. </p>
          </div>
          <div class="col-md-2">
            <img class="img-fluid" src={ser_ui_type5} />
            <h6>Iterate  </h6>
            <p class="ui_ux_process_cnt">we observe how the users are using the app and analyze whether the customer needs are met. This helps us to take to the next level of our business
.</p>
          </div>
        </div>
      </div></ScrollAnimation>
    <Lets/>
    <Footer/>
    </div>    
  );
}
}

export default Ui_ux;
