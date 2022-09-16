import React from "react";
import "./Testimonial.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import c1 from "../../img/c1.jpeg";
import c2 from "../../img/c2.jpeg";
import c3 from "../../img/c3.jpeg";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function Testimonial() {
  return (
    <div className="testimonial">
      <h3>OUR GUESTS LOVE US</h3>
      <p>What our guests are saying about us</p>

      <div className="clearfix"></div>

      <Container fluid className="con">
        <Row>
          <Col className="test">
            <img src={c1} alt="" />
            <div className="test-info">
              <div>
                <span className="name">Avidreepta Gupta</span>
              </div>

              <p>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </p>

              <p className="comment">
                The service of care taker Amal is awesome. Rooms are very nice,
                clean and well maintained. Foods are very homely. Staff are also
                nice and professional.
              </p>
            </div>
          </Col>
          <Col className="test">
            <img src={c2} alt="" />
            <div className="test-info">
              <div>
                <span>Debarshee Sanyal</span>
              </div>
              <p>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </p>
              <p className="comment">
                Nice place, the cook cum attendend is very polite and always
                eager to serve you in the best possible way without any
                complain.
              </p>
            </div>
          </Col>
          <Col className="test">
            <img src={c3} alt="" />
            <div className="test-info">
              <div>
                <span>Rouhin Ghosh</span>
              </div>
              <p>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </p>
              <p className="comment">
                I absolutely loved it!!! Great place to stay with well equipped
                restaurant. Rooms are great, clean and tidy. Great experience.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Testimonial;
