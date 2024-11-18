    import MetaTags from 'react-meta-tags';
import React,{ Component } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';

import Footer from '../footer.js';
import RequestDemo from "../requestDemo.js";

import Banner from '../../img/hire/atten.jpg';
import BannerImage from '../../img/hire/hrscope-content.jpg';
import BannerImageTwo from '../../img/hire/hr-content.jpg';
import ImagesBase from "./image.js";
import { withTranslation } from 'react-i18next';

class ReactDeveloper extends Component{
render(){
  return (
    <div className="App">



<MetaTags>
            <title>Attendance Management Software | Scope Tech</title>
            <meta id="meta-description" name="description" content="Scope Tech's Attendance Management Software provides a state-of-the-art solution for managing employee attendance and time tracking in your business. " />
            <meta id="" property="keywords" content="" />
            
</MetaTags>
        	<Nav1/>

      <div className="main-content-cr">
        <section className="sub-banner text-left" style={{backgroundImage: `url(${Banner})`}}>
          <div className="container">
            <div className="box">
              <h1>{this.props.t("HP_scope_banner_heading")}</h1>
              <p>
              {this.props.t("HP_scope_banner_text")}
              </p>
              </div>
          </div>
        </section>



<section className="content-left-right text-left">
  <div className="container">
  <h2 className="text-center mb-5">{this.props.t("flexible_scheduling")}</h2>
<div className="text-center">
<img src={BannerImage} alt="Restaurant ERP" />
</div>
  </div>
</section>


<section className="php-devloper text-left pt-0">
  <div className="container">

    <div className="row">
      <div className="col-md-4">
    <div className="box">
    <img src={ImagesBase.trip} />
      <h3>{this.props.t("dynamic_shift_design")}</h3>
      <p>{this.props.t("dynamic_shift_design_text")}</p>
    </div>
    </div>

    <div className="col-md-4">
    <div className="box">
    <img src={ImagesBase.calender} />
      <h3>{this.props.t("auto_scheduling")}</h3>
      <p>{this.props.t("auto_scheduling_text")}</p>
    </div>
    </div>

    <div className="col-md-4">
      <div className="box">
      <img src={ImagesBase.holiday} />
      <h3>{this.props.t("holiday_planning")}</h3>
      <p>{this.props.t("holiday_planning_text")}</p>
    </div>
      </div>
      </div>

  </div>
</section>



<section className="content-left-right text-left">
  <div className="container">
  <h2 className="text-center mb-5">{this.props.t("absence_management")}</h2>

    <div className="row">


      <div className="col-md-6">

    <div className="box">
      <h3>{this.props.t("sick_leave")}</h3>
      <p>{this.props.t("sick_leave_text")}</p>
    </div>

    <div className="box">
      <h3>{this.props.t("authorised_leave")}</h3>
      <p>{this.props.t("authorised_leave_text")}</p>
    </div>

        <div className="box">
      <h3>{this.props.t("unauthorised_leave")}</h3>
      <p>{this.props.t("unauthorised_leave_text")}</p>
    </div>
      </div>

      <div className="col-md-6 text-center">
        <img src={BannerImageTwo} class="border-radius-20" alt="Restaurant ERP" />
      </div>

      </div>
  </div>
</section>



<section className="fea-boxed">
  <div className="container">
    <div className="text-center mb-5">
      <h2>{this.props.t("benefits_of_scope_tech_attendance_management_software")}</h2>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="boxed">
          <i className="fa fa-cutlery"></i>
            <h3>{this.props.t("less_administration_time")}</h3>
            <p>{this.props.t("less_administration_time_text")}</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="boxed">
          <i className="fa fa-ticket"></i>
            <h3>{this.props.t("better_cost_management")}</h3>
            <p>{this.props.t("better_cost_management_text")}</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="boxed">
          <i className="fa fa-bolt"></i>
            <h3>{this.props.t("employee_satisfaction")}</h3>
            <p>{this.props.t("employee_satisfaction_text")}</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="boxed">
          <i className="fa fa-money"></i>
            <h3>{this.props.t("easy_compliance")}</h3>
            <p>{this.props.t("easy_compliance_text")}</p>
          </div>
        </div>
      </div>
  </div>
</section>

<section className="contact-for-solution">
  <div className="container">
    <div className="box">
        <h2>{this.props.t("get_our_attendance_management_software_today")}</h2>
        <p className="mb-0">{this.props.t("get_our_attendance_management_software_today_text")}</p>
    </div>
  </div>
</section>

<section className="php-devloper text-left">
  <div className="container">
    <h2 className="text-center mb-5">{this.props.t("real_time_reporting")}</h2>

    <div className="row">
      <div className="col-md-4">
        <div className="box">
        <img src={ImagesBase.chart} />
        <h3>{this.props.t("data_visualisation")}</h3>
        <p>{this.props.t("data_visualisation_text")}</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="box">
        <img src={ImagesBase.report} />
        <h3>{this.props.t("custom_reports")}</h3>
        <p>{this.props.t("custom_reports_text")}</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="box">
        <img src={ImagesBase.bell} />
        <h3>{this.props.t("employee_notifications")}</h3>
        <p>{this.props.t("employee_notifications_text")}</p>
        </div>
      </div>
    </div>  

  </div>
</section>  


      </div>
      
      <RequestDemo/>

      <Footer/>
    </div>    
  );
}
}

export default withTranslation()(ReactDeveloper);
