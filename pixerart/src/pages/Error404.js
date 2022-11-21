import React from 'react';
import { Col, Row } from 'reactstrap';

import img404 from '../assets/404.gif';

export const Error404 = () => (
	<Row>
		<Col x="12" className="vh-100 vw-100 d-flex align-items-end justify-content-center ">
			<img src={img404} alt="404" className="img-fluid" />
		</Col>
	</Row>
);
