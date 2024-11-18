// import logo from './logo.svg';
import '../App.css';
import '../pre_load.js';
import React,{ Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import ScrollAnimation from 'react-animate-on-scroll';
// import "animate.css/animate.min.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import $ from 'jquery';

import logo from'../logo.png';
import { TiLocation } from 'react-icons/ti';
import { IoMdMail,IoLogoCodepen } from 'react-icons/io';
import { RiWhatsappFill } from 'react-icons/ri';
import { GrGooglePlus,GrLanguage,GrDeliver } from 'react-icons/gr';
import { AiFillYoutube } from 'react-icons/ai';
import { FaBlenderPhone,FaFacebookF,FaTwitter,FaLinkedinIn,FaShuttleVan } from 'react-icons/fa';
import { ImVideoCamera } from 'react-icons/im';
import { GiNoodles } from 'react-icons/gi';
import { CgIfDesign } from 'react-icons/cg';
import { BiCodeCurly,BiSupport } from 'react-icons/bi';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { RiFileSearchLine } from 'react-icons/ri';
import { MdLocalLaundryService } from 'react-icons/md';

import { FiShoppingCart,FiShoppingBag } from 'react-icons/fi';

import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom';

import Lets from './lets.js';
import nav_img1 from '../img/nav_img1.png';
import nav_img2 from '../img/nav_img2.png';
import nav_img3 from '../img/nav_img3.png';
import nav_img4 from '../img/nav_img4.png';
import nav_sol1 from '../img/nav_sol1.gif';
import nav_sol2 from '../img/nav_sol2.png';
import nav_sol3 from '../img/nav_sol3.png';
import nav_sol4 from '../img/nav_sol4.png';
import nav_sol5 from '../img/nav_sol5.png';
import nav_sol6 from '../img/nav_sol6.png';
import img_round1 from '../img/food/img_round1.png';
import { useTranslation } from 'react-i18next';



const Nav1=()=>{
  const { i18n ,t} =useTranslation();

  const onlanguageChange=(e)=>{
     e.preventDefault()
    let lng=e.currentTarget.textContent; 
     i18n.changeLanguage(lng);
   }

  return (
    <div className="App">
    
      
    	<Navbar id="header_main" expand="lg">
      <div className="container">
        <img  class="img-fluid logo_img" id="logo_img" src={logo} />

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className=" justify-content-end" id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link><Link className="nav_link" to={"/"}><label class="cool-link">{t('home')}</label></Link></Nav.Link>
            <Nav.Link href="/#our-services"><a className="nav_link"><label class="cool-link">{t("Service")}</label></a></Nav.Link>
            <Nav.Link href="/#our-solutions" className="nav_link solution_nav link_label"><a className="nav_link"><label class="cool-link">{t('solutions')} </label></a>


            {/*

       <Nav.Link className="nav_link_drop nav_link_drop_new" style={{position:"relative"}}><label class="cool-link">Hire Developers</label>
              <ul class=" drop_nav_new text-left scaleY" style={{paddingLeft:"2%",paddingRight:"2%"}}>
              <li class="nav_drop_list_new">
              <Link className="nav_link" to={"/dot-net-developers"}><label class="nav_drop_cnt_new">.Net</label></Link>
              </li>
              <li class="nav_drop_list_new">
            <Link className="nav_link" to={"/nodejs-developer"}><label class="nav_drop_cnt_new">Node Js</label></Link>
                </li>

              <li class="nav_drop_list_new">
            <Link className="nav_link" to={"/react-native-developer"}><label class="nav_drop_cnt_new">React Native</label></Link>
                </li>
              <li class="nav_drop_list_new">
            <Link className="nav_link" to={"/react-js-developers"}><label class="nav_drop_cnt_new">React</label></Link>
                </li>
              <li class="nav_drop_list_new">
            <Link className="nav_link" to={"/php-developers"}><label class="nav_drop_cnt_new">PHP</label></Link>
                </li>
              <li class="nav_drop_list_new">
            <Link className="nav_link" to={"/android-developers"}><label class="nav_drop_cnt_new">Android</label></Link>
                </li>
              <li class="nav_drop_list_new">
            <Link className="nav_link" to={"/ios-developers"}><label class="nav_drop_cnt_new">iOS</label></Link>
                </li>

              <li class="nav_drop_list_new">
            <Link className="nav_link" to={"/graphic-designer"}><label class="nav_drop_cnt_new">Graphic Designer</label></Link>
                </li>

              </ul>
            </Nav.Link>

            */}



            {/*
            <Nav.Link  href="/#home" className="nav_link service_nav link_label"><label><label class="cool-link ">Service</label></label>

              <ul class="drop_nav_new text-left scaleY">
                <li class="nav_drop_list_new"><label class="nav_drop_cnt_new">Designing</label>
                  <a class="nav_drop_btn"></a>
                  <ul class="drop_drop_sub_new text-left scaleY" >
                    <li class="" ><Link className="nav_link" to={"/Service/UI-UX"}><label>UI/UX</label></Link></li>
                    
                    <li class=""><Link className="nav_link" to={"/Service/Graphic_design"}><label>Graphics Design</label></Link></li>
                    

                  </ul>
                </li>
                


                <li class="nav_drop_list_new"><label class="nav_drop_cnt_new">Developing</label>
                <a class="nav_drop_btn"></a>
                  <ul class="drop_drop_sub_new text-left scaleY">
                    <li class=""><Link className="nav_link" to={"/Service/Web_Development"}><label>Web Development</label></Link></li>
                    <li class=""><Link className="nav_link" to={"/Service/Mobile_Development"}><label>Mobile Development</label></Link></li>
                    <li class=""><Link className="nav_link" to={"/Service/Web_Portal"}><label>Web Portal Development</label></Link></li>
                    

                  </ul>
                </li>
                


                <li class="nav_drop_list_new"><label class="nav_drop_cnt_new">Digital Marketing</label>
                <a class="nav_drop_btn"></a>
                  <ul class="drop_drop_sub_new text-left scaleY">
                    <li class=""><Link className="nav_link" to={"/Service/SEO"}><label>SEO</label></Link></li>
                    <li class=""><Link className="nav_link" to={"/Service/SMM"}><label>SMM</label></Link></li>
                    <li class=""><Link className="nav_link" to={"/Service/SEM"}><label>SEM</label></Link></li>
                    

                  </ul>
                </li>
                



                <li class="nav_drop_list_new"><Link className="nav_link" to={"/Service/Technical_Support"}><label class="nav_drop_cnt_new">Supporting</label></Link>
                
                </li>
                
                

                

              </ul>
             
            </Nav.Link>
             */}

            

              {/*<ul class="drop_nav_new text-left scaleY" style={{paddingLeft:"2%",paddingRight:"2%"}}>
                <li class="nav_drop_list_new"><Link className="nav_link" to={"/Solutions/Data_Analysis"}><label class="nav_drop_cnt_new">Data Analysis</label></Link></li>
                
                <li class="nav_drop_list_new"><Link className="nav_link" to={"/Service/Mobile_Development"}><label class="nav_drop_cnt_new">Application</label></Link></li>
                
                <li class="nav_drop_list_new"><Link className="nav_link" to={"/Solutions/IOT"}><label class="nav_drop_cnt_new">IOT/IOE</label></Link></li>
                
                <li class="nav_drop_list_new"><Link className="nav_link" to={"/Solutions/AR_VR"}><label class="nav_drop_cnt_new">AR & VR</label></Link></li>
                
                <li class="nav_drop_list_new"><Link className="nav_link"
                to={"/Solutions/AI"}><label class="nav_drop_cnt_new">Artificial
                Intelligence</label></Link></li>
                
                <li class="nav_drop_list_new"><Link className="nav_link" to={"/Solutions/Cybersecurity"}><label class="nav_drop_cnt_new">Cybersecurity</label></Link></li>
                

                

              </ul>*/}
            </Nav.Link>

            <Nav.Link className="nav_link_drop nav_link_drop_new" style={{position:"relative"}}><label class="cool-link">{t("products")}</label>

              <ul class=" drop_nav_new text-left scaleY" style={{paddingLeft:"2%",paddingRight:"2%"}}>

<li class="nav_drop_list_new"><Link className="nav_link" to={"/hotel-management"}><label class="nav_drop_cnt_new">{t("hotel_management")}</label></Link></li>
<li class="nav_drop_list_new"><Link className="nav_link" to={"/hr-scope"}><label class="nav_drop_cnt_new">{t("HP_scope")}</label></Link></li>

          <li class="nav_drop_list_new"><Link className="nav_link" to={"/restaurant-erp"}><label class="nav_drop_cnt_new">{t("resturant_ERP")}</label></Link></li>
          
          <li class="nav_drop_list_new"><Link className="nav_link" to={"/facility-management"}><label class="nav_drop_cnt_new">{t("facility_management")}</label></Link></li>


              {/* 
                <li class="nav_drop_list_new"><Link className="nav_link" to={"/#"}><label class="nav_drop_cnt_new">Scope ERB</label></Link></li>
                <li class="nav_drop_list_new"><Link className="nav_link" to={"/#"}><label class="nav_drop_cnt_new">Yealink</label></Link></li>
                <li class="nav_drop_list_new"><Link className="nav_link" to={"/#"}><label class="nav_drop_cnt_new">E-invoice</label></Link></li>
                <li class="nav_drop_list_new"><Link className="nav_link" to={"/#"}><label class="nav_drop_cnt_new">Hotel Management System</label></Link></li>
                 <li cclass="nav_drop_list_new"><Link className="nav_link" to={"/Yealink"}><label class="nav_drop_cnt_new">Yealink</label></Link></li>
                <li class="nav_drop_list_new"><Link className="nav_link" to={"/Yealink_VC"}><label class="nav_drop_cnt_new">Yealink Video Conference</label></Link></li>
                <li class="nav_drop_list_new"><Link className="nav_link" to={"/Yealink"}><label class="nav_drop_cnt_new">Online Delivery Software</label></Link></li>
                */}

                {/*
                <li class="nav_drop_list_new"><Link className="nav_link" to={"/Eatiok"}><label class="nav_drop_cnt_new">Eatiok</label></Link></li>
                <li class="nav_drop_list_new"><Link className="nav_link" to={"/Fresh_Grocery"}><label class="nav_drop_cnt_new">Fresh Grocery</label></Link></li>
                <li class="nav_drop_list_new"><Link className="nav_link" to={"/Laundry"}><label class="nav_drop_cnt_new">Laundry</label></Link></li> 
                <li class="nav_drop_list_new"><Link className="nav_link" to={"/Saloon"}><label class="nav_drop_cnt_new">Lamsat-Saloon</label></Link></li>
                */}
                
                
              </ul>
            </Nav.Link>
           
            <Nav.Link><Link className="nav_link" to={"/Work"}><label class="cool-link">{t("our_work")}</label></Link></Nav.Link>



          {/*
        <Nav.Link className="nav_link_drop nav_link_drop_new" style={{position:"relative"}}><label class="cool-link">Company</label>
              <ul class=" drop_nav_new text-left scaleY" style={{paddingLeft:"2%",paddingRight:"2%"}}>
              <li class="nav_drop_list_new">
              <Link className="nav_link" to={"/About_Us"}><label class="nav_drop_cnt_new">About Us</label></Link>
              </li>
              <li class="nav_drop_list_new">
            <Link className="nav_link" to={"/Careers"}><label class="nav_drop_cnt_new">Careers</label></Link>
                </li>
              </ul>
            </Nav.Link>
            */}

            
          
          </Nav>

      {/*  <div className="select_language_icon">
        <i className="fa fa-globe" aria-hidden="true"></i>
      <select onChange={(e)=>onlanguageChange(e)} className='languageSelector'>
        <option selected value="en">EN</option>
        <option value="ar">AE</option>
      </select>
      </div>
      */}


<DropdownButton id="dropdown-basic-button" className="select_language_icon" title={i18n.language} variant="secondary">
  <Dropdown.Item as="button" active={i18n.language === 'en' ? true : false} onClick={(e)=>onlanguageChange(e)}>en</Dropdown.Item>
  <Dropdown.Item as="button" active={i18n.language === 'ar' ? true : false} onClick={(e)=>onlanguageChange(e)}>ar</Dropdown.Item>
</DropdownButton>


      <Link className="nav_circle" to={"/Contact_Us"}> <i className="fa fa-angle-right"></i> {t("contact_us")}</Link>

          
        </Navbar.Collapse>
        {/*<div id="lang_btn" class="lang-main text-center justify-content-center"><button class="lang-btn">
                <GrLanguage class="icon_lang"/><label style={{paddingLeft:"5px"}}>Arb</label>
              </button></div>*/}
                </div>
      </Navbar>

          
    </div>    
  );
}

export default Nav1;
