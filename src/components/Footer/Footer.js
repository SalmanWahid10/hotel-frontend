import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";
import ww from "../../img/ww.png";
import wf from "../../img/wf.png";
import wl from "../../img/wl.png";
import wi from "../../img/wi.png";
import wy from "../../img/wy.png";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      <Container fluid className="ccc">
        <Row className="rrr">
          <Col className="cccc">
            <h2>Be in Touch</h2>
            <div className="sociall">
              <span>
                <img src={wf} alt="" />
              </span>
              <span>
                <img src={ww} alt="" />
              </span>
              <span>
                <img src={wl} alt="" />
              </span>
              <span>
                <img src={wy} alt="" />
              </span>
              <span>
                <img src={wi} alt="" />
              </span>
            </div>
          </Col>
          <Col className="ccccc">
            <div>
              <Link
                to="contact"
                onClick={scrollToTop}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <p>Contact us</p>
              </Link>
              <Link
                to="terms"
                onClick={scrollToTop}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <p>Terms and Conditions</p>
              </Link>
            </div>
            <div>
              <Link
                to="privacy"
                onClick={scrollToTop}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <p>Privacy Policy</p>
              </Link>
              <Link
                to="dataDel"
                onClick={scrollToTop}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <p>Data Deletion Protocol</p>
              </Link>
            </div>
          </Col>
        </Row>
        <div className="copyright">
          <div>
            <p>
              NEW SONAR BANGLA RESORT- DIGHA ALL RIGHT RESERVED POWER BY NEW
              SONAR BANGLA RESORT DIGHA PVT.LTD VERSION 0.0.1
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
