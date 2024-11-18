import MetaTags from 'react-meta-tags';
import React, { Component } from 'react';


import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from './nav1.js';



import developing from '../img/home/developing.gif';
import networking from '../img/home/networking.gif';
import supporting from '../img/home/supporting.gif';
import consulting from '../img/home/consulting.gif';




import Footer from './footer.js';

class OurServices extends Component {

	render() {
		return (
			<div className="App">



				<MetaTags>
					<title>Our Services | Scope Tech</title>
					<meta id="meta-description" name="description" content="The best IT solution Providers for small business to enterprises. Enterprise software solutions, and related technology service provider. We specialize in providing full scale solutions to complex business problems. +966 599 226 961 info@scopetech.sa" />
					<meta id="" property="keywords" content="software solution company, business IT solution provider" />

				</MetaTags>



				<Nav1 />

				<div class="container-fluid ban_main_cont cu_banner" style={{ height: "200px" }}>
					<div class="row mar_top_30" style={{ width: "100%", paddingLeft: "15%", paddingRight: "15%" }}>
						<div class="col-md-12 text-center mt-5" style={{ margin: "auto" }}>
							<h1 class="banner_heading_cnt text-center" style={{ color: "#fff" }}>Services</h1>
							{/*
							<p class="banner_sub_head_cnt">Eminent Web and Mobile app development company offering software solutions drawing for multiple industry verticals.
							</p>
							*/}
						</div>
					</div>
				</div>




        <div id="our-service" class="container mobile-main" >
          <div class="row" style={{ margin: "0", paddingBottom: "30px"}}>
            <div class="col-md-6  text-left">
              <div class="row" style={{ margin: "0" }}>
                <div class="col-md-6  text-right ser-col left-img">
                  <div>
                    <img src={developing} class="img-fluid" />
                  </div>
                </div>
                <div class="col-md-6  text-left ser-col right-cnt">
                  <div class="" >
                    <h5 class="page_sub_main_head">Developing</h5>
                    <p class="para_cnt">We turn your ideas into amazing digital experience. We build Tailor made applications based on the customer needs using latest technologies
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6  text-right">
              <div class="row" style={{ margin: "0" }}>
                <div class="col-md-6  text-right ser-col left-cnt">
                  <div class="" >
                    <h5 class="page_sub_main_head">Networking</h5>
                    <p class="para_cnt">We advise, implement, build, support, and manage every aspect of enterprise networks from access to wide area networks, data center to cloud networking. Take your business to the edge with future-forward solutions
                    </p>
                  </div>
                </div>
                <div class="col-md-6  text-left ser-col right-img">
                  <div>
                    <img src={networking} class="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6  text-left">
              <div class="row" style={{ margin: "0" }}>
                <div class="col-md-6  text-left ser-col right-cnt">
                  <div class="" >
                    <h5 class="page_sub_main_head">Supporting</h5>
                    <p class="para_cnt">Contributing to the success of our customers by providing IT onsite and remote support and outsourcing services that help them achieve digital transformation and guarantee business continuity
                    </p>
                  </div>
                </div>
                <div class="col-md-6  text-right ser-col left-img">
                  <div>
                    <img src={supporting} class="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6  text-right">
              <div class="row" style={{ margin: "0" }}>
                <div class="col-md-6  text-right ser-col left-img">
                  <div>
                    <img src={consulting} class="img-fluid" />
                  </div>
                </div>
                <div class="col-md-6  text-left ser-col right-cnt">
                  <div class="" >
                    <h5 class="page_sub_main_head">Consulting</h5>
                    <p class="para_cnt">We provide expert advice to help you plan the next steps for your business<br />
                    </p>
                  </div>
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
