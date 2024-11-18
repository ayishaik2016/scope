    import MetaTags from 'react-meta-tags';
import React,{ Component,setState } from 'react';

import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from './nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import cont_1_img_1 from '../img/food/et_sv_1.png';
import cont_1_img_2 from '../img/food/et_sv_2.png';
import cont_2_img_1 from '../img/food/c_2_i_1.png';

import cont_2_img_2 from '../img/food/c_2_i_2.png';
import cont_2_img_3 from '../img/food/c_2_i_3.png';
import cont_3_img_1 from '../img/food/c_3_i_1.png';
import cont_3_img_2 from '../img/food/c_3_i_2.png';

import img_round2 from '../img/food/img_round2.png';
import img_round1 from '../img/food/img_round1.png';

import seo_type_5 from '../img/service/seo_type_5.png';
import seo_type_4 from '../img/service/seo_type_4.png';
import seo_type_3 from '../img/service/seo_type_3.png';
import seo_type_2 from '../img/service/seo_type_2.png';
import seo_type_1 from '../img/service/seo_type_1.png';


import mv_img1 from '../img/food/et_mv1.png';
import mv_img2 from '../img/food/et_mv2.png';
import mv_img3 from '../img/food/mv_img3.png';
import mv_img4 from '../img/food/mv_img4.png';
import mv_img5 from '../img/food/mv_img5.png';
import mv_img6 from '../img/food/mv_img6.png';
import mv_img7 from '../img/food/mv_img7.png';
import wd_1 from '../img/food/wd_n1.png';
import wd_2 from '../img/food/wd_n2.png';
import wd_3 from '../img/food/wd_n3.png';
import fp_cp_1 from '../img/food/et_v1.png';
import fp_cp_2 from '../img/food/et_v2.png';
import fp_cp_3 from '../img/food/fp_cp_3.png';
import fp_cp_4 from '../img/food/fp_cp_4.png';
import fp_cp_5 from '../img/food/fp_cp_5.png';
import fp_cp_6 from '../img/food/fp_cp_6.png';
import fp_cp_7 from '../img/food/fp_cp_7.png';

import Lets from './lets.js';
import Footer from './footer.js';

