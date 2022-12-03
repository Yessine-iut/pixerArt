import Card from 'react-bootstrap/Card';
import './ProfilCard.scss';


export const ProfilCard =({ user}) => {

  return (
    <Card  className='ProfilCard' style={{ float:'left',width: '20rem' }}>
      <Card.Img variant="top" style={{ width: '20rem' }} src="https://picsum.photos/150/150" />
      <Card.Body>
        <Card.Title>{user.username}</Card.Title>
        <Card.Text>
        Vous êtes un {user.role}.<br/>
        Vous avez dessiné {user.contributions} pixels.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
