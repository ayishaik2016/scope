    import MetaTags from 'react-meta-tags';
import React,{ Component,setState } from 'react';

import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav1 from '../nav1.js';

import Footer from '../footer.js';
import Lets from '../lets.js';

import Banner from '../../img/hire/graphic.jpg';
import BannerImage from '../../img/hire/grahic-content.png';

import ScrollAnimation from 'react-animate-on-scroll';
class ReactDeveloper extends Component{
render(){
  return (
    <div className="App">



<MetaTags>
            <title>Hiring a Graphic Designer - Scope Tech</title>
            <meta id="meta-description" name="description" content="No need to waste hours trying to create a design. Let us handle it for you, saving you time and energy." />
            <meta id="" property="keywords" content="" />
            
</MetaTags>
        	<Nav1/>

      <div className="main-content-cr">
        <section className="sub-banner" style={{backgroundImage: `url(${Banner})`}}>
          <div className="container">
            <div className="box">
              <h1>Hiring a Graphic Designer</h1>
              <p>
              Delivering quality results is at the core of our philosophy. Our highly skilled team of graphic designers will take your brand to the next level. Let’s work together!
              </p>
              </div>
          </div>
        </section>


<section className="content-left-right text-left">
  <div className="container">
  <h2 className="text-center mb-5">Introduction to Hiring a Graphic Designer</h2>

    <div className="row">
      <div className="col-md-6 text-center">
        <img src={BannerImage} alt="React Native Maintenance and Support" />

      </div>

      <div className="col-md-6">



    <div className="box">
      <h3>Why Hire a Graphic Designer?</h3>
      <p>Your brand is your identity. A professional graphic designer can help you communicate that visually to your target audience.</p>
    </div>

    <div className="box">
      <h3>The Cost of Not Hiring a Graphic Designer</h3>
      <p>Unprofessional designs can hurt your business by making your brand look unappealing, which can ultimately lead to losing customers.</p>
    </div>

        <div className="box">
      <h3>Why Hire from Scope Tech?</h3>
      <p>Our team of experienced designers will bring your ideas to life. We provide competitive rates and exceptional quality.</p>
    </div>




      </div>

      </div>

  </div>
</section>



<section className="fea-boxed">
  <div className="container">
    <div className="text-center mb-5">
      <h2>Types of Graphic Design Services Offered by Scope Tech</h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="boxed">
          <i className="fa fa-lightbulb-o"></i>
            <h3>Brand Identity Creation</h3>
            <p>We help you create a visual identity that is unique and representative of your brand.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="boxed">
          <i className="fa fa-magic"></i>
            <h3>Illustration and Artwork</h3>
            <p>Our team can create custom illustrations and artwork for your business, website, or marketing materials.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="boxed">
          <i className="fa fa-text-width"></i>
            <h3>Typography and Layouts</h3>
            <p>Our graphic designers will create a visual hierarchy and typography layout design customized to your needs.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="boxed">
          <i className="fa fa-cube"></i>
            <h3>Packaging Design</h3>
            <p>We create visually appealing packaging designs that reflect your brand and make your product stand out among competitors.</p>
          </div>
        </div>
      </div>
  </div>
</section>


<section className="php-devloper text-left">
  <div className="container">
    <h2 className="text-center mb-5">Tools Used in Scope Tech for Graphic Designing Services</h2>
    

    <div className="row">
      <div className="col-md-4">
        <div className="box">
        <h3>Figma</h3>
        <p>We use this cloud-based software to design, prototype, and collaborate in real-time with clients.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="box">
        <h3>Adobe Suite</h3>
        <p>We use the latest version of Adobe Illustrator, Photoshop, and InDesign to deliver industry-standard design results.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="box">
        <h3>Sketch</h3>
        <p>Our team uses Sketch, a vector-based design tool, to create UI and user experience designs.</p>
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
