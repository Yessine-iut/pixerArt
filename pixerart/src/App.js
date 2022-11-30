import './App.css';
import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import { Container } from 'reactstrap';
import { Home } from './pages/Home';
import ProfilPage from './pages/ProfilPage';
import PixelBoardPage from './pages/PixelBoardPage';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { PixelBoardCreate } from './pages/PixelBoardCreate';
import PixelBoardEditPage from './pages/PixelBoardEditPage';



import { ChakraProvider } from '@chakra-ui/react'

import { Error404 } from './pages/Error404';

const App = () => (

	<ChakraProvider>
		<Router>
			<Container className="App">
				<Routes>
					<Route path="/profil" element={<ProfilPage />} />
					<Route path="/pixelBoard" element={<PixelBoardPage />} />
					<Route exact path="/" element={<Home />} />
					<Route exact path="/register" element={<Register />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/pixelBoardCreate" element={<PixelBoardCreate />} />
					<Route exact path="/pixelBoardEdit" element={<PixelBoardEditPage />} />


					<Route path="*" element={<Error404 />} />
				</Routes>
			</Container>
		</Router>
	</ChakraProvider>
);

export default App;
