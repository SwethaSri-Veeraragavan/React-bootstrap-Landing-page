import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import video from '../assests/video.mp4';
import image from '../assests/H-brid.png.png';

const Heropage = () => {
  return (
    <Container fluid className='Herocontent mb-3'>
      <div className='overlay'>
        <video autoPlay muted loop className='video'>
          <source src={video} type='video/mp4' />
        </video>
      </div>
      <Row className='g-lg-5 py-5 mt-5 mb-5'>
        <Col lg={7} className="content text-center text-lg-start">
          <div className='overvideo'>
            <h1 className='display-4 mt-4 ' style={{ color: 'white' }}>Life has its own hidden force <br />
            which you can only discover by <span>Living.</span></h1>
            <div className='d-flex justify-content-center align-items-center'>
              <Button variant="gradient" size="xl" radius="xl" className='control btn-lg'>
                Read More
              </Button>
            </div>
          </div>
        </Col>
        <Col lg={5}>
          <div className="d-flex justify-content-center justify-content-lg-end">
            <img src={image} alt='Humming Bird' className='hummingImage' />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Heropage;
