    import MetaTags from 'react-meta-tags';
import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';

import Lets from '../lets.js';
import Footer from '../footer.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ai_img_1 from '../../img/solutions/ai_img_1.png';
import ai_banner_img from '../../img/solutions/ai_banner_img.png';
import ai_img_2 from '../../img/solutions/ai_img_2.png';
import cs_type_1 from '../../img/solutions/ai_type_1.png';
import cs_type_2 from '../../img/solutions/ai_type_2.png';
import cs_type_3 from '../../img/solutions/ai_type_3.png';
import cs_type_4 from '../../img/solutions/ai_type_4.png';
import cs_img_3 from '../../img/solutions/cs_img_3.png';
import seo_type_1 from '../../img/service/seo_type_1.png';
import ScrollAnimation from 'react-animate-on-scroll';
class AI extends Component{
render(){
  return (
    <div className="App">



<MetaTags>
            <title>Artificial Intelligence AI Services | AI solution providers</title>
            <meta id="meta-description" name="description" content="Scope Tech offers consulting and implementation for artificial intelligence AI and machine learning services. Best Artificial Intelligence AI & Machine Learning Solution Provider. Discover new principles with our AI infused applications for smarter & better experience +966 599226961 info@scopetech.sa" />
            <meta id="" property="keywords" content="Artificial Intelligence Services, AI solution providers" />
            
</MetaTags>
    


    	<Nav1/>
      <div class="container-fluid ban_main_cont solution_ai_banner" style={{height:"70vh"}}>
            <div class="row mar_top_20" style={{width:"100%", paddingLeft:"15%",paddingRight:"15%"}}>
                <div class="col-md-6 text-left" style={{margin:"auto"}}>
                    <h1 class="banner_heading_cnt text-left" style={{color:"#fff"}}>Artificial Intelligence Solution Provider</h1>
<p class="banner_sub_head_cnt1">Scope Tech is an artificial Intelligence solution provider develops business automation applications based on the needs of the clients and maximize their return on Investment. 
</p>
                </div>
                <div class="col-md-6 text-center" style={{margin:"auto"}}>
                    <img class="img-fluid " id="img_ui" style={{height:"auto",width:"100%",margin:"auto"}}  src={ai_banner_img}/>
                </div>
            </div>
        </div>
    	{/*<div class="container-fluid solution_ai_banner">
      <div class="cs_banner_main">
          <div class="row">
            <div class="col-md-6">
              <ScrollAnimation animateIn="fadeInLeft" delay="100" duration="1.5"><h1 class="banner_heading_cnt"></h1></ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay="400" duration="1.5"><p class="banner_sub_head_cnt"></p></ScrollAnimation>
          
            </div>
            <div class="col-md-6 da_banenr_right">
                <img class="img-fluid " style={{width:"80%"}} id="img_da" src={ai_banner_img} />
            </div>
          </div>
         </div>
        
      
    		
    	</div>*/}
    	<ScrollAnimation animateIn="fadeIn" delay="100" duration="1.5"><div class="container smm_cont_1">
        <div class="row">
          <div class="col-md-7" style={{margin:"auto 0"}}>
                <div style={{margin:"auto 0"}}>
            <h3 style={{margin:"auto 0"}} class="page_main_head">Develop new business solutions 
by gaining new competitive
advantage </h3>
                    
            <p class="para_cnt">Scope Tech is an artificial Intelligence solution provider develops business automation applications based on the needs of the clients and maximize their return on Investment. We always believe in delivering the best artificial intelligence services as we have well talented professionals and best Artificial intelligence developers</p>
            
           </div>
                </div>
          <div class="col-md-5">
            <img class="img-fluid" src={ai_img_1} />
          </div>
        </div>
      </div></ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" delay="100" duration="1.5"><div class="container smm_cont_1">
        <div class="row">
          <div class="col-md-5">
            <img class="img-fluid" src={ai_img_2} />
          </div>
          <div class="col-md-7" style={{margin:"auto 0"}}>
                <div style={{margin:"auto 0"}}>
            <h3 style={{margin:"auto 0"}} class="page_main_head">We develop everything whatever 
your company needs</h3>
                    
            <p class="para_cnt">Scope Tech has many years of experience as Artificial intelligen providers and offers solutions to businesses by deep understanding of the customer's requirements. We analyse, implement and design the Artificial intelligence services in healthcare, E-commerce, marketing, advertising, telecommunications and more but not limited to. </p>
            
           </div>
                </div>
        </div>
      </div></ScrollAnimation>
      <div class="container-fluid smm_cont_1 cs_sec_main" style={{padding:"0"}}>
        <div class="cs_sec_1">
          <h3 class="text-center page_main_head" style={{width:"100%",color:"#fff"}}>WHO WE ARE</h3>
          <p class="text-center banner_sub_head_cnt" style={{margin:"auto"}}>We are expertise in machine learning, speech recognition, language, image processing, and data analytics
</p>
        </div>
      </div>    
      <div class="container smm_cont_2">
        <h3 class="page_main_head">Services We Offer</h3>
        <div class="row">
          <div class="col-md-5 ai_right_col_1">
            
            
          </div>
          <div class="col-md-7">
            
                    
            
    <ul class="timeline_ai">
        <li>
          <div class="timeline-badge"><ScrollAnimation animateIn="zoomIn" delay="100" duration="1.5"><img class="img-fluid" src={cs_type_1} /></ScrollAnimation></div>
          <div class="timeline-panel animated slideInLeft">
            <div class="timeline-heading">
              <ScrollAnimation animateIn="fadeInLeft" delay="100" duration="1.5"><h5 class="timeline-title">Design</h5>
              <p>Our design uses advanced artificial intelligence algorithms to exploit return on investment</p>
              </ScrollAnimation>
            </div>
            <div class="timeline-body">
              
            </div>
          </div>
        </li>
        <li>
          <div class="timeline-badge "><ScrollAnimation animateIn="zoomIn" delay="100" duration="1.5"><img class="img-fluid" src={cs_type_2} /></ScrollAnimation></div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <ScrollAnimation animateIn="fadeInLeft" delay="100" duration="1.5"><h5 class="timeline-title">Development</h5>
              <p>We have expertise team of AI developers who develop applications to improve your business to the extent </p></ScrollAnimation>
            </div>
            <div class="timeline-body">
              <p></p>
            </div>
          </div>
        </li>
        <li>
          <div class="timeline-badge "><ScrollAnimation animateIn="zoomIn" delay="100" duration="1.5"><img class="img-fluid" src={cs_type_3} /></ScrollAnimation></div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <ScrollAnimation animateIn="fadeInLeft" delay="100" duration="1.5"><h5 class="timeline-title">Customization</h5>
              <p>We help you to create customized AI applications based on your requirements and meets Industry standards. </p></ScrollAnimation>
            </div>
            <div class="timeline-body">
              <p></p>
            </div>
          </div>
        </li>
        <li>
          <div class="timeline-badge "><ScrollAnimation animateIn="zoomIn" delay="100" duration="1.5"><img class="img-fluid" src={cs_type_4} /></ScrollAnimation></div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <ScrollAnimation animateIn="fadeInLeft" delay="100" duration="1.5"><h5 class="timeline-title">Integration</h5>
              <p>Our advance artificial intelligence services integrates existing business model with your new one to increase conversion</p></ScrollAnimation>
            </div>
            <div class="timeline-body">
              <p></p>
            </div>
          </div>
        </li>
        
    </ul>

          </div>
          
        </div>

        
      </div>
      
      <Lets/>
      <Footer/>
    </div>    
  );
}
}

export default AI;
