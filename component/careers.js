import React, { Component, setState } from "react";
import axios from "axios";

import "../App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav1 from "./nav1.js";
import firebase from "firebase";

import Footer from "./footer.js";
import car_banner_img from "../img/car_banner_img.png";
import ScrollAnimation from "react-animate-on-scroll";
import { withTranslation } from "react-i18next";
class Careers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_we: false,
      careers: [],
      id: null,
      files: null,
      img_url: null,
      img: null,
      img_url1: [],
      login: [],
      name: "",
      email: "",
      phoneNumber: "",
      city: "",
      nationality: "",
      job: "",
      message: "",
      selectedImage: "",
      errors: {}
    };

    this.onFileChange = this.onFileChange.bind(this); 
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
    const { name, email, phoneNumber, city, nationality, job, message, selectedImage } = this.state;
    const errors = this.validateForm(name, email, phoneNumber, city, nationality, job, message, selectedImage);
    this.setState({ errors });
    
    if (Object.keys(errors).length === 0) {
      const formData = {
        image: selectedImage,
        name: name,
        email: email,
        phone_number: phoneNumber,
        city: city,
        nationality: nationality,
        job: job,
        message: message,
      };
  
      axios({
        method: "post",
        url: "https://scope.ababilitsolutions.com/api/career",
        headers: { "content-type": "multipart/form-data" },
        data: formData,
      }).then((result) => {
        this.setState({
          name: "",
          email: "",
          phoneNumber: "",
          city: "",
          nationality: "",
          job: "",
          message: "",
          selectedImage: "",
        });
        document.getElementById("career_form").reset();
        alert("Form Submitted Successfully. We will contact shortly");
      });
    }
  };

  validateForm = (name, email, phoneNumber, city, nationality, job, message, selectedImage) => {
    let errors = {};
    if (!name.trim()) {
      errors.name = 'Name is required';
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Email is invalid';
    }

    if (!phoneNumber.trim()) {
      errors.phoneNumber = 'Mobile Number is required';
    }

    if (!nationality.trim()) {
      errors.nationality = 'Nationality is required';
    }

    if (!selectedImage.trim()) {
      errors.selectedImage = 'Attachment is required';
    }
    
    return errors;
  };

  
  onFileChange(e) {
    let files = e.target.files;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(files[0]);

    fileReader.onload = (event) => {
      this.setState({
        selectedImage: event.target.result,
      });
    };
  }

  render() {
    const { name, email, phoneNumber, city, nationality, job, message, selectedImage, errors } = this.state;
    return (
      <div className="App">
        <Nav1 />
        <div className="ban_main_cont car_banner" style={{ height: "70vh" }}>
          <div class="container ">
            <div
              class="row mar_top_50"
              style={{
                width: "100%",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              <div class="col-md-6 text-left" style={{ margin: "auto" }}>
                <ScrollAnimation animateIn="fadeInLeft" delay="100">
                  <h1
                    class="banner_heading_cnt text-left"
                    style={{ color: "#fff" }}
                  >
                    {this.props.t("careers_banner_text")}
                  </h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInLeft" delay="300">
                  <p class="banner_sub_head_cnt1">
                    {this.props.t("careers_banner_sub_text")}
                  </p>
                </ScrollAnimation>
              </div>
              <div class="col-md-6 text-center" style={{ margin: "auto" }}>
                <img
                  class="img-fluid "
                  id="img_ui"
                  style={{ height: "auto", width: "100%", margin: "auto" }}
                  src={car_banner_img}
                />
              </div>
            </div>
          </div>
        </div>
        <div class="container cu_cont_1">
          <div class="row">
            <div class="col-md-8" style={{ paddingBottom: "5%" }}>
              <form onSubmit={this.handleSubmit} method="post" id="career_form" enctype="multipart/form-data">
                <h5 class="text-left car_head">
                  {this.props.t("upperCase_careers")}
                </h5>
                <div class="row">
                  <div class="col-md-12 text-left" style={{ paddingTop: "4%" }}>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder={`${this.props.t("name")}*`}
                      class="text_box_cu"
                      value={name} 
                      onChange={this.handleInputChange}
                      // required 
                    />
                    {errors.name && <p class="error">{errors.name}</p>}
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 text-left" style={{ paddingTop: "4%" }}>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder={`${this.props.t("email_adrees")}*`}
                      class="text_box_cu"
                      value={email} 
                      onChange={this.handleInputChange}
                      // required
                    />
                    {errors.email && <p class="error">{errors.email}</p>}
                  </div>
                  <div class="col-md-6 text-left" style={{ paddingTop: "4%" }}>
                    <input
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder={`${this.props.t("mobile_number")}*`}
                      class="text_box_cu"
                      value={phoneNumber} 
                      onChange={this.handleInputChange}
                      // required
                    />
                    {errors.phoneNumber && <p class="error">{errors.phoneNumber}</p>}
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 text-left" style={{ paddingTop: "4%" }}>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder={this.props.t("city")}
                      class="text_box_cu"
                      value={city} 
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div class="col-md-6 text-left" style={{ paddingTop: "4%" }}>
                    <input
                      type="text"
                      name="nationality"
                      id="nationality"
                      placeholder={`${this.props.t("nationality")}*`}
                      class="text_box_cu"
                      value={nationality} 
                      onChange={this.handleInputChange}
                      // required
                    />
                    {errors.nationality && <p class="error">{errors.nationality}</p>}
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 text-left" style={{ paddingTop: "4%" }}>
                    <div class="mb-3">
                      <select id="job" name="job" class="form-select car_drop"
                      value={job}
                      onChange={this.handleInputChange}>
                        <option value="">
                          {this.props.t("select_job")}
                        </option>
                        <option value="Admin">Admin</option>
                        <option value="Designer">Designer</option>
                        <option value="Accountant">Accountant</option>
                        <option value="Digital Marketing">
                          Digital Marketing
                        </option>
                        <option value="Sales">Sales</option>
                        <option value="IT">IT</option>
                        <option value="Developer">Developer</option>
                        <option value="Others">Others </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 text-left" style={{ paddingTop: "4%" }}>
                    <textarea
                      id="message"
                      name="message"
                      placeholder={this.props.t("message")}
                      rows="4"
                      class="text_box_cu career_msg"
                      value={message} 
                      onChange={this.handleInputChange}
                    ></textarea>
                  </div>
                </div>
                <div class="row">
                  <div
                    class="col-md-12 text-right"
                    style={{ paddingTop: "4%" }}
                  >
                    <label for="files" class="btn car_cv_file_label2">
                      {this.props.t("attach_your_cv")}
                    </label>
                    <input
                      id="files"
                      style={{ display: "none" }}
                      onChange={this.onFileChange}
                      class="car_cv_file"
                      type="file"
                    />
                    {errors.selectedImage && <p class="error">{errors.selectedImage}</p>}
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12" style={{ paddingTop: "4%" }}>
                    <div class="car_cnt">
                      <div class="text-left car_submit">
                        {/* <button
                          onClick={(e) => this.handleFormSubmit(e)}
                          class="home-btn-1 text-right"
                        > */}
                        <button
                          type="submit"
                          class="home-btn-1 text-right submit_btn"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withTranslation()(Careers);
