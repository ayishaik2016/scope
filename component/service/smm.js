    import MetaTags from 'react-meta-tags';
import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import seo_img_1 from '../../img/service/smm_img_1.png';
import dig_mark_img from '../../img/service/dig_mark_img.png';

import Lets from '../lets.js';
import Footer from '../footer.js';

import seo_img_2 from '../../img/service/seo_img_2.png';
import seo_type_5 from '../../img/service/seo_type_5.png';
import seo_type_4 from '../../img/service/seo_type_4.png';
import seo_type_3 from '../../img/service/seo_type_3.png';
import seo_type_2 from '../../img/service/seo_type_2.png';
import seo_type_1 from '../../img/service/seo_type_1.png';
import ScrollAnimation from 'react-animate-on-scroll';
class Smm extends Component{
render(){
  return (
    <div className="App">



<MetaTags>
            <title>Social Media Marketing |Saudi Arabia| Digital Marketing services|Scope Tech</title>
            <meta id="meta-description" name="description" content="Digital Marketing Services by Scope Techis one of the top most trusted &award winning company. We offer professional SMM services that grow your brand awareness and increase organic traffic to your website. Choose us for 100% +966 599 226 961 info@scopetech.sa" />
            <meta id="" property="keywords" content="Social Media Marketing, Digital Marketing" />
            
</MetaTags>
    


    	<Nav1/>
    	<div class="container-fluid service_seo_banner">
    		<div class="ser_banner_main">
        <h1 class="banner_heading_cnt text-cetner" style={{padding:"0"}}>Best Digital Marketing Company</h1>
    			<img class="img-fluid" src={dig_mark_img}/>
    		</div>
    	</div>
    	<ScrollAnimation animateIn="fadeIn" delay="100" duration="1.5"><div class="container smm_cont_1">
    		<div class="row">
    			<div class="col-md-6">
                <div style={{margin:"auto 0"}}>
    				<h3 class="page_main_head">Social Media Marketing</h3>
                    <h4 class="page_sub_main_head">Make your presence in the Social Hub</h4>
    				<p class="para_cnt">Most of the world population is on social media, and then what could be the best place for marketing other than social media. </p>
    				<p class="para_cnt">As a best social media management company, we brand your business and draw traffic to your website through social media networks such as facebook, twitter, Instagram, Youtube etc. we not only reach your potential customers, we keep on engaging them by posting viral posts.</p>
    			 </div>
                </div>
    			<div class="col-md-6">
    				<img class="img-fluid" src={seo_img_1} />
    			</div>
    		</div>
    	</div></ScrollAnimation>
    	<div class="container smm_cont_2">
        <h3 class="page_main_head">Services We Offer</h3>
    		<div class="row">
    			<div class="col-md-7">
    				
                    <div class="timeline">
                      <div class="timeline-item_1">
                        <ScrollAnimation animateIn="fadeInRight" delay="100" duration="1.5"><h4 class="page_sub_main_head">Strategy We Use</h4></ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInRight" delay="100" duration="1.5"><p class="para_cnt">We target business oriented audiences and put your brand to draw attention until we create a conversion</p></ScrollAnimation>
                      </div>
                      <div class="timeline-item_2">
                        <ScrollAnimation animateIn="fadeInRight" delay="100" duration="1.5"><h4 class="page_sub_main_head">Organic Postings (SMO)</h4></ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInRight" delay="100" duration="1.5"><p class="para_cnt">We will regularly update keywords enriched content in all social media sites to create brand awareness</p></ScrollAnimation>
                      </div>
                      <div class="timeline-item_3">
                        <ScrollAnimation animateIn="fadeInRight" delay="100" duration="1.5"><h4 class="page_sub_main_head">Paid Social Advertising (SMM)</h4></ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInRight" delay="100" duration="1.5"><p class="para_cnt">As the best social media management company in Saudi Arabia, we also expert in paid social advertising. We have satisfied many clients with our strategies and deliver you the results that you have expected for your business.</p></ScrollAnimation>
                      </div>
                      <div class="timeline-item_4">
                        <ScrollAnimation animateIn="fadeInRight" delay="100" duration="1.5"><h4 class="page_sub_main_head">Social Reputation Management</h4></ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInRight" delay="100" duration="1.5"><p class="para_cnt">Every businesses needs comments and reviews from the customers as it builds trust in any business. So we have a proactive approach to manage the reviews so that your business will stay on top of the successful trends</p></ScrollAnimation>
                      </div>
                    </div>
    			</div>
    			<div class="col-md-5 smo_right_col_1">
    				
    				
    			</div>
    		</div>

    		
    	</div>
    	    
<Lets/>
<Footer/>      
    </div>    
  );
}
}

export default Smm;
