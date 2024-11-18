import React,{ Component, useState, useEffect } from 'react';
import Login from './login.js';
import Admin_Dash from './admin/dashboard.js';

import '../App.css';
import fire from '../firebase.js';



	  

class Admin extends Component{


	constructor(props){
	    super(props);
	    this.state={
	      user:null,
	    }
	    this.authListener=this.authListener.bind(this);
	  }
	  componentDidMount(){
	    this.authListener();
	    
	  }
	  authListener(){
	      fire.auth().onAuthStateChanged((user)=>{
	        if(user){
	        	// alert("test");
	          this.setState({user});
	        }
	        else{
	          this.setState({user:null});
	        }
	      })
	  }



	render(){
		return(

			<div>
			
				{ this.state.user ? <Admin_Dash/> : <Login/> }
			</div>

		);
	}

}




export default Admin;