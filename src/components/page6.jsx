import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image1 from '../assests/image1.jpg'
import image2 from '../assests/image2.jpg'
import image3 from '../assests/image3.jpg'

function Threecard() {
  return (
    <Row className="justify-content-center">
      <Col>
        <Card style={{ width: '18rem' }} className='shadow'>
          <Card.Img variant="top" src={image1} />
          <Card.Body>
            <Card.Title>STAND</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="info">Read more</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: '18rem' }} className='shadow'>
          <Card.Img variant="top" src={image2} />
          <Card.Body>
            <Card.Title>RUN</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="info">Read more</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: '18rem' }} className='shadow'>
          <Card.Img variant="top" src={image3} />
          <Card.Body>
            <Card.Title>FLY</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="info">Read more</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Threecard;
