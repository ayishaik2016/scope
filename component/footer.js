// import logo from './logo.svg';
import '../App.css';
import '../footer_ani.compiled.css';
import React, { Component, useEffect, useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import ScrollAnimation from 'react-animate-on-scroll';
// import "animate.css/animate.min.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactDOM from 'react-dom';
import pdf from '../img/new/scopetech-2023.pdf';
import profilePdf from '../img/new/profile.pdf';

import img1 from '../img/abt-main.png';
import img2 from '../img/data_ana.gif';
import img3 from '../img/appli.gif';
import img4 from '../img/iot.gif';
import img5 from '../img/vr.gif';
import img6 from '../img/ai2.gif';
import img7 from '../img/cyber.gif';
import img8 from '../img/react2.gif';
import img9 from '../img/android2.png';
import img10 from '../img/iphone2.png';
import img11 from '../img/aw1.png';
import img12 from '../img/aw2.png';
import img13 from '../img/aw3.png';
import img14 from '../img/aw4.png';
import img15 from '../img/partner1.png';
import img16 from '../img/partner2.png';
import img17 from '../img/partner3.png';
import img18 from '../img/partner4.png';
import work1 from '../img/work_1.png';
import work2 from '../img/work_2.png';
import work3 from '../img/work_3.png';
import work4 from '../img/work_4.png';
import login_img_1 from '../img/login_img_1.png';
import Lets from './lets.js';

import work4_bg from '../img/work_4_bg.png';
import work3_bg from '../img/work_3_bg.png';
import work2_bg from '../img/work_2_bg.png';
import work1_bg from '../img/work_1_bg.png';


import logo from '../img/logo_scp.png';
import Nav1 from './nav1.js';
// import bg_footer from'./img/footer_bg.png';
import OwlCarousel from '@ntegral/react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { TiLocation } from 'react-icons/ti';
import { IoMdMail } from 'react-icons/io';
import { RiWhatsappFill } from 'react-icons/ri';
import { GrGooglePlus, GrLanguage, GrDeliver } from 'react-icons/gr';
import { AiFillYoutube, AiOutlineSkype } from 'react-icons/ai';
import { FaBehance, FaFacebookF, FaTwitter, FaLinkedinIn, FaShuttleVan } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';

import YoutubeBackground from 'react-youtube-background'
//import vid_1 from '../img/vid_main3.mp4';


import { ImWhatsapp } from 'react-icons/im';
import { GiNoodles } from 'react-icons/gi';
import { FiShoppingCart, FiShoppingBag } from 'react-icons/fi';

import { DiJava, DiJqueryLogo, DiPython, DiDotnet, DiReact, DiMsqlServer, DiAngularSimple, DiJavascript1, DiSwift, DiBootstrap, DiCss3, DiWindows } from 'react-icons/di';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import { DiMongodb, DiHtml5, DiNginx, DiNodejs } from 'react-icons/di';
import { SiAndroidstudio, SiMicrosoftazure, SiUnity, SiCsharp, SiGoogleanalytics, SiKotlin, SiXcode, SiAdobexd, SiSketch, SiAutodesk, SiPhp, SiFlutter, SiAmazonaws } from 'react-icons/si';
import { useTranslation } from 'react-i18next';
function Footer1() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {t}=useTranslation();
  return (
    <div className="App">

      <footer class="footer_main">
        {/*<div class="container-fluid footer_fixed_social_link_main app_ani">
          <h1>Scope Tech has helped our clients Grow
          </h1>
          <p>Are you ready to scale up and grow your business together? Let’s Talk! 
          </p>  
          <div class="f_contact">
            <a href="https://web.whatsapp.com/send?phone=+966599226961&amp;text=Hi" title="WhatsApp Your Requirement"  class="btn" target="_blank">
                <i class="fa fa-whatsapp"></i>+966599226961                <span class="">Chat with us</span>
            </a>
            <a href="skype:Scope_Tech?call" title="Call us using Skype" class="btn skype">
                <i class="fa fa-skype"></i>sales@Scope Tech 
                <span>Speak to us</span>
            </a>
            
            </div>
          <div class="boxes_ani">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

        </div>
        
*/}



        <div class="site_footer full_row">
          <div class="container footer_menu">
            <div class="row">
              {/* <div class="col-md-6">
              <h3>Services</h3>
              <ul class="reset">
                  
                <li><Link className="" to={"/Service/UI-UX"} style={{color:"inherit"}}>Designing</Link></li>
                
                <li><Link className="" to={"/Service/Web_Development"} style={{color:"inherit"}}>Developing</Link></li>
                <li><Link className="" to={"/Service/SEO"} style={{color:"inherit"}}>Digital Marketing</Link></li>
                <li><Link className="" to={"/Service/Technical_Support"} style={{color:"inherit"}}>Supporting</Link></li>    
              </ul>
            </div>  */}

              <div class="col-md-3">
                <h3>{t("company")}</h3>
                <ul class="reset">
                  <li><Link className="" to={"/About_Us"} style={{ color: "inherit" }}>{t("about_us")}</Link></li>
                  <li><Link className="" to={"/Careers"} style={{ color: "inherit" }}>{t("careers")}</Link></li>
                  
                </ul>
              </div>

              <div class="col-md-3">
                <h3>{t("resource")}</h3>
                <ul class="reset">
                  <li><a class="banner-a-set" href={profilePdf} target="_blank" style={{ color: "inherit" }}>{t("get_our_profile")}</a></li>
                  <li><Link className="" style={{ color: "inherit" }}>{t("coop_Program")}</Link></li>
                </ul>
              </div>


              {/*<div class="col-md-3">
                <h3>Mobile Services</h3>
                <ul class="reset">
  <li><Link className="" to={"/Service/Mobile_Development"} style={{color:"inherit"}}>Android Application</Link></li>
  <li><Link className="" to={"/Service/Mobile_Development"} style={{color:"inherit"}}>iOS Application</Link></li>
  <li><Link className="" to={"/Service/Mobile_Development"} style={{color:"inherit"}}>React Native Application</Link></li>                </ul>
            </div> 

            <div class="col-md-3 product_menu">
                <h3>Products</h3>
                <ul class="reset">
                    
  <li><Link className="" to={"/Eatiok"} style={{color:"inherit"}}>Eatiok</Link></li>
  <li><Link className="" to={"/Fresh_Grocery"} style={{color:"inherit"}}>Fresh Grocery</Link></li>
  <li><Link className="" to={"/Laundry"} style={{color:"inherit"}}>Laundry</Link></li>
  </ul>
</div> */}


              <div class="col-md-3 contact">
                <h3>{t("contact_us")}</h3>
                <ul class="reset">
                  <li class="phone">
                    <span>{t("client_address1")}</span>
                    <span>{t("client_address2")}</span>
                  </li>
                  <li>
                    <span>{t("email")}: <a href={t("client_email")} style={{ color: "inherit" }} target="_blank">{t("client_email")}</a></span>
                  </li>
                  <li>
                    <span>{t("Whatsapp")}: <a href="https://web.whatsapp.com/send?phone=+966599226961&amp;text=Hi" style={{ color: "inherit" }} target="_blank">(+966) 599-226-961</a></span>
                  </li>
                  {/* <li>
                    <span>{t("phone")}: <a href={`tel:${t("client_phone")}`} style={{ color: "inherit" }} className="rtl_number" target="_blank">{t("client_phone")}</a></span>
                  </li> */}
                  {/* <li>
                    <span>{t("phone")}: <a href={`tel:920012265`} style={{ color: "inherit" }} className="rtl_number" target="_blank">920012265</a></span>
                  </li> */}
                  {/* <li>
                    <i class="fa fa-whatsapp"></i>
                    <a href="https://web.whatsapp.com/send?phone=+966599226961&amp;text=Hi" style={{ color: "inherit" }} target="_blank">(+966) 599-226-961</a>
                  </li>
                  <li>
                    <i class="fa fa-globe"></i>
                    <a href="www.Scope Tech.sa" style={{ color: "inherit" }} target="_blank">www.Scope Tech.sa</a>
                  </li>
                  <li class="phone">
                    <i class="fa fa-envelope-o"></i>
                    <a href="mailto:info@Scope Tech.sa" style={{ color: "inherit" }} target="_blank">info@Scope Tech.sa</a>
                  </li> */}
                </ul>
              </div>
              <div class="col-md-3 follow-us">

                <h3>{t("follow_us")}</h3>
                <ul class="reset">
                  <li class="social">
                    <a href="https://www.facebook.com/scope.technol" title="Facebook" target="_blank"><i class="fa fa-facebook"></i></a>
                    <a href="https://www.instagram.com/scope.tech/" title="Instagrem" target="_blank"><i class="fa fa-instagram"></i></a>
                    <a href="https://twitter.com/Scope_Tech" title="Twitter" target="_blank"><i class="fa fa-twitter"></i></a>
                    {/* <a href="https://web.whatsapp.com/send?phone=+966599226961&amp;text=Hi" title="Whatsapp" target="_blank"><i class="fa fa-whatsapp"></i></a> */}
                    {/* <a href="https://www.linkedin.com/company/Scope Tech/mycompany/?viewAsMember=true" title="Linkedin" target="_blank"><i class="fa fa-linkedin"></i></a> */}
                    <a href="https://www.behance.net/Scope Tech" title="Behance" target="_blank"><i class="fa fa-behance"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="copyright">
            <div class="container">
              {/* <ul class="reset">
                <Link className="" to={"/About_Us"}>About Us</Link>

                <Link className="nav_link" to={"/Login"}>Login</Link>
                <Link className="nav_link footer_link_cnt_last" to={"/Contact_Us"}>Contact Us</Link>

                <li class="social">
                  <a href="https://www.facebook.com/scope.technol" title="Facebook" target="_blank"><i class="fa fa-facebook"></i></a>
                  <a href="https://www.instagram.com/scope.tech/" title="Instagrem" target="_blank"><i class="fa fa-instagram"></i></a>
                  <a href="https://twitter.com/Scope_Tech" title="Twitter" target="_blank"><i class="fa fa-twitter"></i></a>

                  <a href="https://www.linkedin.com/company/Scope Tech/mycompany/?viewAsMember=true" title="Linkedin" target="_blank"><i class="fa fa-linkedin"></i></a>
                  <a href="https://www.behance.net/Scope Tech" title="Behance" target="_blank"><i class="fa fa-behance"></i></a>
                </li>
              </ul> */}
              <hr></hr>
              <p class="full_row text-center">© 2024 Scope Tech {t('all_rights_reserved')}.</p>
            </div>
          </div>

        </div>










        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div class="row">
              <div class="col-md-6">
                <img class="img-fluid " src={login_img_1} />
              </div>
            </div>
          </Modal.Body>

        </Modal>
      </footer>
    </div>

  );

}

export default Footer1;
