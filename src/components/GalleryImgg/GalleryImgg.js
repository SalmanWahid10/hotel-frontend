import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../GalleryImg/GalleryImg.css";

import Rectangle6 from "../../img/Rectangle 6.jpeg";
import Rectangle23 from "../../img/Rectangle 23.png";
import Rectangle10 from "../../img/Rectangle 10.png";
import Rectangle12 from "../../img/Rectangle 12.png";
import Rectangle16 from "../../img/Rectangle 16.jpeg";
import Rectangle22 from "../../img/Rectangle 22.png";
import Rectangle3 from "../../img/Rectangle 3.jpeg";
import Rectangle1 from "../../img/Rectangle 1.jpeg";

function GalleryImgg() {
  return (
    <div className="gallerySingleImg">
      <Container>
        <Row className="galleryRow" xs={1} md={2} lg={4}>
          <Col className="galleryCol">
            <img className="imggg shadow" src={Rectangle6} alt="" />
          </Col>
          <Col className="galleryCol">
            <img className="imggg shadow" src={Rectangle10} alt="" />
          </Col>
          <Col className="galleryCol">
            <img className="imggg shadow" src={Rectangle22} alt="" />
          </Col>
          <Col className="galleryCol">
            <img className="imggg shadow" src={Rectangle16} alt="" />
          </Col>
        </Row>
        <Row className="galleryRow" xs={1} md={2} lg={4}>
          <Col className="galleryCol">
            <img className="imggg shadow" src={Rectangle12} alt="" />
          </Col>
          <Col className="galleryCol">
            <img className="imggg shadow" src={Rectangle23} alt="" />
          </Col>
          <Col className="galleryCol">
            <img className="imggg shadow" src={Rectangle3} alt="" />
          </Col>
          <Col className="galleryCol">
            <img className="imggg shadow" src={Rectangle1} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GalleryImgg;
