    import MetaTags from 'react-meta-tags';
import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Lets from '../lets.js';
import Footer from '../footer.js';

import iot_img_1 from '../../img/solutions/cs_img_4.png';
import cs_banner_img from '../../img/solutions/cs_banner_img.png';
import iot_img_2 from '../../img/solutions/cs_img_2.png';
import cs_type_1 from '../../img/solutions/cs_type_1.png';
import cs_type_2 from '../../img/solutions/cs_type_2.png';
import cs_type_3 from '../../img/solutions/cs_type_3.png';
import cs_img_3 from '../../img/solutions/cs_img_3.png';
import seo_type_1 from '../../img/service/seo_type_1.png';
import ScrollAnimation from 'react-animate-on-scroll';
class Cybersecurity extends Component{
render(){
  return (
    <div className="App">



<MetaTags>
            <title>Cyber Security Services and Solutions| Leading cyber Security Company</title>
            <meta id="meta-description" name="description" content="Scope Tech provides comprehensive cyber security services to build flawless security plans. We are one of the leading cyber security companies which provide services like Cyber Security Audits, Network Security & more +966 599226961 info@scopetech.sa" />
            <meta id="" property="keywords" content="cyber security services, cyber security companies" />
            
</MetaTags>
    


    	<Nav1/>
      <div class="container-fluid ban_main_cont solution_cs_banner" style={{height:"70vh"}}>
            <div class="row mar_top_50" style={{width:"100%", paddingLeft:"15%",paddingRight:"15%"}}>
                <div class="col-md-6 text-left" style={{margin:"auto"}}>
                    <ScrollAnimation animateIn="fadeInLeft" delay="100"><h1 class="banner_heading_cnt text-left" style={{color:"#fff"}}>Cybersecurity solution
providers</h1></ScrollAnimation>
<ScrollAnimation animateIn="fadeInLeft" delay="300"><p class="banner_sub_head_cnt1">If you are choosing Scope Tech for your cybersecurity solutions then it is the right choice. 
</p></ScrollAnimation>
                </div>
                <div class="col-md-6 text-center" style={{margin:"auto"}}>
                    <img class="img-fluid " id="img_ui" style={{height:"auto",width:"85%",margin:"auto"}}  src={cs_banner_img}/>
                </div>
            </div>
        </div>
    	{/*<div class="container-fluid solution_cs_banner" style={{position:"relative"}}>
      <div class="test">
      <div class="cs_banner_main">
          <div class="row">
            <div class="col-md-6">
              <ScrollAnimation animateIn="fadeInLeft" delay="100" duration="1.5"><h1 class="banner_heading_cnt">Cybersecurity solution
providers</h1></ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay="400" duration="1.5"><p class="banner_sub_head_cnt">If you are choosing Scope Tech for your cybersecurity solutions then it is the right choice. </p></ScrollAnimation>
          
            </div>
            <div class="col-md-6 da_banenr_right">
                <img class="img-fluid " style={{width:"80%"}} id="img_da" src={cs_banner_img} />
            </div>
          </div>
         </div>
    		</div>
    	</div>*/}
    	<ScrollAnimation animateIn="fadeIn" delay="400" duration="1.5"><div class="container smm_cont_1">
        <div class="row">
          <div class="col-md-7" style={{margin:"auto 0"}}>
                <div style={{margin:"auto 0"}}>
            <ScrollAnimation animateIn="fadeIn" delay="400" duration="1.5"><h3 class="page_main_head" style={{margin:"auto 0"}}>Are you ready to partner with
reliable cyber security provider?</h3>
                    
            <p class="para_cnt">If you are choosing Scope Tech for your cybersecurity solutions then it is the right choice. Scope Tech is a reliable and one of the best cybersecurity solution providers is Saudi Arabia.  We are offering wide range of services in cybersecurity and our team has the efficient skills to keep your business safe and secure</p></ScrollAnimation>
            
           </div>
                </div>
          <div class="col-md-5">
            <img class="img-fluid" src={iot_img_1} />
          </div>
        </div>
      </div></ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" delay="400" duration="1.5"><div class="container smm_cont_1">
        <div class="row">
          <div class="col-md-5">
            <img class="img-fluid" src={iot_img_2} />
          </div>
          <div class="col-md-7" style={{margin:"auto 0"}}>
                <div style={{margin:"auto 0"}}>
            <h3 class="page_main_head" style={{margin:"auto 0"}}>How to choose the best 
cybersecurity solution provider?</h3>
                    
            <p class="para_cnt">There are plenty of cybersecurity solution providers around the world but how to rely on is the daunting task. You can choose Scope Tech for your business because we design applications that have highest protection of data and systems. We give complete secure solutions to your business. </p>
            
           </div>
                </div>
        </div>
      </div></ScrollAnimation>
      <div class="container smm_cont_1">
        <div class="row">
          <div class="col-md-4">
            <div class="row type_cs_row">
              <div class="col-md-6" style={{margin:"auto 0",padding:"0"}}>
                <ScrollAnimation animateIn="zoomIn" delay="400" duration="1.5"><img class="img-fluid" src={cs_type_1} /></ScrollAnimation>
              </div>
              <div class="col-md-6" style={{margin:"auto 0",padding:"0"}}>
                <ScrollAnimation animateIn="fadeInLeft" delay="100" duration="1"><h3 style={{padding:"0"}} class="text-left">Healthcare</h3></ScrollAnimation>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="row type_cs_row">
              <div class="col-md-6" style={{margin:"auto 0",padding:"0"}}>
                <ScrollAnimation animateIn="zoomIn" delay="400" duration="1.5"><img class="img-fluid" src={cs_type_2} /></ScrollAnimation>
              </div>
              <div class="col-md-6" style={{margin:"auto 0",padding:"0"}}>
                <ScrollAnimation animateIn="fadeInLeft" delay="100" duration="1"><h3 style={{padding:"0"}} class="text-left">Education</h3></ScrollAnimation>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="row ">
              <div class="col-md-6" style={{margin:"auto 0",padding:"0"}}>
                <ScrollAnimation animateIn="zoomIn" delay="400" duration="1.5"><img class="img-fluid" src={cs_type_3} /></ScrollAnimation>
              </div>
              <div class="col-md-6" style={{margin:"auto 0",padding:"0"}}>
                <ScrollAnimation animateIn="fadeInLeft" delay="100" duration="1"><h3 style={{padding:"0"}} class="text-left">Banking</h3></ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>    
      <div class="container-fluid smm_cont_1 cs_sec_main" style={{padding:"0"}}>
        <div class="cs_sec_1">
          <p class="text-center para_cnt" style={{margin:"auto"}}>We are always on the pulse of current updates in cybersecurity services. This allows us to understand and bring the critical infrastructure and security policies to your organization. Let us step in your business as cybersecurity solution provider and we will resolve even the most complex security issues</p>
        </div>
      </div>    
      <div class="container smm_cont_1 text-center cs_cont_2">
        
          
        
            <ScrollAnimation animateIn="zoomIn" delay="400" duration="1.5"><img class="img-fluid" src={cs_img_3} style={{width:"20%"}}/></ScrollAnimation>
            <h3 style={{margin:"auto"}} class="text-center page_sub_main_head">Need a hand for cybersecurity solutions. Our cybersecurity teams are here to help you
</h3>
                    
            
          
        
      </div>
      
      <Lets/>
      <Footer/>
    </div>    
  );
}
}

export default Cybersecurity;
