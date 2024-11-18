import logo from'../../img/logo_scp.png';
import user from'../../img/admin/user.png';
import '../../App.css';
import '../../admin.css';
import '../scroll.js';
import emailjs from 'emailjs-com';
import fire from '../../firebase.js';
// import ReactDOM from 'react-dom';
import firebase from "firebase";

import { FaBeer } from 'react-icons/fa';
import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom';
import React,{ Component, useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Dashboard extends Component{

constructor(props) {
    super(props);
    // Firebase.initializeApp(config);
    this.state = {
  id:null,
  messages: [],
  messages1: []
  
};

  }
componentDidMount(){

firebase.database().ref().child('contact').once('value').then( snapshot => {
    let allNotes = [];
    snapshot.forEach(snap => {
      allNotes.push(snap.val());
    });
    this.setState({ messages: allNotes });


  });
firebase.database().ref().child('contactus').once('value').then( snapshot => {
    let allNotes = [];
    snapshot.forEach(snap => {
      allNotes.push(snap.val());
    });
    this.setState({ messages1: allNotes });


  });
}



delete= id => () =>{
    

  firebase.database().ref().child('contact').orderByChild('id').equalTo(id).once('value').then( snapshot => {
    let allNotes = [];
    let key_temp=[];
    snapshot.forEach(snap => {
      allNotes.push(snap.val());
      key_temp.push(snap.key);
    });
    firebase.database().ref('contact/'+key_temp).remove() 

  });   
  // var subtitle=document.getElementById("edit_cn").value;
  setTimeout(() => {  window.location.href="/#/admin/Dashboard"; window.location.reload(); }, 1500);
}


delete1= id => () =>{
    

  firebase.database().ref().child('contactus').orderByChild('id').equalTo(id).once('value').then( snapshot => {
    let allNotes = [];
    let key_temp=[];
    snapshot.forEach(snap => {
      allNotes.push(snap.val());
      key_temp.push(snap.key);
    });
    firebase.database().ref('contactus/'+key_temp).remove() 

  });   
  // var subtitle=document.getElementById("edit_cn").value;
  setTimeout(() => {  window.location.href="/#/admin/Dashboard"; window.location.reload(); }, 1500);
}

sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_om95bje', 'template_m2runod', e.target, 'user_sthswXnPlneNbibpJxnpH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setTimeout(() => {  window.location.href="/#/admin/Dashboard"; window.location.reload(); }, 1500);
  }
  openpop= id => () =>{
    // alert(id);
    this.setState({id:id});
    // alert(this.state.id);
    document.getElementById("popup1").style.opacity = "1";
    document.getElementById("popup1").style.visibility = "visible";
  }

  closepop(){
    
    document.getElementById("popup1").style.opacity = "0";
    document.getElementById("popup1").style.visibility = "hidden";
  }
render(){
  return (
    <div className="App">
  <nav class="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
    <div class="scrollbar-inner">
      
      <div class="sidenav-header  align-items-center">
        <a class="navbar-brand" href="javascript:void(0)">
          <img src={logo} class="navbar-brand-img img-fluid" alt="..." />
        </a>
      </div>
      <div class="navbar-inner">
      
        <div class="collapse navbar-collapse" id="sidenav-collapse-main">
          
          <ul class="navbar-nav">
            <li class="nav-item">
              
              <Link className="nav-link active" to={"/admin/Dashboard"}>
                <i class="fa fa-home text-primary"></i>
                <span class="nav-link-text">Dashboard</span>
                </Link>
              
            </li>
            <li class="nav-item">
              <Link className="nav-link " to={"/admin/clients"}>
                <i class="fa fa-users text-orange"></i>
                <span class="nav-link-text">Clients</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link " to={"/admin/Partners"}>
                <i class="fa fa-handshake-o text-yellow"></i>
                <span class="nav-link-text">Partners</span>
              </Link>
            </li>

            <li class="nav-item">
              <Link className="nav-link " to={"/admin/Works"}>
                <i class="fas fa-laptop text-info"></i>
                <span class="nav-link-text">Works</span>
              </Link>
            </li>

            <li class="nav-item">
              <Link className="nav-link " to={"/admin/Careers"}>
                <i class="fa fa-address-card-o text-pink"></i>
                <span class="nav-link-text">Careers</span>
              </Link>
            </li>

            <li class="nav-item">
              <Link className="nav-link " to={"/Login"}>
                <i class="fa fa-sign-out text-dark"></i>
                <span class="nav-link-text">Logout</span>
              </Link>
            </li>
            
          </ul>
          
        </div>
      </div>
    </div>
  </nav>
  
  <div class="main-content" id="panel">
  
    <div class="header bg-primary pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7 text-left">
              
              <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                  <li class="breadcrumb-item"><a><i class="fa fa-home"></i></a></li>
                  <li class="breadcrumb-item"><a>Dashboards</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Home</li>
                </ol>
              </nav>
            </div>
            <div class="col-lg-6 col-5 text-right">
              
            </div>
          </div>
          
          <div class="row">
            
          </div>
        </div>
      </div>
    </div>
    
    <div class="container-fluid mt--6 ">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header border-0">
              <div class="row align-items-center">
                <div class="col-12">
                  <h3 class="mb-0 text-left">Messages</h3>
                </div>
              </div>
            </div>
            <div class="table-responsive">
              
              <table class="table align-items-center table-flush">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">Mail</th>
                    <th scope="col">Name</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Message</th>
                    <th scope="col">Reply</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.messages.map(note=>{
                                            return(
                                                <tr>
                    <th scope="row">
                      {note.mail}
                    </th>
                    <td>
                      {note.name}
                    </td>
                    <td>
                      {note.mobile}
                    </td>
                    <td>
                      {note.message}
                    </td>
                    <td>
                      <a style={{color:"blue",cursor:"pointer"}} onClick={this.openpop(note.id)}>Reply</a>
                    </td>
                    <td>
                      <a style={{color:"blue",cursor:"pointer"}} onClick={this.delete(note.id)}>Delete</a>
                    </td>
                  </tr>
                                            );
                                        })}
                  
                  
                </tbody>
              </table>
            </div>
            <div id="popup1" class="overlay">
                        <div class="popup">
                            <h2>Reply</h2>
                            <a class="close" style={{cursor:"pointer"}} onClick={this.closepop}>&times;</a>
                            <div class="content">
                               <form onSubmit={this.sendEmail}>
                               {this.state.messages.map(note=>{
                                            if(this.state.id==note.id){
                                            return(
                                              <div>
                                              <input type="hidden" value={note.mail} name="to_mail"/>
                                              <input type="hidden" value={note.name} name="to_name"/>
                                              </div>
                                              );}
                                          })}
                                <div class="row">
                                  <div class="col-lg-12 text-left">
                                    <div style={{marginBottom: "1.5rem"}}>
                                      <label class="ip_work_label">Reply</label>
                                      <textarea id="message" name="message" rows="4"  class="ip_work_area"></textarea>
                                    </div>
                                  </div>
                                  <div class="col-lg-12 text-center">
                                    <input type="submit" style={{color:"#fff", background:"#522a73",border:"none",padding:"10px 50px"}} />
                                  </div>
                                </div>
                               </form> 
                            </div>
                        </div>
                    </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="card">
            <div class="card-header border-0">
              <div class="row align-items-center">
                <div class="col-12">
                  <h3 class="mb-0 text-left">Contact Us</h3>
                </div>
              </div>
            </div>
            <div class="table-responsive">
              
              <table class="table align-items-center table-flush">
                <thead class="thead-light">
                  <tr>
                    <th scope="col" width="15%">Mail</th>
                    <th scope="col" width="15%">Name</th>
                    <th scope="col" width="10%">Mobile</th>
                    <th scope="col" width="10%">Subject</th>
                    <th scope="col" width="40%">Message</th>
                    <th scope="col" width="10%">Delete</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.messages1.map(note=>{
                                            return(
                                                <tr>
                    <th scope="row" width="15%">
                      {note.mail}
                    </th>
                    <td width="15%">
                      {note.fname}&nbsp;{note.lname}
                    </td>
                    <td width="10%">
                      {note.pnum}
                    </td>
                    <td width="10%">
                      {note.subject}
                    </td>
                    <td width="40%">
                      {note.message}
                    </td>
                    <td width="10%">
                      <a style={{color:"blue",cursor:"pointer"}} onClick={this.delete1(note.id)}>Delete</a>
                    </td>
                  </tr>
                                            );
                                        })}
                  
                  
                </tbody>
              </table>
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

export default Dashboard;
