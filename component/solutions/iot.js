    import MetaTags from 'react-meta-tags';
import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import iot_img_1 from '../../img/solutions/iot_img_1.png';
import iot_banner_img from '../../img/solutions/iot_banner_img.png';
import seo_img_2 from '../../img/service/seo_img_2.png';
import seo_type_5 from '../../img/service/seo_type_5.png';
import seo_type_4 from '../../img/service/seo_type_4.png';
import Lets from '../lets.js';
import Footer from '../footer.js';

import seo_type_3 from '../../img/service/seo_type_3.png';
import seo_type_2 from '../../img/service/seo_type_2.png';
import seo_type_1 from '../../img/service/seo_type_1.png';
import ScrollAnimation from 'react-animate-on-scroll';
class IOT extends Component{
render(){
  return (
    <div className="App">



<MetaTags>
            <title>IoT Solution Company | IoT Service Providers in India | IoT</title>
            <meta id="meta-description" name="description" content="We are one of the best IoT Solutions Provider Company. We provide IoT solutions to the company of all sizes with unmatched versatility. Scope Tech is the best Internet of Things Application Development Service provider Company in Saudi Arabia Chat with us at +966 599226961" />
            <meta id="" property="keywords" content="IOT solution company, IOT solution provider" />
            
</MetaTags>
    


    	<Nav1/>
      <div class="container-fluid ban_main_cont solution_iot_banner" style={{height:"70vh"}}>
            <div class="row mar_top_20" style={{width:"100%", paddingLeft:"15%",paddingRight:"15%"}}>
                <div class="col-md-6 text-left" style={{margin:"auto"}}>
                    <h1 class="banner_heading_cnt text-left" style={{color:"#fff"}}>Internet of Things Solutions</h1>
<p class="banner_sub_head_cnt1">Are you willing to generate new revenue, productivity and completely change your service support? Then put hands together with Scope Tech, one of the best IOT/IOE solutions provider 
</p>
                </div>
                <div class="col-md-6 text-center" style={{margin:"auto"}}>
                    <img class="img-fluid " id="img_ui" style={{height:"auto",width:"80%",margin:"auto"}}  src={iot_banner_img}/>
                </div>
            </div>
        </div>
{/*
    	<div class="container-fluid solution_iot_banner" style={{position:"relative"}}>
<div class="test">
      <div class="cs_banner_main">
      <div class="row">
            <div class="col-md-6">
              <ScrollAnimation animateIn="fadeInLeft" delay="100" duration="1.5"><h1 class="banner_heading_cnt"></h1></ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay="400" duration="1.5"><p class="banner_sub_head_cnt">Are you willing to generate new revenue, productivity and completely change your service support? Then put hands together with Scope Tech, one of the best IOT/IOE solutions provider </p></ScrollAnimation>
          
            </div>
            <div class="col-md-6 da_banenr_right">
                <img class="img-fluid "  id="img_da" src={iot_banner_img} />
            </div>
          </div>
         </div>
        
      </div>
    		
    	</div>
    */}
    	<ScrollAnimation animateIn="fadeIn" delay="100" duration="1.5"><div class="container smm_cont_1">
        <div class="row">
          <div class="col-md-6">
                <div style={{margin:"auto 0"}}>
            <h3 class="page_main_head">Drive efficiency and smart
operations by connecting
the unconnected</h3>
                    
            <p class="para_cnt">The Internet of Things (IOT) has received tremendous reputation during the last few years.Scope Tech helps you to connect your devices to the embedded technology to increase your productivity and efficiency. </p>
            <p class="para_cnt">Are you willing to generate new revenue, productivity and completely change your service support? Then put hands together with Scope Tech, one of the best IOT/IOE solutions provider 
</p>
           </div>
                </div>
          <div class="col-md-6">
            <img class="img-fluid" src={iot_img_1} />
          </div>
        </div>
      </div></ScrollAnimation>
      <div class="container smm_cont_1" style={{padding:"0"}}>
                <div style={{margin:"auto 0"}}>
            <h3 class="page_main_head">How IOT Solutions unlock business efficiency and transform digital operations</h3>
                    
            <p class="para_cnt">The Internet of Things (IOT/IOE) enables industries to connect to the physical objects thereby delivering actionable insights and reducing operational risks
</p>
            
        
                </div>
          
      </div>

    	<div class="container smm_cont_2">
        
    		<div class="row">
    			<div class="col-md-7">
    				
                    <div class="timeline">
                      <div class="timeline-item_iot1">
                        <ScrollAnimation animateIn="fadeInRight" delay="100" duration="1.5"><h4 class="page_sub_main_head">Connecting the Unconnected</h4></ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInRight" delay="100" duration="1.5"><p class="para_cnt">Connect new and existing devices based on the standards and optimize obtained facts for relevancy and context.
</p></ScrollAnimation>
                      </div>
                      <div class="timeline-item_iot2">
                        <ScrollAnimation animateIn="fadeInRight" delay="100" duration="1.5"><h4 class='page_sub_main_head'>Security for device and data</h4></ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInRight" delay="100" duration="1.5"><p class="para_cnt">We offer complete security standards for data and keep on monitoring the network for any malicious behavior or security threats</p></ScrollAnimation>
                      </div>
                      <div class="timeline-item_iot3">
                        <ScrollAnimation animateIn="fadeInRight" delay="100" duration="1.5"><h4 class="page_sub_main_head">Take actionable insights</h4></ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInRight" delay="100" duration="1.5"><p class="para_cnt">Develop new business opportunities by improving customer reviews and upgrading underperforming process through Scope Tech IOT solutions</p></ScrollAnimation>
                      </div>
                      <div class="timeline-item_iot4">
                        <ScrollAnimation animateIn="fadeInRight" delay="100" duration="1.5"><h4 class="page_sub_main_head">Digitalize your business through IOT</h4></ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInRight" delay="100" duration="1.5"><p class="para_cnt">Identify the best IOT solution provider and improve business standards by connecting wide range of devices thereby reducing operational and development cost</p></ScrollAnimation>
                      </div>
                    </div>
    			</div>
    			<div class="col-md-5 iot_right_col_1">
    				
    				
    			</div>
    		</div>

    		
    	</div>
    	    
<Lets/>
<Footer/>      
    </div>    
  );
}
}

export default IOT;
