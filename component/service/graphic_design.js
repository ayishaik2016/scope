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

import OwlCarousel from '@ntegral/react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import da_type_0 from '../../img/solutions/da_type_0.png';
import da_type_1 from '../../img/new/ser_gd_type1.png';
import da_type_2 from '../../img/new/ser_gd_type2.png';
import da_type_3 from '../../img/new/ser_gd_type3.png';
import da_type_4 from '../../img/new/ser_gd_type4.png';
import da_type_5 from '../../img/new/ser_gd_type5.png';


import Lets from '../lets.js';
import Footer from '../footer.js';


import ser_ui_banner_main from '../../img/service/gd_img_1.png';
import ser_web_img_1 from '../../img/service/ser_web_img_1.png';
import ser_circle_1 from '../../img/service/ser_circle_1.png';
import ser_ui_img_2 from '../../img/service/gd_img_3.png';
import ser_ui_img_1 from '../../img/service/gd_img_2.png';
import ui_ux_type_1 from '../../img/service/ui_ux_type_1.png';
import ui_ux_type_2 from '../../img/service/ui_ux_type_2.png';
import ui_ux_type_3 from '../../img/service/ui_ux_type_3.png';
import ui_ux_type_4 from '../../img/service/ui_ux_type_4.png';
import ui_ux_type_5 from '../../img/service/ui_ux_type_5.png';




import gd_type_1 from'../../img/service/gd_type_4_1.png';
import gd_type_2 from'../../img/service/gd_type_3_1.png';
import gd_type_3 from'../../img/service/gd_type_2_1.png';
import gd_type_4 from'../../img/service/gd_type_1_1.png';

// import test6 from '../../img/yealink/test6.png';
// import test7 from '../../img/yealink/test7.png';

import ScrollAnimation from 'react-animate-on-scroll';


import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom';


import Carousel from 'react-multi-carousel';
import { BsCheckCircle } from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';



