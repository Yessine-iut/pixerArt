import './BoardProfil.scss';
import Card from 'react-bootstrap/Card';
import useSessionStorage from '../lib/useSessionStorage';
import { Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom';



export const BoardProfil = ({ board}) => {
	const user = useSessionStorage('user')[0];
	let canedit = <Button ><Link to={`/pixelBoardEdit?id=${board._id}`}>Editer board</Link></Button>
	if(user.role==="client")
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
				<Button><Link to={`/pixelBoard?id=${board._id}`}>Visualiser le board</Link></Button>
			</Card.Body>
		</Card>
	);
};
