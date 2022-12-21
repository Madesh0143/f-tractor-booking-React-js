import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";


import driveImg from "../assets/all-images/drive.jpg";

import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection about ClassName="aboutPage" />
      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                Safe use of tractors on farms cultivating 
                </h2>

                <p className="section__description">
                A tractor can act as a best friend to a farmer. In a country like India where farming and agriculture is the leading occupation of the people, a tractor plays a vital role in the 
                life of a farmer. It can deliver several advantages to the farmers and make the task of farming easier.For many farmers, a tractor also acts as a family car. Apart from the transportation-related to agriculture, you can use a tractor as a car for short distance. Most tractors 
                in India have efficient engines which can travel longer distances with low fuel consumption.
                </p>

                <p className="section__description">
                Tractors are generally associated with farming as farmers use them alongside machinery to perform implements like ploughing, tilling, sowing, and harrowing. In addition, a tractor is 
                used for pushing or pulling the machinery, thereby making the farming operations more convenient.
                </p>

              
                  
               
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
