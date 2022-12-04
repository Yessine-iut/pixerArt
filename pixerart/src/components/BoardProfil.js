import './BoardProfil.scss';
import Card from 'react-bootstrap/Card';
import useSessionStorage from '../lib/useSessionStorage';
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { useCallback, useEffect, useRef } from 'react';
import {
	useNavigate
} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';



export const BoardProfil = ({ board }) => {
	const navigate = useNavigate();
	const user = useSessionStorage('user')[0];
	const zoomw = 150 / board.taille.width
	const zoomh = 150 / board.taille.height
	let token = useSessionStorage('token')[0];


	const W = board.taille.width * zoomw;
	const H = board.taille.height * zoomh;
	const canvasRef = useRef(null);

	const initDraw = useCallback((ctx) => {
		// draw background
		ctx.fillStyle = '#fff';
		ctx.beginPath();
		ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

		board.pixels.forEach((d) => {
			ctx.beginPath();
			ctx.fillStyle = d.couleur;
			ctx.rect(d.position.x/20 * zoomw, d.position.y/20 * zoomh, zoomw * 1, 1 * zoomh);
			ctx.fill();
		});
	}, [board.pixels, zoomh, zoomw]);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');
		// tricks to get high resolution canvas
		canvas.width = W;
		canvas.height = H;
		canvas.style.width = `${W}px`;
		canvas.style.height = `${H}px`;
		// end tricks
		initDraw(context);
	}, [H, W, initDraw, zoomh, zoomw]);

	let canedit = <></>
	let candelete = <></>
	const deletePixelBoard = () => {
		axios.delete('http://localhost:8080/api/pixelBoard/' + board._id+"?secret_token=" + token).then(() => {
			navigate(0);
		});
	};

	if (user != null) {
		if (user.role === "admin") {
			canedit = <Button><Link to={`/pixelBoardEdit?id=${board._id}`}>Editer board</Link></Button>
			candelete = <Button className="DeleteButton" colorScheme='red' onClick={deletePixelBoard}> <FontAwesomeIcon icon={faTrash} /></Button>
		}
	}

	return (
		<Card className='BoardProfil'>
			{candelete}
			<Card.Body>
				<Card.Title>{board.titre}</Card.Title>
				<canvas ref={canvasRef} />
				<Card.Text>
					Ce board a été créé le {board.dateCreation}.<br />
					Sa date de fin est le {board.dateFin}.<br />
					C'est un board {board.mode}.
				</Card.Text>
				<br />
				{canedit}
				<br />
				<br />
				<Button><Link to={`/pixelBoard?id=${board._id}`}>Visualiser le board</Link></Button>
			</Card.Body>
		</Card>
	);
};
