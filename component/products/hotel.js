import MetaTags from "react-meta-tags";
import React, { Component } from "react";

import "../../App.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav1 from "../nav1.js";

import Footer from "../footer.js";
import RequestDemo from "../requestDemo.js";

import Banner from "../../img/hire/hotel.jpg";
import BannerImage from "../../img/hire/hotel-content.jpg";
import BannerImageTwo from "../../img/hire/hotel-content-two.jpg";
import ImagesBase from "./image.js";
import { withTranslation } from 'react-i18next';
class ReactDeveloper extends Component {
  render() {
    return (
      <div className="App">
        <MetaTags>
          <title>
            Top rated Hotel Management Software on a budget | Scope Tech
          </title>
          <meta
            id="meta-description"
            name="description"
            content="Scope Tech offers the best hotel management software equipped with features that streamline room allocation, online bookings, and automated billing, all while saving you time and money. Schedule your consultation today."
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
                <h1>{this.props.t("hotel_management_banner_heading")}</h1>
                <p>
              {this.props.t("hotel_management_banner_text")}
                </p>
              </div>
            </div>
          </section>

          <section className="content-left-right text-left">
            <div className="container">
              <div className="row">
                <div className="col-md-6 text-center">
                  <img src={BannerImage} alt="Hotel Management Software" />
                </div>
                <div className="col-md-6">
                  <h2>{this.props.t("what_is_hotel_management_software?")}</h2>
                  <p>
                   {this.props.t("what_is_hotel_management_software_text")}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="content-left-right text-left">
            <div className="container">
              <h2 className="text-center mb-5">
               {this.props.t("how_scope_tech_can_improve_your_hotel_management")}
              </h2>

              <div className="row">
                <div className="col-md-6">
                  <div className="box">
                    <h3>{this.props.t("streamlined_bookings")}</h3>
                    <p>
                      {this.props.t("streamlined_bookings_text")}
                    </p>
                  </div>

                  <div className="box">
                    <h3>{this.props.t("invoicing_and_accounting")}</h3>
                    <p>
                     {this.props.t("invoicing_and_accounting_text")}
                    </p>
                  </div>

                  <div className="box">
                    <h3>{this.props.t("feedback_management")}</h3>
                    <p>
                    {this.props.t("feedback_management_text")}
                    </p>
                  </div>
                </div>

                <div className="col-md-6 text-center">
                  <img
                    src={BannerImageTwo}
                    class="border-radius-20"
                    alt="Restaurant ERP"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="fea-boxed">
            <div className="container">
              <div className="text-center mb-5">
                <h2>{this.props.t("features_of_scope_tech_hotel_management_software")}</h2>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="boxed">
                    <i className="fa fa-bed"></i>
                    <h3>{this.props.t("easy_check_in_and_check_out_management")}</h3>
                    <p>
                     {this.props.t("easy_check_in_and_check_out_management_text")}
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="boxed">
                    <i className="fa fa-calendar"></i>
                    <h3>{this.props.t("reservation_management")}</h3>
                    <p>
                    {this.props.t("reservation_management_text")}
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="boxed">
                    <i className="fa fa-user"></i>
                    <h3>{this.props.t("staff_performance_monitoring")}</h3>
                    <p>
                    {this.props.t("staff_performance_monitoring_text")}
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="boxed">
                    <i className="fa fa-building"></i>
                    <h3>{this.props.t("room_service_and_inventory_management")}</h3>
                    <p>
                      {this.props.t("room_service_and_inventory_management_text")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="contact-for-solution">
            <div className="container">
              <div className="box">
                <h2>{this.props.t("contact_us_for_a_consultation")}</h2>
                <p className="mb-0">
                {this.props.t("contact_us_for_a_consultation_text")}
                </p>
              </div>
            </div>
          </section>

          <section className="php-devloper text-left">
            <div className="container">
              <h2 className="text-center mb-5">
              {this.props.t("benefits_of_using_hotel_management_software")}
              </h2>

              <div className="row">
                <div className="col-md-4">
                  <div className="box">
                  <img src={ImagesBase.boost} />
                    <h3>{this.props.t("hotel_increased_efficiency")}</h3>
                    <p>
                    {this.props.t("hotel_increased_efficiency_text")}
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box">
                  <img src={ImagesBase.guest} />
                    <h3>{this.props.t("improved_guest_experience")}</h3>
                    <p>
                     {this.props.t("improved_guest_experience_text")}
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box">
                  <img src={ImagesBase.forcast} />
                    <h3>{this.props.t("better_decision_making")}</h3>
                    <p>
                    {this.props.t("better_decision_making_text")}
                    </p>
                  </div>
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
