import React from 'react';
import Profile from './Profile';
import './App.css';

const user = {
	username: "Mark",
	mdp: "12345678",
	role: "ADMIN",
	theme: "darkmode"
}

function App() {
  return (
    <React.StrictMode>
		<Profile user={user} />
	</React.StrictMode>
  );
}

export default App;
