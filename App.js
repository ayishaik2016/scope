import React from 'react';
import Data_Analysis from './component/solutions/data_analysis.js';
import IOT from './component/solutions/iot.js'
import Cybersecurity from './component/solutions/cybersecurity.js'
import AI from './component/solutions/ai.js'
import AR_VR from './component/solutions/ar_vr.js'
import Contact_Us from './component/contact_us.js'
import About_Us from './component/about.js'

import './App.css';
import './Custom.css';

import $ from 'jquery'; 
import ScrollToTop from './component/scroll.js';

import Body_main from './component/body_main.js';
import Login from './component/admin.js';
import Work from './component/work.js';
import Yealink from './component/yealink.js';
import Yealink_VC from './component/yealink_vc.js';
import CP960 from './component/yealink/cp960.js';
import CP960_conf from './component/yealink/cp960_conf.js';
import CP930 from './component/yealink/cp930.js';
import CP920 from './component/yealink/cp920.js';
import CP920_PSTN from './component/yealink/cp920_pstn.js';
import SIP_VP59 from './component/yealink/sip_vp59.js';
import SIP_T58A from './component/yealink/sip_t58a.js';
import SIP_T58A_wc from './component/yealink/sip_t58a_wc.js';
import SIP_T58V from './component/yealink/sip_t58v.js';
import SIP_T57W from './component/yealink/sip_t57w.js';
import SIP_T56A from './component/yealink/sip_t56a.js';
import SIP_T54W from './component/yealink/sip_t54w.js';
import SIP_T53W from './component/yealink/sip_t53w.js';
import SIP_T53 from './component/yealink/sip_t53.js';
import SIP_T49G from './component/yealink/sip_t49g.js';
import SIP_T48S from './component/yealink/sip_t48s.js';
import SIP_T46S from './component/yealink/sip_t46s.js';
import SIP_T42S from './component/yealink/sip_t42s.js';
import SIP_T41S from './component/yealink/sip_t41s.js';
import SIP_T40G from './component/yealink/sip_t40g.js';
import SIP_T29G from './component/yealink/sip_t29g.js';
import SIP_T27G from './component/yealink/sip_t27g.js';
import SIP_T23G from './component/yealink/sip_t23g.js';
import SIP_T23P from './component/yealink/sip_t23p.js';
import SIP_T21P from './component/yealink/sip_t21p.js';
import SIP_T19P from './component/yealink/sip_t19p.js';
import W41P from './component/yealink/w41p.js';
import W60P from './component/yealink/w60p.js';
import W56P from './component/yealink/w56p.js';
import W53P from './component/yealink/w53p.js';
import W52P from './component/yealink/w52p.js';
import VC800 from './component/yealink/vc800.js';
import VC500 from './component/yealink/vc500.js';
import VC200 from './component/yealink/vc200.js';
import CTP20 from './component/yealink/ctp20.js';
import WPP20 from './component/yealink/wpp20.js';
import VC880 from './component/yealink/vc880.js';
import VP59 from './component/yealink/vp59.js';
import T49G from './component/yealink/t49g.js';
import T48V from './component/yealink/t48v.js';
import Food_Purby from './component/food_product.js';
import Grobino from './component/grobino.js';
import Laundry from './component/laundry.js';
import Saloon from './component/saloon.js';
import Ser_Web from './component/service/web.js';
import Ser_Mob from './component/service/mob_ser.js';
import Ui_ux from './component/service/ui_ux.js';
import Graphic_design from './component/service/graphic_design.js';
import Smm from './component/service/smm.js';
import Marketing from './component/seo.js';
import Smo from './component/service/smo.js';
import Wp from './component/service/web_portal.js';
import Tech_support from './component/service/tech_support.js';
import Careers from './component/careers.js';
import Admin_clients from './component/admin/clients.js';
import Dashboard from './component/admin/dashboard.js';
import Partners from './component/admin/partners.js';
import Admin_works from './component/admin/works.js';
import Admin_careers from './component/admin/careers.js';
import DotNet from './component/hire/dotnet.js';
import ReactJs from './component/hire/reactjs.js';
import Php from './component/hire/php.js';
import Android from './component/hire/android.js';
import Ios from './component/hire/ios.js';
import NodeJs from './component/hire/nodejs.js';
import ReactNative from './component/hire/reactnative.js';
import Graphic from './component/hire/graphic.js';
import OurServices from './component/our_services.js';
import OurSolutions from './component/our_solutions.js';
import RestaurantErp from './component/products/restaurant.js';
import HrScope from './component/products/hr_scope.js';
import FacilityManagement from './component/products/facility.js';
import HotelManagement from './component/products/hotel.js';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from "react-i18next";

