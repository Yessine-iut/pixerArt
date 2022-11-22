import React from 'react';
import { Col, Row } from 'reactstrap';
import {NavPixer} from '../components/NavPixer';
import {PixelBoard} from '../components/PixelBoard';



export const PixelBoardPage = ({pixelBoard}) => {

	return (
		<React.StrictMode>
			<NavPixer user={null} />
			<Row>
				<Col>
					<h1>PixelBoard</h1>
					<PixelBoard/>
				</Col>
			</Row>
		</React.StrictMode>
	)
}
