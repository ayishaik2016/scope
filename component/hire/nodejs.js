    import MetaTags from 'react-meta-tags';
import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';

import Footer from '../footer.js';
import Lets from '../lets.js';

import Banner from '../../img/hire/nodejs.jpg';
import BannerImage from '../../img/hire/nodejs-content.png';

import ScrollAnimation from 'react-animate-on-scroll';
class ReactDeveloper extends Component{
render(){
  return (
    <div className="App">



<MetaTags>
            <title>Hire Skilled Node.js Developers - Scope Tech</title>
            <meta id="meta-description" name="description" content="Looking to hire Node.js developers for your next project? Look no further than Scope Tech. Contact us to discuss your requirements and how we can help you achieve your goals." />
            <meta id="" property="keywords" content="" />
            
</MetaTags>
        	<Nav1/>

      <div className="main-content-cr">
        <section className="sub-banner" style={{backgroundImage: `url(${Banner})`}}>
          <div className="container">
            <div className="box">
              <h1>Hire Skilled Node.js Developers at Scope Tech</h1>
              <p>
              Looking to hire Node.js developers for your next project? Look no further than Scope Tech. Our team of experts will help you turn your ideas into reality with efficient and effective Node.js development services.
              </p>
              </div>
          </div>
        </section>


<section className="content-left-right text-left">
  <div className="container">
  <h2 className="text-center mb-5">Our Node.js Development Services</h2>
    <div className="row">
      <div className="col-md-6">

    <div className="box">
      <h3>Custom Node.js Development</h3>
      <p>We offer custom Node.js development services tailored to your unique project requirements and business needs.</p>
    </div>

    <div className="box">
      <h3>Node.js Integration</h3>
      <p>We can integrate Node.js with any software or framework to unlock its full potential as a server-side technology.</p>
    </div>

        <div className="box">
      <h3>Node.js Support and Maintenance</h3>
      <p>We provide support and maintenance services for Node.js applications to ensure they remain updated and optimized.</p>
    </div>


      </div>
      <div className="col-md-6">
        <img src={BannerImage} alt="Hire dedicated .Net developer in India for delivering quality service" />
      </div>
      </div>

  </div>
</section>



<section className="fea-boxed">
  <div className="container">
    <div className="text-center mb-5">
      <h2>Why Hire Node.js Developers?</h2>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="boxed">
          <i className="fa fa-line-chart"></i>
            <h3>Faster Development </h3>
            <p>Node.js allows for faster development thanks to its non-blocking, event-driven architecture.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="boxed">
          <i className="fa fa-balance-scale"></i>
            <h3>Better Scalability</h3>
            <p>Node.js can handle large amounts of data and traffic, making it a great choice for scalable applications.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="boxed">
          <i className="fa fa-leaf"></i>
            <h3>Rich Ecosystem</h3>
            <p>Node.js has a vast ecosystem of libraries and modules that can be used to develop complex applications in a shorter amount of time.</p>
          </div>
        </div>
      </div>
  </div>
</section>


<section className="php-devloper text-left">
  <div className="container">
    <h2 className="text-center mb-5">Advantages of Working with Scope Tech</h2>

    <div className="row">
      <div className="col-md-6 mb-5">
        <div className="box">
        <h3>Experienced Team</h3>
        <p>Our team consists of experienced Node.js developers who have worked on a variety of projects across different industries.</p>
        </div>
      </div>
      <div className="col-md-6 mb-5">
        <div className="box">
        <h3>Effective Communication</h3>
        <p>We ensure timely and effective communication with our clients to keep them involved and updated throughout the development process.</p>
        </div>
      </div>
      <div className="col-md-6 mb-5">
        <div className="box">
        <h3>Cutting-Edge Technology</h3>
        <p>We stay up to date with the latest technologies to ensure we provide the best solutions for our clients.</p>
        </div>
      </div>
      <div className="col-md-6 mb-5">
        <div className="box">
        <h3>Flexible Engagement Models</h3>
        <p>We offer flexible engagement models to meet the unique needs of each project and client.</p>
        </div>
      </div>
    </div>  

  </div>
</section>  


      </div>
      
      <Lets/>

      <Footer/>
    </div>    
  );
}
}

export default ReactDeveloper;