$(document).on('click','.solution_nav',function() {
  if($("#our-solution").length == 0) 
    return;

  var position = $("#our-solution").offset().top;
  if(position != undefined && position != '') {
    $('html,body').animate({
      scrollTop: $("#our-solution").offset().top},
    'slow');
  }
});

$(document).on('click','.service_nav',function() {
  if($("#our-service").length == 0) 
    return;

  var position = $("#our-service").offset().top;
  if(position != undefined && position != '') {
    $('html,body').animate({
      scrollTop: $("#our-service").offset().top},
    'slow');
  }
});


  const App=()=>{

  const { i18n } =useTranslation();

console.log(i18n.language,"translate")
  return (
    <div dir={i18n.dir(i18n.language)} className={i18n.dir(i18n.language)!=="rtl"?"leftToRight":"RightToLeft"}>
    <Router>
    <ScrollToTop/>
          <Switch>
          
          <Route path="/Yealink" exact    component={Yealink } /> 
          <Route path="/Yealink_VC" exact    component={Yealink_VC } /> 
            <Route path="/" exact component={ Body_main } />
            <Route path="/Home" exact component={ Body_main } />
            <Route path="/Yealink/CP960" exact component={ CP960 } />
            <Route path="/Yealink/CP960-Conference" exact component={ CP960_conf } />
            <Route path="/Yealink/CP930" exact component={ CP930 } />
            <Route path="/Yealink/CP920" exact component={ CP920 } />
            <Route path="/Yealink/CP920-PSTN" exact component={ CP920_PSTN } />
            <Route path="/Yealink/SIP-VP59" exact component={ SIP_VP59 } />
            <Route path="/Yealink/SIP-T58A-With-Camera" exact component={ SIP_T58A } />
            <Route path="/Yealink/SIP-T58A" exact component={ SIP_T58A_wc } />
            <Route path="/Yealink/SIP-T58V" exact component={ SIP_T58V } />
            <Route path="/Yealink/SIP-T57W" exact component={ SIP_T57W } />
            <Route path="/Yealink/SIP-T56A" exact component={ SIP_T56A } />
            <Route path="/Yealink/SIP-T54W" exact component={ SIP_T54W } />
            <Route path="/Yealink/SIP-T53W" exact component={ SIP_T53W } />
            <Route path="/Yealink/SIP-T53" exact component={ SIP_T53 } />
            <Route path="/Yealink/SIP-T49G" exact component={ SIP_T49G } />
            <Route path="/Yealink/SIP-T48S" exact component={ SIP_T48S } />
            <Route path="/Yealink/SIP-T46S" exact component={ SIP_T46S } />
            <Route path="/Yealink/SIP-T42S" exact component={ SIP_T42S } />
            <Route path="/Yealink/SIP-T41S" exact component={ SIP_T41S } />
            <Route path="/Yealink/SIP-T40G" exact component={ SIP_T40G } />
            <Route path="/Yealink/SIP-T29G" exact component={ SIP_T29G } />
            <Route path="/Yealink/SIP-T27G" exact component={ SIP_T27G } />
            <Route path="/Yealink/SIP-T23G" exact component={ SIP_T23G } />
            <Route path="/Yealink/SIP-T23P" exact component={ SIP_T23P } />
            <Route path="/Yealink/SIP-T21P" exact component={ SIP_T21P } />
            <Route path="/Yealink/SIP-T19P" exact component={ SIP_T19P } />
            <Route path="/Yealink/W41P" exact component={ W41P } />
            <Route path="/Yealink/W60P" exact component={ W60P } />
            <Route path="/Yealink/W56P" exact component={ W56P } />
            <Route path="/Yealink/W53P" exact component={ W53P } />
            <Route path="/Yealink/W52P" exact component={ W52P } />
            <Route path="/Yealink/VC800" exact component={ VC800 } />
            <Route path="/Yealink/VC500" exact component={ VC500 } />
            <Route path="/Yealink/VC200" exact component={ VC200 } />
            <Route path="/Yealink/CTP20" exact component={ CTP20 } />
            <Route path="/Yealink/WPP20" exact component={ WPP20 } />
            <Route path="/Yealink/VC880" exact component={ VC880 } />
            <Route path="/Yealink/VP59" exact component={ VP59 } />
            <Route path="/Yealink/T49G" exact component={ T49G } />
            <Route path="/Yealink/T48V" exact component={ T48V } />
            <Route path="/Eatiok" exact component={ Food_Purby } />
            <Route path="/Fresh_Grocery" exact component={ Grobino } />
            <Route path="/Laundry" exact component={ Laundry } />
            <Route path="/Saloon" exact component={ Saloon } />
            <Route path="/Work" exact component={ Work } />
            <Route path="/Service/Web_Development" exact component={ Ser_Web } />
            <Route path="/Service/Mobile_Development" exact component={ Ser_Mob } />
            <Route path="/Service/UI-UX" exact component={ Ui_ux } />
            <Route path="/Service/Graphic_design" exact component={ Graphic_design } />
            <Route path="/Service/SEO" exact component={ Marketing } />
            <Route path="/Service/SMM" exact component={ Smm } />
            <Route path="/Service/SEM" exact component={ Smo } />
            <Route path="/Service/Web_Portal" exact component={ Wp } />
            <Route path="/Service/Technical_Support" exact component={ Tech_support } />
            <Route path="/Login" exact component={ Login } />
            <Route path="/Solutions/Data_Analysis" exact component={ Data_Analysis } />
            <Route path="/Solutions/IOT" exact component={ IOT } />
            <Route path="/Solutions/Cybersecurity" exact component={ Cybersecurity } />
            <Route path="/Solutions/AI" exact component={ AI } />
            <Route path="/Solutions/AR_VR" exact component={ AR_VR } />
            <Route path="/Contact_Us" exact component={ Contact_Us } />
            <Route path="/About_Us" exact component={ About_Us } />
            <Route path="/Careers" exact component={ Careers } />
            <Route path="/admin/clients" exact component={ Admin_clients } />
            <Route path="/admin/Dashboard" exact component={ Dashboard } />
            <Route path="/admin/Partners" exact component={ Partners } />
            <Route path="/admin/Works" exact component={ Admin_works } />
            <Route path="/admin/Careers" exact component={ Admin_careers } />
            <Route path="/dot-net-developers" exact component={ DotNet } />
            <Route path="/react-js-developers" exact component={ ReactJs } />
            <Route path="/php-developers" exact component={ Php } />
            <Route path="/android-developers" exact component={ Android } />
            <Route path="/ios-developers" exact component={ Ios } />
            <Route path="/nodejs-developer" exact component={ NodeJs } />
            <Route path="/react-native-developer" exact component={ ReactNative } />
            <Route path="/graphic-designer" exact component={ Graphic } />
            <Route path="/our-services" exact component={ OurServices } />
            <Route path="/our-solutions" exact component={ OurSolutions } />
            <Route path="/restaurant-erp" exact component={ RestaurantErp } />
            <Route path="/hr-scope" exact component={ HrScope } />
            <Route path="/facility-management" exact component={ FacilityManagement } />
            <Route path="/hotel-management" exact component={ HotelManagement } />
            
          </Switch>
        </Router>
        </div>
  );
  }
export default App;
