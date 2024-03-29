import React from "react";
import "./Gallery.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import g from "../../img/g.png";
import GalleryImg from "../../components/GalleryImg/GalleryImg";
import GalleryImgg from "../../components/GalleryImgg/GalleryImgg";

function Gallery() {
  return (
    <div className="gallery">
      <Container fluid>
        <Row>
          <img src={g} alt="" />
        </Row>
      </Container>
      <div className="galleryImg">
        <div className="galleryInfo">
          <h3>OUR ROOMS</h3>
          <GalleryImgg />
        </div>
        <div className="galleryInfo">
          <h3>OUR INFRASTRUCTURE</h3>
          <GalleryImg />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
