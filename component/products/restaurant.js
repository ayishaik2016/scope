import MetaTags from "react-meta-tags";
import React, { Component } from "react";

import "../../App.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav1 from "../nav1.js";

import Footer from "../footer.js";
import RequestDemo from "../requestDemo.js";

import Banner from "../../img/hire/restaurant.jpg";
import BannerImage from "../../img/hire/restaurant-content.jpg";
import ImagesBase from "./image.js";
import { withTranslation } from 'react-i18next';
class ReactDeveloper extends Component {
  render() {
    return (
      <div className="App">
        <MetaTags>
          <title>
            Scope Tech Restaurant ERP: Streamline Your Restaurant Operations
          </title>
          <meta
            id="meta-description"
            name="description"
            content="Discover how Scope Tech Restaurant ERP can improve your restaurant by automating your inventory management, billing, and order processes. Contact us now."
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
                <h1>
                 {this.props.t("erp_restarent_banner_text")}
                </h1>
                <p>
                {this.props.t("erp_restarent_banner_sub_text")}
                </p>
              </div>
            </div>
          </section>

          <section className="content-left-right text-left">
            <div className="container">
              <h2 className="text-center mb-5">
              {this.props.t("Key_Features_text")}
              </h2>

              <div className="text-center">
                <img src={BannerImage} alt="Restaurant ERP" />
              </div>
            </div>
          </section>

          <section className="php-devloper text-left pt-0">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="box">
                    <img src={ImagesBase.tracking} />
                    <h3>{this.props.t("real_time_order_tracking")}</h3>
                    <p>{this.props.t("real_time_order_tracking_text")}</p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="box">
                  <img src={ImagesBase.cloud} />
                    <h3>{this.props.t("cloud_based_POS")}</h3>
                    <p>
                     {this.props.t("cloud_based_POS_text")}
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="box">
                  <img src={ImagesBase.inventry} />
                    <h3>{this.props.t("smart_inventory_management")}</h3>
                    <p>
                     {this.props.t("smart_inventory_management_text")}
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="box">
                  <img src={ImagesBase.analytics} />
                    <h3> {this.props.t("intelligent_analytics")}</h3>
                    <p>
                    {this.props.t("intelligent_analytics_text")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="fea-boxed">
            <div className="container">
              <div className="text-center mb-5">
                <h2>{this.props.t("Why_Choose_Scope_Tech_Restaurant_ERP?")}</h2>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="boxed">
                    <i className="fa fa-cutlery"></i>
                    <h3>{this.props.t("advanced_technology")}</h3>
                    <p>
                     {this.props.t("advanced_technology_text")}
                      </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="boxed">
                    <i className="fa fa-ticket"></i>
                    <h3>{this.props.t("expert_support")}</h3>
                    <p>
                    {this.props.t("expert_support_text")}
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="boxed">
                    <i className="fa fa-bolt"></i>
                    <h3>{this.props.t("increased_efficiency")}</h3>
                    <p>
                    {this.props.t("increased_efficiency_text")}
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="boxed">
                    <i className="fa fa-money"></i>
                    <h3>{this.props.t("cost_effective_solution")}</h3>
                    <p>
                    {this.props.t("cost_effective_solution_text")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="contact-for-solution">
            <div className="container">
              <div className="box">
                <h2>{this.props.t("contact_us_for_a_customised_solution")}</h2>
                <p className="mb-0">
                {this.props.t("contact_us_for_a_customised_solution_text")}
                </p>
              </div>
            </div>
          </section>

          <section className="php-devloper text-left">
            <div className="container">
              <h2 className="text-center mb-5">
              {this.props.t("benefits_of_restaurant_ERP_for_your_business")}
              </h2>

              <div className="row">
                <div className="col-md-4">
                  <div className="box">
                    <img src={ImagesBase.boost} />
                    <h3>{this.props.t("boosts_employee_productivity")}</h3>
                    <p>
                    {this.props.t("boosts_employee_productivity_text")}
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box">
                  <img src={ImagesBase.customer} />
                    <h3>{this.props.t("enhances_customer_experience")}</h3>
                    <p>
                    {this.props.t("enhances_customer_experience_text")}
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box">
                  <img src={ImagesBase.restaurant} />
                    <h3>{this.props.t("improves_inventory_management")}</h3>
                    <p>
                    {this.props.t("improves_inventory_management_text")}
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
