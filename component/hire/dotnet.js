    import MetaTags from 'react-meta-tags';
import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';

import Footer from '../footer.js';
import Lets from '../lets.js';

import Banner from '../../img/hire/dotnet.jpg';
import BannerImage from '../../img/hire/hire-dotnet-developer.png';

import ScrollAnimation from 'react-animate-on-scroll';
class AI extends Component{
render(){
  return (
    <div className="App">



<MetaTags>
            <title>Dot Net Developers Hire</title>
            <meta id="meta-description" name="description" content="" />
            <meta id="" property="keywords" content="" />
            
</MetaTags>
        	<Nav1/>

      <div className="main-content-cr">
        <section className="sub-banner" style={{backgroundImage: `url(${Banner})`}}>
          <div className="container">
            <div className="box">
              <h1>Hire .Net Developers</h1>
              <p>
              At Scope Tech, we offer affordable .Net development services to help you build dynamic and scalable web applications. Hire our expert .Net developers and take advantage of our experience with the latest technologies to deliver cutting-edge solutions to your business needs.
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
                <h2>Get the Best of .Net Development Services</h2>
                <p>At Scope Tech, we offer top-tier .NET developers ready to transform your ideas into robust and scalable applications. Our team possesses a deep understanding of the .NET framework and stays updated with the latest technologies to deliver cutting-edge solutions. Whether you need custom .NET development, application maintenance, or migration services, we've got you covered. With a proven track record of successful .NET projects, we ensure seamless integration and exceptional performance. Don't compromise on the quality of your software development – partner with Scope Tech's .NET experts and take your business to new heights!</p>
                </div>
            </div>
          </div>
        </section>

<section className="fea-boxed">
  <div className="container">
    <div className="text-center mb-5">
      <h2>Why Choose .Net Development?</h2>
      </div>

      <div className="row">

        <div className="col-md-6">
          <div className="boxed">
          <i className="fa fa-arrows"></i>
            <h3>Scalability</h3>
            <p>.Net is a highly scalable platform that can accommodate the growth of your business.</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="boxed">
          <i className="fa fa-shield "></i>
            <h3>Security</h3>
            <p>With .Net, you can be sure that your application is protected from security breaches and hacks.</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="boxed">
          <i className="fa fa-money"></i>
            <h3>Cost-Effective</h3>
            <p>Hiring a .Net developer can be a cost-effective solution for your software development needs.</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="boxed">
          <i className="fa fa-plug"></i>
            <h3>Easy Integration</h3>
            <p>Integrate .Net applications with your existing systems easily and seamlessly.</p>
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

export default AI;
