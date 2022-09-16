import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./GalleryImg.css";

// import g from "../../img/g.png";
// import img6 from "../../img/img6.png";
import Rectangle8 from "../../img/Rectangle 8.jpeg";
import a3 from "../../img/a3.png";
import Rectangle9 from "../../img/Rectangle 9.jpeg";
import a4 from "../../img/a4.png";
import Rectangle13 from "../../img/Rectangle 13.jpeg";
import Rectangle35 from "../../img/Rectangle 35.png";
import n from "../../img/n.png";
import a2 from "../../img/a2.png";

function GalleryImg() {
  return (
    <div className="gallerySingleImg">
      <Container>
        <Row className="galleryRow" xs={1} md={2} lg={4}>
          <Col className="galleryCol">
            <img className="imggg shadow" src={Rectangle8} alt="" />
          </Col>
          <Col className="galleryCol">
            <img className="imggg shadow" src={a3} alt="" />
          </Col>
          <Col className="galleryCol">
            <img className="imggg shadow" src={Rectangle9} alt="" />
          </Col>
          <Col className="galleryCol">
            <img className="imggg shadow" src={a2} alt="" />
          </Col>
        </Row>
        <Row className="galleryRow" xs={1} md={2} lg={4}>
          <Col className="galleryCol">
            <img className="imggg shadow" src={a4} alt="" />
          </Col>
          <Col className="galleryCol">
            <img className="imggg shadow" src={Rectangle13} alt="" />
          </Col>
          <Col className="galleryCol">
            <img className="imggg shadow" src={n} alt="" />
          </Col>
          <Col className="galleryCol">
            <img className="imggg shadow" src={Rectangle35} alt="" />
          </Col>
        </Row>
      </Container>
      {/* <div className="conta">
        <div className="shadow">
          <img className="imggg shadow" src={img6} alt="" />
        </div>
        <div>
          <img className="imggg shadow" src={img6} alt="" />
        </div>
        <div>
          <img className="imggg shadow" src={img6} alt="" />
        </div>
        <div>
          <img className="imggg shadow" src={img6} alt="" />
        </div>
        <div>
          <img className="imggg shadow" src={img6} alt="" />
        </div>
        <div>
          <img className="imggg shadow" src={img6} alt="" />
        </div>
        <div>
          <img className="imggg shadow" src={img6} alt="" />
        </div>
        <div>
          <img className="imggg shadow" src={img6} alt="" />
        </div>
      </div> */}
    </div>
  );
}

export default GalleryImg;
