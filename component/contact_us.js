import MetaTags from 'react-meta-tags';
import React, { Component, setState } from 'react';
import emailjs from 'emailjs-com';

import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from './nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ga_ca_1 from '../img/laundry/la_ca_1.png';
import ga_ca_2 from '../img/laundry/la_ca_2.png';
import ga_ca_3 from '../img/laundry/la_ca_3.png';
import $ from 'jquery';
import ga_ca_4 from '../img/laundry/la_ca_4.png';
import ga_ca_5 from '../img/laundry/la_ca_5.png';
import ga_ca_6 from '../img/laundry/la_ca_6.png';
import ga_ca_7 from '../img/laundry/la_ca_7.png';

import ga_da_1 from '../img/laundry/la_da_1.png';
import ga_da_2 from '../img/laundry/la_da_2.png';
import ga_da_3 from '../img/laundry/la_da_3.png';

import ga_da_4 from '../img/laundry/la_da_4.png';
import ga_da_5 from '../img/laundry/la_da_5.png';
import ga_da_6 from '../img/laundry/la_da_6.png';
import ga_da_7 from '../img/laundry/la_da_7.png';

import img_round2 from '../img/food/img_round2.png';
import img_round1 from '../img/food/img_round1.png';

import fire from '../firebase.js';
// import ReactDOM from 'react-dom';
import firebase from "firebase";

import { IoIosPhonePortrait, IoIosMail, IoLogoWhatsapp, IoLogoFacebook } from 'react-icons/io';
import { AiFillGooglePlusCircle, AiOutlineLinkedin } from 'react-icons/ai';
import { FiGlobe, FiInstagram, FiYoutube } from 'react-icons/fi';


import mv_img1 from '../img/food/mv_img1.png';
import cu_banner_img from '../img/cu_banner_img.png';
import mv_img2 from '../img/food/mv_img2.png';
import mv_img3 from '../img/food/mv_img3.png';
import mv_img4 from '../img/food/mv_img4.png';
import mv_img5 from '../img/food/mv_img5.png';
import mv_img6 from '../img/food/mv_img6.png';
import mv_img7 from '../img/food/mv_img7.png';
import wd_1 from '../img/laundry/la_wd_1.png';
import wd_2 from '../img/laundry/la_wd_2.png';
import wd_3 from '../img/laundry/la_wd_3.png';
import ScrollAnimation from 'react-animate-on-scroll';

import Footer from './footer.js';
import { withTranslation } from 'react-i18next';
class Contact_Us extends Component {

	componentDidMount() {

		$(window).scroll(function () {
			var scroll = $(window).scrollTop();

			if (scroll >= 700) {
				$("#logo_img").addClass("logo_img_scroll");
				$("#logo_img").removeClass("logo_img");
				$("#header_main").addClass("header_main_scroll");
				$("#header_main").removeClass("header_main");
				// alert("if");
			} else {
				$("#logo_img").removeClass("logo_img_scroll");
				$("#logo_img").addClass("logo_img");
				$("#header_main").removeClass("header_main_scroll");
				$("#header_main").addClass("header_main");

				// alert("else");
			}
		});
	}

	contus() {
		var fname = document.getElementById("fname").value;
		var lname = document.getElementById("lname").value;
		var mail = document.getElementById("mail").value;
		var pnum = document.getElementById("pnum").value;
		var cname = document.getElementById("cname").value;
		var message = document.getElementById("message").value;
		//let temp;
		var cb = document.getElementsByClassName("cb_work");


		/*if(cb[0].checked==true || cb[1].checked==true || cb[2].checked==true || cb[3].checked==true || cb[4].checked==true){
			 temp=[];
		for(var i=0; i<cb.length; i++){
			if(cb[i].checked){
			temp.push(cb[i].value);
		}
			// alert(cb[i].value);
		}
	}
	else{
		alert("Select Your Interest");
		return false;
	}*/
		var d = new Date();
		var dd = d.getDate();


		var mm = d.getMonth();
		var yy = d.getFullYear();
		var hr = d.getHours();
		var min = d.getMinutes();
		var sec = d.getSeconds();
		var id = dd + "" + mm + "" + yy + "" + hr + "" + min + "" + sec;
		var date = dd + "/" + mm + "/" + yy;

		firebase.database().ref().child('contactus').push(
			{
				// name:name,

				id: id,
				fname: fname,
				lname: lname,
				mail: mail,
				pnum: pnum,
				subject: cname,
				message: message
				//  interest:temp

			}


		)

		setTimeout(() => { window.location.reload(); }, 500);
	}

