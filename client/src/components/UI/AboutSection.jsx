import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/tractor-img/about-1.jpg";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "60px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to Tracotrs Rents</h2>
              <p className="section__description">
                Tractors are generally associated with farming as farmers use them alongside machinery to perform implements like ploughing, tilling, sowing, and harrowing.
                A tractor rental reservation system is an online booking software specially
                designed for tracotr rental agencies, tractor operators,  rental operators,
                and small to large scale car companies. It's a secure platform that offers
                customers with quick tractor bookings and admins with managing tractors rentals.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Paddy and Wheat Harvester Machine
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Tractor Groundnut Seed Drill Machine.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Rotavator land mixing & leveling soil.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i>Cage wheel tractor
                </p>
              </div>
            </div>
          </Col>



          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
