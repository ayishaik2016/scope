import React,{ Component,setState } from 'react';
import axios from 'axios';

import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from './nav1.js';
import emailjs from 'emailjs-com';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ga_ca_1 from '../img/laundry/la_ca_1.png';
import ga_ca_2 from '../img/laundry/la_ca_2.png';
import ga_ca_3 from '../img/laundry/la_ca_3.png';

import ga_ca_4 from '../img/laundry/la_ca_4.png';
import ga_ca_5 from '../img/laundry/la_ca_5.png';
import ga_ca_6 from '../img/laundry/la_ca_6.png';
import ga_ca_7 from '../img/laundry/la_ca_7.png';

import ga_da_1 from '../img/laundry/la_da_1.png';
import ga_da_2 from '../img/laundry/la_da_2.png';
import ga_da_3 from '../img/laundry/la_da_3.png';

import ga_da_4 from '../img/laundry/la_da_4.png';
import ga_da_5 from '../img/laundry/la_da_5.png';
import ga_da_6 from '../img/laundry/la_da_6.png';
import ga_da_7 from '../img/laundry/la_da_7.png';

import img_round2 from '../img/food/img_round2.png';
import img_round1 from '../img/food/img_round1.png';


import fire from '../firebase.js';
// import ReactDOM from 'react-dom';
import firebase from "firebase";

import Lets from './lets.js';
import Footer from './footer.js';

import { IoIosPhonePortrait,IoIosMail,IoLogoWhatsapp,IoLogoFacebook } from 'react-icons/io';
import { AiFillGooglePlusCircle,AiOutlineLinkedin } from 'react-icons/ai';


import mv_img1 from '../img/food/mv_img1.png';
import car_banner_img from '../img/car_banner_img.png';
import mv_img2 from '../img/food/mv_img2.png';
import mv_img3 from '../img/food/mv_img3.png';
import mv_img4 from '../img/food/mv_img4.png';
import mv_img5 from '../img/food/mv_img5.png';
import mv_img6 from '../img/food/mv_img6.png';
import mv_img7 from '../img/food/mv_img7.png';
import wd_1 from '../img/laundry/la_wd_1.png';
import wd_2 from '../img/laundry/la_wd_2.png';
import wd_3 from '../img/laundry/la_wd_3.png';
import ScrollAnimation from 'react-animate-on-scroll';
import { withTranslation } from 'react-i18next';
class Careers extends Component{


constructor(props){
    super(props);
    this.state={
      show_we:false,
      careers:[],
      id:null,
      files:null,
      img_url:null,
      img:null,
      img_url1:[],
      login:[],
      selectedImage: '',
    }

    this.onFileChange = this.onFileChange.bind(this);
  }

  onFileChange(e) {
    let files = e.target.files;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(files[0]);

    fileReader.onload = (event) => {
      this.setState({
        selectedImage: event.target.result,
      })
    }
  }

  sendEmail(e) {
		e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
	
		emailjs.sendForm('service_2obduvb', 'template_g6qs3rr', e.target, '2L0OGAgzPp9jgsolL')
		  .then((result) => {
			//console.log(result);
			alert('Form Submitted Successfully, We will contact shortly');
			window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
		  }, (error) => {
			  alert(error.text);
		  });
	  }

  // handleFormSubmit = e => {
  //   e.preventDefault();
  //   let name = document.getElementById("name").value;
  //   let email = document.getElementById("email").value;
  //   let phone_number = document.getElementById("phone_number").value;
  //   let city = document.getElementById("city").value;
  //   let nationality = document.getElementById("nationality").value;
  //   let job = document.getElementById("job").value;
  //   let message = document.getElementById("message").value;

  //   const formData = { 
  //     image: this.state.selectedImage,
  //     name: name,
  //     email: email,
  //     phone_number: phone_number,
  //     city: city,
  //     nationality: nationality,
  //     job: job,
  //     message: message
  //   }

  //   axios({
  //     method: 'post',
  //     url: 'https://ababilitsolutions.com/mail/mail.php',
  //     headers: { 'content-type': 'multipart/form-data'},
  //     data: formData
  //   })
  //   .then(result => {
  //     alert('Form Submitted Successfully. We will contact shortly');
  //   });
  // };

