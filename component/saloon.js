import React,{ Component,setState } from 'react';

import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from './nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import saloon_banner_img from '../img/service/saloon_banner_img.png';
import saloon_img_1 from '../img/service/saloon_img_1.png';
import saloon_google from '../img/service/saloon_google.png';
import saloon_ios from '../img/service/saloon_ios.png';

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

import Lets from './lets.js';
import Footer from './footer.js';

import mv_img1 from '../img/food/mv_img1.png';
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
class Saloon extends Component{
render(){
  return (
    <div className="App">
    	<Nav1/>
    	<div class="container-fluid saloon_banner" style={{height: 600}}>
    		<div class="container ga_banner_main_head text-center">
    			<ScrollAnimation animateIn="fadeInDown" delay="800" duration="1.5"><img class="img-fluid text-center" src={saloon_banner_img} /></ScrollAnimation>
    			<ScrollAnimation animateIn="fadeInDown" delay="400" duration="1.5"><h1 class="banner_heading_cnt"><label>Lamsat - Saloon Booking</label></h1></ScrollAnimation>
    			<ScrollAnimation animateIn="fadeInDown" delay="100" duration="1.5"><p class="sa_banner_cnt banner_sub_head_cnt">Lorem Ipsum is simply dummy text of the printing and typesettin industry dummy text</p></ScrollAnimation>
    		</div>
    	</div>
    	<div class="container saloon_main_tab_set">
    		
			    <div class="row" >
					
			    	<div class="col-md-7">
			    		<div class="saloon_left_col">
				    		<h3 class="page_main_head">About This Project</h3>
				    		<p class="para_cnt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
				    		<p class="para_cnt">Printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
			    		</div>
			    		<div class="saloon_left_col_2">
			    			<h3 class="page_main_head"> Download Apps</h3>
			    			<p class="para_cnt">Lorem Ipsum is simply dummy text of the printing and
typesetting industry. </p>
							<div class="row">
								<div class=" col-md-4"><img class="img-fluid" src={saloon_google} /></div>
								<div class=" col-md-4"><img class="img-fluid" src={saloon_ios} /></div>
							</div>
			    		</div>
			    	</div>
					<div class="col-md-5">
			    		<img class="img-fluid" src={saloon_img_1} />

			    	</div>

				</div>
			  
    	</div>

    	<Lets/>
    	<Footer/>
    </div>    
  );
}
}

export default Saloon;
