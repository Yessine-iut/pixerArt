import './BoardProfil.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import useSessionStorage from '../lib/useSessionStorage';


export const BoardProfil = ({ board}) => {
	const user = useSessionStorage('user')[0];
	let canedit = <Button href={`/pixelBoardEdit?id=${board._id}`}>Editer board</Button>
	if(user.role=="client")
		canedit= <></>
	return (
		<Card className='BoardProfil' style={{ height: '20rem', width: '20rem' }}>
			<Card.Body>
				<Card.Title>{board.titre}</Card.Title>
				<Card.Text>
					Ce board a été créé le {board.dateCreation}.<br/>
					Sa date de fin est le {board.dateFin}.
					C'est un board {board.mode}.
				</Card.Text>
				<br/>
				{canedit}
				<br/>
				<br/>
				<Button href={`pixelBoard?id=${board._id}`}>Visualiser le board</Button>
			</Card.Body>
		</Card>
	);
};
