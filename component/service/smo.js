    import MetaTags from 'react-meta-tags';
import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';
import Tab from 'react-bootstrap/Tab';
import Lets from '../lets.js';
import Tabs from 'react-bootstrap/Tabs';
import Footer from '../footer.js';
import dig_mark_img from '../../img/service/dig_mark_img.png';
import seo_img_1 from '../../img/service/smo_img_1.png';
import seo_img_2 from '../../img/service/seo_img_2.png';
import seo_type_1 from '../../img/service/smo_type_5.png';
import seo_type_2 from '../../img/service/smo_type_4.png';
import seo_type_3 from '../../img/service/smo_type_3.png';
import seo_type_4 from '../../img/service/smo_type_2.png';
import seo_type_5 from '../../img/service/smo_type_1.png';
import ScrollAnimation from 'react-animate-on-scroll';
class Smo extends Component{
render(){
  return (
    <div className="App">



<MetaTags>
            <title>Search Engine Marketing Company |SEM Services| Digital Marketing</title>
            <meta id="meta-description" name="description" content="Award-Winning Digital Marketing Team. Customized Service, Data-Driven Results.PPC & SEM Services is a paid search advertising that promotes your content at the top of search engine results pages (SERPs)Google paid Marketing service. Get free quote now +966 599 226 961 info@Scope Tech.sa" />
            <meta id="" property="keywords" content="Digital marketing, ppc services" />
            
</MetaTags>
    


    	<Nav1/>
    	<div class="container-fluid service_seo_banner">
    		<div class="ser_banner_main">
    			
        <h1 class="banner_heading_cnt" style={{padding:"0px"}}>Best Digital Marketing Company</h1>
                <img class="img-fluid" src={dig_mark_img}/>
    		</div>
    	</div>
    	<ScrollAnimation animateIn="fadeIn" delay="100" duration="1.5"><div class="container smo_cont_1">
    		<div class="row">
    			<div class="col-md-6">
                <div style={{margin:"auto 0"}}>
    				<h4 class="page_main_head">Best Search Engine Marketing Company</h4>
                    <h5 class="page_sub_main_head">More Leads! More Conversions!</h5>
    				<p class="para_cnt">With a team of certified professionals we manage google ads like remarketing, shopping ads, app installs and more. So Get Ready for a boom in business. As a top search engine marketing company we understand the search engine marketing strategies and drive better result at lower cost</p>
    				
    			 </div>
                </div>
    			<div class="col-md-6">
    				<img class="img-fluid" src={seo_img_1} />
    			</div>
    		</div>
    	</div></ScrollAnimation>
    	    <ScrollAnimation animateIn="fadeIn" delay="100" duration="1.5">
    	<div class="container-fluid seo_cont_3">
    		<h1 class="text-6"><label class="cont_head_1">Our PPC</label><label class="cont_head_2">&nbsp;Services</label></h1>
    		<div class="row text-center justify-content-center" style={{paddingTop:"2%"}}>
    			<div class="col-4 col-md-2">
    				<img class="img-fluid" src={seo_type_1}  style={{width:"70%"}}/>
    				<h4>Keyword<br/>
 Research</h4>
    			</div>
    			<div class="col-4 col-md-2">
    				<img class="img-fluid" src={seo_type_2}  style={{width:"70%"}}/>
    				<h4>Ad text<br/>
 creation</h4>
    			</div>
    			<div class="col-4 col-md-2">
    				<img class="img-fluid" src={seo_type_3}  style={{width:"70%"}}/>
    				<h4>Optimizing
 Landing pages</h4>
    			</div>
    			<div class="col-4 col-md-2">
    				<img class="img-fluid" src={seo_type_4} style={{width:"70%"}} />
    				<h4>Tracking Conversion
 and sales</h4>
    			</div>
    			<div class="col-4 col-md-2">
    				<img class="img-fluid" src={seo_type_5} style={{width:"70%"}} />
    				<h4>Monitoring
 and reporting</h4>
    			</div>

    		</div>
<h5 class="text-center page_sub_main_head" style={{paddingTop:"20px"}}>
Are you ready to boost your business 
</h5>
<h5 class="text-center page_sub_main_head">
Let us start your campaigns to get targeted audience at low cost
</h5>
    		
    	</div>
        </ScrollAnimation>
    	
<Lets/>
<Footer/> 
    </div>    
  );
}
}

export default Smo;