class Graphic_design extends Component{
render(){
    const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 
  }
};
  return (
    <div className="App">
    	<Nav1/>




<MetaTags>
            <title>Scope Tech</title>
            <meta id="meta-description" name="description" content="We are the top & best graphic designing company in Riyadh, Saudi Arabia providing world class logo designs, advertising &promotional services. Our best graphic designers craft Website & Graphic designs with a visual impact at a single glance. Let’s talk +966 599 226 961" />
            <meta id="" property="keywords" content="graphic design services, graphic design companies" />
            
</MetaTags>
    

<div class="container-fluid ban_main_cont service_gd_banner" style={{height:"70vh"}}>
            <div class="row mar_top_20" style={{width:"100%", paddingLeft:"15%",paddingRight:"15%"}}>
                <div class="col-md-6 text-left" style={{margin:"auto"}}>
                    <ScrollAnimation animateIn="fadeInLeft" delay="100"><h1 class="banner_heading_cnt text-left" style={{color:"#fff"}}>Graphic Design Development Company</h1></ScrollAnimation>
<ScrollAnimation animateIn="fadeInLeft" delay="300"><p class="banner_sub_head_cnt">An Inspiring Design will build a solid business foundation 
</p></ScrollAnimation>
                </div>
                <div class="col-md-6 text-center" style={{margin:"auto"}}>
                    <img class="img-fluid " id="img_ui" style={{height:"auto",width:"100%",margin:"auto"}}  src={ser_ui_banner_main}/>
                </div>
            </div>
        </div>
        
        {/*<div class="container-fluid service_gd_banner banner_main">
            <div class="container" style={{margin:"auto"}}>
                <div class="row" style={{margin:"auto"}}>
                    <div class="col-md-6" style={{margin:"auto"}}>
                        <ScrollAnimation animateIn="fadeInLeft" delay="100"><h1 class="banner_heading_cnt text-left">Graphic Design Development Company</h1></ScrollAnimation>
<ScrollAnimation animateIn="fadeInLeft" delay="300"><p class="banner_sub_head_cnt">An Inspiring Design will build a solid business foundation
</p></ScrollAnimation>
                    </div>
                    <div class="col-md-6 text-center">
                        <ScrollAnimation animateIn="fadeIn" delay="150" duration="1.5"><img class="img-fluid " id="img_ui"  src={ser_ui_banner_main}/></ScrollAnimation>
                    </div>
                </div>
                
            </div>
        </div>
        */}
    	<div style={{position:"relative"}} class="container-fluid">
    	
    	{/*
    	<div class="container-fluid ser_ui_cont_2">
    		<div class="ser_ui_tab_main_over">
    			<p>How Our User Experience Design Services Benefit
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
          <Nav.Link eventKey="icr">Qualified and Experienced Designers</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="eue">Striking Designs</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="bid">Client Centraic Designing Services</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="cl">Improved Usability</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={8} className="ui_tab_right">
      <Tab.Content>
        <Tab.Pane eventKey="icr">
            <h1>Qualified and Experienced Designers</h1>
	        <div class="tab_btm_border"></div>
			<p>A well-designed UI enables you to create seamless user-experience and fluid user-journey on the website or mobile app. Having a team of professionals with expertise in designing conversion-centric UX, we help you improve the conversion rate of your website.</p>
				          
        </Tab.Pane>
        <Tab.Pane eventKey="eue">
            <h1>Striking Designs</h1>
	        <div class="tab_btm_border"></div>
			<p>A well-designed UI enables you to create seamless user-experience and fluid user-journey on the website or mobile app. Having a team of professionals with expertise in designing conversion-centric UX, we help you improve the conversion rate of your website.</p>
				          
        </Tab.Pane>
        <Tab.Pane eventKey="bid">
            <h1>Client Centraic Designing Services</h1>
	        <div class="tab_btm_border"></div>
			<p>A well-designed UI enables you to create seamless user-experience and fluid user-journey on the website or mobile app. Having a team of professionals with expertise in designing conversion-centric UX, we help you improve the conversion rate of your website.</p>
				          
        </Tab.Pane>
        <Tab.Pane eventKey="cl">
            <h1>Improved Usability</h1>
	        <div class="tab_btm_border"></div>
			<p>A well-designed UI enables you to create seamless user-experience and fluid user-journey on the website or mobile app. Having a team of professionals with expertise in designing conversion-centric UX, we help you improve the conversion rate of your website.</p>
				          
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>


    			
    		</div>
    			
    	</div>*/}
    	</div>
    	<ScrollAnimation animateIn="fadeIn" delay="150" duration="1.5"><div class="container ser_ui_cont_5">
    		<div class="row">
    			<div class="col-md-6 ser_ui_cnt_1" style={{margin:"auto"}}>
    				<div class="ser_ui_cnt_1">
    					<h3 class="page_main_head">Successful Graphic Design Begins with Trust</h3>
    					<p class="para_cnt">In this competitive world making a good impression is vital to communicate and establishing our objectives to the prospective clients. So creating a catchy and professional images play a main role in marketing. </p>
                        <p class="para_cnt">Our interactive designers create effective designs for your business and put other brands ahead.  We create logos, print designs, advertising, business cards, letter heads and the list goes on and on. We deliver eye catchy, inspired designs for your business</p>
    					
    				</div>
    			</div>
    			<div class="col-md-6">
    				<img class="img-fluid" src={ser_ui_img_1} />
    			</div>
    		</div>
    	</div></ScrollAnimation>
    	<ScrollAnimation animateIn="fadeIn" delay="150" duration="1.5"><div class="container ser_ui_cont_6">
    		<div class="row">
    			<div class="col-md-6">
    				<img class="img-fluid" src={ser_ui_img_2} />
    			</div>
    			<div class="col-md-6 ser_ui_cnt_1">
    				<div class="ser_ui_cnt_1">
    					<h3 class="page_main_head">Dedicated graphic designers</h3>
    					<p class="para_cnt">Scope Tech one of the top Graphic Design Company that accepts creativity challenges and thinks outside the box. Our best graphic design company is ready to build stunning, innovative designs. 
</p>
    					
    				</div>
    			</div>
    		</div>
    	</div></ScrollAnimation>
        <div class="container ser_web_cont_1 text-center justify-content-center">
                        <ScrollAnimation animateIn="fadeIn" delay="50" duration="1.5"><div class="ser_ui_abt_cnt text-center justify-content-center">
                            <h3 class="page_main_head">Graphic Design Services</h3>
                            <div class="awd-main">
                              <Carousel 
                                swipeable={true}
                                draggable={false}
                                showDots={false}
                                responsive={responsive}
                                ssr={false} 
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={3000}
                                keyBoardControl={true}
                                items={4}
                                customTransition="all .5"
                                transitionDuration={500}
                                itemClass="carousel-item-padding-50-px"
                                >
                                <div class="awd"><div class="gd_type-main-img"> <img src={gd_type_1} class="img-fluid "/><h6>Business cards & Letter Head</h6></div></div>
                                <div class="awd"><div class="gd_type-main-img"> <img src={gd_type_2} class="img-fluid "/><h6>Advertising</h6></div></div>
                                <div class="awd"><div class="gd_type-main-img"> <img src={gd_type_3} class="img-fluid "/><h6>Logo and branding</h6></div></div>
                                <div class="awd"><div class="gd_type-main-img"> <img src={gd_type_4} class="img-fluid "/><h6>Infographics</h6></div></div>
                                <div class="awd"><div class="gd_type-main-img"> <img src={gd_type_2} class="img-fluid "/><h6>Presentation</h6></div></div>
                                <div class="awd"><div class="gd_type-main-img"> <img src={gd_type_3} class="img-fluid "/><h6>Print Design</h6></div></div>
                                <div class="awd"><div class="gd_type-main-img"> <img src={gd_type_4} class="img-fluid "/><h6>Packaging Design</h6></div></div>
                                
                                
                              </Carousel>
                            </div>
                            
                        </div>
                        </ScrollAnimation>
                
        </div>
        <ScrollAnimation animateIn="fadeIn" delay="100" duration="1.5"><div class="container-fluid smm_cont_1">
      <h3 style={{margin:"auto 0",paddingBottom:"3%",width:"100%"}} class="text-center page_main_head" >Our designs are

</h3>

        <div class="row da_type_cont text-center justify-content-center">
          <div class="col-md-2 da_type_main1">
            <img class="img-fluid" src={da_type_1} />
            <h6>Researched </h6>
            
          </div>
          <div class="col-md-2 da_type_main1">
            <img class="img-fluid" src={da_type_2} />
            <h6>Creative   </h6>
            
          </div>
          <div class="col-md-2 da_type_main1">
            <img class="img-fluid" src={da_type_3} />
            <h6>Thoughtful  </h6>
            
          </div>
          <div class="col-md-2 da_type_main1">
            <img class="img-fluid" src={da_type_4} />
            <h6>On-time  </h6>
            
          </div>
          <div class="col-md-2">
            <img class="img-fluid" src={da_type_5} />
            <h6>Award winning  </h6>
            

          </div>
        </div>
      </div></ScrollAnimation>
    	<Lets/>
      <Footer/>
    </div>    
  );
}
}

export default Graphic_design;
