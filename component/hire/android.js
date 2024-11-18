    import MetaTags from 'react-meta-tags';
import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';

import Footer from '../footer.js';
import Lets from '../lets.js';

import Banner from '../../img/hire/android.jpg';
import BannerImage from '../../img/hire/android-content.jpg';

import ScrollAnimation from 'react-animate-on-scroll';
class ReactDeveloper extends Component{
render(){
  return (
    <div className="App">



<MetaTags>
            <title>Hire Android Developers | Android Development Company</title>
            <meta id="meta-description" name="description" content="" />
            <meta id="" property="keywords" content="" />
            
</MetaTags>
        	<Nav1/>

      <div className="main-content-cr">
        <section className="sub-banner text-left" style={{backgroundImage: `url(${Banner})`}}>
          <div className="container">
            <div className="box">
              <h1>Hire Android Developers</h1>
              <p>
              Welcome to Scope Tech, the go-to company for your Android app development needs. Our team of skilled Android developers are always ready to help bring your ideas to life with creative and innovative solutions.
              </p>
              </div>
          </div>
        </section>


<section className="contents-left">
          <div className="container">
            <div className="row">
                <div className="col-md-6">
                  <img src={BannerImage} alt="Elevate Your Mobile App Development with a Skilled Android Developer" />
                </div>
                <div className="col-md-6">
                <h2>Elevate Your Mobile App Development with a Skilled Android Developer</h2>
                <p>Scope Tech offers top-notch Android developers who can bring your app ideas to life. With expertise in Java, Kotlin, and the latest technologies, our developers create high-performance, user-friendly, and feature-rich Android applications. Whether you need a native app, custom plugin, or app maintenance, we've got you covered. Our experienced team ensures seamless integration and timely project delivery, providing you with a competitive edge in the market. Partner with Scope Tech to unlock the full potential of Android development and create captivating mobile experiences. Stay ahead of the competition – hire an Android developer from Scope Tech today!</p>
                </div>
            </div>
          </div>
        </section>

<section className="fea-boxed">
  <div className="container">
    <div className="text-center mb-5">
      <h2>Benefits of Hiring Scope Tech for Your Android Development Needs</h2>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="boxed">
          <i className="fa fa-plus"></i>
            <h3>Scalability </h3>
            <p>We offer scalable solutions for businesses of all sizes, so you never have to worry about outgrowing the app.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="boxed">
          <i className="fa fa-pencil"></i>
            <h3>Quick Turnaround Times</h3>
            <p>Our Agile development process ensures quick turnaround times without compromising on quality.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="boxed">
          <i className="fa fa-asterisk"></i>
            <h3>Cost-Effective </h3>
            <p>We offer competitive pricing without compromising on the quality of work delivered.</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="boxed">
          <i className="fa fa-wrench"></i>
            <h3>Flexibility </h3>
            <p>We work around your schedule and needs, so you can focus on what you do best while we take care of your Android development.</p>
          </div>
        </div>
      </div>
  </div>
</section>


<section className="php-devloper text-left">
  <div className="container">
    <h2 className="text-center mb-5">Why Hire Android Developers from Scope Tech?</h2>

    <div className="row">
      <div className="col-md-4">
        <div className="box">
        <h3>Expertise</h3>
        <p>Our team of Android developers has considerable experience in building complex and engaging applications for Android devices.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="box">
        <h3>Creativity and Innovation</h3>
        <p>We stay up-to-date with the latest trends to bring you cutting-edge, innovative solutions tailored to your needs..</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="box">
        <h3>Quality Testing</h3>
        <p>We pay meticulous attention to detail during the development process to ensure every aspect of the app is thoroughly tested before deployment.</p>
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
