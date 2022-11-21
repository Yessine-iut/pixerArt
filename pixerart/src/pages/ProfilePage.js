import React, { useEffect, useState } from 'react';
import axios from 'axios';
import withLoading from '../components/withLoading';
import Profile from '../components/Profile';

function ProfilePage() {
	const ProfileLoading = withLoading(Profile);
	const [appState, setAppState] = useState({
		loading: false,
		user: null,
	});
	useEffect(() => {
		setAppState({ loading: true });
		const apiUrl = 'http://localhost:8080/api/user/6373d7bd9db4ea92467a807f';
		axios.get(apiUrl).then((userapi) => {
		  let user = userapi.data.user;
		  if(user!=null){
			const apiUrlBoards = 'http://localhost:8080/api/pixelBoardsByAuteur/'+user.username;
			axios.get(apiUrlBoards).then((boardsapi) => {
				user.boards = boardsapi.data.data;
				setAppState({ loading: false, user: user });
			  });
		  }
		  else 
		  setAppState({ loading: false, user: user });

		});
	  }, [setAppState]);
	return (
		<React.StrictMode>
			<ProfileLoading isLoading={appState.loading} user={appState.user} />
		</React.StrictMode>
	);
}

export default ProfilePage;
