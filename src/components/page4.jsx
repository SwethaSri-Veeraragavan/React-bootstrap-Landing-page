// Flyingbird.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { FaFeatherAlt } from 'react-icons/fa';
import video from '../assests/H-video.mp4';
import { LiaKiwiBirdSolid } from "react-icons/lia";

const Flyingbird = () => {
  return (
    <Container fluid className="flybird-container mt-4 mb-4">
      <div className='flybird'>
        <video autoPlay muted loop className='video'>
          <source src={video} type='video/mp4' />
        </video>
      </div>

      <Row className='contentbox mt-4 mb-4'>
        <Col lg={6} className="bridcol ms-auto mt-4 p-4 mb-4">
          <Row className="justify-content-start">
            <Col md={6}>
              <div className="info">
                <i className="material-icons text-gradient text-primary text-3xl"><LiaKiwiBirdSolid size={30}/></i>
                <h5 className="font-weight-bolder mt-3">Full Documentation</h5>
                <p className="pe-5">Built by developers for developers. Check the foundation and you will find everything inside our documentation.</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="info">
                <i className="material-icons text-gradient text-primary text-3xl"><LiaKiwiBirdSolid size={30}/></i>
                <h5 className="font-weight-bolder mt-3">Bootstrap 5 Ready</h5>
                <p className="pe-3">The world’s most popular front-end open source toolkit, featuring Sass variables and mixins.</p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-start mt-5">
            <Col md={6} mt={3}>
            <div className="info">
              <i className="material-icons text-gradient text-primary text-3xl"><LiaKiwiBirdSolid size={30} /></i>
              <h5 className="font-weight-bolder mt-3">Save Time & Money</h5>
              <p className="pe-5">Creating your design from scratch with dedicated designers can be very expensive. Start with our Design System.</p>
            </div>
            </Col>
            <Col md={6} mt={3}>
              <div className="info">
                <i className="material-icons text-gradient text-primary text-3xl"><LiaKiwiBirdSolid size={30} /></i>
                <h5 className="font-weight-bolder mt-3">Fully Responsive</h5>
                <p className="pe-3">Regardless of the screen size, the website content will naturally fit the given resolution.</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Flyingbird;
