import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFeatherAlt } from 'react-icons/fa';
const Threebox = () => {
  return (
    <Container>
      <Row>
        <Col sm={4}>
          <div className="box shadow">
            <div className="icon bg-white">
              <span className="lnr lnr-magic-wand"><FaFeatherAlt size={50}/></span>
            </div>
            <div className="space-20"></div>
            <h4>Knowledge</h4>
            <div className="space-15"></div>
            <p>Proactively syndicate open-source e-markets after low-risk high-yield synergy.</p>
          </div>
        </Col>
        <Col sm={4}>
          <div className="box shadow " data-aos="fade-up">
            <div className="icon bg-white">
              <span className="lnr lnr-magic-wand"><FaFeatherAlt size={50}/></span>
            </div>
            <div className="space-20"></div>
            <h4>Skills</h4>
            <div className="space-15"></div>
            <p>Proactively syndicate open-source e-markets after low-risk high-yield synergy.</p>
          </div>
        </Col>
        <Col sm={4}>
          <div className="box shadow" data-aos="fade-up">
            <div className="icon bg-white">
              <span className="lnr lnr-magic-wand "><FaFeatherAlt size={50}/></span>
            </div>
            <div className="space-20"></div>
            <h4>Confidence</h4>
            <div className="space-15"></div>
            <p>Proactively syndicate open-source e-markets after low-risk high-yield synergy.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Threebox;
