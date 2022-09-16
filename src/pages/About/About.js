import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About.css";
import g from "../../img/g.png";
import ab from "../../img/ab.png";
import a0 from "../../img/a0.png";
import a1 from "../../img/a1.png";
import a3 from "../../img/a3.png";
import a4 from "../../img/a4.png";
import a5 from "../../img/img2.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <Container fluid>
        <Row>
          <img src={g} alt="" />
        </Row>
      </Container>

      <div className="aboutImg">
        <img src={ab} alt="" />
      </div>
      <div className="infoCon">
        <div className="aboutInfo">
          <h1>"Hello there we meet!</h1>
          <p>
            Tourists visiting Kolkata and the Kolkata citizens themselves prefer
            Digha as their preferred destination. Even the population in and
            around West Bengal forget their monotonous life by ending up with a
            weekly visit to Digha on their holidays. At any time, you could be
            among the visitors, and before you start for the trip, you have to
            check through the best hotel in Digha so that you can book your stay
            and do not worry about booking accommodation on landing at this
            seaside destination. New Sonar Bangla Hotel has been rated as the
            best hotel in Digha for offering admirable services and opulent
            accommodation facilities to guests. Our hotels provide all modern
            facilities and comforts at an affordable price, one could ask for in
            Digha – making us an ideal place to stay during your trips to Digha.
            Whether you are a solo traveler, or in a group with your friends or
            family, do not worry about booking the budget-friendly hotel, since
            Iconic Hotel is here to welcome you.
          </p>
          <h3>New Sonar Bangla is Inspired By Natural Beauty</h3>
          <p>
            The original meaning of iconic was essentially “resembling an
            icon,”- and we believe in providing such a magnificent experience to
            our guests. Best and most desirable locations near Mandarmani. Here,
            we simply love to pamper our guests with the finest indulgences they
            seek from life. At our hotels in Digha, our guests are allowed to
            experience exciting entertainment and activities, dining options,
            and luxury amenities
          </p>
          <h3>Hotel Where The Guests Can be Together and Be Nourished</h3>
          <p>
            From purpose-built stays for single executives on the fly, couples
            on a romantic weekend, or vi/pant families exploring the novelties
            in town, there is something special for everyone. We believe that
            our guests should get a feel of our history, culture, and traditions
            and not be given only a cosmetic experience. Each guest room is
            appointed to ensure an indulgent and all-around comfort for an
            experience you will never forget. Rooms are accoutered with your
            every need in mind. Think of it and find it, you don’t even have to
            ask!!! Complimentary Broadband and the Televisions in each room
            complete a well-rounded offering. It is simplicity, which is the
            ultimate in style.
          </p>
          <h2>
            Book your stay at our hotels in New Digha and enjoy your grand
            holiday or Business trip at New Sonar Bangla Hotel.
          </h2>
        </div>
      </div>

      <div className="aboutPic">
        <div className="aboutRow">
          <div className="">
            <img src={a0} alt="" />
          </div>
          <div>
            <img src={a1} alt="" />
          </div>
          <div>
            <img src={a3} alt="" />
          </div>
          <div>
            <img src={a4} alt="" />
          </div>
          <div>
            <img src={a5} alt="" />
          </div>
        </div>
      </div>
      <div className="discovery">
        <Link style={{ textDecoration: "none" }} to="../gallery">
          <p className="dis">Discover Our Gallery</p>
        </Link>
      </div>
    </div>
  );
}

export default About;
