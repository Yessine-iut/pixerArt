import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { NavPixer } from '../components/NavPixer';
import axios from 'axios';
import useSessionStorage from '../lib/useSessionStorage';

export const Home = () => {
	const api = 'http://localhost:8080/api/';
	const [nbPixelBoards, setNbPixelBoards] = useState(0);
	const [nbUsers, setNbUsers] = useState(0);
	const user = useSessionStorage('user')[0];
	const [pixelBoardsTermines, setPixelBoardsTermines] = useState();
    let pixelboardsFinishedRender = <></>;

	if (user != null) {
		axios.get(api + 'pixelBoards/').then(resp => {
			const pxbs = resp.data.data;
			pixelboardsFinishedRender = <Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none' }} href={'/pixelBoardCreate'}>Create PixelBoard</Link>

			for (let i=0; i< pxbs.length;i++){
				//pixelboardsFinishedRender += <p>Pxboard fini le {pxbs[i].dateFin} <br/></p>;
				pixelboardsFinishedRender = <Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none' }} href={'/pixelBoardCreate'}>Create PixelBoard</Link>

			}
			setNbPixelBoards(resp.data.data.length);
		}).catch(err => {
			console.log(err);
		})

		axios.get(api + 'users').then(resp => {
			setNbUsers(resp.data.data.length);
		}).catch(err => {
			console.log(err);
		})
	}

	return (
	<>
		<NavPixer />
		<Row>
			<Col>
				<h1>Home</h1>
				<Link to="/profil">Votre profil</Link>
				<p>Nombre de Pixelboards: {nbPixelBoards}</p><br />
				<p>Nombre d'Users: {nbUsers}</p>
				<p>{pixelboardsFinishedRender}</p>
			</Col>
		</Row>
	</>
	)
}
