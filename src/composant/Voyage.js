import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Voyage = (props) => {
  const link=props.link
  const destination=props.destination
  const desc=props.desc
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={link} />
      <Card.Body>
        <Card.Title>{destination}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Voyage