import fp_da_1 from '../img/food/ed_img1.png';
import fp_da_2 from '../img/food/ed_img2.png';
import fp_da_3 from '../img/food/fp_da_3.png';
import fp_da_4 from '../img/food/fp_da_4.png';
import fp_da_5 from '../img/food/fp_da_5.png';
import fp_da_6 from '../img/food/fp_da_6.png';
import fp_da_7 from '../img/food/fp_da_7.png';
import ScrollAnimation from 'react-animate-on-scroll';
class Food_Purby extends Component{
render(){
  return (
    <div className="App">



<MetaTags>
            <title>Best Food delivery app development company for mobile & website |Scope Tech</title>
            <meta id="meta-description" name="description" content="Attract your customers to order directly from your food ordering and delivery app in a hassle freeway. As best Ondemand Food Delivery App Development Company we develop single restaurant or multi restaurant ordering apps. +966 599 226 961 info@scopetech.sa" />
            <meta id="" property="keywords" content="on demand food delivery app development,  food delivery app development company" />
            
</MetaTags>
    


    	<Nav1/>
    	<div class="container-fluid food_banner">
    		<div class="container food_banner_sub">
    			<ScrollAnimation animateIn="fadeInLeft" delay="100" duration="1.5">    <h1 class="banner_head banner_head_cnt"><label>Eatiok</label></h1></ScrollAnimation>
    			<ScrollAnimation animateIn="fadeInLeft" delay="500" duration="1.5"><p class="food_banner_cnt banner_sub_head_cnt">The Best Food Ordering and Delivery App for Mobile and Website</p></ScrollAnimation>
    		</div>
    	</div>
    	<div class="container-fluid food_main_tab_set">
    		
			    <div class="food_mob_app_main">
					<Tabs defaultActiveKey="web_design" id="uncontrolled-tab-example">
					  <Tab eventKey="web_design" title="Website Design">
					    <div class="container-fluid wd_cont_1">
					    	<div class="sin_ven_cont_1_sub">
					    		<div class="row">
					    			<div class="col-md-5"  style={{margin:"auto"}}>
					    				<h4 class="text-left">FRONTEND DESIGN</h4>
					    				<h3 class="text-left banner_heading_cnt">Feature Loaded Web Application</h3>
					    				<p class="para_cnt">Manage and fire up your restaurant business with our feature loaded eatiok web application. Scope Tech provides complete customer web application features for easy use of the customers. Customer features are listed below </p>
					    				<ul class="list_style_main">
					    					<li><label>Customer login</label></li>
					    					<li><label>Search nearby restaurants</label></li>
					    					<li><label>Filter option</label></li>
					    					<li><label>Scheduled delivery</label></li>
					    					<li><label>Payment methods</label></li>
					    					<li><label>Notification</label></li>
					    					<li><label>Favorites</label></li>
					    					<li><label>Reviews</label></li>
					    				</ul>
					    				{/*<div class="text-left">
							              <button class="food-btn">
							                GET A QUOTE
							              </button>
							            </div>*/}
					    			</div>
					    			<div class="col-md-7" style={{padding:"5%"}}>
					    				<img class="img-fluid" style={{width:"100%"}} src={wd_1}/>
					    				
					    			</div>
					    		</div>
					    		
					    	</div>
					    </div>
					    <ScrollAnimation animateIn="fadeIn" delay="100" duration="1.5"><div class="container-fluid wd_cont_2">
					    	<div class="sin_ven_cont_2_sub">
					    		<div class="row">
					    			<div class="col-md-7" style={{padding:"5%"}}>
					    			<img class="img-fluid" style={{width:"100%"}} src={wd_2}/>
					    				
					    			
					    				
					    				
					    				
					    			</div>
					    			<div class="col-md-5" style={{margin:"auto"}}>
					    				
					    				<h3 class="text-left banner_heading_cnt">Increase your Revenue with our Eatiok App</h3>
					    				<p class="para_cnt">We are offering customer driven approach to the businesses, and we take great pleasure while we finding that our web application has providing a significant growth in your business. Our applications include forefront technologies that guarantee the ideal presentation of the web applications.  We hold outstanding skill in creating cross-platform applications that will function admirably on all platforms, regardless of the operating systems. 
</p>
					    				<p class="para_cnt">Our organization Scope Tech prides in growing superior and profoundly easy to use food ordering web applications.</p>
					    				{/*<div class="text-left">
							              <button class="food-btn">
							                GET A QUOTE
							              </button>
							            </div>*/}
					    			</div>
					    		</div>
					    		
					    	</div>
					    </div></ScrollAnimation>
					    <ScrollAnimation animateIn="fadeIn" delay="100" duration="1.5"><div class="container-fluid sin_ven_cont_3">
					    	<div class="sin_ven_cont_3_sub">
					    		<div class="row">
					    			<div class="col-md-4"  style={{margin:"auto"}}>
					    				<h4 class="text-left "></h4>
					    				<h1 class="text-left banner_heading_cnt" style={{fontWeight:"700"}}>Powerful Back End Development</h1>
					    				<p class="para_cnt">An incredible Back-end web application has all features which are needed to improve your food menu and order request through web applications. You can set various offers and send them by means of Push Notifications to your customer's web application.</p>
					    				<h1 class="text-left banner_heading_cnt" style={{fontWeight:"700"}}>Features</h1>
					    				<ul class="list_style_main">
					    					<li><label>Control Panel</label></li>
					    					<li><label>Access Control</label></li>
					    					<li><label>Category Management</label></li>
					    					<li><label>Vendor management</label></li>
					    					<li><label>Content Management</label></li>
					    					<li><label>Customer Management</label></li>
					    					
					    				</ul>
					    				{/*<div class="text-left">
							              <button class="food-btn">
							                GET A QUOTE
							              </button>
							            </div>*/}
					    			</div>
					    			<div class="col-md-8" style={{padding:"5% 0"}}>
					    				<img class="img-fluid" style={{width:"100%"}} src={wd_3}/>
					    				
					    			</div>
					    		</div>
					    		
					    	</div>
					    </div></ScrollAnimation>
					      
					  </Tab>
					  <Tab eventKey="single_vendor" title="Single Vendor">
					    <div class="container-fluid sin_ven_cont_1">
					    	<div class="sin_ven_cont_1_sub">
					    		<div class="row">
					    			<div class="col-md-5" style={{margin:"auto"}}>
					    				{/*<h4 class="text-left">Single Vendor</h4>*/}
					    				<h3 class="text-left">Best Restaurant app development </h3>
					    				<p class="para_cnt">Get your Own Branded Restaurant App from one of the best mobile app development company. Attract your customers to order directly from your food ordering app in a hassle freeway. 
</p>
					    				<p class="para_cnt">Consequently, as best food ordering app Development Company, we innovate the most responsive and apt solutions to what the clients expect. This happens only because of our team continuous rapport between the team and the clients until perfection.</p>
					    				<p class="para_cnt">We Built Food Ordering App for Restaurants of Large and Small Scale Businesses</p>
					    				<ul class="list_style_main">
					    					<li class="para_cnt"><label>Meat</label></li>
					    					<li class="para_cnt"><label>Icecream</label></li>
					    					<li class="para_cnt"><label>Bakery</label></li>
					    					<li class="para_cnt"><label>Pizza</label></li>
					    					<li class="para_cnt"><label>Liquour</label></li>
					    					

					    				</ul>
					    				{/*<div class="text-left">
							              <button class="food-btn">
							                GET A QUOTE
							              </button>
							            </div>*/}
					    			</div>
					    			<div class="col-md-7">
					    				<div class="row">
					    					<div class="col-md-6">
					    						<img class="img-fluid" src={cont_1_img_1}/>
					    						<img class="img-fluid" src={img_round2}/>
					    					</div>
					    					<div class="col-md-6">
					    						<img class="img-fluid" src={img_round1}/>
					    						<img class="img-fluid" src={cont_1_img_2}/>
					    					</div>
					    				</div>
					    			</div>
					    		</div>
					    		
					    	</div>
					    </div>
					    <ScrollAnimation animateIn="fadeIn" delay="100" duration="1.5"><div class="container-fluid sin_ven_cont_2">
					    	<div class="sin_ven_cont_2_sub">
					    		<div class="row">
					    			<div class="col-md-4">
					    				<img class="img-fluid" src={cont_2_img_1}/>
					    			</div>
					    			<div class="col-md-4">
					    				<img class="img-fluid" src={cont_2_img_2}/>
					    			</div>
					    			<div class="col-md-4">
					    				<img class="img-fluid" src={cont_2_img_3}/>
					    			</div>
					    			
					    		</div>
					    		
					    	</div>
					    </div></ScrollAnimation>
					    <ScrollAnimation animateIn="fadeIn" delay="100" duration="1.5"><div class="container-fluid sin_ven_cont_3">
					    	<div class="sin_ven_cont_3_sub">
					    		<div class="row">
					    			<div class="col-md-5" style={{margin:"auto 0"}}>
					    				<h2 class="text-left page_main_head" style={{margin:"auto 0"}}>Benefits of Food ordering app for restaurants
</h2>
					    				<div class="border_btm_food"></div>
					    				<br/>
					    					<p class="para_bullet"><label>Customers can take their own time to make a decision when they order through an app</label></p>
					    					<p class="para_bullet"><label>Restaurants can handle their orders accurately and can increase their productivity</label></p>
					    					<p class="para_bullet"><label>Apps can help restaurant to retain customers and do more repeat business</label></p>
					    					<p class="para_bullet"><label>It is easier to check the cash flow in the restaurant rather than registers and ordering notebooks</label></p>
					    					<p class="para_bullet"><label>Improved efficiency and can lower the running costs</label></p>
					    					

					    				
					    				
					    			</div>
					    			<div class="col-md-7 row">
					    				<div class="col-md-6">
					    					<img class="img-fluid" src={cont_3_img_1}/>
					    				</div>
					    				<div class="col-md-6">
					    					<img class="img-fluid" src={cont_3_img_2}/>
					    				</div>
					    				
					    			</div>
					    			
					    		</div>
					    		
					    	</div>
					    </div></ScrollAnimation>
					    <div class="container smm_cont_2">
        <h3 class="page_main_head">Get the best food app for your restaurant. Scope Tech is here for you
</h3>
    		<div class="row">
    			<div class="col-md-7">
    				
                    <div class="timeline">
                      <div class="timeline-item_1_fsv">
                        <ScrollAnimation animateIn="fadeInRight" delay="100" duration="1.5"><h4>Customizing Menu</h4></ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInRight" delay="100" duration="1.5"><p>Vendor can add or edit items along with description and picture</p></ScrollAnimation>
                      </div>
                      <div class="timeline-item_2_fsv">
                        <ScrollAnimation animateIn="fadeInRight" delay="100" duration="1.5"><h4>Order Management</h4></ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInRight" delay="100" duration="1.5"><p>Manage the orders and make updates on their deliveries effectively</p></ScrollAnimation>
                      </div>
                      <div class="timeline-item_3_fsv">
                        <ScrollAnimation animateIn="fadeInRight" delay="100" duration="1.5"><h4>Manage Payments</h4></ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInRight" delay="100" duration="1.5"><p>Multiple payment options for the customers like cash-on-delivery, or cards, or through payment gateways.</p></ScrollAnimation>
                      </div>
                      <div class="timeline-item_4_fsv">
                        <ScrollAnimation animateIn="fadeInRight" delay="100" duration="1.5"><h4>Manage ingredients type</h4></ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInRight" delay="100" duration="1.5"><p style={{paddingBottom:"5%"}}>Vendors can manage their Ingredient type and list easily from the backend</p></ScrollAnimation>
                      </div>
                      <div class="timeline-item_5_fsv">
                        <ScrollAnimation animateIn="fadeInRight" delay="100" duration="1.5"><h4>Manage delivery Staff</h4></ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInRight" delay="100" duration="1.5"><p>Keep track of delivery status and assign tasks to delivery staff from anywhere</p></ScrollAnimation>
                      </div>
                      <div class="timeline-item_6_fsv">
                        <ScrollAnimation animateIn="fadeInRight" delay="100" duration="1.5"><h4>Manage Reviews</h4></ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInRight" delay="100" duration="1.5"><p>Reviews or feedback from the customers can be easily managed and can take any disciplinary action  So, no more waiting. It is the time to select Scope Tech, one of the best food ordering and delivery app development company in Saudi Arabia for your app creation and drive your restaurant business to a new level.</p></ScrollAnimation>
                      </div>
                      
                    </div>
    			</div>
    			<div class="col-md-5 ed_v_row_right_fet">
    				
    				
    			</div>
    		</div>

    		
    	</div>
    	
					      
					  </Tab>
					  <Tab eventKey="mulit_vendor" title="Mulit Vendor">
					    <div class="container-fluid sin_ven_cont_1">
					    	<div class="sin_ven_cont_1_sub">
					    		<div class="row">
					    			<div class="col-md-5">
					    				{/*<h4 class="text-left">Multi Vendor</h4>*/}
					    				<h3 class="text-left page_main_head">On-Demand Food Delivery App Development Company</h3>
					    				<p class="para_cnt">Multi Restaurant web portal like Doordash, zomato, ubereats, swiggy</p>
					    				<p class="para_cnt">Want to Launch your own on demand food delivery app. Then Scope Tech food delivery app Development Company is the best choice. Our food ordering and delivery app will be the best platform to connect with your customers </p>
					    				<p class="para_cnt">Our motto is stand out of the crowd of On-Demand Food Delivery App Development Company and we make it happen through our expert team members who can develop a feature loaded and user friendly app. With this feature user can order food in few simple taps</p>
					    				<ul class="list_style_main">
					    					<li class="para_cnt"><label>Our app features</label></li>
					    					<li class="para_cnt"><label>Fast and easy access</label></li>
					    					<li class="para_cnt"><label>Responsive user interface</label></li>
					    					<li class="para_cnt"><label>Multiple payment options</label></li>
					    					
					    					

					    				</ul>
					    				
					    				{/*<div class="text-left">
							              <button class="food-btn">
							                GET A QUOTE
							              </button>
							            </div>*/}
					    			</div>
					    			<div class="col-md-7">
					    				<div class="row">
					    					<div class="col-md-6">
					    						<img class="img-fluid" src={mv_img1}/>
					    						<img class="img-fluid" src={img_round2}/>
					    					</div>
					    					<div class="col-md-6">
					    						<img class="img-fluid" src={img_round1}/>
					    						<img class="img-fluid" src={mv_img2}/>
					    					</div>
					    				</div>
					    			</div>
					    		</div>
					    		
					    	</div>
					    </div>
					    <ScrollAnimation animateIn="fadeIn" delay="100" duration="1.5"><div class="container-fluid multi_ven_cont_2">
					    	<div class="sin_ven_cont_2_sub">
					    		<div class="row">
					    			<div class="col-md-4">
					    				<img class="img-fluid" src={mv_img3}/>
					    			</div>
					    			<div class="col-md-4">
					    				<img class="img-fluid" src={mv_img4}/>
					    			</div>
					    			<div class="col-md-4">
					    				<img class="img-fluid" src={mv_img5}/>
					    			</div>
					    			
					    		</div>
					    		
					    	</div>
					    </div></ScrollAnimation>
					    <ScrollAnimation animateIn="fadeIn" delay="100" duration="1.5"><div class="container-fluid sin_ven_cont_3">
					    	<div class="sin_ven_cont_3_sub">
					    		<div class="row">
					    			<div class="col-md-5" style={{margin:"auto 0"}}>
					    				<h2 class="text-left page_main_head" style={{margin:"auto 0"}}>Benefits of On-Demand Food Delivery App</h2>
					    				<div class="border_btm_food"></div>
					    				<ul class="list_style_main">
					    					<li class="para_cnt"><label>Cost effective</label></li>
					    					<li class="para_cnt"><label>Customized and branded solution</label></li>
					    					<li class="para_cnt"><label>Round the clock support</label></li>
					    					<li class="para_cnt"><label>Global solution</label></li>
					    					<li class="para_cnt"><label>High quality apps</label></li>
					    					
					    					

					    				</ul>
					    				
					    			</div>
					    			<div class="col-md-7 row">
					    				<div class="col-md-6">
					    					<img class="img-fluid" src={mv_img6}/>
					    				</div>
					    				<div class="col-md-6">
					    					<img class="img-fluid" src={mv_img7}/>
					    				</div>
					    				
					    			</div>
					    			
					    		</div>
					    		
					    	</div>
					    </div></ScrollAnimation>
					    
					  </Tab>
					  <Tab eventKey="driver_app" title="Driver App">
					    <div class="container-fluid fp_da_cont_1">
					    	<div class="sin_ven_cont_1_sub">
					    		<div class="row">
					    			<div class="col-md-5" style={{margin:"auto"}}>
					    				{/*<h4 class="text-left">Driver App</h4>*/}
					    				<h3 class="text-left page_main_head">Rich and Customizable delivery app to increase order delivery</h3>
					    				<p class="para_cnt">Our apps are exclusively designed in a way that can be easily access by delivery staffs.This user friendly option enables delivery staff to successfully manage orderscompleted or cancelled trips, profile update and more. The location map also comes along with this app for express delivery</p>
					    				
					    				{/*<div class="text-left">
							              <button class="food-btn">
							                GET A QUOTE
							              </button>
							            </div>*/}
					    			</div>
					    			<div class="col-md-7">
					    				<div class="row">
					    					<div class="col-md-6">
					    						<img class="img-fluid" src={fp_da_1}/>
					    						<img class="img-fluid" src={img_round2}/>
					    					</div>
					    					<div class="col-md-6">
					    						<img class="img-fluid" src={img_round1}/>
					    						<img class="img-fluid" src={fp_da_2}/>
					    					</div>
					    				</div>
					    			</div>
					    		</div>
					    		
					    	</div>
					    </div>
					    <ScrollAnimation animateIn="fadeIn" delay="100" duration="1.5"><div class="container-fluid fp_da_cont_2">
					    	<div class="sin_ven_cont_2_sub">
					    		<div class="row">
					    			<div class="col-md-4">
					    				<img class="img-fluid" src={fp_da_3}/>
					    			</div>
					    			<div class="col-md-4">
					    				<img class="img-fluid" src={fp_da_4}/>
					    			</div>
					    			<div class="col-md-4">
					    				<img class="img-fluid" src={fp_da_5}/>
					    			</div>
					    			
					    		</div>
					    		
					    	</div>
					    </div></ScrollAnimation>
					    <ScrollAnimation animateIn="fadeIn" delay="100" duration="1.5"><div class="container-fluid sin_ven_cont_3">
					    	<div class="sin_ven_cont_3_sub">
					    		<div class="row">
					    			<div class="col-md-5" style={{margin:"auto 0"}}>
					    				{/*<h2 class="text-left page_main_head" style={{margin:"auto 0"}}>Mobile App<br/>Development</h2>
					    				<div class="border_btm_food"></div>
					    				<p class="para_cnt" style={{margin:"auto 0"}}>Lorem Ipsum is simply dummy text of the printing and typesettin Ipsum is simply dummy text of the printing and typesetting indu</p>*/}
					    			</div>
					    			<div class="col-md-12 row">
					    				<div class="col-md-6">
					    					<img class="img-fluid" src={fp_da_6}/>
					    				</div>
					    				<div class="col-md-6">
					    					<img class="img-fluid" src={fp_da_7}/>
					    				</div>
					    				
					    			</div>
					    			
					    		</div>
					    		
					    	</div>
					    </div></ScrollAnimation>

    	<ScrollAnimation animateIn="fadeIn" delay="100" duration="1.5"><div class="container seo_cont_3">
    		<h1 class="text-6 page_main_head">Features</h1>
    		<div class="row text-center justify-content-center" style={{paddingTop:"2%"}}>
    			<div class="col-4 col-md-2">
    				<img class="img-fluid" src={seo_type_1} />
    				<h4>Can Manage Orders</h4>
    			</div>
    			<div class="col-4 col-md-2">
    				<img class="img-fluid" src={seo_type_2} />
    				<h4>Realtime
    				location tracking</h4>
    			</div>
    			<div class="col-4 col-md-2">
    				<img class="img-fluid" src={seo_type_3} />
    				<h4>Payment History</h4>
    			</div>
    			<div class="col-4 col-md-2">
    				<img class="img-fluid" src={seo_type_4} />
    				<h4>Order History</h4>
    			</div>
    			<div class="col-4 col-md-2">
    				<img class="img-fluid" src={seo_type_5} />
    				<h4>Profile Management</h4>
    			</div>
    			<div class="col-4 col-md-2">
    				<img class="img-fluid" src={seo_type_5} />
    				<h4>Delivery status</h4>
    			</div>

    		</div>

    		
    	</div></ScrollAnimation>
    	
					    
					  </Tab>
					  <Tab eventKey="vendor_app" title="Vendor App">
					    <div class="container-fluid va_cont_1">
					    	<div class="sin_ven_cont_1_sub">
					    		<div class="row">
					    			<div class="col-md-5" style={{margin:"auto"}}>
					    				{/*<h4 class="text-left">VENDOR APP</h4>*/}
					    				<h3 class="text-left page_main_head">Build customized food ordering app with Scope Tech</h3>
					    				<p class="para_cnt">Let see how the system works. Customer has placed an order from the food ordering and delivery app through mobile or web. The restaurant receives notification from the app and directs to the concern restaurant within few seconds. In the meanwhile the customer will receives acknowledgement and the expected time of delivery. </p>
					    				<p class="para_cnt">The restaurant owner will prepare the order and take necessary steps until it reaches the customer</p>
					    				{/*<div class="text-left">
							              <button class="food-btn">
							                GET A QUOTE
							              </button>
							            </div>*/}
					    			</div>
					    			<div class="col-md-7">
					    				<div class="row">
					    					<div class="col-md-6">
					    						<img class="img-fluid" src={fp_cp_1}/>
					    						<img class="img-fluid" src={img_round2}/>
					    					</div>
					    					<div class="col-md-6">
					    						<img class="img-fluid" src={img_round1}/>
					    						<img class="img-fluid" src={fp_cp_2}/>
					    					</div>
					    				</div>
					    			</div>
					    		</div>
					    	</div>
					    </div>
					    <ScrollAnimation animateIn="fadeIn" delay="100" duration="1.5"><div class="container-fluid va_cont_2">
					    	<div class="sin_ven_cont_2_sub">
					    		<div class="row">
					    			<div class="col-md-4">
					    				<img class="img-fluid" src={fp_cp_3}/>
					    			</div>
					    			<div class="col-md-4">
					    				<img class="img-fluid" src={fp_cp_4}/>
					    			</div>
					    			<div class="col-md-4">
					    				<img class="img-fluid" src={fp_cp_5}/>
					    			</div>
					    			
					    		</div>
					    	</div>
					    </div></ScrollAnimation>
					    <ScrollAnimation animateIn="fadeIn" delay="100" duration="1.5"><div class="container-fluid sin_ven_cont_3">
					    	<div class="sin_ven_cont_3_sub">
					    		<div class="row">
					    			<div class="col-md-5" style={{margin:"auto 0"}}>
					    				{/*<h2 class="text-left" style={{margin:"auto 0"}}>Mobile App<br/>Development</h2>
					    				<div class="border_btm_food"></div>*/}
					    				<p class="para_cnt" style={{margin:"auto 0"}}>Once the food is ready the restaurant owner will assign the delivery staff with the location details.  The delivery staff receives notification and updates the status to the customers. </p>
					    				<p class="para_cnt" style={{margin:"auto 0"}}>The delivery staff will deliver the food and get the e-signature from the customer and update the same to the restaurant</p>
					    			</div>
					    			<div class="col-md-7 row">
					    				<div class="col-md-6">
					    					<img class="img-fluid" src={fp_cp_6}/>
					    				</div>
					    				<div class="col-md-6">
					    					<img class="img-fluid" src={fp_cp_7}/>
					    				</div>
					    				
					    			</div>
					    			
					    		</div>
					    	</div>
					    </div></ScrollAnimation>
					    
					  </Tab>
					</Tabs>    	
			    </div>
			  
    	</div>
<Lets/>
<Footer/>
    	
    </div>    
  );
}
}

export default Food_Purby;
