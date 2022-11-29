import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { NavPixer } from '../components/NavPixer';
import axios from 'axios';


export const Home = () => {
	const api = 'http://localhost:8080/api/';
	const [nbPixelBoards, setNbPixelBoards] = useState(-1);

	axios.get(api+'pixelBoards/').then(resp => {
		setNbPixelBoards(resp.data.data.length);
    }).catch(err => {
        console.log(err);
    })

	return (
		<React.StrictMode>
			<NavPixer />
			<Row>
				<Col>
					<h1>Home</h1>
					<Link to="/profile">Votre profile</Link>
					<p>Nombre de Pixelboards: {nbPixelBoards}</p>
				</Col>
			</Row>
		</React.StrictMode>
	)
}
