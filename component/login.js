import React,{ Component,setState } from 'react';
import fire from '../firebase.js';
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from './nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import cont_1_img_1 from '../img/food/c_1_i_1.png';
import cont_1_img_2 from '../img/food/c_1_i_2.png';
import cont_2_img_1 from '../img/food/c_2_i_1.png';
import firebase from "firebase";
import cont_2_img_2 from '../img/food/c_2_i_2.png';
import cont_2_img_3 from '../img/food/c_2_i_3.png';
import cont_3_img_1 from '../img/food/c_3_i_1.png';
import cont_3_img_2 from '../img/food/c_3_i_2.png';

import img_round2 from '../img/food/img_round2.png';
import img_round1 from '../img/food/img_round1.png';
import { AiFillCloseCircle } from 'react-icons/ai';
import work_img_1 from '../img/work_img_1.png';
import work_img_2 from '../img/work_img_2.png';
import work_img_3 from '../img/work_img_3.png';
import work_img_4 from '../img/work_img_4.png';
import work_img_5 from '../img/work_img_5.png';
import work_img_6 from '../img/work_img_6.png';
import work_img_7 from '../img/work_img_7.png';
import work_img_8 from '../img/work_img_8.png';
import work_img_9 from '../img/work_img_9.png';
import work_img_10 from '../img/work_img_10.png';
import work_img_11 from '../img/work_img_11.png';
import work_img_12 from '../img/work_img_12.png';
import fp_cp_5 from '../img/food/fp_cp_5.png';
import fp_cp_6 from '../img/food/fp_cp_6.png';
import fp_cp_7 from '../img/food/fp_cp_7.png';
import logo from'../img/logo_scp.png';
import fp_da_1 from '../img/food/fp_da_1.png';
import fp_da_2 from '../img/food/fp_da_2.png';
import fp_da_3 from '../img/food/fp_da_3.png';
import fp_da_4 from '../img/food/fp_da_4.png';
import fp_da_5 from '../img/food/fp_da_5.png';
import fp_da_6 from '../img/food/fp_da_6.png';
import fp_da_7 from '../img/food/fp_da_7.png';
import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom';
class Login extends Component{

constructor(props) {
    super(props);
    // Firebase.initializeApp(config);
    this.state = {

  login: []
};

  }



  componentDidMount(){
    sessionStorage.setItem('aemail','');    
    fire.auth().signOut();
  }

  SignUp(){
    const email=document.querySelector("#mail").value;
    const pw=document.querySelector("#pw").value;
    fire.auth().createUserWithEmailAndPassword(email, pw)
      .then((u)=>{
        console.log("Added");
      })
      .catch((err)=>{
        console.log(err.toString());
      })
  }


setData(){
  
}


  Login(){
    // alert("test");
    const email=document.querySelector("#mail").value;
    const password=document.querySelector("#password").value;
    fire.auth().signInWithEmailAndPassword(email,password)
      .then((u)=>{
        const email=document.querySelector("#mail").value;
  let omail={smail:email} 
  sessionStorage.setItem('aemail',JSON.stringify(omail));
  
        console.log("Logined");





      })
      .catch((err)=>{
        alert("WRONG MAIL ID OR PASSWORD");
        console.log(err.toString());
      })


  }

render(){
  return (
    <div className="App">
      
      <div class="container-fluid login_banner text-center">
        <div class="login_cnt_main">
          <div class="">
            <p class="text-right login_close"><Link className="nav_link" to={"/"}><AiFillCloseCircle/></Link></p>
            <div class="login_cred_main">
              <div class="text-left login_logo_img_main"><img class="img-fluid login_logo_img" src={logo} /></div>
              <h3 class="text-left">LOGIN</h3>



                  
                    
                  
                  <div class="row login_row" style={{margin:"0"}}>
                    <div class="col-md-12 login_col">
                      <div class="input-wrapper">
                        <input class="input_text" type="text" id="mail" required />
                        <label class="label_text" for="user">Email</label>
                      </div>    
                    </div>
                    <div class="col-md-12 login_col">
                      <div class="input-wrapper">
                        <input class="input_text" type="email" id="password" required />
                        <label class="label_text" for="user">Password</label>
                        <div class="login_btn_main">
                          <button onClick={this.Login} class="login-btn-1">
                            LOGIN
                          </button>
                        </div>
                      </div>    
                    </div>

                  </div>
                  
                
              
      



            </div>
          </div>
        </div>
      </div>
            
    </div>    
  );
}
}

export default Login;
