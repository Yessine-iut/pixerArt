import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';


import './ProfileCard.scss';

export const ProfileCard =({ user,storageMode,contributions,handleClick}) => {
    
  return (
    <Card  className={`ProfileCard ${storageMode ? 'dark' : 'light'}`} style={{ height:'20rem',width: '20rem' }}>
      <Card.Img variant="top" style={{ height:'20rem',width: '20rem' }} src="https://picsum.photos/150/150" />
      <Card.Body>
        <Card.Title>{user.username}</Card.Title>
        <Card.Text>
        <p>Vous êtes un {user.role}</p>
        <p>Vous avez contribué à {contributions} pixer arts.</p>

        </Card.Text>
        <Button variant="primary"  onClick={handleClick} >Edit profile</Button>
      </Card.Body>
    </Card>
  );
}
