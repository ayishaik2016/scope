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


import type1 from '../../img/service/wp_type_5.png';
import type2 from '../../img/service/wp_type_4.png';
import type3 from '../../img/service/wp_type_3.png';
import type4 from '../../img/service/wp_type_2.png';
import type5 from '../../img/service/wp_type_1.png';

import ser_web_main from '../../img/service/wp_banner_img_1.png';

import Lets from '../lets.js';
import Footer from '../footer.js';

import ser_web_img_1 from '../../img/service/wp_img_1.png';
import ser_circle_1 from '../../img/service/ser_circle_1.png';
import wp_tab_1 from '../../img/service/wp_tab_1.png';
import wp_tab_2 from '../../img/service/wp_tab_2.png';
import wp_tab_3 from '../../img/service/wp_tab_3.png';
import wp_tab_4 from '../../img/service/wp_tab_4.png';
import wp_tab_5 from '../../img/service/wp_tab_5.png';
import wp_tab_6 from '../../img/service/wp_tab_6.png';
import wp_tab_7 from '../../img/service/wp_tab_7.png';
import cp9205 from '../../img/yealink/cp9205.png';

// import test6 from '../../img/yealink/test6.png';
// import test7 from '../../img/yealink/test7.png';




import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom';



import { BsCheckCircle } from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';

import ScrollAnimation from 'react-animate-on-scroll';

