import MetaTags from "react-meta-tags";

import "../App.css";
import "./owl.js";
import React, { Component, useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactDOM from "react-dom";
import $ from "jquery";

import img1 from "../img/abt-main.png";
import img2 from "../img/data_ana.gif";
import img3 from "../img/appli.gif";
import img4 from "../img/iot.gif";
import img5 from "../img/vr.gif";
import img6 from "../img/ai2.gif";
import img7 from "../img/cyber.gif";
import img8 from "../img/react2.gif";
import img9 from "../img/android2.png";
import img10 from "../img/iphone2.png";
import img11 from "../img/aw_1_1.png";
import img12 from "../img/aw_2_1.png";
import img13 from "../img/aw_3_1.png";
import img14 from "../img/aw_4_1.png";
import img15 from "../img/partner1.png";
import img16 from "../img/partner2.png";
import img17 from "../img/partner3.png";
import img18 from "../img/partner4.png";

import work1 from "../img/clients/arb1.png";
import work2 from "../img/new/drivelou.png";
import work3 from "../img/new/gatepass1.png";
import work4 from "../img/clients/grayscale.png";
import work5 from "../img/new/nafis.png";
import work6 from "../img/clients/rsz4odms.png";
import work7 from "../img/clients/rsz_23logo.png";
import work8 from "../img/clients/oodd.png";
import work9 from "../img/new/tagval.png";
import work10 from "../img/new/vrtech.png";
import work11 from "../img/new/lemon.png";
import DbMigration from "../img/hire/db-migration.jpg";
import VolumeLicensing from "../img/hire/volume-licensing.jpg";
import Hiring from "../img/hire/hiring.jpg";

import aw1 from "../img/awds/app-development.png";
import aw2 from "../img/awds/Badges-Cloud-Computing-2020.png";
import aw3 from "../img/awds/Badges-UI-UX-Designing-2020.png";
import aw4 from "../img/awds/badge-top-app-company-saudi-arabia.png";
import aw5 from "../img/awds/badge-top-web-company-saudi-arabia.png";
import aw6 from "../img/awds/top-web-design.jpg";
import aw7 from "../img/awds/badge-top-web-development-companies-2020-(1).png";
import aw8 from "../img/awds/badge-top-web-development-companies-2020.png";
import aw9 from "../img/awds/Featured_Members.png";
import aw10 from "../img/awds/Features.png";
import aw11 from "../img/awds/top-software-development-companies.png";
import aw12 from "../img/awds/top-website-development-companies.png";
import aw13 from "../img/awds/top-custom-software.jpg";

import yar from "../img/new/yarlink.jpeg";

import abt_home_n from "../img/new/about1.png";

import tech1 from "../img/tech/tu1.png";
import tech2 from "../img/tech/tu2.png";
import tech3 from "../img/tech/tu3.png";
import tech4 from "../img/tech/tu4.png";
import tech5 from "../img/tech/tu5.png";
import tech6 from "../img/tech/tu6.png";
import tech7 from "../img/tech/tu7.png";
import tech8 from "../img/tech/tu8.png";
import tech9 from "../img/tech/tu9.png";
import tech10 from "../img/tech/tu10.png";
import tech11 from "../img/tech/tu11.png";
import tech12 from "../img/tech/tu12.png";
import tech13 from "../img/tech/tu13.png";
import tech14 from "../img/tech/tu14.png";
import tech15 from "../img/tech/tu15.png";
import tech16 from "../img/tech/tu16.png";
import tech17 from "../img/tech/tu17.png";
import tech18 from "../img/tech/tu18.png";
import tech19 from "../img/tech/tu19.png";
import tech20 from "../img/tech/tu20.png";
import tech21 from "../img/tech/tu21.png";
import tech22 from "../img/tech/tu22.png";
import tech23 from "../img/tech/tu23.png";
import tech24 from "../img/tech/tu24.png";
import tech25 from "../img/tech/tu25.png";
import tech26 from "../img/tech/tu26.png";
import tech27 from "../img/tech/tu27.png";
import tech28 from "../img/tech/tu28.png";
import tech29 from "../img/tech/tu29.png";
import tech30 from "../img/tech/tu30.png";
import tech31 from "../img/tech/tu31.png";
import tech32 from "../img/tech/tu32.png";
import tech33 from "../img/tech/tu33.png";

import p1 from "../img/new/p1.png";
import p2 from "../img/new/p2.png";
import p3 from "../img/new/p3.png";
import p4 from "../img/new/p4.png";
import p5 from "../img/new/p5.png";
import p6 from "../img/new/p6.png";
import p7 from "../img/new/p7.png";
import p8_1 from "../img/new/p8-1.png";
import p8_2 from "../img/new/p8-2.png";
import p9 from "../img/new/p9.png";
import p10 from "../img/new/p10.png";
import p11 from "../img/new/p11.png";
import p12 from "../img/new/p12.png";

import fire from "../firebase.js";
// import ReactDOM from 'react-dom';
import firebase from "firebase";

import work4_bg from "../img/new/work_bg4.png";
import work3_bg from "../img/new/work_bg3.png";
import work2_bg from "../img/new/work_bg2.png";
import work1_bg from "../img/new/work_bg1.png";
import work5_bg from "../img/new/vr.png";
import work6_bg from "../img/new/nafis.png";
import work7_bg from "../img/new/seam-map.png";
import work8_bg from "../img/new/tagval.png";
import pdf from "../img/new/scopetech-2023.pdf";

import developing from "../img/service-1.png";
import networking from "../img/service-2.png";
import supporting from "../img/service-3.png";
import consulting from "../img/service-4.png";
import ecommerce from "../img/home/ecommerce.gif";
import integration from "../img/home/integration.gif";
import it_infrastructure from "../img/home/itinfrastructure.png";
import collaboration from "../img/home/collaboration.gif";
import security_system from "../img/home/security-system.gif";
import data_center from "../img/home/data-center.gif";
import data_analysis from "../img/home/data-analysis.gif";
import iot from "../img/home/iot.gif";
import cybersecurity from "../img/home/cybersecurity.png";
import ai from "../img/home/ai.gif";

import logo from "../img/logo_scp.png";
import logoTwo from "../logo.png";
import Nav1 from "./nav1.js";

import Lets from "./lets.js";
import Footer from "./footer.js";

import partner1 from "../img/partner/partner11.png";
import partner2 from "../img/partner/partner9.png";
import partner3 from "../img/partner/fortinet.png";
import partner4 from "../img/partner/eset.png";
import partner5 from "../img/partner/yeallink.png";
import partner6 from "../img/partner/ricoh.png";
import partner7 from "../img/partner/sonic.png";
import partner8 from "../img/partner/lenovo.png";

import partner9 from "../img/partner/new/al-khater.png";
import partner10 from "../img/partner/new/al-othaim.png";
import partner11 from "../img/partner/new/bbc-paints.png";
import partner12 from "../img/partner/new/btc-networks.png";
import partner13 from "../img/partner/new/conezone.png";
import partner14 from "../img/partner/new/ebtt.png";
import partner15 from "../img/partner/new/knisha.png";
import partner16 from "../img/partner/new/ml.png";
import partner17 from "../img/partner/new/prince-sattam.png";
import partner18 from "../img/partner/new/qnb.png";
import partner19 from "../img/partner/new/rakaiz.png";
import partner20 from "../img/partner/new/rawabi.png";
import partner21 from "../img/partner/new/sama.png";
import partner22 from "../img/partner/new/tdpa.png";

import alkhater from "../img/partner/latest/al-khater.png";
import alothaim from "../img/partner/latest/alothaim.png";
import bbc from "../img/partner/latest/bbc.png";
import conezone from "../img/partner/latest/conezone.png";
import drivelounge from "../img/partner/latest/Drivelounge.png";
import knisha from "../img/partner/latest/knisha.png";
import lamsat from "../img/partner/latest/Lamsat.jpg";
import ml from "../img/partner/latest/ml.png";
import oqoood from "../img/partner/latest/Oqoood.jpg";
import qnb from "../img/partner/latest/qnb.png";
import rakaiz from "../img/partner/latest/rakaiz.png";
import rawabi from "../img/partner/latest/rawabi.png";
import sama from "../img/partner/latest/sama.png";
import tdpa from "../img/partner/latest/tdpa.png";

// import bg_footer from'./img/footer_bg.png';
import OwlCarousel from "@ntegral/react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { TiLocation } from "react-icons/ti";
import { IoMdMail } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";
import { GrGooglePlus, GrLanguage, GrDeliver } from "react-icons/gr";
import { AiFillYoutube, AiOutlineSkype } from "react-icons/ai";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaShuttleVan,
} from "react-icons/fa";

