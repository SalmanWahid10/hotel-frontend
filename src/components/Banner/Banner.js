import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img1 from "../../img/img1.png";
import img2 from "../../img/img2.png";
import img3 from "../../img/img3.png";
import img4 from "../../img/ab.png";
import img5 from "../../img/img5.png";
import img6 from "../../img/img6.png";
import "./Banner.css";
import Form from "react-bootstrap/Form";
import Section from "../Section/Section";
import Modal from "react-bootstrap/Modal";

function Banner() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="banner">
      <div className="d-flex flex-column  ">
        <Carousel controls={false} indicators={false} interval={2000}>
          <Carousel.Item>
            <img className="d-block w-100 image" src={img5} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 image"
              src={img4}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 image" src={img3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 image" src={img1} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 image" src={img2} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 image" src={img6} alt="Third slide" />
          </Carousel.Item>
        </Carousel>

        <div className="clearfix"></div>

        <div className="book">
          <Card style={{ width: "100%" }} className="car">
            <Card.Body>
              <div className="head">
                <Card.Title className="text-center cus">
                  BOOK YOUR STAY
                </Card.Title>
              </div>

              <Form>
                <Form.Group
                  className="mb-3 w-60 ms-auto"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Check In</Form.Label>
                  <Form.Control type="date" required="true" />
                </Form.Group>
                <Form.Group
                  className="mb-3 w-60 ms-auto"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Check Out</Form.Label>
                  <Form.Control type="date" required="true" />
                </Form.Group>
                <Form.Group
                  className="mb-3 w-60 ms-auto"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Guest</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Form>

              <div className="clearfix"></div>

              <div className="btnn">
                <a onClick={handleShow}>Check Availability</a>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>NEW SONAR BANGLA RESORT DIGHA</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Room Available</Modal.Body>
                  <Modal.Footer>
                    <Button onClick={handleClose}>Ok</Button>
                  </Modal.Footer>
                </Modal>
              </div>
              <div className="clearfix"></div>
            </Card.Body>
          </Card>
        </div>
        <div className="clearfix"></div>
      </div>

      <div>
        <Section />
      </div>
    </div>
  );
}

export default Banner;
