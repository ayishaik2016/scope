import MetaTags from 'react-meta-tags';
import React, { Component } from 'react';


import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from './nav1.js';


import it_infrastructure from '../img/home/itinfrastructure.png';
import collaboration from '../img/home/collaboration.gif';
import security_system from '../img/home/security-system.gif';
import data_center from '../img/home/data-center.gif';
import data_analysis from '../img/home/data-analysis.gif';
import iot from '../img/home/iot.gif';
import cybersecurity from '../img/home/cybersecurity.png';
import ecommerce from '../img/home/ecommerce.gif';
import integration from '../img/home/integration.gif';

import Footer from './footer.js';

class OurServices extends Component {

	render() {
		return (
			<div className="App">



				<MetaTags>
					<title>Our Solutions | Scope Tech</title>
					<meta id="meta-description" name="description" content="The best IT solution Providers for small business to enterprises. Enterprise software solutions, and related technology service provider. We specialize in providing full scale solutions to complex business problems. +966 599 226 961 info@scopetech.sa" />
					<meta id="" property="keywords" content="software solution company, business IT solution provider" />

				</MetaTags>



				<Nav1 />

				<div class="container-fluid ban_main_cont cu_banner" style={{ height: "200px" }}>
					<div class="row mar_top_30" style={{ width: "100%", paddingLeft: "15%", paddingRight: "15%" }}>
						<div class="col-md-12 text-center mt-5" style={{ margin: "auto" }}>
							<h1 class="banner_heading_cnt text-center" style={{ color: "#fff" }}>Solutions</h1>
						</div>
					</div>
				</div>



 <div id="our-solution" class="container" style={{ padding: "50px 0"}}>
          <div class="row ser-row" style={{ margin: "0" }}>
            <div class="col-md-4 ser-col">
              <div class="ser-blk-main">
                <div>
                  <img src={it_infrastructure} style={{ width: "100%" }} class="img-fluid" />
                </div>
                <div class=" ser-cnt">
                  <h5 class="text-7">
                  IT INFRASTRUCTURE
                  </h5>
                  <p class="text-8">
                    The advancements in Technology opened more sources to handle endless possibilities,as a provider we provide best-in-class service
                    {/*<Link className="nav_link" to={"/Solutions/IOT"}><label class="para_cnt home_sol_more_btn" style={{padding:"0", color:"#522a73"}}>More</label></Link>*/}
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 ser-col">
              <div class="ser-blk-main">
                <div>
                  <img src={security_system} style={{ width: "80%" }} class="img-fluid" />
                </div>
                <div class=" ser-cnt">
                  <h5 class="text-7">SECURITY SYSTEMS</h5>
                  <p class="text-8">We are offering wide and excellent CCTV systems installation, IP surveillance systems, access control and fire alarm to protects your valuables things
                    {/*<Link className="nav_link" to={"/Solutions/AI"}><label class="para_cnt home_sol_more_btn" style={{padding:"0", color:"#522a73"}}>More</label></Link>*/}
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 ser-col">
              <div class="ser-blk-main">
                <div>
                  <img src={integration} style={{ width: "80%" }} class="img-fluid" />
                </div>
                <div class=" ser-cnt">
                  <h5 class="text-7">
                    INTEGRATION 
                  </h5>
                  <p class="text-8">
                    We provide both implementation and advisory services to successfully integrate and manage your information technology
                    <br />
                    {/*<Link className="nav_link" to={"/Service/Mobile_Development"}><label class="para_cnt home_sol_more_btn" style={{padding:"0", color:"#522a73"}}>More</label></Link>*/}
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 ser-col">
              <div class="ser-blk-main">
                <div>
                  <img src={iot} style={{ width: "80%" }} class="img-fluid" />
                </div>
                <div class=" ser-cnt">
                  <h5 class="text-7">IOT/IOE</h5>
                  <p class="text-8">Making homes, business and cities smarter and more connected, convenient and secure, we help you to connect your devices to the embedded technology to increase your productivity and efficiency
                    {/*<Link className="nav_link" to={"/Solutions/AI"}><label class="para_cnt home_sol_more_btn" style={{padding:"0", color:"#522a73"}}>More</label></Link>*/}
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 ser-col">
              <div class="ser-blk-main">
                <div>
                  <img src={data_center} style={{ width: "80%" }} class="img-fluid" />
                </div>
                <div class=" ser-cnt">
                  <h5 class="text-7">DATA CENTER</h5>
                  <p class="text-8">Our data center design solution for organization will include planning,designing, construction,consultation and implementation
                    {/*<Link className="nav_link" to={"/Solutions/Cybersecurity"}><label class="para_cnt home_sol_more_btn" style={{padding:"0", color:"#522a73"}}>More</label></Link>*/}
                  </p>
                </div>
              </div>
            </div>
            
            <div class="col-md-4 ser-col">
              <div class="ser-blk-main">
                <div>
                  <img src={ecommerce} style={{ width: "80%" }} class="img-fluid" />
                </div>
                <div class=" ser-cnt">
                  <h5 class="text-7 ">
                    ECOMMERCE
                  </h5>
                  <p class="text-8">
                  We help you to build your online store's appwith fully support the requirements of your business such asaccounting, marketing, customer service, and other vital functions are absolutely necessary for the maintenance and continued growth of your business
                  </p>

                </div>
              </div>
            </div>

            <div class="col-md-4 ser-col">
              <div class="ser-blk-main">
                <div>
                  <img src={collaboration} style={{ width: "80%" }} class="img-fluid" />
                </div>
                <div class=" ser-cnt">
                  <h5 class="text-7">
                    COLLABORATION AND COMMUNICATION
                  </h5>
                  <p class="text-8">
                    We deliver tailored end-to-end consulting, deployment and managed services such as messaging, File sharing, VOIP andvideo conference to empower businesses and enable their digital workplace transformation
                    {/*<Link className="nav_link" to={"/Solutions/AR_VR"}><label class="para_cnt home_sol_more_btn" style={{padding:"0", color:"#522a73"}}>More</label></Link>*/}
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 ser-col">
              <div class="ser-blk-main">
                <div>
                  <img src={data_analysis} style={{ width: "80%" }} class="img-fluid" />
                </div>
                <div class=" ser-cnt">
                  <h5 class="text-7">
                    DATA ANALYSIS
                  </h5>
                  <p class="text-8">
                    We Deliver the solutions for analyzing large, complex data sets quickly, easily and with absolute accuracy to make a strong and right decision for your business
                    {/*<Link className="nav_link" to={"/Solutions/AR_VR"}><label class="para_cnt home_sol_more_btn" style={{padding:"0", color:"#522a73"}}>More</label></Link>*/}
                  </p>
                </div>
              </div>
            </div>
            
            <div class="col-md-4 ser-col">
              <div class="ser-blk-main">
                <div>
                  <img src={cybersecurity} style={{ width: "80%" }} class="img-fluid" />
                </div>
                <div class=" ser-cnt">
                  <h5 class="text-7">CYBERSECURITY</h5>
                  <p class="text-8">We design applications that have highest protection of data and systems. We are always on the pulse of current updates in cybersecurity services. This allows us to understand and bring the critical infrastructure and security policies to your organization
                    {/*<Link className="nav_link" to={"/Solutions/Cybersecurity"}><label class="para_cnt home_sol_more_btn" style={{padding:"0", color:"#522a73"}}>More</label></Link>*/}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>



		
				
				<Footer/> 
			</div>
		);
	}
}

export default OurServices;