import { withTranslation } from "react-i18next";
// import "animate.css/animate.min.css";
// import {Animated} from "react-animated-css";
import YoutubeBackground from "react-youtube-background";
import vid_1 from "../img/riyadh-city.mp4";
// import vid_1 from '../img/home-page-slider.mp4';
// https://youtu.be/L789TsFb0mg

import { ImWhatsapp } from "react-icons/im";
import { GiNoodles } from "react-icons/gi";
import { FiShoppingCart, FiShoppingBag } from "react-icons/fi";

import {
  DiJava,
  DiJqueryLogo,
  DiPython,
  DiDotnet,
  DiReact,
  DiMsqlServer,
  DiAngularSimple,
  DiJavascript1,
  DiSwift,
  DiBootstrap,
  DiCss3,
  DiWindows,
} from "react-icons/di";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { DiMongodb, DiHtml5, DiNginx, DiNodejs } from "react-icons/di";
import {
  SiAndroidstudio,
  SiMicrosoftazure,
  SiUnity,
  SiCsharp,
  SiGoogleanalytics,
  SiKotlin,
  SiXcode,
  SiAdobexd,
  SiSketch,
  SiAutodesk,
  SiPhp,
  SiFlutter,
  SiAmazonaws,
} from "react-icons/si";

class Body_main extends Component {
  constructor(props) {
    super(props);
    // Firebase.initializeApp(config);
    this.state = {
      messages: [],
      partners: [],
      img_url: null,
    };
  }
  componentDidMount() {
    firebase
      .database()
      .ref()
      .child("clients")
      .once("value")
      .then((snapshot) => {
        let allNotes = [];
        snapshot.forEach((snap) => {
          allNotes.push(snap.val());
        });
        this.setState({ messages: allNotes });
      });
    // document.getElementById('vid').play();

    firebase
      .database()
      .ref()
      .child("partners")
      .once("value")
      .then((snapshot) => {
        let allNotes = [];
        snapshot.forEach((snap) => {
          allNotes.push(snap.val());
        });
        this.setState({ partners: allNotes });
      });

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

  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
        slidesToSlide: 4,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
      },
    };

    const responsive1 = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 1,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
      },
    };
    return (
      <div className="App">
        <MetaTags>
          <title>{this.props.t("SCOPE_TECH")}</title>
          <meta
            id="meta-description"
            name="description"
            content="Scope Tech one of the best web and mobile app development company building reliable solutions in Saudi Arabia. Share your ideas with top web &mobile app developers specializing in iPhone, Android &Web applications. Contact Us&get free quote Now +966 599 226 961"
          />
          <meta
            id=""
            property="keywords"
            content="Web and Mobile App Development Company, top web &mobile app developers"
          />
        </MetaTags>

        <div className="transparent-header">
          <Nav1 />
        </div>
        <div
          className="container-fluid "
          style={{ height: "100vh", padding: "0" }}
        >
          <section className="home-section" style={{ background: "#e6e6e63e" }}>
            <div
              className="vidoes"
              style={{
                padding: "0",
                margin: "0",
                height: "100vh",
                overflow: "hidden",
              }}
            >
              <video
                style={{ width: "100%", height: "100vh" }}
                autoPlay
                muted
                loop
              >
                <source src={vid_1} type="video/mp4" />
              </video>
            </div>
            <div className="container-fluid container">
              <div className="home-content text-center">
                <div className="">
                  {/*
                  <img src={logoTwo} alt="Logo" className="white-filter" />
                  <h3 >
                    <label className="text-1">{this.props.t('scope')} </label> &nbsp;<label className="text-2">{this.props.t('tech')}</label>
                  </h3>
                  <p style={{ fontSize: "18px" }}>{this.props.t('A_CREATIVE_COMPANY_WITH_A_BIG_VISION')}</p>
                  */}

                  <div>
                    <p className="text-3">
                      {this.props.t("We_create_digital_solutions")}
                    </p>
                  </div>
                  <div>
                    {
                      <Link className="nav_link" to={"/Contact_us"}>
                        <button className="home_banner_quote">
                          Get In Touch
                        </button>
                      </Link>
                    }
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="about-news">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>
                  {" "}
                  {this.props.t("about")} <span>{this.props.t("us")}</span>{" "}
                </h1>
                <p>{this.props.t("about_us_text")}</p>
              </div>
              <div className="col-md-6 text-center">
                <img src={abt_home_n} className="img-fluid" />
              </div>
            </div>
          </div>
        </section>

        <section className="our_services" id="our-services">
          <div className="container">
            <h1 className="text-6">
              <label className="cont_head_1">{this.props.t("Our")}</label>
              <label className="cont_head_2">
                &nbsp; {this.props.t("Service")}
              </label>
            </h1>
            <div className="underline_head text-center"></div>

            <ul className="service_lists">
              <li>
                {/* <img src={developing} className="img-fluid" /> */}
                <h5 className="page_sub_main_head">
                  {this.props.t("software_development")}
                </h5>
                <ul class="list">
                  <li><span class="solutuon_txt">{this.props.t("web_development")}</span></li>
                  <li><span class="solutuon_txt">{this.props.t("mobile_app_development")}</span></li>
                  <li><span class="solutuon_txt">{this.props.t("product_development")}</span></li>
                  <li><span class="solutuon_txt">{this.props.t("saas_development")}</span></li>
                  <li><span class="solutuon_txt">{this.props.t("enterprise_development")}</span></li>
                  <li><span class="solutuon_txt">{this.props.t("custom_software_development")}</span></li>
                </ul>
                {/* <p className="para_cnt">
                  {this.props.t("software_development_content")}
                </p> */}
              </li>
              <li>
                {/* <img src={consulting} className="img-fluid" /> */}
                <h5 className="page_sub_main_head">
                  {this.props.t("Consulting")}
                </h5>
                <ul class="list">
                  <li><span class="solutuon_txt">{this.props.t("digitial_transformation")}</span></li>
                  <li><span class="solutuon_txt">{this.props.t("it_strategy_consulting")}</span></li>
                  <li><span class="solutuon_txt">{this.props.t("cloud_consulting")}</span></li>
                  <li><span class="solutuon_txt">{this.props.t("cybersecurity_consulting")}</span></li>
                  <li><span class="solutuon_txt">{this.props.t("product_sprint_ideation")}</span></li>
                </ul>
                {/* <p className="para_cnt">
                  {this.props.t("consulting_content")}
                  <br />
                </p> */}
              </li>
              <li>
                {/* <img src={supporting} className="img-fluid" /> */}
                <h5 className="page_sub_main_head">
                  {this.props.t("operations_and_support")}
                </h5>
                <ul class="list">
                  <li><span class="solutuon_txt">{this.props.t("it_infrastructure")}</span></li>
                  <li><span class="solutuon_txt">{this.props.t("cloud_service_operations")}</span></li>
                  <li><span class="solutuon_txt">{this.props.t("disaster_management")}</span></li>
                  <li><span class="solutuon_txt">{this.props.t("devops_services")}</span></li>
                  <li><span class="solutuon_txt">{this.props.t("development_strategy")}</span></li>
                  <li><span class="solutuon_txt">{this.props.t("network_management")}</span></li>
                </ul>
                {/* <p className="para_cnt">
                  {this.props.t("operations_support_content")}
                </p> */}
              </li>
              <li>
                {/* <img src={networking} className="img-fluid" /> */}
                <h5 className="page_sub_main_head">
                  {this.props.t("Networking")}
                </h5>
                <ul class="list">
                  <li><span class="solutuon_txt">{this.props.t("networking_design")}</span></li>
                  <li><span class="solutuon_txt">{this.props.t("networking_security")}</span></li>
                  <li><span class="solutuon_txt">{this.props.t("cloud_networking")}</span></li>
                  <li><span class="solutuon_txt">{this.props.t("wireless_networking")}</span></li>
                  <li><span class="solutuon_txt">{this.props.t("data_center_implement")}</span></li>
                  <li><span class="solutuon_txt">{this.props.t("networking_architecture")}</span></li>
                </ul>
                {/* <p className="para_cnt">{this.props.t("networking_content")}</p> */}
              </li>
              {/*      <li>
        <img src={Hiring} className="img-fluid" />
        <h5 className="page_sub_main_head">{this.props.t("resource_hiring")}</h5>
        <p className="para_cnt">
         {this.props.t("resource_hiring_text")}
        </p>
      </li>
      */}
            </ul>
          </div>
        </section>

        <section className="our_solutions" id="our-solutions">
          <div className="container">
            <h1 className="text-6">
              <label className="cont_head_1">{this.props.t("Our")}</label>
              <label className="cont_head_2">
                &nbsp; {this.props.t("solutions")}
              </label>
            </h1>
            <div className="underline_head text-center"></div>

            <div className="row">
              <div className="col-md-4">
                <div className="box">
                  <img src={it_infrastructure} className="img-fluid" />
                  <h5>{this.props.t("IT_Infrastructure")}</h5>
                  <p>{this.props.t("IT_Infrastructure_text")}</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <img src={data_analysis} className="img-fluid" />
                  <h5>{this.props.t("Data_Analysis")}</h5>
                  <p>{this.props.t("Data_Analysis_text")}</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <img src={ai} className="img-fluid" />
                  <h5>{this.props.t("artifically_intelligence")}</h5>
                  <p>{this.props.t("artifically_intelligence_text")}</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <img src={cybersecurity} className="img-fluid" />
                  <h5>{this.props.t("Cybersecurity")}</h5>
                  <p>{this.props.t("Cybersecurity_text")}</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <img src={security_system} className="img-fluid" />
                  <h5>{this.props.t("Security_Systems")}</h5>
                  <p>{this.props.t("Security_Systems_text")}</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <img src={VolumeLicensing} className="img-fluid" />
                  <h5>{this.props.t("Volume_Licensing")}</h5>
                  <p>{this.props.t("Volume_Licensing_text")}</p>
                </div>
              </div>
              {/* <div className="col-md-4">
                <div className="box">
                  <img src={integration} className="img-fluid" />
                  <h5>{this.props.t("Integration")}</h5>
                  <p>{this.props.t("Integration_text")}</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <img src={iot} className="img-fluid" />
                  <h5>{this.props.t("IOT/IOE")}</h5>
                  <p>{this.props.t("IOT/IOE_text")}</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <img src={data_center} className="img-fluid" />
                  <h5>{this.props.t("Data_Center")}</h5>
                  <p>{this.props.t("Data_Center_text")}</p>
                </div>
              </div> 
              <div className="col-md-4">
                <div className="box">
                  <img src={ecommerce} className="img-fluid" />
                  <h5>{this.props.t("Ecommerce")}</h5>
                  <p>
                  {this.props.t("Ecommerce_text")}
                    </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <img src={collaboration} className="img-fluid" />
                  <h5>{this.props.t("Collaboration_and_Communication")}</h5>
                  <p>{this.props.t("Collaboration_and_Communication_text")}</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="box">
                  <img src={DbMigration} className="img-fluid" />
                  <h5>{this.props.t("DB_Migration")}</h5>
                  <p>
                  {this.props.t("DB_Migration_text")}
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <section className="partner-click">
          <div className="container">
            <h1>
              <label className="cont_head_1">{this.props.t("proudly")}</label>
              <label className="cont_head_2">
                &nbsp;{this.props.t("workWith")}
              </label>
            </h1>
            <div className="underline_head text-center"></div>

            <div className="awd-main proudly-work-with">
              {/*
              {this.state.partners.map(note => {
                  return (
                    <div className="awd">
                      <div className="partner_main_img">
                        <img src={note.img} className="img-fluid" />
                      </div>
                    </div>
                  );
                })}
              */}

              <OwlCarousel
                className="owl-theme"
                loop
                margin={10}
                nav={true}
                dotsContainer="false"
                autoplay
                responsive={{
                  0: { items: 2 },
                  600: { items: 3 },
                  1000: { items: 5 },
                }}
                autoplayTimeout="2000"
              >
                <div className="awd">
                  <div className="partner_main_img">
                    <img src={img15} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={img16} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={img17} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={img18} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={partner1} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={partner2} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={partner3} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={partner4} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={partner5} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={partner6} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={partner7} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={partner8} className="img-fluid" />
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </section>

        <section className="partner-click">
          <div className="container">
            <h1>
              <label className="cont_head_1">{this.props.t("Our")}</label>
              <label className="cont_head_2">
                &nbsp;{this.props.t("Clients")}
              </label>
            </h1>
            <div className="underline_head text-center"></div>

            <div className="awd-main proudly-work-with">
              {/*
              {this.state.partners.map(note => {
                  return (
                    <div className="awd">
                      <div className="partner_main_img">
                        <img src={note.img} className="img-fluid" />
                      </div>
                    </div>
                  );
                })}
              */}

              <OwlCarousel
                className="owl-theme"
                loop
                margin={10}
                nav={true}
                dotsContainer="false"
                autoplay
                responsive={{
                  0: { items: 2 },
                  600: { items: 3 },
                  1000: { items: 5 },
                }}
                autoplayTimeout="2000"
              >
                {/* <div className="awd">
                  <div className="partner_main_img">
                    <img src={partner9} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={partner10} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={partner11} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={partner12} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={partner13} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={partner14} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={partner15} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={partner16} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={partner17} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={partner18} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={partner19} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={partner20} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={partner21} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={partner22} className="img-fluid" />
                  </div>
                </div> */}

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={alkhater} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={alothaim} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={bbc} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={conezone} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={drivelounge} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={knisha} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={lamsat} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={ml} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={oqoood} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={qnb} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={rakaiz} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={rawabi} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={sama} className="img-fluid" />
                  </div>
                </div>

                <div className="awd">
                  <div className="partner_main_img">
                    <img src={tdpa} className="img-fluid" />
                  </div>
                </div>

              </OwlCarousel>
            </div>
          </div>
        </section>

        <section className="partner-click">
          <div className="container">
            <h1>
              <label className="cont_head_1">{this.props.t("Our")}</label>
              <label className="cont_head_2">
                &nbsp;{this.props.t("awards")}
              </label>
            </h1>
            <div className="underline_head text-center"></div>
            <p className="text-center sub-partner">
              {this.props.t("home_page_award_text")}
            </p>

            <div className="awd-main awd-main-box">
              <OwlCarousel
                className="owl-theme"
                loop
                margin={10}
                nav={true}
                dotsContainer="false"
                autoplay
                responsive={{
                  0: { items: 2 },
                  600: { items: 3 },
                  1000: { items: 5 },
                }}
                autoplayTimeout="2000"
              >
                <div className="awd">
                  <div className="awd-main-img">
                    {" "}
                    <img src={aw1} className="img-fluid " />
                  </div>
                </div>
                <div className="awd">
                  <div className="awd-main-img">
                    {" "}
                    <img src={aw2} className="img-fluid " />
                  </div>
                </div>
                <div className="awd">
                  <div className="awd-main-img">
                    {" "}
                    <img src={aw3} className="img-fluid " />
                  </div>
                </div>
                <div className="awd">
                  <div className="awd-main-img">
                    {" "}
                    <img src={aw4} className="img-fluid " />
                  </div>
                </div>
                <div className="awd">
                  <div className="awd-main-img">
                    {" "}
                    <img src={aw5} className="img-fluid " />
                  </div>
                </div>
                <div className="awd">
                  <div className="awd-main-img">
                    {" "}
                    <img src={aw6} className="img-fluid " />
                  </div>
                </div>
                <div className="awd">
                  <div className="awd-main-img">
                    {" "}
                    <img src={aw7} className="img-fluid " />
                  </div>
                </div>
                <div className="awd">
                  <div className="awd-main-img">
                    {" "}
                    <img src={aw8} className="img-fluid " />
                  </div>
                </div>
                <div className="awd">
                  <div className="awd-main-img">
                    {" "}
                    <img src={aw9} className="img-fluid " />
                  </div>
                </div>
                <div className="awd">
                  <div className="awd-main-img">
                    {" "}
                    <img src={aw13} className="img-fluid " />
                  </div>
                </div>
                <div className="awd">
                  <div className="awd-main-img">
                    {" "}
                    <img src={aw11} className="img-fluid " />
                  </div>
                </div>
                <div className="awd">
                  <div className="awd-main-img">
                    {" "}
                    <img src={aw12} className="img-fluid " />
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default withTranslation()(Body_main);
