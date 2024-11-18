// import logo from './logo.svg';
import '../App.css';
import React,{ Component, useEffect, useState } from 'react';
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

import fire from '../firebase.js';
// import ReactDOM from 'react-dom';
import firebase from "firebase";

import $ from 'jquery'; 
import img1 from'../img/abt-main.png';
import img2 from'../img/data_ana.gif';
import img3 from'../img/appli.gif';
import img4 from'../img/iot.gif';
import img5 from'../img/vr.gif';
import img6 from'../img/ai2.gif';
import img7 from'../img/cyber.gif';
import img8 from'../img/react2.gif';
import img9 from'../img/android2.png';
import img10 from'../img/iphone2.png';
import img11 from'../img/aw1.png';
import img12 from'../img/aw2.png';
import img13 from'../img/aw3.png';
import img14 from'../img/aw4.png';
import img15 from'../img/partner1.png';
import img16 from'../img/partner2.png';
import img17 from'../img/partner3.png';
import img18 from'../img/partner4.png';
import work1 from'../img/work_1.png';
import work2 from'../img/work_2.png';
import work3 from'../img/work_3.png';
import work4 from'../img/work_4.png';


import work4_bg from'../img/work_4_bg.png';
import work3_bg from'../img/work_3_bg.png';
import work2_bg from'../img/work_2_bg.png';
import work1_bg from'../img/work_1_bg.png';


import logo from'../img/logo_scp.png';
import Nav1 from './nav1.js';
import Footer1 from './footer.js';
// import bg_footer from'./img/footer_bg.png';
import OwlCarousel from '@ntegral/react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { TiLocation } from 'react-icons/ti';
import { IoMdMail } from 'react-icons/io';
import { RiWhatsappFill } from 'react-icons/ri';
import { GrGooglePlus,GrLanguage,GrDeliver } from 'react-icons/gr';
import { AiFillYoutube,AiOutlineSkype } from 'react-icons/ai';
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaShuttleVan } from 'react-icons/fa';


// import "animate.css/animate.min.css";
// import {Animated} from "react-animated-css";
import YoutubeBackground from 'react-youtube-background'
//import vid_1 from '../img/vid_main3.mp4';


import { ImWhatsapp } from 'react-icons/im';
import { GiNoodles } from 'react-icons/gi';
import { FiShoppingCart,FiShoppingBag } from 'react-icons/fi';

import { DiJava,DiJqueryLogo,DiPython,DiDotnet,DiReact,DiMsqlServer,DiAngularSimple,DiJavascript1,DiSwift,DiBootstrap,DiCss3,DiWindows } from 'react-icons/di';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import { DiMongodb,DiHtml5,DiNginx,DiNodejs } from 'react-icons/di';
import { SiAndroidstudio,SiMicrosoftazure,SiUnity,SiCsharp,SiGoogleanalytics,SiKotlin,SiXcode,SiAdobexd,SiSketch,SiAutodesk,SiPhp,SiFlutter,SiAmazonaws } from 'react-icons/si';




// import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';


class Lets extends Component{

componentDidMount() {
  $(window).scroll(function() {    
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
 
write_query(){
  // alert('test');
  
  var name=document.getElementById("name").value;
  var mail=document.getElementById("mail").value;
  var mobile=document.getElementById("mobile").value;
  var message=document.getElementById("message").value;
  // alert(name);
  // alert(mail);
  // alert(mobile);
  // alert(message);
var d= new Date();
  var dd=d.getDate();
  

  var mm=d.getMonth();
  var yy=d.getFullYear();
  var hr=d.getHours();
  var min=d.getMinutes();
  var sec=d.getSeconds();
  var id=dd+""+mm+""+yy+""+hr+""+min+""+sec;
    firebase.database().ref().child('contact').push(
{
  name:name,
  mail:mail,
  id:id,
  mobile:mobile,
  message:message

}


    )
    setTimeout(() => {  window.location.reload(); }, 1500);

}


 render(){

   const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 
  }
};
  return (
    <div className="App">

      <div class="container" >
        <div class="text-center justify-content-center">
          <h1 class="text-6">
             
            <label class="cont_head_1">Let's Work</label><label class="cont_head_2">&nbsp;Together</label>
          </h1>
          <div class="underline_head text-center"></div>
          {/*<ScrollAnimation animateIn="fadeIn" delay="150"><p class="wrk-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum had been the industry's standard dummy text ever since the 1500s</p></ScrollAnimation>*/}
        </div>
        <form  onSubmit={this.write_query} >
        <div class="row contact_row" style={{margin:"0"}}>
          <div class="col-md-4 contact_col">
            <div class="input-wrapper">
              <input class="input_text" type="text" id="name" required />
              <label class="label_text" for="user">name</label>
            </div>    
          </div>
          <div class="col-md-4 contact_col">
            <div class="input-wrapper">
              <input class="input_text" type="email" id="mail" required />
              <label class="label_text" for="user">email</label>
            </div>    
          </div>
          <div class="col-md-4 contact_col">
            <div class="input-wrapper">
              <input class="input_text" type="number" id="mobile" required />
              <label class="label_text" for="user">Mobile</label>
            </div>    
          </div>

          <div class="col-md-12 contact_col">
            <div class="input-wrapper">
              <textarea rows="4" class="input_text" type="number" id="message" required ></textarea>
              <label class="label_text" for="user">Enter your Message</label>
            </div>    
          </div>
          <div class="col-md-12 text-right contact_col">
            <input type="submit" value="Send Enquiry" class="home-btn-1" />
                
              
          </div>

        </div>
        
        </form>
      </div> 
              
    </div>

  );
}
}

export default Lets;
