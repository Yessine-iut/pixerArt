/* eslint-disable no-console */
import { useCallback, useEffect, useState, useRef } from 'react';
import { Col, Row } from 'reactstrap';
import { SketchPicker } from 'react-color'
import './PixelBoard.scss';
import useSessionStorage from '../lib/useSessionStorage';
import axios from 'axios';
import { NavPixer } from '../components/NavPixer';
import Countdown from 'react-countdown';
import { Button} from '@chakra-ui/react';

export const PixelBoard = (props) => {

	const [colorPicked, setColor] = useState("#ddd");
	let pixelBoard = null;
	let user = useSessionStorage('user')[0];
	const token = useSessionStorage('token')[0];
	const [delai, setDelai] = useState(false);
	const [zoom, setZoom] = useState(1);

	const [countdownDelai, setCountDownDelai] = useState(<></>);

	if (props.pixelBoard == null || props.pixelBoard === undefined) {
		pixelBoard = {
			"statut": false,
			"dateCreation": '',
			"dateFin": '',
			"mode": "classique",
			"delai": 0,
			"titre": "",
			"pixels": [],
			"taille": {
				"height": 50,
				"width": 50
			}
		}
	} else pixelBoard = props.pixelBoard
	const W = pixelBoard.taille.width*10;
	const H = pixelBoard.taille.height*10;
	const canvasRef = useRef(null);

	const initDraw = useCallback((ctx) => {
		// draw background
		ctx.fillStyle = '#fff';
		ctx.beginPath();
		ctx.clearRect(0, 0, canvasRef.current.width*zoom, canvasRef.current.height*zoom);
		
		pixelBoard.pixels.forEach((d) => {
			ctx.beginPath();
			ctx.fillStyle = d.couleur;
			ctx.rect(d.position.x, d.position.y,10, 10);
			ctx.fill();
		});
	}, [pixelBoard.pixels,zoom]);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');
		// tricks to get high resolution canvas
		canvas.width = W*2;
		canvas.height = H*2;
		canvas.style.width = `${W*zoom}px`;
		canvas.style.height = `${H*zoom}px`;
		// end tricks
		initDraw(context);
	}, [H, W, initDraw,zoom]);

	// un 2eme useEffect
	// il est tout à fait possible d'avoir plusieurs useEffect
	// c'est même recommandé pour séparer les effets
	useEffect(() => {
		const resize = () => {
			console.log('resize');
		};
		window.addEventListener('resize', () => {
			resize();
		});
		// on oublie pas de nettoyer
		return () => {
			console.log('removeEventListener');
			window.removeEventListener('resize', resize);
		};
	}, []);
	const rendererDelai = ({ seconds, completed }) => {
		if (completed) {
			// Render a completed state
			setDelai(false);
			setCountDownDelai(<></>)
		} else {
			// Render a countdown
			return <span>Vous ne pouvez pas dessinez pendant {seconds} secondes</span>;
		}
	};

	const handleZoomDown = () => {
		setZoom(Math.max(0.1,zoom-0.25))
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');
		initDraw(context)
	};

	const handleZoomUp = () => {
		setZoom(zoom+0.25)
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');
		initDraw(context)
	};

	const handleChartDownload = () => {
		const chartCanvas = canvasRef.current;
		if (chartCanvas) {
			const url = chartCanvas.toDataURL("image/png");
			const link = document.createElement("a");
			link.download = pixelBoard.titre+".png";
			link.href = url;
			link.click();
		}
	};

	const handleClickCanvas = (event) => {
		if (!delai && !pixelBoard.statut) {
			const canvas = canvasRef.current;
			const rect = canvas.getBoundingClientRect();
			const scaleX = canvas.width / rect.width;
			const scaleY = canvas.height / rect.height;
			const x = (event.clientX - rect.left) * scaleX-5;
			const y = (event.clientY - rect.top) * scaleY-5;
			let draw = true;

			if(pixelBoard.mode==='classique'){
				for(let i=0;i<pixelBoard.pixels.length;i++){
						if(x>pixelBoard.pixels[i].position.x-5 && x<pixelBoard.pixels[i].position.x+5 && y>pixelBoard.pixels[i].position.y-5 && y<pixelBoard.pixels[i].position.y+5 ){
							draw=false
							console.log("vous ne pouvez pas dessiner ici")				
						}
				}
			}
			if(draw){
			const context = canvas.getContext('2d');
			context.fillStyle = colorPicked;
			context.beginPath();
			context.rect(
				x,
				y,
				10,
				10,
			);
			let pixel = {
				position: {
					x: x,
					y: y
				},
				couleur: colorPicked,
				auteur: user.username
			}
			pixelBoard.pixels.push(pixel);
			axios.put('http://localhost:8080/api/addPixel/' + pixelBoard._id + '?secret_token=' + token, pixel);
			setDelai(true)
			setCountDownDelai(<Countdown date={Date.now() + pixelBoard.delai * 1000} renderer={rendererDelai} />)
			context.fill();
		}
		}
	};

	const handleColorChange = color => {
		setColor(color.hex)
	};
	const renderer = ({ hours, minutes, seconds, days, completed }) => {
		if (completed) {
			pixelBoard.statut = true;
			axios.put('http://localhost:8080/api/pixelBoard/' + pixelBoard._id + '?secret_token=' + token, pixelBoard)
			return <span>Ce pixelboard est terminé! Merci de votre participation!</span>;

		} else {
			// Render a countdown
			return <span>Il reste: {days} jours, {hours} heures, {minutes} minutes et {seconds} secondes</span>;
		}
	};

	return (
		<>
			<NavPixer />
			<h1>{pixelBoard.titre}</h1>
			<Countdown date={new Date(pixelBoard.dateFin)} renderer={renderer} />
			<br />
			{countdownDelai}
			<br/>
			<Button onClick={handleZoomDown}>-</Button><Button onClick={handleZoomUp}>+</Button>&nbsp;
			<Button onClick={handleChartDownload}>Télécharger le Board</Button><br/><br/>
			<Row className="Drawing">
				<Col className="d-flex flex-column justify-content-center align-items-center">
					<canvas onClick={handleClickCanvas} ref={canvasRef} />
				</Col>
				
				<SketchPicker
					color={colorPicked}
					onChange={handleColorChange}
				/>
			</Row >
		</>
	);
};