	sendEmail(e) {
		e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
	
		// emailjs.sendForm('service_2obduvb', 'template_0csbqzd', e.target, '2L0OGAgzPp9jgsolL')
		emailjs.sendForm('service_q0xrd8n', 'template_lg42oob', e.target, '2KvT_XkjQ34Ukuqo1')
		  .then((result) => {
			//console.log(result);
			alert('Thanks for your feedback, will check and update back');
			window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
		  }, (error) => {
			  console.log(error.text);
		  });
	  }

	render() {
		return (
			<div className="App">



				<MetaTags>
					<title>{this.props.t("SCOPE_TECH")}</title>
					<meta id="meta-description" name="description" content="The best IT solution Providers for small business to enterprises. Enterprise software solutions, and related technology service provider. We specialize in providing full scale solutions to complex business problems. +966 599 226 961 info@scopetech.sa" />
					<meta id="" property="keywords" content="software solution company, business IT solution provider" />

				</MetaTags>






				<Nav1 />

				<div className="main-content-cr">

								<section className="sub_banners_page">
					<div className="container">
						<h1>{this.props.t("contact_us_banner_text")}</h1>
					</div>
				</section>

				{/*<div class="container-fluid ban_main_cont cu_banner" style={{ height: "200px" }}>
					<div class="row mar_top_30" style={{ width: "100%", paddingLeft: "15%", paddingRight: "15%" }}>
						<div class="col-md-12 text-center mt-5" style={{ margin: "auto" }}>
							<h1 class="banner_heading_cnt text-center" style={{ color: "#fff" }}>{this.props.t("contact_us_banner_text")}</h1>
							
							<p class="banner_sub_head_cnt">Eminent Web and Mobile app development company offering software solutions drawing for multiple industry verticals.
							</p>
							
						</div>
					</div>
				</div>
				*/}

				{/*<div class="container-fluid cu_banner">
    	<div class="cs_banner_main">
      <div class="row">
            <div class="col-md-6">
              <ScrollAnimation animateIn="fadeInLeft" delay="100" duration="1.5"><h1 class="ga_banner_head">Contact Us</h1></ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay="400" duration="1.5"><p class="banner_sub_head_cnt">Eminent Web and Mobile app development company offering software solutions drawing for multiple industry verticals.
</p></ScrollAnimation>
          
            </div>
            <div class="col-md-6 da_banenr_right">
                <img class="img-fluid " style={{width:"100%"}} id="img_da" src={cu_banner_img} />
            </div>
          </div>
         </div>
    		
    	</div>*/}
				<div class="container cu_cont_1">

					<div class="row">
						<div class="col-md-6" style={{ paddingBottom: "5%" }}>
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.3090725458687!2d46.703610015001374!3d24.784868084089645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efd922c47a5b3%3A0x129104d105af5269!2sScope%20Technologies!5e0!3m2!1sen!2sin!4v1615467830533!5m2!1sen!2sin" width="100%" height="410px" style={{ border: "0" }} allowfullscreen="" loading="lazy"></iframe>

							{/* <div class="row main_add_cnt">
								<div class="col-md-6">
									<p>Address</p>
									<a href="https://g.page/scope-technol?share" style={{ color: "inherit" }} target="_blank"><p class="address_main">Exit 7, Northern Ring Road.<br />Riyadh, Saudi Arabia.</p></a>
								</div>
								<div class="col-md-6">*}
									{/* <a href="tel:+966599226961" style={{ color: "inherit" }} target="_blank"><p class=""><IoIosPhonePortrait className="left_icon_cu_1" /><label>&nbsp;(+966) 599-226-961</label></p></a> */}
									{/* <a href="www.Scope Tech.sa" style={{ color: "inherit" }} target="_blank"><p class=""><FiGlobe className="left_icon_cu_2" /><label>&nbsp;www.Scope Tech.sa</label></p></a>
									<a href="mailto:info@Scope Tech.sa" style={{ color: "inherit" }} target="_blank"><p class=""><IoIosMail className="left_icon_cu_2" /><label>&nbsp;info@Scope Tech.sa</label></p></a> */}
									{/* <a style={{ color: "inherit" }} href="https://web.whatsapp.com/send?phone=+966599226961&amp;text=Hi" target="_blank"><p class=""><IoLogoWhatsapp className="left_icon_cu_3" /><label>&nbsp;(+966) 599-226-961</label></p></a> */}
									{/*<p class="">Follow Us:<a href="https://www.facebook.com/scope.technol" style={{ color: "inherit" }} target="blank">
										<label class="social_icon_cu"><IoLogoFacebook className="left_icon_cu_4" /></label></a>
										<label class="social_icon_cu"><FiInstagram className="left_icon_cu_5" /></label>
										<label class="social_icon_cu"><AiOutlineLinkedin className="left_icon_cu_6" /></label>
										<label class="social_icon_cu"><FiYoutube className="left_icon_cu_6" /></label>
									</p>*/}

								{/*</div>
							</div> */}
						</div>
						<div class="col-md-6">
							<form onSubmit={this.sendEmail}>

								<div class="input-group mb-2" style={{ display: "none"}}>
									<div class="input-group-prepend">
										<div class="input-group-text">{this.props.t("contact_us")}</div>
									</div>
									<input type="text" class="form-control email_text_box" readonly="true" style={{ background: "transparent" }} id="" placeholder="" />
								</div>

								<div class="row">
									<div class="col-md-12 text-left" style={{ paddingTop: "4%" }}>
										<input type="text" id="name" name="name" placeholder={`${this.props.t("name")}*`} class="text_box_cu" required />
									</div>
									{/*<div class="col-md-6 text-left" style={{ paddingTop: "4%" }}>
										<input type="text" id="lname" name="last_name" placeholder="Last Name" class="text_box_cu" />
									</div>*/}
								</div>
								<div class="row">
									<div class="col-md-6 text-left" style={{ paddingTop: "4%" }}>
										<input type="text" id="mail" name="email" placeholder={`${this.props.t("email_adrees")}*`} class="text_box_cu" required />
									</div>
									<div class="col-md-6 text-left" style={{ paddingTop: "4%" }}>
										<input type="text" id="pnum" name="phone_number" placeholder={`${this.props.t("mobile_number")}*`} class="text_box_cu" required />
									</div>
								</div>
								<div class="row">
									<div class="col-md-12 text-left" style={{ paddingTop: "4%" }}>
										<input type="text" id="cname" name="subject" placeholder={`${this.props.t("subject")}*`} class="text_box_cu" required/>
									</div>
								</div>
								<div class="cont_us_cnt">
									{/*<h5 class="text-left">I'm interested in</h5>

					    <div class="row">
					    	<div class="col-md-4 text-left" style={{paddingTop:"2%"}}>
					    		<div class="form-group row">
								    
								    <div class="col-sm-12">
								      <div class="form-check">
								        <input class="form-check-input cb_work" value="Android Development" type="checkbox" id="gridCheck1" />
								        <label class="form-check-label cu_label_cnt" for="gridCheck1">
								          Android Development
								        </label>
								      </div>
								    </div>
								  </div>
					    	</div>
					    	<div class="col-md-4 text-left" style={{paddingTop:"2%"}}>
					    		<div class="form-group row">
								    
								    <div class="col-sm-12">
								      <div class="form-check">
								        <input class="form-check-input cb_work" value="IOT Development" type="checkbox" id="gridCheck1" />
								        <label class="form-check-label cu_label_cnt" for="gridCheck1">
								          IOT Development
								        </label>
								      </div>
								    </div>
								  </div>
					    	</div>
					    	<div class="col-md-4 text-left" style={{paddingTop:"2%"}}>
					    		<div class="form-group row">
								    
								    <div class="col-sm-12">
								      <div class="form-check">
								        <input class="form-check-input cb_work" value="UI/UX Design" type="checkbox" id="gridCheck1" />
								        <label class="form-check-label cu_label_cnt" for="gridCheck1">
								          UI/UX Design
								        </label>
								      </div>
								    </div>
								  </div>
					    	</div>
					    	<div class="col-md-4 text-left" style={{paddingTop:"2%"}}>
					    		<div class="form-group row">
								    
								    <div class="col-sm-12">
								      <div class="form-check">
								        <input class="form-check-input cb_work" value="Ecommerce Solution" type="checkbox" id="gridCheck1" />
								        <label class="form-check-label cu_label_cnt" for="gridCheck1">
								          Ecommerce Solution
								        </label>
								      </div>
								    </div>
								  </div>
					    	</div>
					    	<div class="col-md-4 text-left" style={{paddingTop:"2%"}}>
					    		<div class="form-group row">
								    
								    <div class="col-sm-12">
								      <div class="form-check">
								        <input class="form-check-input cb_work" value="Web Application" type="checkbox" id="gridCheck1" />
								        <label class="form-check-label cu_label_cnt" for="gridCheck1">
								          Web Application
								        </label>
								      </div>
								    </div>
								  </div>
					    	</div>
					    	
					</div>*/}

									<div class="row">
										<div class="col-md-12 text-left" style={{ paddingTop: "4%" }}>
											<textarea placeholder={`${this.props.t("message")}*`} name="message" id="message" class="text_box_cu" required></textarea>
										</div>
									</div>
									<div class="text-right cont_us_submit">
										<button type="submit" class="home-btn-1 text-right">
											{this.props.t("send_maessage")}
										</button>
									</div>


								</div>

							</form>
						</div>
					</div>

				</div>

				</div>
				
				
				<Footer/> 
			</div>
		);
	}
}

export default withTranslation()(Contact_Us);
