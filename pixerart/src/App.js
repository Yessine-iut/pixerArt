import './App.css';
import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import { Container } from 'reactstrap';

import { Home } from './pages/Home';
import ProfilePage from './pages/ProfilePage';

import { Error404 } from './pages/Error404';

const App = () => (
	<Router>
		<Container className="App">
			<Routes>
				<Route path="/profiles" element={<ProfilePage />}/>
				<Route path="/pixelBoard"/>
				<Route exact path="/" element={<Home />}/>
				<Route path="*" element={<Error404 />}/>
			</Routes>
		</Container>
	</Router>
);

export default App;
