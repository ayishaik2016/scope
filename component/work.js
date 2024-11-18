import MetaTags from 'react-meta-tags';
import React, { Component, setState } from 'react';

import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from './nav1.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import cont_1_img_1 from '../img/food/c_1_i_1.png';
import cont_1_img_2 from '../img/food/c_1_i_2.png';
import cont_2_img_1 from '../img/food/c_2_i_1.png';

import cont_2_img_2 from '../img/food/c_2_i_2.png';
import cont_2_img_3 from '../img/food/c_2_i_3.png';
import cont_3_img_1 from '../img/food/c_3_i_1.png';
import cont_3_img_2 from '../img/food/c_3_i_2.png';

import img_round2 from '../img/food/img_round2.png';
import img_round1 from '../img/food/img_round1.png';

import Lets from './lets.js';
import Footer from './footer.js';


import fire from '../firebase.js';
// import ReactDOM from 'react-dom';
import firebase from "firebase";

import work_img_1 from '../img/work_img_1.png';
import work1 from '../img/new/work1.png';
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
import cu_banner_img from '../img/new/banner_img.png';
import fp_da_1 from '../img/food/fp_da_1.png';
import fp_da_2 from '../img/food/fp_da_2.png';
import fp_da_3 from '../img/food/fp_da_3.png';
import fp_da_4 from '../img/food/fp_da_4.png';
import fp_da_5 from '../img/food/fp_da_5.png';
import fp_da_6 from '../img/food/fp_da_6.png';
import fp_da_7 from '../img/food/fp_da_7.png';
import { withTranslation } from 'react-i18next';
class Work extends Component {
	constructor(props) {
		super(props);
		// Firebase.initializeApp(config);
		this.state = {

			messages: [],
			partners: [],
			works: [],
			img_url: null

		};
	}
	componentDidMount() {

		firebase.database().ref().child('works').once('value').then(snapshot => {
			let allNotes = [];
			snapshot.forEach(snap => {
				allNotes.push(snap.val());
			});
			this.setState({ works: allNotes });


		});

	}
	render() {
		return (
			<div className="App">
				<MetaTags>
					<title>{this.props.t("SCOPE_TECH")}</title>
					<meta id="meta-description" name="description" content="world-class IT services to reduce costs, boost productivity & enhance performance. Best marketing agencies in Riyadh, Saudi Arabia. A leader in the field of Information Technology, provides IT consulting services &solutions to diverse businesses in Saudi Arabia & abroad +966 599226961 info@scopetech.sa" />
					<meta id="" property="keywords" content="app development companies in Saudi Arabia, best marketing agencies in Riyadh" />
							
				</MetaTags>
					

				<Nav1 />
				<div className="main-content-cr">

				<section className="sub_banners_page">
					<div className="container">
						<h1>{this.props.t("our_work_banner_text")}</h1>
					</div>
				</section>


				<div class="container-fluid">
					<div>
						<div class="container work_cont_tab_main">
							<div class="row">
								{this.state.works.map(note => {
									console.log({note});
									return (
										<div class="col-md-4 " style={{ paddingTop: "40px", paddingBottom: "40px" }}>
												<div class="work_card_main">
													<div>
														<div class="work_card_img_main">
															<a href={note.link ? note.link : "#"}><img class="img-fluid" src={note.img} /></a>
														</div>
													</div>
													<div class="work_card_cnt_main text-left">
														<h5 class="work_card_cnt1">{note.name}</h5>
													</div>
												</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default withTranslation()(Work);
