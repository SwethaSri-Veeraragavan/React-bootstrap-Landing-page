import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Features = () => {
  return (
    <Card className="text-center featurecard shadow">
      <Card.Header className='Feature' style={{ backgroundColor : ' hsl(183, 87%, 33%)'}}>Featured</Card.Header>
      <Card.Body>
        <Card.Title>INTERSTING IN-BILID FEATUES</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="outline-info">click me</Button>
      </Card.Body>
    </Card>
  );
}

export default Features