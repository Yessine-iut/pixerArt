import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import {NavPixer} from '../components/NavPixer';


export const Home = () => {
	return (
		<React.StrictMode>
			<NavPixer/>
			<Row>
				<Col>
					<h1>Home</h1>
					<Link to="/profile">Votre profile</Link>
				</Col>
			</Row>
		</React.StrictMode>
	)
}