class Wp extends Component{
render(){
  return (
    <div className="App">



<MetaTags>
            <title>Scope Tech</title>
            <meta id="meta-description" name="description" content="Leading web portal development company. We offer technologically-driven solutions. Web portal design& development services. Our web portal developers have high-level expertise in B2B & B2C portal development.Wide range ofservices, Reliablesolution, 24/7support" />
            <meta id="" property="keywords" content="web portal development, Web portal design" />
            
</MetaTags>
    


    	<Nav1/>
        <div class="container-fluid ban_main_cont service_w_p_banner" style={{height:"70vh"}}>
            <div class="row mar_top_30" style={{width:"100%", paddingLeft:"15%",paddingRight:"15%"}}>
                <div class="col-md-6 text-left" style={{margin:"auto"}}>
                    <ScrollAnimation animateIn="fadeInLeft" delay="100"><h1 class="banner_heading_cnt text-left" style={{color:"#fff"}}>Best Web Portal 
Development Company</h1></ScrollAnimation>
<ScrollAnimation animateIn="fadeInLeft" delay="300"><p class="banner_sub_head_cnt">
</p></ScrollAnimation>
                </div>
                <div class="col-md-6 text-center" style={{margin:"auto"}}>
                    <img class="img-fluid " id="img_ui" style={{height:"auto",width:"100%",margin:"auto"}}  src={ser_web_main}/>
                </div>
            </div>
        </div>

       {/*<div class="container-fluid service_w_p_banner banner_main">
            <div class="container" style={{margin:"auto"}}>
                <div class="row" style={{margin:"auto"}}>
                    <div class="col-md-6" style={{margin:"auto"}}>
                        <ScrollAnimation animateIn="fadeInLeft" delay="100"><h1 class="banner_heading_cnt text-left">Best Web Portal 
Development Company</h1></ScrollAnimation>

                    </div>
                    <div class="col-md-6 text-center">
                        <ScrollAnimation animateIn="fadeIn" delay="150" duration="1.5"><img class="img-fluid web_port_img_ban" id="img_ui"   src={ser_web_main}/></ScrollAnimation>
                    </div>
                </div>
                
            </div>
        </div>
        */}
    	<div style={{position:"relative"}} class="container-fluid">
    	<ScrollAnimation animateIn="fadeIn" delay="100" duration="1.5"><div class="container ser_web_cont_1">
    		<div class="row">
    				<div class="col-md-6" style={{margin:"auto"}}>
    					<img class="img-fluid" src={ser_web_img_1}/>
    				</div>
    				<div class="col-md-6" style={{margin:"auto"}}>
    					<div class="ser_web_abt_cnt" style={{margin:"auto"}}>
    						<h1 class="page_main_head">Turn Your Ideas into Fully Functional Web Portal</h1>
    						<p class="para_cnt">As one of the best web portal development company, our efficient team, work closely with our clients, identify their development objectives and provide solutions for online portal implementation. </p>
    						
    					</div>
    					
    				</div>
    			</div>
    			
    	</div></ScrollAnimation>
    	<img class="img-fluid img_circle_1" src={ser_circle_1} />
    	<div class="container-fluid ser_w_p_cont_2">
    		<div class="ser_web_tab_main_over">
    			
    		</div>
    			
    	</div>
    	<div class="container ser_w_p_cont_3">
    		<div class="ser_web_tab_main_set">
    			<Tab.Container id="left-tabs-example" defaultActiveKey="E_comm">
				  <Row>
				    <Col sm={4} className="ser_web_tab_left">
				      <Nav variant="pills" className="flex-column">
				        <Nav.Item>
				          <Nav.Link className="ser_web_left_link_1 wp_tab_1_icon" eventKey="E_comm"><label style={{margin:"auto", paddingLeft:"2%"}}>Job Portal Development</label></Nav.Link>
				        </Nav.Item>
				        <Nav.Item>
				          <Nav.Link className="ser_web_left_link_1 wp_tab_2_icon" eventKey="React"><label style={{margin:"auto", paddingLeft:"2%"}}>Ecommerce Portal
Development</label></Nav.Link>
				        </Nav.Item>
				        <Nav.Item>
				          <Nav.Link className="ser_web_left_link_1 wp_tab_3_icon" eventKey="Full_stack"><label style={{margin:"auto", paddingLeft:"2%"}}>News Portal Development</label></Nav.Link>
				        </Nav.Item>
				        <Nav.Item>
				          <Nav.Link className="ser_web_left_link_1 wp_tab_4_icon" eventKey="Node_js"><label style={{margin:"auto", paddingLeft:"2%"}}>Community Web Portal Development
</label></Nav.Link>
				        </Nav.Item>
				        <Nav.Item>
				          <Nav.Link className="ser_web_left_link_1 wp_tab_5_icon" eventKey="pwp"><label style={{margin:"auto", paddingLeft:"2%"}}>Travel Web Portal Development</label></Nav.Link>
				        </Nav.Item>
				        <Nav.Item>
				          <Nav.Link className="ser_web_left_link_1 wp_tab_6_icon" eventKey="dmpd"><label style={{margin:"auto", paddingLeft:"2%"}}>E-Learning Portal Development</label></Nav.Link>
				        </Nav.Item>

				      </Nav>
				    </Col>
				    <Col sm={8} className="ser_web_tab_right">
				      <Tab.Content>
				        <Tab.Pane eventKey="E_comm">
				          <h1 class="page_sub_main_head">Job Portal Development</h1>
				          <div class="tab_btm_border"></div>
				          <p class="para_cnt">If your business includes Staffing and Internship services, we highly recommend choosing a Job Portal because it is smooth and responsive for dealing with an enormous number of client data base. It is ensured to make your work simpler and adaptable.
</p>
				         
				        </Tab.Pane>
				        <Tab.Pane eventKey="React">
				          <h1 class="page_sub_main_head">Ecommerce Portal
Development</h1>
				          <div class="tab_btm_border"></div>
				          <p class="para_cnt">We help organizations with ecommerce web portal development and have launched more multi-vendor portal, trade portals, bidding platforms, and more custom solutions. We help our clients with enhanced user interaction, secure payment gateways, AR/VR, and AI-controlled online business that drive customers' fulfillment and overall business development.
</p>
				          
				        </Tab.Pane>
				        <Tab.Pane eventKey="Full_stack">
				          <h1 class="page_sub_main_head">News Portal Development</h1>
				          <div class="tab_btm_border"></div>
				          <p class="para_cnt">A news portal helps to share news articles, stories across the internet and reach your targeted customers. It contains press releases, news blogs, and other news related contents. We make adaptable news portals which are easy to use, navigate, and load quickly and effectively safe.
</p>
				          
				        </Tab.Pane>
				        <Tab.Pane eventKey="Node_js">
				          <h1 class="page_sub_main_head">Community Web Portal Development
</h1>
				          <div class="tab_btm_border"></div>
				          <p class="para_cnt">An enterprise web portal can earn profit in an increased traffic. Enterprise web portal encourages the peoples to impart and share information in a successful way and simultaneously educates the public more about the community.
</p>
				          
				        </Tab.Pane>

				        <Tab.Pane eventKey="pwp">
				          <h1 class="page_sub_main_head">Travel Web Portal Development</h1>
				          <div class="tab_btm_border"></div>
				          <p class="para_cnt">Travel portal development has become a popular word for the Travel business pioneers. Our Dynamic travel portal incorporates numerous cutting edge technologies like price, location and vacation planners among many others.
</p>
				          
				        </Tab.Pane>
				        
				        <Tab.Pane eventKey="dmpd">
				          <h1 class="page_sub_main_head">E-Learning Portal Development</h1>
				          <div class="tab_btm_border"></div>
				          <p class="para_cnt">Scope Tech have leading web development team to make an ideal mix of business experience and e-learning to convey the best e-learning portal to our customers. We offer our customers with complete e-learning solutions which is custom-made to business clients.
</p>

				        </Tab.Pane>
				        
				        
				      </Tab.Content>
				    </Col>
				  </Row>
				</Tab.Container>
    		</div>
    			
    	</div>
    	</div>

    	<ScrollAnimation animateIn="fadeIn" delay="100" duration="1.5"><div class="container ser_w_p_cont_2">
    		<h3 class="page_main_head">
    			Why Choose Scope Tech for Web
portal development?
    		</h3>
    		<div class="row text-center justify-content-center">
    			<div class="col-md-2">
    				<div class="main_type_w_p">
    					<div class="main_type_w_p_img_main"><img class="main_type_w_p_img img-fluid" src={type1} /></div>
    					<div class="main_type_w_p_head"><h6>Expertise in web
 portal development</h6></div>
    				</div>

    			</div>
    			<div class="col-md-2">
    				<div class="main_type_mob">
    					<div class="main_type_w_p_img_main"><img class="main_type_w_p_img img-fluid" src={type2} /></div>
    					<div class="main_type_w_p_head"><h6>Wide range of<br/>
 services</h6></div>
    				</div>

    			</div>
    			<div class="col-md-2">
    				<div class="main_type_mob">
    					<div class="main_type_w_p_img_main"><img class="main_type_w_p_img img-fluid" src={type3} /></div>
    					<div class="main_type_w_p_head"><h6>Reliable<br/>
solution</h6></div>
    				</div>

    			</div>
    			<div class="col-md-2">
    				<div class="main_type_mob">
    					<div class="main_type_w_p_img_main"><img class="main_type_w_p_img img-fluid" src={type4} /></div>
    					<div class="main_type_w_p_head"><h6>Tailor made<br/>
 solution</h6></div>
    				</div>

    			</div>
    			<div class="col-md-2">
    				<div class="main_type_mob">
    					<div class="main_type_w_p_img_main"><img class="main_type_w_p_img img-fluid" src={type5} /></div>
    					<div class="main_type_w_p_head"><h6>Round the clock
 support</h6></div>
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

export default Wp;
