import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const GifItemCategory = ({ title, url, id }) => {

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={url} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{id}
      </Card.Text>
      <Button variant="primary" href={url} target='_blank'>Go</Button>
    </Card.Body>
  </Card>
  )
}
