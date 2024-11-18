    import MetaTags from 'react-meta-tags';
import React,{ Component,setState } from 'react';

import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from './nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import au_banner_img from '../img/au_banner_img.png';
import au_img_1 from '../img/au_img_1.png';
import au_img_2 from '../img/au_img_2.png';
import ga_ca_3 from '../img/laundry/la_ca_3.png';
import scp_abt from '../img/new/scp_abt.png';
import about_img from '../img/abt_scp_1.png';

import Lets from './lets.js';
import Footer from './footer.js';



import tech1 from '../img/tech/tu1.png';
import tech2 from '../img/tech/tu2.png';
import tech3 from '../img/tech/tu3.png';
import tech4 from '../img/tech/tu4.png';
import tech5 from '../img/tech/tu5.png';
import tech6 from '../img/tech/tu6.png';
import tech7 from '../img/tech/tu7.png';
import tech8 from '../img/tech/tu8.png';
import tech9 from '../img/tech/tu9.png';
import tech10 from '../img/tech/tu10.png';
import tech11 from '../img/tech/tu11.png';
import tech12 from '../img/tech/tu12.png';
import tech13 from '../img/tech/tu13.png';
import tech14 from '../img/tech/tu14.png';
import tech15 from '../img/tech/tu15.png';
import tech16 from '../img/tech/tu16.png';
import tech17 from '../img/tech/tu17.png';
import tech18 from '../img/tech/tu18.png';
import tech19 from '../img/tech/tu19.png';
import tech20 from '../img/tech/tu20.png';
import tech21 from '../img/tech/tu21.png';
import tech22 from '../img/tech/tu22.png';
import tech23 from '../img/tech/tu23.png';
import tech24 from '../img/tech/tu24.png';
import tech25 from '../img/tech/tu25.png';
import tech26 from '../img/tech/tu26.png';
import tech27 from '../img/tech/tu27.png';
import tech28 from '../img/tech/tu28.png';
import tech29 from '../img/tech/tu29.png';
import tech30 from '../img/tech/tu30.png';
import tech31 from '../img/tech/tu31.png';
import tech32 from '../img/tech/tu32.png';
import tech33 from '../img/tech/tu33.png';







import img_round2 from '../img/food/img_round2.png';
import img_round1 from '../img/food/img_round1.png';


import { IoIosPhonePortrait,IoIosMail,IoLogoWhatsapp,IoLogoFacebook } from 'react-icons/io';
import { AiFillGooglePlusCircle,AiOutlineLinkedin } from 'react-icons/ai';

import { TiLocation } from 'react-icons/ti';
import { IoMdMail } from 'react-icons/io';
import { RiWhatsappFill } from 'react-icons/ri';
import { GrGooglePlus,GrLanguage,GrDeliver } from 'react-icons/gr';
import { AiFillYoutube,AiOutlineSkype } from 'react-icons/ai';
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaShuttleVan } from 'react-icons/fa';



import { ImWhatsapp } from 'react-icons/im';
import { GiNoodles } from 'react-icons/gi';
import { FiShoppingCart,FiShoppingBag } from 'react-icons/fi';

import { DiJava,DiJqueryLogo,DiPython,DiDotnet,DiReact,DiMsqlServer,DiAngularSimple,DiJavascript1,DiSwift,DiBootstrap,DiCss3,DiWindows } from 'react-icons/di';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import { DiMongodb,DiHtml5,DiNginx,DiNodejs } from 'react-icons/di';
import { SiAndroidstudio,SiMicrosoftazure,SiUnity,SiCsharp,SiGoogleanalytics,SiKotlin,SiXcode,SiAdobexd,SiSketch,SiAutodesk,SiPhp,SiFlutter,SiAmazonaws } from 'react-icons/si';

