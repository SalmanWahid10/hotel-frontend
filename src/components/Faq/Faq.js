import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Faq.css";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "@mui/material";
function Faq() {
  return (
    <div className="faq">
      <Container fluid>
        <Row className="faqRow">
          <h1>FAQ'S</h1>
        </Row>
      </Container>

      <Container fluid className="m-auto">
        <p className=" m-lg-5  text-center fText ">
          Please fill in the details below and tell us all about your bookings.
          If you cannot Reach us through this number, not reachable, busy or not
          Answered at all. In that case do feel free to Send a SMS / Mail Us so
          we may contact you back properly as soon as we are available again.
        </p>
      </Container>
      <Container className="m-auto fCon">
        <h1>Frequently Asked Questions</h1>
        <h3>Photography/Videography Related Queries</h3>
        <Accordion>
          <Accordion.Item eventKey="0" className="aa">
            <Accordion.Header className="hh">
              <p>1. Are there any other charges or demand?</p>
            </Accordion.Header>
            <Accordion.Body>
              The charges mentioned in the quotation are based on the complete
              package of the event date. If the event goes running out of the
              time then only extra charges will apply on.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className="aa">
            <Accordion.Header className="hh">
              <p>2. Is there any backup service?</p>
            </Accordion.Header>
            <Accordion.Body>
              Yes, of course. There are backups for photos & videos both. Don't
              worry. If you lose your data, we are here to provide you the
              complete data backup for one year.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="aa">
            <Accordion.Header className="hh">
              <p>3. How long will you take for all deliverables?</p>
            </Accordion.Header>
            <Accordion.Body>
              The time for deliverable items is not fixed. It depends upon the
              events. However, most of the time developing and producing the
              images and videos will take anywhere from 2 weeks to 3 months. May
              I know the total no of team members at my venue on event date?
              Sure, details will be provided in quotation but it depends upon
              rituals, no of days and mostly on the nature of the event.
              Typically we engage a team of 3-7 members in a ceremony.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="aa">
            <Accordion.Header className="hh">
              <p>
                4. Is there any option if i want to keep my event photos &
                videos private?
              </p>
            </Accordion.Header>
            <Accordion.Body>
              Our Social Media Channels are our daily bread and butter. And we
              are nothing but thankful to the couples that give us the privilege
              of being part of their wedding & also gladly allowing us to share
              our work, but everything with your permission. If you want to keep
              everything secret then we will do it as per your choices.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="aa">
            <Accordion.Header className="hh">
              <p>
                5. Where are you from? Do you guys travel all over the India?
              </p>
            </Accordion.Header>
            <Accordion.Body>
              We are primarily based in Kolkata. But we do travel all over the
              length and breadth of India (we have shot weddings as far north as
              Kashmir, as far east as Mumbai, as far south as Kerala and as Far
              west as the Rann of Kutch in Gujarat. And everywhere in between of
              course ), and even across the world to cover weddings (as far west
              as the other side of the world, ie. United States of America).
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className="aa">
            <Accordion.Header className="hh">
              <p>
                6. Who does the copyright of all images taken on the wedding
                daybelong to?
              </p>
            </Accordion.Header>
            <Accordion.Body>
              By general law, copyright of an image belongs to the person who
              takes it using his/her camera. In the case of wedding pictures
              that are paid for, there is shared copyright ownership of the
              photographs between the person clicking it & the person paying for
              the photographs. That being said, we never use wedding pictures
              that we take for any other purpose other than showcasing our work
              on our website & social media. And there too, we use it with
              copyright watermarks.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6" className="aa">
            <Accordion.Header className="hh">
              <p>7. How much in advance do we need to book you?</p>
            </Accordion.Header>
            <Accordion.Body>
              It really depends on the date you're getting married. Many times
              we get booked upto one year before the wedding date. Especially
              there are some hot dates (dates with a good Muharat) on which we
              have multiple enquiries that are made. If we are booked out on a
              date, we don't take on other clients. Hence it is always better to
              book us as early as possible. It's the same as you would book an
              in demand hall, caterer or a DJ. The sooner the better.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <h3>Photography/Videography Related Queries</h3>
        <Accordion>
          <Accordion.Item eventKey="0" className="aa">
            <Accordion.Header className="hh">
              <p>1. Are there any other charges or demand?</p>
            </Accordion.Header>
            <Accordion.Body>
              The charges mentioned in the quotation are based on the complete
              package of the event date. If the event goes running out of the
              time then only extra charges will apply on.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className="aa">
            <Accordion.Header className="hh">
              <p>2. Is there any backup service?</p>
            </Accordion.Header>
            <Accordion.Body>
              Yes, of course. There are backups for photos & videos both. Don't
              worry. If you lose your data, we are here to provide you the
              complete data backup for one year.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="aa">
            <Accordion.Header className="hh">
              <p>3. How long will you take for all deliverables?</p>
            </Accordion.Header>
            <Accordion.Body>
              The time for deliverable items is not fixed. It depends upon the
              events. However, most of the time developing and producing the
              images and videos will take anywhere from 2 weeks to 3 months. May
              I know the total no of team members at my venue on event date?
              Sure, details will be provided in quotation but it depends upon
              rituals, no of days and mostly on the nature of the event.
              Typically we engage a team of 3-7 members in a ceremony.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="aa">
            <Accordion.Header className="hh">
              <p>
                4. Is there any option if i want to keep my event photos &
                videos private?
              </p>
            </Accordion.Header>
            <Accordion.Body>
              Our Social Media Channels are our daily bread and butter. And we
              are nothing but thankful to the couples that give us the privilege
              of being part of their wedding & also gladly allowing us to share
              our work, but everything with your permission. If you want to keep
              everything secret then we will do it as per your choices.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="aa">
            <Accordion.Header className="hh">
              <p>
                5. Where are you from? Do you guys travel all over the India?
              </p>
            </Accordion.Header>
            <Accordion.Body>
              We are primarily based in Kolkata. But we do travel all over the
              length and breadth of India (we have shot weddings as far north as
              Kashmir, as far east as Mumbai, as far south as Kerala and as Far
              west as the Rann of Kutch in Gujarat. And everywhere in between of
              course ), and even across the world to cover weddings (as far west
              as the other side of the world, ie. United States of America).
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className="aa">
            <Accordion.Header className="hh">
              <p>
                6. Who does the copyright of all images taken on the wedding
                daybelong to?
              </p>
            </Accordion.Header>
            <Accordion.Body>
              By general law, copyright of an image belongs to the person who
              takes it using his/her camera. In the case of wedding pictures
              that are paid for, there is shared copyright ownership of the
              photographs between the person clicking it & the person paying for
              the photographs. That being said, we never use wedding pictures
              that we take for any other purpose other than showcasing our work
              on our website & social media. And there too, we use it with
              copyright watermarks.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6" className="aa">
            <Accordion.Header className="hh">
              <p>7. How much in advance do we need to book you?</p>
            </Accordion.Header>
            <Accordion.Body>
              It really depends on the date you're getting married. Many times
              we get booked upto one year before the wedding date. Especially
              there are some hot dates (dates with a good Muharat) on which we
              have multiple enquiries that are made. If we are booked out on a
              date, we don't take on other clients. Hence it is always better to
              book us as early as possible. It's the same as you would book an
              in demand hall, caterer or a DJ. The sooner the better.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>

      <div className="query">
        <h1>If your query is not clear yet, you may put your quarries here</h1>
        <Button className="bb" variant="contained">
          Click here
        </Button>
      </div>
    </div>
  );
}

export default Faq;