    // let endpoint = "https://ababilitsolutions.com/mail/mail.php";
    //  axios.post(endpoint, formData, {
    //  }).then((res) => {
    //     console.log('File uploaded!');
    // })
  //}



componentDidMount(){
// setTimeout(() => {  window.location.reload(); }, 0);
firebase.database().ref().child('careers').once('value').then( snapshot => {
    let allNotes = [];
    snapshot.forEach(snap => {
      allNotes.push(snap.val());
    });
    this.setState({ careers: allNotes });


  });

  

}

cng_img=(files)=>{
  // alert(files);
  this.setState({
    files:files
  })
  let file_path='career_cv'
  
  // let file=this.state.files[0]
  alert(files.name);
  let store=firebase.storage().ref(`${file_path}/${files.name}`)
  
  let task=store.put(files.name);
  task.on('state_changed', 
     () => {
      
      firebase.storage().ref('career_cv').child(files.name).getDownloadURL()
       .then(fireBaseUrl => {
      
         this.setState({img_url:fireBaseUrl});
         let temp_url={img:fireBaseUrl} 
         this.setState({img_url1:temp_url.img});
         alert(temp_url.img);
  sessionStorage.setItem('img_url',JSON.stringify(temp_url));
         
       })
    })
}


cng_save=()=>{
  // alert("test");
  // let file_path='career_cv'
  
  // let file=this.state.files[0]
  
  // let store=firebase.storage().ref(`${file_path}/${file.name}`)
  
  // let task=store.put(file);
  let ffile=document.getElementById("files").value;
  let ffname=document.getElementById("fname").value;
  let flname=document.getElementById("lname").value;
  let faddress=document.getElementById("address").value;
  let femail=document.getElementById("email").value;
  let fexp=document.getElementById("exp").value;
  let fpnum=document.getElementById("pnum").value;
  let fjob=document.getElementById("job").value;
  let img_url=this.state.img_url
  // alert(img_url);
  if(ffile=="" || ffname=="" || flname=="" || faddress=="" || femail=="" || fpnum=="" || img_url==null ){
    if(img_url==null || ffile!=""){
    	if(ffile==""){
    		alert("Insert Cv");
    	}
    	else{
    alert("Your CV is uploading...");
}
}
else{
alert("Fill all the details");	
}
  }
  else{
  	var d= new Date();
  var dd=d.getDate();
  

  var mm=d.getMonth();
  var yy=d.getFullYear();
  var hr=d.getHours();
  var min=d.getMinutes();
  var sec=d.getSeconds();
  var id=dd+""+mm+""+yy+""+hr+""+min+""+sec;
    // alert(this.state.img_url);

  

let temp_url=[]
      firebase.storage().ref('career_cv').child(this.state.id).getDownloadURL()
       .then(fireBaseUrl => {
      
         this.setState({img_url:fireBaseUrl});
         temp_url={img:fireBaseUrl} 
         this.setState({img:temp_url.img});
         // alert(temp_url.img+"      2");
  sessionStorage.setItem('img_url',JSON.stringify(temp_url));
         
       })

   // alert(file.name+" Uploaded");
// alert(this.state.img_url);

  // img_url=sessionStorage.getItem('img_url');
  // const data=JSON.parse(img_url);
  // img_url=data.name;
  
  
setTimeout(() => {  
  // alert(this.state.img);
  firebase.database().ref().child('careers_cv').push(
{
  fname:ffname,
  lname:flname,
  address:faddress,
  email:femail,
  phone:fpnum,
  id:id,
  exp:fexp,
  job:fjob,
  img:this.state.img_url
}


    )
 
  window.location.reload(); 
}, 1000);
  }
  
  // let img_url=this.state.img_url;
  
}




upload(e){
  let file_path="career_cv"
  const file = e.target.files[0];
  var str_name=file.name;
  var tname=str_name.split(".");
   var d= new Date();
  var dd=d.getDate();
  

  var mm=d.getMonth();
  var yy=d.getFullYear();
  var hr=d.getHours();
  var min=d.getMinutes();
  var sec=d.getSeconds();
  var id=dd+""+mm+""+yy+""+hr+""+min+""+sec;
  str_name=id+'.'+tname[1];
  this.setState({id:str_name});
  sessionStorage.setItem('img_url',JSON.stringify(file));
  // this.setState({img_url:file.name});
    const storageRef = firebase.storage().ref()
    const fileRef = storageRef.child(`${file_path}/${str_name}`)
    fileRef.put(file).then(() => {
      console.log("Uploaded a file")
    })
    let task=fileRef.put(file);
     task.on('state_changed', 
     () => {
      // gets the functions from storage refences the image storage in firebase by the children
      // gets the download url then sets the image from firebase as the value for the imgUrl key:
      firebase.storage().ref('career_cv').child(str_name).getDownloadURL()
       .then(fireBaseUrl => {
         // alert(fireBaseUrl);
         this.setState({img_url:fireBaseUrl});
         let temp_url={img:fireBaseUrl} 
  sessionStorage.setItem('img_url',JSON.stringify(temp_url));
         
       })
    })

}







render(){


  return (

    <div className="App">
    	<Nav1/>
            <div className="ban_main_cont car_banner" style={{height:"70vh"}}>
            <div class="container " >
            <div class="row mar_top_50" style={{width:"100%", paddingLeft:"15px",paddingRight:"15px"}}>
                <div class="col-md-6 text-left" style={{margin:"auto"}}>
                    <ScrollAnimation animateIn="fadeInLeft" delay="100"><h1 class="banner_heading_cnt text-left" style={{color:"#fff"}}>{this.props.t("careers_banner_text")}</h1></ScrollAnimation>
<ScrollAnimation animateIn="fadeInLeft" delay="300"><p class="banner_sub_head_cnt1">{this.props.t("careers_banner_sub_text")}
</p></ScrollAnimation>
                </div>
                <div class="col-md-6 text-center" style={{margin:"auto"}}>
                    <img class="img-fluid " id="img_ui" style={{height:"auto",width:"100%",margin:"auto"}}  src={car_banner_img}/>
                </div>
            </div>
        </div>
        </div>

{/*    	<div class="container-fluid car_banner">
    		<div class="cs_banner_main">
      <div class="row">
            <div class="col-md-6">
              <ScrollAnimation animateIn="fadeInLeft" delay="100" duration="1.5"><h1 class="banner_heading_cnt">Careers</h1></ScrollAnimation>
              <ScrollAnimation animateIn="fadeInLeft" delay="100" duration="1.5"><p class="banner_sub_head_cnt">Uplift Your Career with Scope Tech one of the Best Web Design and Development Company</p></ScrollAnimation>
          
          
            </div>
            <div class="col-md-6 da_banenr_right">
                <img class="img-fluid " style={{width:"70%"}} id="img_da" src={car_banner_img} />
            </div>
          </div>
         </div>
        
      
    	</div>*/}
    	<div class="container cu_cont_1">
    		
    		<div class="row">
    			<div class="col-md-8" style={{paddingBottom:"5%"}}>
            <form onSubmit={this.sendEmail} method="post" enctype="multipart/form-data">
              <h5 class="text-left car_head">{this.props.t("upperCase_careers")}</h5>
              <div class="row">
                <div class="col-md-12 text-left" style={{paddingTop:"4%"}}>
                  <input type="text" name="name" id="name" placeholder={`${this.props.t("name")}*`} class="text_box_cu" required/>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 text-left" style={{paddingTop:"4%"}}>
                  <input type="email" name="email" id="email" placeholder={`${this.props.t("email_adrees")}*`} class="text_box_cu" required/>
                </div>
                <div class="col-md-6 text-left" style={{paddingTop:"4%"}}>
                  <input type="number" name="phone_number" id="phone_number" placeholder={`${this.props.t("mobile_number")}*`} class="text_box_cu" required/>
                </div>
              </div>
              {/* <div class="row">
                <div class="col-md-6 text-left" style={{paddingTop:"4%"}}>

                  <input type="text" id="fname" placeholder="First Name*" class="text_box_cu" />
                </div>
                <div class="col-md-6 text-left" style={{paddingTop:"4%"}}>
                  <input type="text" id="lname" placeholder="Last Name" class="text_box_cu" />
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 text-left" style={{paddingTop:"4%"}}>
                  <input type="text" id="email" placeholder="Email Address*" class="text_box_cu" />
                </div>
                <div class="col-md-6 text-left" style={{paddingTop:"4%"}}>
                  <input type="text" id="pnum" placeholder="Phone Number" class="text_box_cu" />
                </div>
              </div>
              <div class="row">
                      <div class="col-md-12 text-left" style={{paddingTop: "4%"}}>
                        <div class="mb-3">
                          <select id="job" class="form-select car_drop">
                            <option disabled="">Select Job</option>
                                            {this.state.careers.map(note => {
              return(

                            <option value={note.job}>{note.job}</option>
                            );
            })}
                          
                          </select>
                        </div>
                      </div>
                    </div>
                    
              <div class="row">
                <div class="col-md-12 text-left" style={{paddingTop:"4%"}}>
                  <input type="text" id="address" placeholder="Address" class="text_box_cu" />
                </div>
              </div>
              <h5 class="text-left exp_car_head">Experience</h5>
            <div class="row">
                <div class="col-md-12 text-left" style={{paddingTop:"4%"}}>
                  <div class="mb-3">
        
                  <select id="exp" class="form-select car_drop">
                            
                            <option value="fresher" selected>Fresher</option>
                            <option value="1">1 </option>
                            <option value="2">2 </option>
                            <option value="3">3 </option>
                            <option value="4">4 </option>
                            <option value="5">5 </option>
                            <option value="more then 5">More then 5 </option>
                            <option value="more then 10">More then 10 </option>
                          </select>
                  </div>
                </div>
              </div> */}
              <div class="row">
                <div class="col-md-6 text-left" style={{paddingTop:"4%"}}>
                  <input type="text" name="city" id="city" placeholder={this.props.t("city")} class="text_box_cu" />
                </div>
                <div class="col-md-6 text-left" style={{paddingTop:"4%"}}>
                  <input type="text" name="nationality" id="nationality" placeholder={`${this.props.t("nationality")}*`} class="text_box_cu" required />
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 text-left" style={{paddingTop:"4%"}}>
                  <div class="mb-3">
                    <select id="job" name="job" class="form-select car_drop">  
                      <option value="" selected>{this.props.t("select_job")}</option>
                      <option value="Admin">Admin</option>
                      <option value="Designer">Designer</option>
                      <option value="Accountant">Accountant</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Sales">Sales</option>
                      <option value="IT">IT</option>
                      <option value="Developer">Developer</option>
                      <option value="Others">Others  </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 text-left" style={{paddingTop:"4%"}}>
                  <textarea id="message" name="message" placeholder={this.props.t("message")} rows="4" class="text_box_cu career_msg"></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 text-right" style={{paddingTop:"4%"}}>
                    <label for="files" class="btn car_cv_file_label2">{this.props.t("attach_your_cv")}</label>
                    {/*<label for="files" class="btn car_cv_file_label">Browse...</label> */}
                    <input id="files" style={{display: "none"}} onChange={this.onFileChange} class="car_cv_file" type="file"/>
                    {/* <input id="files" onChange={(e)=>{this.upload(e)}}  class="car_cv_file" type="file"/> */}
                </div>
              </div>
                      
              
          <div class="row">
          <div class="col-md-12" style={{paddingTop:"4%"}}>
              <div class="car_cnt">
                <div class="text-left car_submit">
                  {/* <button onClick={e => this.handleFormSubmit(e)} class="home-btn-1 text-right"> */}
                  <button class="home-btn-1 w-100">
                    {this.props.t("submit")}
                  </button>
                  {/* <button onClick={this.cng_save} class="home-btn-1 text-right">
                    Submit
                  </button> */}
                </div>
              </div>
                </div>
              </div>



            </form>
    			</div>

    			{/*<div class="col-md-6">
            <h5 style={{color:"#522a73", padding:"10px 0"}} class="text-left">{ this.state.careers.length>0 ? "CURRENT VACANCY" : "" }</h5>
               {this.state.careers.map(note=>{
                return(
                  <details class="accordion-details-img">
                    <summary>{note.job}</summary>
                    <div>
                      <ul class="ul_1">
                        <li><label>Location :&nbsp;</label><label>&nbsp;{note.location}</label></li>
                        <li><label>Experience :&nbsp;</label><label>&nbsp;{note.exp}</label></li>
                      </ul>
                      <h5 class="key_car_head">Key skills :</h5>
                      <ul class="ul_2">
                        {note.skils.map(note1=>{
                          return(
                            <li><label>{note1}</label></li>  
                          );
                        })}
	                		</ul>
                    </div>
	                </details>
                );
              })} 
	
              <details class="accordion-details-img">
                <summary>Project Manager</summary>
                <div>
                  <ul class="ul_1">
                    <li><label>Location :&nbsp;</label><label>&nbsp;Riyadh</label></li>
                    <li><label>Experience :&nbsp;</label><label>&nbsp;2-5 years</label></li>
                    
                  </ul>
                  <h5 class="key_car_head">Key skills :</h5>
                  
                  <ul class="ul_2">
                    <li><label>Time management</label></li>
                    <li><label>Planning</label></li>
                    <li><label>Communication</label></li>
                    <li><label>Risk Management</label></li>
                    <li><label>Cost Management</label></li>
                    <li><label>Critical Thinking</label></li>
                    <li><label>Quality Management</label></li>
                    


                  </ul>
                </div>
              </details>
          </div>*/}
    		</div>

    	</div>
    	<Footer/>
    </div>    
  );
}
}

export default withTranslation()(Careers);
