import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { NavPixer } from '../components/NavPixer';
import axios from 'axios';

export const Home = () => {
	const api = 'http://localhost:8080/api/';
	const [nbPixelBoards, setNbPixelBoards] = useState(0);
	const [nbUsers, setNbUsers] = useState(0);

	
		axios.get(api + 'PixelBoards/Yessine').then(resp => {
			setNbPixelBoards(resp.data.data[0].length);
		}).catch(err => {
			console.log(err);
		})

		axios.get(api + 'users').then(resp => {
			setNbUsers(resp.data.data.length);
		}).catch(err => {
			console.log(err);
		})

	return (
	<>
		<NavPixer />
		<Row>
			<Col>
				<h1>Home</h1>
				<Link to="/profil">Votre profil</Link>
				<p>Nombre de Pixelboards: {nbPixelBoards}</p><br />
				<p>Nombre d'Users: {nbUsers}</p>

			</Col>
		</Row>
	</>
	)
}
