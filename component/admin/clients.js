import logo from'../../img/logo_scp.png';
import user from'../../img/admin/user.png';
import '../../App.css';
import '../../admin.css';
import '../scroll.js';

import fire from '../../firebase.js';
// import ReactDOM from 'react-dom';
import firebase from "firebase";
// import emailjs from 'emailjs-com';
import { FaBeer } from 'react-icons/fa';
import React,{ Component, useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Redirect, Route, Switch, Link,HashRouter } from 'react-router-dom';
class Admin_clients extends Component{

constructor(props) {
    super(props);
    // Firebase.initializeApp(config);
    this.state = {
  
  messages: [],
  img_url:null
  
};

  }
componentDidMount(){

firebase.database().ref().child('clients').once('value').then( snapshot => {
    let allNotes = [];
    snapshot.forEach(snap => {
      allNotes.push(snap.val());
    });
    this.setState({ messages: allNotes });


  });
}


delete= id => () =>{
    

  firebase.database().ref().child('clients').orderByChild('id').equalTo(id).once('value').then( snapshot => {
    let allNotes = [];
    let key_temp=[];
    snapshot.forEach(snap => {
      allNotes.push(snap.val());
      key_temp.push(snap.key);
    });
    firebase.database().ref('clients/'+key_temp).remove() 

  });   
  // var subtitle=document.getElementById("edit_cn").value;
  setTimeout(() => {  window.location.reload(); }, 500);
}


writeprojectData(){
  // alert(this.state.td);
  
  // var name=document.getElementById("client_name").value;
  
  var d= new Date();
  var dd=d.getDate();
  

  var mm=d.getMonth();
  var yy=d.getFullYear();
  var hr=d.getHours();
  var min=d.getMinutes();
  var sec=d.getSeconds();
  var id=dd+""+mm+""+yy+""+hr+""+min+""+sec;
  var date=dd+"/"+mm+"/"+yy;

  let img_url=sessionStorage.getItem('img_url');
  const data=JSON.parse(img_url);
  img_url=data.img;
  // alert(img_url);
  if(img_url){
  let temp_url={img:''} 
  sessionStorage.setItem('img_url',JSON.stringify(temp_url));



// alert(fire.database().ref().child('projects'));  
    firebase.database().ref().child('clients').push(
{
  // name:name,

  id:id,
  img:img_url

}


    )

setTimeout(() => {  window.location.reload(); }, 1500);
}
else{
  alert("Image Not Uploaded");
}
}


upload(e){
  let file_path="clients"
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
      firebase.storage().ref('clients').child(str_name).getDownloadURL()
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
              <Link className="nav-link active" to={"/admin/clients"}>
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
                  <li class="breadcrumb-item active" aria-current="page">Clients</li>
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
                  <div class="row">
                  {this.state.messages.map(note=>{
                                            return(
                                     <div class="col-md-2">       
                                            <div class="box_img">
        <div class="imgBox">
            <img src={note.img} class="img-fluid" />
        </div>
        <div class="content">
            <h5 style={{color:"blue", cursor:"pointer"}} onClick={this.delete(note.id)}>Delete</h5>
            
        </div>
    </div>
    <h5 style={{color:"blue", cursor:"pointer"}} onClick={this.delete(note.id)}>Delete</h5>
    </div>
        
                                            );
                                        })}
                    
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
                  <h3 class="mb-0 text-left">Add Clients</h3>
                </div>
                <div class="col-md-6">
                  <label for="files" class="btn car_cv_file_label1">Add Image</label>
                      <label for="files" class="btn car_cv_file_label">Browse...</label>
                      <input id="files" onChange={(e)=>{this.upload(e)}} class="car_cv_file" type="file"/>
                      <p style={{color:"red", fontSize:"12px"}}>Image Size:270px Width, 180px Height</p>
                </div>
                <div class="col-md-2">
                <img id="" class="img-fluid" src={this.state.img_url} />
                </div>
                <div class="col-md-2">
                  <input type="button" value="Add" onClick={this.writeprojectData}  style={{background:"#522a73",color:"#fff", fontWeight:"600",padding:"5px 25px",fontSize:"18px", border:"none"}}/>
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

export default Admin_clients;
