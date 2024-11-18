    import MetaTags from 'react-meta-tags';
import React,{ Component,setState } from 'react';

import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from './nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import seo_img_1 from '../img/service/seo_img_1.png';
import dig_mark_img from '../img/service/dig_mark_img.png';
import seo_img_2 from '../img/service/seo_img_2.png';
import seo_type_5 from '../img/service/seo_type_5.png';
import seo_type_4 from '../img/service/seo_type_4.png';
import seo_type_3 from '../img/service/seo_type_3.png';
import Lets from './lets.js';
import Footer from './footer.js';

import seo_type_2 from '../img/service/seo_type_2.png';
import seo_type_1 from '../img/service/seo_type_1.png';
import ScrollAnimation from 'react-animate-on-scroll';
class Marketing extends Component{
render(){
  return (
    <div className="App">



<MetaTags>
            <title>Digital Marketing Services |SEO services|Best SEO company |Scope Tech</title>
            <meta id="meta-description" name="description" content="our digital marketing companyoffers best professional SEO services likecontent marketing, website optimization, backlink analysis.SEO Services help to get organic Traffic&improvewebsite's rankings. Contact us to increase your online visibility!+966 599 226 961info@scopetech.sa" />
            <meta id="" property="keywords" content="digital marketing agency, SEO services" />
            
</MetaTags>
    


    	<Nav1/>
    	<div class="container-fluid service_seo_banner">
    		<div class="ser_banner_main">
            <h1 class="banner_heading_cnt" style={{paddingLeft:"0"}}>Best Digital Marketing Company</h1>
    			<img class="img-fluid" src={dig_mark_img}/>
    		</div>
    	</div>
    	<ScrollAnimation animateIn="fadeIn" delay="100" duration="1.5"><div class="container seo_cont_1">
    		<div class="row">
    			<div class="col-md-6">
    				<h3 class="page_main_head">SEO - Drive Organic And Quality Traffic to your website</h3>
    				<p class="para_cnt">Get Digital Marketing solutions from the best digital marketing company in Saudi Arabia at the right time of this digital age. Digital marketing will connect your customers and your brand and thus results in brand recall among the customers</p>
    				<p class="para_cnt">Many of your competitors are dragging attention of the users in search engines and it's your time to be on the top search result. We, Scope Tech, best Digital marketing company in Saudi Arabia offers you the better visibility in search engines and reach your potential customers in this maze of internet</p>
    			</div>
    			<div class="col-md-6">
    				<img class="img-fluid" src={seo_img_1} />
    			</div>
    		</div>
    	</div></ScrollAnimation>
    	<ScrollAnimation animateIn="fadeIn" delay="100" duration="1.5"><div class="container seo_cont_2">
    		<div class="row">
    			<div class="col-md-6">
    				<img class="img-fluid" src={seo_img_2} />
    			</div>
    			<div class="col-md-6">
    				
    				<p class="para_cnt">We perform deep research on your business to promote your website online through effective strategy and proven methodologies. These best digital marketing practices result in driving high quality traffic to our websites for all of our clients. </p>
    				
    				<p class="para_cnt">We continuously study the algorithm of search engines which helps us to rank our websites in the top of search engines </p>
    			</div>
    		</div>

    		
    	</div></ScrollAnimation>
    	
    	<ScrollAnimation animateIn="fadeIn" delay="100" duration="1.5"><div class="container-fluid seo_cont_3">
    		<h1 class="text-6"><label class="cont_head_1 ">Our SEO</label><label class="cont_head_2">&nbsp;Services</label></h1>
    		<div class="row text-center justify-content-center" style={{paddingTop:"2%"}}>
    			<div class="col-4 col-md-2">
    				<img class="img-fluid" src={seo_type_1} style={{width:"70%"}}/>
    				<h4>Content Marketing</h4>
    			</div>
    			<div class="col-4 col-md-2">
    				<img class="img-fluid" src={seo_type_2} style={{width:"70%"}} />
    				<h4>Website Optimization</h4>
    			</div>
    			<div class="col-4 col-md-2">
    				<img class="img-fluid" src={seo_type_3}  style={{width:"70%"}}/>
    				<h4>Keyword Research</h4>
    			</div>
    			<div class="col-4 col-md-2">
    				<img class="img-fluid" src={seo_type_4}  style={{width:"70%"}}/>
    				<h4>Back link analysis</h4>
    			</div>
    			<div class="col-4 col-md-2">
    				<img class="img-fluid" src={seo_type_5}  style={{width:"70%"}}/>
    				<h4>Off-Page activities</h4>
    			</div>

    		</div>

    		
    	</div></ScrollAnimation>
    	<Lets/>
        <Footer/>
    </div>    
  );
}
}

export default Marketing;
