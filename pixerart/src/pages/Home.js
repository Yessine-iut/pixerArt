import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

export const Home = () => (
	<Row>
		<Col>
			<h1>Home</h1>
			<Link to="/profiles">Profiles</Link>
		</Col>
	</Row>
);
