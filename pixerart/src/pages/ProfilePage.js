import React, { useEffect, useState } from 'react';
import axios from 'axios';
import withLoading from '../components/withLoading';
import Profile from '../components/Profile';
import useSessionStorage from '../lib/useSessionStorage';

function ProfilePage() {
	const ProfileLoading = withLoading(Profile);
	let user = useSessionStorage('user')[0];
	let token = useSessionStorage('token')[0];
	const [appState, setAppState] = useState({
		loading: false,
		user: user?user:null,
	});
	useEffect(() => {
		setAppState({ loading: true });
		if(user!=null){
			const apiUrlBoards = 'http://localhost:8080/api/pixelBoardsByAuteur/'+user.username;
			axios.get(apiUrlBoards).then((boardsapi) => {
				user.boards = boardsapi.data.data;
				setAppState({ loading: false, user: user });
			  });
		  }
		  else 
		  setAppState({ loading: false, user: user });
	  }, [setAppState, user,token]);
	return (
		<React.StrictMode>
			<ProfileLoading isLoading={appState.loading} user={appState.user} />
		</React.StrictMode>
	);
}

export default ProfilePage;
