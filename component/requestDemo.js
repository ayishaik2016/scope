import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
class RequestDemo extends Component{
render(){
  return (
    <div className="requestDemo">
        <div className="container">
        <div>
        <h2>{this.props.t("request_demo")}</h2>
        <p>{this.props.t("request_demo_text")}</p>
        </div>
          <Link to={"/Contact_Us"} className="btn btn-primary">{this.props.t("contact_us")}</Link>
        </div>
    </div>    
  );
}
}

export default withTranslation()(RequestDemo);
