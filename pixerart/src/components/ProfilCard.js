import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useLocalStorage from '../lib/useLocalStorage';


export const ProfilCard =({ user,contributions,handleClick}) => {
  const storageMode = useLocalStorage('darkmode')[0];

  return (
    <Card  className={`ProfilCard ${storageMode}`} style={{ float:'left',width: '20rem' }}>
      <Card.Img variant="top" style={{ width: '20rem' }} src="https://picsum.photos/150/150" />
      <Card.Body>
        <Card.Title>{user.username}</Card.Title>
        <Card.Text>
        Vous êtes un {user.role}.
        Vous avez contribué à {contributions} pixer arts.

        </Card.Text>
        <Button variant="primary"  onClick={handleClick} >Edit profil</Button>
      </Card.Body>
    </Card>
  );
}
