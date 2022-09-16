import React from "react";
import { Container, Row } from "react-bootstrap";
import "./DataDel.css";
import { Link } from "react-router-dom";
function DataDel() {
  return (
    <div className="dataDel">
      <Container fluid>
        <Row className="delRow">
          <h1>DATA DELETION PROTOCOL</h1>
        </Row>
      </Container>

      <Container className="m-auto">
        <h1 className="dh">Welcome to Fliqaindia pvt.ltd.</h1>

        <Row className="dataRow">
          <h3>1. Purpose</h3>
          <p>
            This document sets out our policy for responding to requests for
            deletion of data under data protection law. This document explains
            the rights of the data subject in relation to data deletion and the
            responsibilities of FliqaIndia in responding with such a request.
          </p>
        </Row>
        <Row className="dataRow">
          <h3>2. Individual Rights</h3>
          <p>
            An individual has the right to erasure, also known as ‘the right to
            be forgotten’. The principle underpinning this right is to enable an
            individual to request the deletion or removal of personal data where
            there is no compelling reason for its continued processing.
          </p>
        </Row>
        <Row className="dataRow">
          <h3>3. When does the right to erasure apply?</h3>
          <p>
            As stipulated in data protection law, individuals have a right to
            have personal data erased and to prevent processing in specific
            circumstances:
          </p>
          <ul>
            <li>
              Where the personal data is no longer necessary in relation to the
              purpose for which it was originally collected/processed.
            </li>
            <li>When the individual withdraws consent</li>
            <li>
              When the individual objects to the processing and there is no
              other legal ground for the relevant processing activity
            </li>
            <li>When the personal data was unlawfully processed</li>
            <li>
              Where the personal data has to be erased in order to comply with a
              legal obligation.
            </li>
          </ul>
        </Row>

        <Row className="dataRow">
          <h3>4. What information does FliqaIndia retain?</h3>
          <p>
            The FliqaIndia online system “Interplace” stores data about
            individuals in order to create a Team Role Report. We store the
            name, e-mail address, gender, organisation/department (if provided)
            and subsequent Team Role scores for each individual in order to
            create a report, which is stored on our secure servers for a period
            of 90 days. This data is stored and used in accordance with our
            Privacy Policy, which can be found at:
            <Link to="https://www.fliqaindia.com/privacy-policy">
              https://www.fliqaindia.com/privacy-policy
            </Link>
            If consent is provided, personal data (including the above, plus
            address, telephone number and notes) may be stored in our CRM system
            for the purposes of contacting you regarding FliqaIndia news,
            products and promotions.
          </p>
        </Row>
        <Row className="dataRow">
          <h3>5. How can data be deleted?</h3>
          <p>
            If you have purchased a Team Role Report directly from FliqaIndia,
            FliqaIndia acts as data controller. In this case, we will delete the
            Team Role data (scores) upon request (via email to{" "}
            <Link to=" support@fliqaindia.com">support@fliqaindia.com</Link> ,
            upon closure of your account, or after three years. If an
            organization purchases access to the FliqaIndia Online Account,
            FliqaIndia acts as the data processor and the customer acts as data
            controller. In this case, it is the responsibility of the customer,
            as data controller, to ensure that data is not held longer than
            necessary for the purposes for which it is intended.
          </p>
          <p>
            A user of the FliqaIndia Online Account, acting on behalf of their
            organization, can delete data from their Interplace system whenever
            they wish. This data is deleted from the system immediately and
            cannot be recovered by any users or FliqaIndia employees after this
            point. Data which has been deleted or otherwise destroyed can not be
            recovered at any time. Sufficient warning is given to the account
            administrator before data are permanently deleted. Data may still
            remain in the systems back-up files, which will be deleted
            periodically. Information may be deleted from our CRM upon request
            to <Link to=" support@fliqaindia.com">support@fliqaindia.com</Link>{" "}
            . We undertake to perform the deletion within one month (30 calendar
            days) and will send you a confirmation once the information has been
            deleted. Wherever possible, we will aim to complete the request in
            advance of the deadline.
          </p>
        </Row>
      </Container>
    </div>
  );
}

export default DataDel;
