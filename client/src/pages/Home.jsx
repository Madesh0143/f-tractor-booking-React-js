import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import ServicesList from "../components/UI/ServicesList";
import carData from "../assets/data/carData";
import Tractor from "../components/UI/Tractor";
import BlogList from "../components/UI/BlogList";




const Home = () => {
  return (
    <Helmet title="Home">
      {/* =========== car offer section ============= */}
      <section>
        <Container>
          <Row>
            {carData.slice(0, 6).map((item) => (
              <Tractor item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>


    {/* ========== services section ============ */}
    <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h2 className="section__title">Tractor Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>


      {/* =============== blog section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Explore our blogs</h6>
              <h2 className="section__title">Latest Blogs</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section>


    </Helmet>
  );
};

export default Home;
