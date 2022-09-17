import React from "react";
import { Container, ListGroup, Row, Col } from "react-bootstrap";
import "./Term.css";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

function Terms() {
  return (
    <div className="header">
      <Container fluid>
        <Row>
          <Col className="termsRow">
            <h1>TERMS AND CONDITIONS</h1>
          </Col>
        </Row>
      </Container>

      <Container className="m-auto">
        <ListGroup>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />{" "}
            The primary guest must be at least 18 years of age to be able to
            check into the hotel.
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />{" "}
            It is mandatory for guests to present valid photo identification at
            the time of check-in. According to government regulations, a valid
            Photo ID must be carried by every person above the age of 18 staying
            at the hotel. The identification proofs accepted are Aadhar Card,
            Driving License, Voter ID Card, and Passport. Without Original copy
            of valid ID the guest will not be allowed to check-in.
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />
            PAN card is not accepted as a valid ID card.
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />
            Stay of 1 child up to 5 years of age is complementary without the
            use of extra mattress. Breakfast charges may be applicable for the
            child.
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />
            Extra mattress will be provided for triple occupancy bookings with
            additional cost.
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />
            Outside food, liquor & Beverages will not be permitted inside hotel.
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />
            Should any action by a guest be deemed inappropriate by the hotel,
            or if any inappropriate behaviour is brought to the attention of the
            hotel, the hotel reserves the right, after the allegations have been
            investigated, to take action against the guest.
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />
            Certain destinations may have different policies for specific times
            during the year.
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />
            Guests shall be liable for any damage, except normal wear and tear
            to Hotel asset. Guest shall keep the Hotel room in a good condition
            and maintain hygiene and cleanliness.
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />
            Certain policies are booking specific and are informed to the
            customer while making the booking.
          </ListGroup.Item>
        </ListGroup>
      </Container>
      <div className="heading">
        <h1>BOOKING EXTENSION POLICY</h1>
      </div>

      <Container className="m-auto">
        <ListGroup>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />{" "}
            Extension of stay would be provided on current room rates, subject
            to availability.
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />
            Current room rates can be different from the rates at which the
            rooms were booked.
          </ListGroup.Item>
        </ListGroup>
      </Container>

      <div className="heading">
        <h1>PAYMENT POLICY</h1>
      </div>

      <Container className="m-auto">
        <ListGroup>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />{" "}
            Card is not accepted.
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />{" "}
            On the arrival, to improve the express check out, we will ask the
            pre-authorisation (not charge) on your credit card for the total
            amount of your stay. Upon confirmation the authorization will be
            then confirmed as final payment upon check out if not pre-paid in
            advance.
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />
            For bookings of more than 7 nights, guests must settle all
            outstanding payments on a weekly basis. Hotel will be unable to
            continue further accommodation prior to settlement of the
            outstanding amount.
          </ListGroup.Item>
        </ListGroup>
      </Container>

      <div className="heading">
        <h1>EARLY CHECK-IN AND LATE CHECK-OUT</h1>
      </div>

      <Container className="m-auto">
        <ListGroup>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />{" "}
            Our standard check-out time is 11 AM.
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />{" "}
            Before 6 AM - With additional 100% charges for one day payable
            (subject to availability).
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />{" "}
            6 AM onwards - With additional 50% charges payable as per room rates
            of the previous day.
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />
            Our standard check-out time is 10 AM. Late check-out is subject to
            availability and cannot be confirmed in advance. Extra charges will
            apply.
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />
            Between 11 AM and 1 PM Complimentary.
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />
            Between 1 PM and 5 PM 50% charges payable as per room rates of the
            next day, depending on hotel policy.
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />
            After 5 PM 100% charges payable as per room rates of the next day.
          </ListGroup.Item>
        </ListGroup>
      </Container>

      <div className="heading">
        <h1>CANCELLATION& REFUND POLICY</h1>
      </div>

      <Container className="m-auto">
        <ListGroup>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />{" "}
            Cancellations for daily reservation must be received 48 hours prior
            to check in to avoid one-night retention charges.
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />{" "}
            In case, no cancellation policy is mentioned on the hotel details
            page, the following cancellation policy shall apply.
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />
            48 hours or more prior to check-in time Free cancellation (100%
            refund).
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />
            In case you decide to cancel a booking after check-in time or do not
            show up at the hotel, charges for the first nights shall be
            deducted.
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />
            In case you decide to shorten your booking post the check-in date,
            you will be charged for the next 24 hours after the official
            cancellation. Money for the remaining nights will be refunded.
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />
            30 days or more prior to check-in date FREE Cancellation (100%
            refund).
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />
            Between 15 to 30 days of check-in date 50% advance amount.
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />
            Less than 15 days of check-in date 100% advance amount.
          </ListGroup.Item>
        </ListGroup>
      </Container>

      <div className="heading">
        <h1>HOTEL SPECIFIC POLICIES</h1>
      </div>

      <Container className="m-auto">
        <ListGroup>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />{" "}
            Hotel specific amenities are captured on the website. Guests are
            advised to refer the same while booking.
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />{" "}
            Hotels in hill stations may not have air conditioning due to weather
            conditions of the location.
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />
            Hotels in remote locations may not have Wi-Fi connectivity due to
            unavailability of network in those regions.
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />
            In some hotels, due to local conditions, unmarried/unrelated couples
            may not be allowed to check-in. Accommodation can be denied to
            guests posing as a couple if suitable proof of identification is not
            presented at the time of check-in.
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />
            Hotels may deny check-in to guests providing ID proof of the same
            city as the hotel itself.
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />
            Our hotels do not permit visitors to rooms. Please confirm with the
            hotel before inviting visitors into the rooms.
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />
            Confirmation and cancellation policy might be different in case of
            special offers or packages. In case different policies are applied
            they will be notified into the reservation.
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </div>
  );
}

export default Terms;
