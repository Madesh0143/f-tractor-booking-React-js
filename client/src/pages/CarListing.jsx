import React from "react";
import { Container, Row,  } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import Tractor from "../components/UI/Tractor";
import carData from "../assets/data/carData";

const CarListing = () => {
  return (
    <Helmet title="Tractor">
      <CommonSection title=" Tractor Listing" />
      <section>
        <Container>
          <Row>
            {carData.map((item) => (
              <Tractor item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
