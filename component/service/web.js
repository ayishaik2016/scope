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


import ser_web_main from '../../img/service/ser_web_main_1.png';
import ser_web_img_1 from '../../img/service/ser_web_img_1.png';
import ser_circle_1 from '../../img/service/ser_circle_1.png';
import cp9204 from '../../img/yealink/cp9204.png';
import cp9205 from '../../img/yealink/cp9205.png';
// import test6 from '../../img/yealink/test6.png';
// import test7 from '../../img/yealink/test7.png';




import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom';

import ScrollAnimation from 'react-animate-on-scroll';

import { BsCheckCircle } from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';



class CP920 extends Component{
render(){
  return (
    <div className="App">
    



<MetaTags>
            <title>Leading web development company |React JS& Full stack |Scope Tech</title>
            <meta id="meta-description" name="description" content="Scope Tech is award-winning IT Company in Riyadh, Saudi Arabia, that offers ecommerce, React JS, Full stack and Node JS development services. Best Web Development Company for Your Big Ideas.Enquire Now! +966 599 226 961" />
            <meta id="" property="keywords" content="Web and Mobile App Development Company, top web &mobile app developers" />
            
</MetaTags>
    


    	<Nav1/>
    	<div class="container-fluid ban_main_cont service_wp_banner" style={{height:"70vh"}}>
            <div class="row mar_top_60" style={{width:"100%", paddingLeft:"15%",paddingRight:"15%"}}>
                <div class="col-md-6 text-left" style={{margin:"auto"}}>
                    <ScrollAnimation animateIn="fadeInLeft" delay="100"><h1 class="banner_heading_cnt text-left" style={{color:"#fff"}}>Best Web development
Company for your 
Big Ideas</h1></ScrollAnimation>
<ScrollAnimation animateIn="fadeInLeft" delay="300"><p class="banner_sub_head_cnt">
</p></ScrollAnimation>
                </div>
                <div class="col-md-6 text-center" style={{margin:"auto"}}>
                    <img class="img-fluid " id="img_ui" style={{height:"auto",width:"90%",margin:"auto"}}  src={ser_web_main}/>
                </div>
            </div>
        </div>
        
    	{/*<div class="container-fluid service_wp_banner banner_main">
            <div class="container" style={{margin:"auto"}}>
                <div class="row" style={{margin:"auto"}}>
                    <div class="col-md-6" style={{margin:"auto"}}>
                        <ScrollAnimation animateIn="fadeInLeft" delay="100"><h1 class="banner_heading_cnt text-left">Best Web development
Company for your 
Big Ideas</h1></ScrollAnimation>
<ScrollAnimation animateIn="fadeInLeft" delay="300"><p class="banner_sub_head_cnt">
</p></ScrollAnimation>
                    </div>
                    <div class="col-md-6 text-center">
                        <ScrollAnimation animateIn="fadeIn" delay="150" duration="1.5"><img class="img-fluid " id="img_ui"  style={{width:"80%"}} src={ser_web_main}/></ScrollAnimation>
                    </div>
                </div>
                
            </div>
        </div>*/}
        <div style={{position:"relative"}} class="container-fluid">
    	<ScrollAnimation animateIn="fadeIn" delay="200" duration="1.5"><div class="container ser_web_cont_1">
    		<div class="row">
    				<div class="col-md-6" style={{margin:"auto"}}>
    					<img class="img-fluid" src={ser_web_img_1}/>
    				</div>
    				<div class="col-md-6" style={{margin:"auto"}}>
    					<div class="ser_web_abt_cnt">
    						<h1 class="page_main_head">We bring Amazing digital experience for your business</h1>
    						<p class="para_cnt">Your Quest for finding the best web development company ends here!!!. Scope Tech, best web Development Company on Saudi Arabia builds Tailor made web applications based on the customer needs, market trends and especially that suits your budget. </p>
    						<p class="para_cnt">Scope Tech is a trusted web design and web Development Company offers wide range of services to National and International clients.</p>
    					</div>
    					
    				</div>
    			</div>
    			
    	</div></ScrollAnimation>
    	<img class="img-fluid img_circle_1" src={ser_circle_1} />
    	<div class="container-fluid ser_web_cont_2">
    		<div class="ser_web_tab_main_over">
    			<p className="para_cnt text-center">Scope Tech one of the best web development services that turn your ideas into digital experience. We have a qualified team of professional developers who builds growth driven applications.
</p>	
    		</div>
    			
    	</div>
    	<div class="container ser_web_cont_3">
    		<div class="ser_web_tab_main_set">
    			<Tab.Container id="left-tabs-example" defaultActiveKey="E_comm">
				  <Row>
				    <Col sm={4} className="ser_web_tab_left">
				      <Nav variant="pills" className="flex-column">
				        <Nav.Item>
				          <Nav.Link class="ser_web_left_link_1" eventKey="E_comm">E-Commerce Development</Nav.Link>
				        </Nav.Item>
				        <Nav.Item>
				          <Nav.Link eventKey="React">React JS Development</Nav.Link>
				        </Nav.Item>
				        <Nav.Item>
				          <Nav.Link eventKey="Full_stack">Full Stack Development</Nav.Link>
				        </Nav.Item>
				        <Nav.Item>
				          <Nav.Link eventKey="Node_js">Node JS Development</Nav.Link>
				        </Nav.Item>
				      </Nav>
				    </Col>
				    <Col sm={8} className="ser_web_tab_right">
				      <Tab.Content>
				        <Tab.Pane eventKey="E_comm">
				          <h1 class="page_main_head">E-Commerce Development</h1>
				          <div class="tab_btm_border"></div>
				          <h6 class="page_sub_main_head" style={{paddingTop:"3%"}}>Convert Your visitors into Customers with Scope Tech ecommerce solutions</h6>
				          <p class="para_cnt">Online Shopping and ecommerce platforms are booming.  Scope Tech understands and develops best ecommerce web designs that make your business successful. Being a best ecommerce web design and development company we create stunning designs, user friendly and easy to manage websites </p>
				          <p class="para_cnt">Our ecommerce web development solutions are </p>
				          <ul class="list_style_main">
				          	<li><label>Result based Marketing</label></li>
				          	<li><label>Scalable</label></li>
				          	<li><label>Integration</label></li>
				          	<li><label>Content management system</label></li>
				          	<li><label>Instant support</label></li>
				          </ul>
				          <h6 class="page_sub_main_head" style={{paddingTop:"3%"}}>Our Features</h6>
				          <ul class="list_style_main">
				          	<li><label>Adding Multiple products</label></li>
				          	<li><label>Product review management</label></li>
				          	<li><label>Google analytics integration</label></li>
				          	<li><label>Order notification</label></li>
				          	<li><label>Inventory management</label></li>
				          	<li><label>Captcha functionality</label></li>
				          	<li><label>Most viewed products</label></li>
				          	<li><label>Order status tracking</label></li>
				          </ul>
				        </Tab.Pane>
				        <Tab.Pane eventKey="React">
				          <h1 class="page_sub_main_head">React JS Development</h1>
				          <div class="tab_btm_border"></div>
				          <p class="para_cnt">React is an open source java script library. React is used in this recent days for front end development to develop modern applications. It is the leading front end java script development and it is used by the leading companies lie facebook, instagram, AWS, Netflix, airbnb and more </p>
				          <p class="para_cnt">We have the best react js developers who built applications that can handle large amount of UI effortlessly</p>
				          <h6 class="page_sub_main_head">Benefits of having React JS?</h6>
				          <ul class="list_style_main">
				          	<li><label>Rapid development</label></li>
				          	<li><label>Code stability</label></li>
				          	<li><label>Faster loading apps</label></li>
				          	<li><label>Flexible in other platforms</label></li>
				          	<li><label>Better UX and SEO</label></li>
				          </ul>
				          <h6 class="page_sub_main_head" style={{paddingTop:"3%"}}>Why should you choose Scope Tech?</h6>
				          <ul class="list_style_main">
				          	<li><label>Professional developers</label></li>
				          	<li><label>Test driven development</label></li>
				          	<li><label>CDN Hosting</label></li>
				          	<li><label>DevOps tools</label></li>
				          	<li><label>Better SEO</label></li>
				          	
				          </ul>
				          <h6 class="page_sub_main_head" style={{paddingTop:"3%"}}>Our Services</h6>
				          <ul class="list_style_main">
				          	<li><label>Web application development</label></li>
				          	<li><label>Mobile application development</label></li>
				          	<li><label>Customized development</label></li>
				          	<li><label>Migration</label></li>
				          	<li><label>Maintenance</label></li>
				          	
				          </ul>
				        </Tab.Pane>
				        <Tab.Pane eventKey="Node_js">
				          <h1 className="page_sub_main_head">Node JS Development</h1>
				          <div class="tab_btm_border"></div>
				          <h6 class="page_sub_main_head" style={{paddingTop:"3%"}}>Node JS  Development Services for real time web applications </h6>
				          <p class="para_cnt">Node JS is suitable for the network applications which is to be fast, scalable, and requires push notifications. We can develop lightning applications by its architecture.  It seamlessly connect back end and front end teams for better user experience. With Node JS we can create real time simple chat apps to complex event or news apps </p>
				          <p class="para_cnt">Have a real time product idea? Our best Node JS developers will offer our clients with regular support and maintenance for the smooth functioning of the apps </p>
				          <p class="para_cnt">Want to check which framework is suitable for your business. Our team will help you to choose the best architecture and API to transform your business in to digital transformation</p>
				          <ul class="list_style_main">
				          	<li><label>On-time delivery</label></li>
				          	<li><label>NDA terms for privacy </label></li>
				          	<li><label>Save 60% development cost with Node JS</label></li>
				          	<li><label>Low level API </label></li>
				          	<li><label>End to end node JS development</label></li>
				          </ul>
				          <h6 class="page_sub_main_head" style={{paddingTop:"3%"}}>Benefits of having Node JS </h6>
				          <ul class="list_style_main">
				          	<li><label>High speed and perfomance</label></li>
				          	<li><label>Security and scalability</label></li>
				          	<li><label>Well designed </label></li>
				          	
				          </ul>
				          <p class="para_cnt">Our Node JS app development company in Saudi Arabia provides feature rich responsive app with customization, function rich plug-ins and easy interface. Scope Tech one of the best node JS development company in  Saudi Arabia is  offering end to end node JS  development i.e from prototyping  to deployment</p>
				        </Tab.Pane>
				        <Tab.Pane eventKey="Full_stack">
				          <h1 class="page_sub_main_head">Full Stack Development</h1>
				          <div class="tab_btm_border"></div>
				          
				          
				          <p class="para_cnt">Scope Tech has well experience in web development services across wide range of platforms from prototyping to back-end services. We are the leading and best web development company in Saudi Arabia. Each business needs to establish a quicker tone for development, and with our full-stack development services, you can accomplish that growth. Our full-stack designers have the broad knowledge and experience to develop undeniable applications for your business.</p>
				          <h6 class="page_sub_main_head" style={{paddingTop:"3%"}}>Avail Full stack development services from Scope Tech. Here’s why?</h6>
				          <ul class="list_style_main">
				          	<li><label>Agile methodology</label></li>
				          	<li><label>Top notch quality</label></li>
				          	<li><label>Prompt project delivery</label></li>
				          	<li><label>Customized solutions </label></li>
				          	<li><label>Support and maintenance</label></li>
				          	<li><label>Customized solutions </label></li>
				          	<li><label>100% satisfaction</label></li>
				          </ul>
				          <h6 class="page_sub_main_head" style={{paddingTop:"3%"}}>How can your business benefitted by choosing full stack development? </h6>
				          <ul class="list_style_main">
				          	<li><label>Enhanced productivity</label></li>
				          	<li><label>Secure</label></li>
				          	<li><label>Highly scalable</label></li>
				          	<li><label>Accelerated Process</label></li>
				          	<li><label>Affordable cost</label></li>
				          	
				          </ul>
				          
				        </Tab.Pane>
				      </Tab.Content>
				    </Col>
				  </Row>
				</Tab.Container>
    		</div>
    			
    	</div>
    	</div>
    	<Lets/>
    	<Footer/>  
    </div>    
  );
}
}

export default CP920;
