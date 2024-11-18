    import MetaTags from 'react-meta-tags';
import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';

import Footer from '../footer.js';
import Lets from '../lets.js';

import Banner from '../../img/hire/php.jpg';
import BannerImage from '../../img/hire/php-content.jpg';

import ScrollAnimation from 'react-animate-on-scroll';
class ReactDeveloper extends Component{
render(){
  return (
    <div className="App">



<MetaTags>
            <title>Hire PHP Developers | PHP Development Company</title>
            <meta id="meta-description" name="description" content="" />
            <meta id="" property="keywords" content="" />
            
</MetaTags>
        	<Nav1/>

      <div className="main-content-cr">
        <section className="sub-banner text-left" style={{backgroundImage: `url(${Banner})`}}>
          <div className="container">
            <div className="box">
              <h1>Hire PHP Developers </h1>
              <p>
              we offer top-notch PHP development services that ensure your web application is scalable, secure, and future-ready. Hire our PHP developers to get custom web solutions tailored to your unique business requirements.
              </p>
              </div>
          </div>
        </section>


<section className="contents-left">
          <div className="container">
            <div className="row">
                <div className="col-md-6">
                  <img src={BannerImage} alt="Hire dedicated .Net developer in India for delivering quality service" />
                </div>
                <div className="col-md-6">
                <h2>Unlock the Potential of Your Web Projects by Hiring a PHP Developer</h2>
                <p>Scope Tech brings you skilled and experienced PHP developers to power your web development endeavors. Our experts excel in PHP programming and deliver high-quality, efficient, and secure solutions tailored to your specific needs. Whether it's building dynamic websites, e-commerce platforms, or custom web applications, our PHP developers have got you covered. With a client-centric approach, we ensure seamless communication and timely project delivery. Partner with Scope Tech to leverage the full potential of PHP and create captivating, performance-driven websites that leave a lasting impact on your audience. Don't miss out on the opportunity to elevate your online presence – hire a PHP developer from Scope Tech today!</p>
                </div>
            </div>
          </div>
        </section>

<section className="fea-boxed">
  <div className="container">
    <div className="text-center mb-5">
      <h2>Benefits of Hiring PHP Developers from Scope Tech</h2>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="boxed">
          <i className="fa fa-plus"></i>
            <h3>Scalable Development</h3>
            <p>Our PHP developers follow industry best practices and use modern tools and techniques to ensure fast and scalable development of web applications.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="boxed">
          <i className="fa fa-user"></i>
            <h3>Experienced Developers</h3>
            <p>With years of experience under their belt, our PHP developers can provide expert guidance and develop web solutions that meet your unique business needs.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="boxed">
          <i className="fa fa-asterisk"></i>
            <h3>Domain Expertise</h3>
            <p>Our developers have a deep understanding of PHP and a wide range of domains, enabling us to build web applications that cater to your business requirements.</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="boxed">
          <i className="fa fa-money"></i>
            <h3>Affordable Pricing Models</h3>
            <p>We offer cost-effective pricing models that fit your budget and your business needs, with flexible options that ensure you get the most out of your investment.</p>
          </div>
        </div>
      </div>
  </div>
</section>


<section className="php-devloper text-left">
  <div className="container">
    <h2 className="text-center mb-5">Why Choose Scope Tech for PHP Development Partner</h2>

    <div className="row">
      <div className="col-md-4">
        <div className="box">
        <h3>Quality & Performance</h3>
        <p>Our PHP developers deliver web applications that meet top performance and quality standards, ensuring your business requirements are met with precision and expertise.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="box">
        <h3>Secure PHP Code</h3>
        <p>Our developers write clean and secure PHP code that ensures your web application is well-protected against exploits and security breaches.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="box">
        <h3>Efficient Workflow</h3>
        <p>Our developers follow a streamlined and efficient workflow that ensures fast and on-time project delivery, with complete transparency and stakeholder communication along the way.</p>
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