import mv_img1 from '../img/food/mv_img1.png';
import mv_img2 from '../img/food/mv_img2.png';
import mv_img3 from '../img/food/mv_img3.png';
import mv_img4 from '../img/food/mv_img4.png';
import mv_img5 from '../img/food/mv_img5.png';
import mv_img6 from '../img/food/mv_img6.png';
import mv_img7 from '../img/food/mv_img7.png';
import wd_1 from '../img/laundry/la_wd_1.png';
import wd_2 from '../img/laundry/la_wd_2.png';
import wd_3 from '../img/laundry/la_wd_3.png';
import ceo from '../img/new/ceo_img.jpeg';
import male from '../img/new/arb_male.png';
import fmale from '../img/new/arb_fmale.png';
import ScrollAnimation from 'react-animate-on-scroll';
import { withTranslation } from 'react-i18next';
class About_Us extends Component{
render(){
  return (
    <div className="App">



<MetaTags>
            <title>{this.props.t("SCOPE_TECH")}</title>
            <meta id="meta-description" name="description" content="world-class IT services to reduce costs, boost productivity & enhance performance. Best marketing agencies in Riyadh, Saudi Arabia. A leader in the field of Information Technology, provides IT consulting services &solutions to diverse businesses in Saudi Arabia & abroad +966 599226961 info@scopetech.sa" />
            <meta id="" property="keywords" content="app development companies in Saudi Arabia, best marketing agencies in Riyadh" />
            
</MetaTags>
    


    	<Nav1/>



    	{/*<div class="container-fluid au_banner">
    		<div class="cs_banner_main" style={{paddingLeft:"0"}}>
          <div class="row">
            <div class="col-md-12">
              <ScrollAnimation animateIn="fadeInLeft" delay="100" duration="1.5"><h1 class="ga_banner_head banner_heading_cnt" style={{paddingBottom:"1%"}}>Scope Tech</h1></ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay="400" duration="1.5"><p class="banner_sub_head_cnt text-center new_abt_cnt">Since our commencement, we have been focused on the services and solutions in Information Technology.</p></ScrollAnimation>
          
            </div>
            <div class="col-md-6 da_banenr_right">
                <img class="img-fluid" id="img_au" src={au_banner_img} style={{width:"65%",paddingTop:"5%"}} />
            </div>
          </div>
         </div>

    	</div>*/}
    	{/*<div class="container au_cont_1">

    		<div class="row au_cont_1_row">
    			<div class="col-md-6 au_cont_1_col_left">
    				<h1 class="text-6 text-center">
             
            <ScrollAnimation animateIn="fadeIn" delay="150"><label class="cont_head_1">About</label><label class="cont_head_2">&nbsp;Us</label></ScrollAnimation>
          </h1>
          <div class="underline_head text-center"></div>
          <h1 class="page_main_head">About Us</h1>
      

					<p class="para_cnt text-cetner abt_main_1cnt" style={{paddingBottom:"0%"}}>We build a team of creatives and techies, working together to empower your business together. We stepped up in 2017and by 2020 we are the best and fastest growing web development company in Saudi Arabia.</p>
          <p class="para_cnt text-cetner abt_main_1cnt" style={{paddingBottom:"0%"}}>Since our commencement, we have been focused on the services and solutions in Information Technology. Over these years, we have developed websites, web applications, mobile applications, digital branding for the startups and enterprises across a wide range of industries.</p>
          <p class="para_cnt text-cetner abt_main_1cnt" style={{paddingBottom:"0%"}}>Our experience has additionally trained us to handle critical situations. Furthermore, it is that our customers are not simply searching for a website may be, they are searching for a channel to develop their commitment with their customers driving a more prominent measure of business profits, and our endeavors were pointed towards it. </p>
          <p class="para_cnt text-cetner abt_main_1cnt" style={{paddingBottom:"0%"}}>Furthermore we have extend our services in web Designing & Development, E-Commerce, Mobile Application Development, Digital Marketing, Data Analysis, Artificial Intelligence, Cybersecurity, Augmented and virtual reality, IOT/IOE Solutions and more</p>
          
					

    			</div>
          <div class="col-md-6 au_cont_1_col_right" style={{margin:"auto"}}>
            <img class="img-fluid" src={au_img_1} />
          </div>
    			
    		</div>

    	</div>*/}

      <div className="main-content-cr">

      <section className="about_us_page">
    	<div className="container">


              <h5 className="page_sub_main_head">{this.props.t("about_us_banner_text")}</h5>
              
              <p className="about_para_cnt">{this.props.t("about_us_text")}</p>

              <h5 className="page_sub_main_head">{this.props.t("vision")}</h5>
              <p className="para_cnt">{this.props.t("vision_text")}</p>


              <h5 className="page_sub_main_head">{this.props.t("mission")}</h5>
              <p className="para_cnt">{this.props.t("mission_text")}</p>


          <div className="text-center mt-5">
          <img src={about_img} />
          </div>


    	</div>
</section>

      {/*
      <div  class="container au_cont_1" style={{paddingTop:"3%"}}>
      <h1 class="text-6 text-center">
             
            <ScrollAnimation animateIn="fadeIn" delay="150"><label class="cont_head_1">Our</label><label class="cont_head_2">&nbsp;Team</label></ScrollAnimation>
          </h1>
          <div class="underline_head text-center"></div>
          
        <div class="row text-center justify-content-center">
          <div class="col-md-3 main_abt_card_col">
            <div class="main_abt_card">

              <img class="img-fluid img_ceo" src={male} />
              <div class="main_abt_card_cnt">
                <div class="ceo_cnt">
                  <h5 class="text-center">Eyad Alalshaikh</h5>
                  <h6 class="text-center">Co-founder</h6>

                </div>

              </div>
            </div>
          </div>
          <div class="col-md-3 main_abt_card_col">
            <div class="main_abt_card">

              
              <img class="img-fluid img_ceo" src={ceo} />
              <div class="main_abt_card_cnt">
                <div class="ceo_cnt">
                  <h5 class="text-center"><label>Eng.</label>Bander Alsanie </h5>
                   <h6 class="text-center">Co-founder  </h6>
                </div>

              </div>
            </div>
          </div>
          <div class="col-md-3 main_abt_card_col">
            <div class="main_abt_card">

              <img class="img-fluid img_ceo" src={fmale} />
              <div class="main_abt_card_cnt">
                <div class="ceo_cnt">
                  <h5 class="text-center">Abeer Alotaibi</h5>
                  <h6 class="text-center">accounting manager  </h6>

                </div>

              </div>
            </div>
          </div>
          
        </div>
        <div class="row text-center justify-content-center">
          <div class="col-md-3 main_abt_card_col">
            <div class="main_abt_card">

              
              <img class="img-fluid img_ceo" src={fmale} />
              <div class="main_abt_card_cnt">
                <div class="ceo_cnt">
                  <h5 class="text-center">Wejdan </h5>
                   <h6 class="text-center">Public Relation Officer</h6>
                </div>

              </div>
            </div>
          </div>
          <div class="col-md-3 main_abt_card_col">
            <div class="main_abt_card">

              <img class="img-fluid img_ceo" src={fmale} />
              <div class="main_abt_card_cnt">
                <div class="ceo_cnt">
                  <h5 class="text-center">Mouna Alrakah</h5>
                  <h6 class="text-center">Accountant</h6>

                </div>

              </div>
            </div>
          </div>
          
          <div class="col-md-3 main_abt_card_col">
            <div class="main_abt_card">

              <img class="img-fluid img_ceo" src={male} />
              <div class="main_abt_card_cnt">
                <div class="ceo_cnt">
                  <h5 class="text-center">Razak</h5>
                  <h6 class="text-center">IT</h6>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div class="container au_cont_3">
    		<h4 class="page_main_head text-center">We have countless reasons for choosing Scope Tech<br/>below are few of them</h4>
    		<div class="row ">
    			<div class="col-md-4" style={{padding:"0"}}>
    				<h5 class="page_sub_main_head">Our Value</h5>
					<ul class="list_style_main">
						<li><label>Technology Upgraded team</label></li>
						<li><label>Transparent workflow</label></li>
						<li><label>On time project delivery</label></li>
						<li><label>Experience</label></li>
						<li><label>Growth</label></li>
						<li><label>Reliable Partnership</label></li>
						<li><label>Customized project development</label></li>

					</ul>
    			</div>
    			<div class="col-md-8" style={{margin:"auto"}}>
    				<img class="img-fluid" src={au_img_2} />
            <img class="img-fluid" src={scp_abt} />

    			</div>
    		</div>

    	</div>*/}
    	{/*<div class="container-fluid au_cont_4">
    		<h4 class="page_main_head">Our Milestones</h4>
    		<div class="row text-center" >
    			<div class="col-md-4 text-center">
    				<div class="circle_count_div text-center"><label>1000+</label></div>
    				<h5>Clients</h5>
    			</div>
    			
    			<div class="col-md-4 text-center">
    				<div class="circle_count_div text-center"><label>3000+</label></div>
    				<h5>Projects</h5>
    			</div>
    			
    			<div class="col-md-4 text-center">
    				<div class="circle_count_div text-center"><label>1100+</label></div>
    				<h5>Happy Customers</h5>
    			</div>
    			

    		</div>
    	</div>
    	<h4 class="au_head page_sub_main_head">We are serving in 10+ countries for  web designing and development,<br/>
 mobile app development and digital Marketing</h4>*/}
    	{/*
      <div class="container" >
        <div class="text-center justify-content-center">
          <h1 class="text-6 page_main_head">
            Technologies We Work With
          </h1>
          <div class="underline_head text-center"></div>
          
        </div>
        <div class="tech_used" style={{padding:"3% 0"}}>
        <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">
          <Tab eventKey="all" title="All">
            <div class="row justify-content-center" style={{padding:"2% 0"}}>
              
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech1} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech2} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech3} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech4} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech5} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech6} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech7} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech8} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech9} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech10} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech11} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech12} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech13} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech15} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech16} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech17} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech19} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech20} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech21} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech22} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech23} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech24} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech25} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech26} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech27} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech28} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech29} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech30} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech31} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech32} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech33} />
                
              </div>
              
            </div>
          </Tab>
          <Tab eventKey="Mobile" title="Mobile">
            <div class="row justify-content-center" style={{padding:"2% 0"}}>
              
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech1} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech9} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech12} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech13} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech19} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech22} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech24} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech26} />
                
              </div>
              
            </div>
          </Tab>
          <Tab eventKey="front_end" title="Front End">
            <div class="row justify-content-center" style={{padding:"2% 0"}}>
              
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech2} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech9} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech10} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech15} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech17} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech20} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech21} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech25} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech28} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech30} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech32} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech33} />
                
              </div>
              
            </div>
          </Tab>
          <Tab eventKey="Database" title="Database">
            <div class="row justify-content-center" style={{padding:"2% 0"}}>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech4} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech11} />
                
              </div>
                            
            </div>
          </Tab>

          <Tab eventKey="backend" title="Backend">
            <div class="row justify-content-center" style={{padding:"2% 0"}}>
              
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech2} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech5} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech6} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech7} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech8} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech9} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech12} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech13} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech19} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech22} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech24} />
                
              </div>
              
              <div class=" col-md-2 " style={{padding:"0"}}>
                    <img class="img-fluid" src={tech26} />
                
              </div>
              
            </div>
          </Tab>
        </Tabs>
        </div>
      </div>

      <Lets/>*/}
      



      </div>

      <Footer/> 
      
    </div>    
  );
}
}

export default withTranslation()(About_Us);
