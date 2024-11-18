import MetaTags from "react-meta-tags";
import React, { Component } from "react";

import "../../App.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav1 from "../nav1.js";

import Footer from "../footer.js";
import RequestDemo from "../requestDemo.js";

import Banner from "../../img/hire/facility.jpg";
import BannerImage from "../../img/hire/facility-content.jpg";
import BannerImageThree from "../../img/hire/facility-contentthree.jpg";
import { withTranslation } from 'react-i18next';
class ReactDeveloper extends Component {
  render() {
    return (
      <div className="App">
        <MetaTags>
          <title>Facility Management Software | Scope Tech</title>
          <meta
            id="meta-description"
            name="description"
            content="Welcome to Scope Tech, the industry leader in Facility Management Software. Our software is designed to streamline your facility management processes, saving you time and money."
          />
          <meta id="" property="keywords" content="" />
        </MetaTags>
        <Nav1 />

        <div className="main-content-cr">
          <section
            className="sub-banner text-left"
            style={{ backgroundImage: `url(${Banner})` }}
          >
            <div className="container">
              <div className="box">
                <h1>{this.props.t("facility_banner_heading")}</h1>
                <p>
                  {this.props.t("facility_banner_text")}
                </p>
              </div>
            </div>
          </section>

          <section className="content-left-right text-left">
            <div className="container">
              <h2 className="text-center">
                {this.props.t("what_is_facility_management_software?")}
              </h2>
              <p className="text-center mb-5">
               {this.props.t("what_is_facility_management_software_text")}
              </p>

              <div className="row">
                <div className="col-md-6 text-center">
                  <img src={BannerImage} alt="Restaurant ERP" />
                </div>

                <div className="col-md-6">
                  <div className="box">
                    <h3>{this.props.t("asset_management")}</h3>
                    <p>
                     {this.props.t("asset_management_text")}
                    </p>
                  </div>

                  <div className="box">
                    <h3>{this.props.t("work_orders")}</h3>
                    <p>
                    {this.props.t("work_orders_text")}
                    </p>
                  </div>

                  <div className="box">
                    <h3>{this.props.t("maintenance")}</h3>
                    <p>
                    {this.props.t("maintenance_text")}
                    </p>
                  </div>

                  <div className="box">
                    <h3>{this.props.t("vendors")}</h3>
                    <p>
                    {this.props.t("vendors_text")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className="fea-boxed">
            <div className="container">
              <div className="text-center mb-5">
                <h2>
                 {this.props.t("6_key_features_of_scope_tech_facility_management_software")}
                </h2>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="boxed">
                    <i className="fa fa-cutlery"></i>
                    <h3>{this.props.t("mobile_app")}</h3>
                    <p>
                    {this.props.t("mobile_app_text")}
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="boxed">
                    <i className="fa fa-ticket"></i>
                    <h3>{this.props.t("real_time_updates")}</h3>
                    <p>
                    {this.props.t("real_time_updates_text")}
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="boxed">
                    <i className="fa fa-bolt"></i>
                    <h3>{this.props.t("preventive_maintenance")}</h3>
                    <p>
                    {this.props.t("preventive_maintenance_text")}
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="boxed">
                    <i className="fa fa-money"></i>
                    <h3>{this.props.t("vendor_management")}</h3>
                    <p>
                     {this.props.t("vendor_management_text")}
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="boxed">
                    <i className="fa fa-money"></i>
                    <h3>{this.props.t("asset_tracking")}</h3>
                    <p>
                    {this.props.t("asset_tracking_text")}
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="boxed">
                    <i className="fa fa-money"></i>
                    <h3>{this.props.t("robust_reporting")}</h3>
                    <p>
                    {this.props.t("robust_reporting_text")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="content-left-right text-left">
            <div className="container">
              <h2 className="text-center">
                {this.props.t("industries_that_can_benefit_from_scope_tech")}
              </h2>
              <p className="text-center mb-5">
                {this.props.t("industries_that_can_benefit_from_scope_tech_text")}
              </p>

              <div className="row">
                <div className="col-md-6">
                  <div className="box">
                    <h3>{this.props.t("hospitality")}</h3>
                    <p>
                    {this.props.t("hospitality_text")}
                    </p>
                  </div>

                  <div className="box">
                    <h3>{this.props.t("healthcare")}</h3>
                    <p>
                    {this.props.t("healthcare_text")}
                    </p>
                  </div>

                  <div className="box">
                    <h3>{this.props.t("manufacturing")}</h3>
                    <p>
                    {this.props.t("manufacturing_text")}
                    </p>
                  </div>
                </div>

                <div className="col-md-6 text-center">
                <img src={BannerImageThree} alt="Streamline" />
                
                </div>
              </div>
            </div>
          </section>
        </div>

        <RequestDemo />

        <Footer />
      </div>
    );
  }
}

export default withTranslation()(ReactDeveloper);
