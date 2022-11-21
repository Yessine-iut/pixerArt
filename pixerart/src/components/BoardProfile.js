import './BoardProfile.scss';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export const BoardProfile = ({ board,storageMode}) => {

	return (
		<Card className={`BoardProfile ${storageMode ? 'dark' : 'light'}`} style={{ height: '20rem', width: '20rem' }}>
			<Card.Body>
				<Card.Title>{board.titre}</Card.Title>
				<Card.Text>
					Ce board a été crée le {board.dateCreation}.<br/>
					{board.dateFin ? "Il s'est terminé le"+board.dateFin: "Il est en cours."}
				</Card.Text>
				<Link to={`/pixelBoard/${board._id}`}>Editer board</Link>
			</Card.Body>
		</Card>
	);
};
