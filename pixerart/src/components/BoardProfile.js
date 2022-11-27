import './BoardProfile.scss';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import useLocalStorage from '../lib/useLocalStorage';
import Button from 'react-bootstrap/esm/Button';

export const BoardProfile = ({ board}) => {
	const storageMode = useLocalStorage('darkmode')[0];
	return (
		<Card className={`BoardProfile ${storageMode}`} style={{ height: '20rem', width: '20rem' }}>
			<Card.Body>
				<Card.Title>{board.titre}</Card.Title>
				<Card.Text>
					Ce board a été crée le {board.dateCreation}.<br/>
					{board.dateFin ? "Il s'est terminé le"+board.dateFin: "Il est en cours."}
				</Card.Text>
				<Link to={`/pixelBoardEdit?id=${board._id}`}>Editer board</Link>
				<br/>
				<Button href={`pixelBoard?id=${board._id}`}>Visualiser Board</Button>
			</Card.Body>
		</Card>
	);
};
