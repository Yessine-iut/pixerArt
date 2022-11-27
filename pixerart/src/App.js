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
import PixelBoardPage from './pages/PixelBoardPage';
import {Signin} from './pages/Signin';
import {Login} from './pages/Login';
import {PixelBoardCreate} from './pages/PixelBoardCreate';
import PixelBoardEditPage from './pages/PixelBoardEditPage';




import { Error404 } from './pages/Error404';

const App = () => (
	
	
	<Router>
		<Container className="App">
			<Routes>
				<Route path="/profile" element={<ProfilePage />}/>
				<Route path="/pixelBoard" element={<PixelBoardPage />}/>
				<Route exact path="/" element={<Home />}/>
				<Route exact path="/signin" element={<Signin />}/>
				<Route exact path="/login" element={<Login />}/>
				<Route exact path="/pixelBoardCreate" element={<PixelBoardCreate />}/>
				<Route exact path="/pixelBoardEdit" element={<PixelBoardEditPage/>}/>
				

				<Route path="*" element={<Error404 />}/>
			</Routes>
		</Container>
	</Router>
);

export default App;
