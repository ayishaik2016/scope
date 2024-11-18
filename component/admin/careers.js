import logo from'../../img/logo_scp.png';
import user from'../../img/admin/user.png';
import '../../App.css';
import '../../admin.css';
import '../scroll.js';
import './src.js';

import fire from '../../firebase.js';
// import ReactDOM from 'react-dom';
import firebase from "firebase";
import emailjs from 'emailjs-com';
import { FaBeer } from 'react-icons/fa';
import React,{ Component, useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Redirect, Route, Switch, Link,HashRouter } from 'react-router-dom';
class Admin_careers extends Component{


constructor(props) {
    super(props);
    // Firebase.initializeApp(config);
    this.state = {
  
  messages: [],
  req: [],
  img_url:null
  
};

  }
componentDidMount(){

firebase.database().ref().child('careers').once('value').then( snapshot => {
    let allNotes = [];
    snapshot.forEach(snap => {
      allNotes.push(snap.val());
    });
    this.setState({ messages: allNotes });


  });
firebase.database().ref().child('careers_cv').once('value').then( snapshot => {
    let allNotes = [];
    snapshot.forEach(snap => {
      allNotes.push(snap.val());
    });
    this.setState({ req: allNotes });


  });
}

addText(){
  var add=document.getElementById("add");
  var ip = document.createElement('input');
  ip.classList.add("ip_work");
  ip.classList.add("ip_work1");
  add.appendChild(ip);
}

delete= id => () =>{
    

  firebase.database().ref().child('careers_cv').orderByChild('id').equalTo(id).once('value').then( snapshot => {
    let allNotes = [];
    let key_temp=[];
    snapshot.forEach(snap => {
      allNotes.push(snap.val());
      key_temp.push(snap.key);
    });
    firebase.database().ref('careers_cv/'+key_temp).remove() 

  });   
  // var subtitle=document.getElementById("edit_cn").value;
  setTimeout(() => {  window.location.reload(); }, 1500);
}



delete1= id => () =>{
    
  firebase.database().ref().child('careers').orderByChild('id').equalTo(id).once('value').then( snapshot => {
    let allNotes = [];
    let key_temp=[];
    snapshot.forEach(snap => {
      allNotes.push(snap.val());
      key_temp.push(snap.key);
    });
    firebase.database().ref('careers/'+key_temp).remove() 

  });   
  // var subtitle=document.getElementById("edit_cn").value;
  setTimeout(() => {  window.location.reload(); }, 1500);
}


writeprojectData(){
  // alert(":test");
  
  var exp=document.getElementById("exp").value;
  var job=document.getElementById("job").value;
  var desc=document.getElementById("desc").value;
  var open=document.getElementById("open").value;
  var location=document.getElementById("location").value;
  var skils=document.getElementsByClassName("ip_work1");
  // alert(skils.length);
  let temp=[];
  for(var i=0; i<skils.length; i++){
    temp.push(skils[i].value);
  }

  // temp.toString()
  // skils.forEach((element,index)=>{
  //   alert(element[index].value);
  // });
  // alert(name);
  if(exp!="" && job!="" && desc!="" && location!="" && open!=""){
  var d= new Date();
  var dd=d.getDate();
  

  var mm=d.getMonth();
  var yy=d.getFullYear();
  var hr=d.getHours();
  var min=d.getMinutes();
  var sec=d.getSeconds();
  var id=dd+""+mm+""+yy+""+hr+""+min+""+sec;
  var date=dd+"/"+mm+"/"+yy;



// alert(fire.database().ref().child('projects'));  
    firebase.database().ref().child('careers').push(
{
  // name:name,

  id:id,
  job:job,
  location:location,
  skils:temp,
  skils_len:temp.length,
  desc:desc,
  open:open,
  exp:exp

}


    )

setTimeout(() => {  window.location.reload(); }, 1500);
}
else{
  alert("Fill all data");
}
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
              
              <Link className="nav-link " to={"/admin/Dashboard"}>
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
              <Link className="nav-link active" to={"/admin/Careers"}>
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
                  <li class="breadcrumb-item active" aria-current="page">Careers</li>
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
                  <h3 class="mb-0 text-left">Clients</h3>
                </div>
                <div class="col-12">
                  <div class="table-responsive">
              
              <table class="table align-items-center table-flush">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">Job Description</th>
                    <th scope="col">Location</th>
                    <th scope="col">Experience</th>
                    <th scope="col">Delete</th>
                    
                  </tr>
                </thead>
                <tbody>
                
                  {this.state.messages.map(note=>{
                                            return(
                                            
                  <tr>
                    <th scope="row">
                      {note.job}
                    </th>
                    <td>
                      {note.location}
                    </td>
                    <td>
                      {note.exp}
                    </td>
                    <td>
                      <a onClick={this.delete1(note.id)} style={{color:"blue",cursor:"pointer"}}><i class="fa fa-trash text-success mr-3"></i></a>
                    </td>
                  </tr>
                                     
        
                                            );
                                        })}
                  
                  
                </tbody>
              </table>
            </div>
                  <div class="row">
                  
                  </div>
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
                  <h3 class="mb-0 text-left" style={{paddingBottom:"10px"}}>Add Work</h3>
                </div>
                <div class="col-lg-6 text-left">
                <div style={{marginBottom: "1.5rem"}}>
                      <label class="ip_work_label">Job Title</label>
                      <input type="text" id="job"  class="ip_work"/>
                      </div>
                    </div>
                    <div class="col-lg-6 text-left">
                <div style={{marginBottom: "1.5rem"}}>
                      <label class="ip_work_label">Location</label>
                      <input type="text" id="location"  class="ip_work"/>
                      </div>
                    </div>
                    <div class="col-lg-6 text-left">
                <div style={{marginBottom: "1.5rem"}}>
                      <label class="ip_work_label">Experience</label>
                      <input type="text" id="exp"  class="ip_work"/>
                      </div>
                    </div>
                    <div class="col-lg-6 text-left">
                <div style={{marginBottom: "1.5rem"}}>
                      <label class="ip_work_label">Description</label>
                      <input type="text" id="desc"  class="ip_work"/>
                      </div>
                    </div>
                    
                    <div class="col-lg-6 text-left">
                <div style={{marginBottom: "1.5rem"}}>
                      <label class="ip_work_label">Openings</label>
                      <input type="text" id="open"  class="ip_work"/>
                      </div>
                    </div>

                    <div class="col-lg-6 text-left">
                <div id="add" style={{marginBottom: "1.5rem"}}>
                      <label class="ip_work_label">skils</label>
                      <input type="text" id="skil0"  class="ip_work ip_work1 "/>

                      </div>
                      <input type="button" onClick={this.addText} style={{color:"#fff", background:"#522a73", border:"none",padding:"5px 10px"}} value="Add Skill"/>
                    </div>
                    
                <div class="col-md-6">
                  <input type="button" value="Add" onClick={this.writeprojectData}  style={{background:"#522a73",color:"#fff", fontWeight:"600",padding:"5px 25px",fontSize:"18px", border:"none"}}/>
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
                  <h3 class="mb-0 text-left">Clients</h3>
                </div>
                <div class="col-12">
                  <div class="table-responsive">
              
              <table class="table align-items-center table-flush">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Mail</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Address</th>
                    <th scope="col">Job Description</th>
                    <th scope="col">Experience</th>
                    <th scope="col">CV</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                
                  {this.state.req.map(note=>{
                                            return(
                                            
                  <tr>
                    <th scope="row">
                      {note.fname}&nbsp;{note.lname}
                    </th>
                    <td>
                      {note.email}
                    </td>
                    <td>
                      {note.phone}
                    </td>
                    <td>
                      {note.address}
                    </td>
                    <td>
                      {note.job}
                    </td>
                    <td>
                      {note.exp}
                    </td>
                    <td>
                      <a target="_blank" href={note.img} target="_blank">View</a>
                    </td>
                    <td>
                      <a onClick={this.delete(note.id)} style={{color:"blue",cursor:"pointer"}}><i class="fa fa-trash text-success mr-3"></i></a>
                    </td>
                  </tr>
                                     
        
                                            );
                                        })}
                  
                  
                </tbody>
              </table>
            </div>
                  <div class="row">
                  
                  </div>
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

export default Admin_careers;
