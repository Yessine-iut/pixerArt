import React, { useEffect, useState } from 'react';
import axios from 'axios';
import withLoading from '../components/withLoading';
import Profil from '../components/Profil';
import useSessionStorage from '../lib/useSessionStorage';

function ProfilPage() {
	const ProfilLoading = withLoading(Profil);
	let user = useSessionStorage('user')[0];
	let token = useSessionStorage('token')[0];
	const [appState, setAppState] = useState({
		loading: false,
		user: user ? user : null,
	});
	useEffect(() => {
		setAppState({ loading: true });
		if (user != null) {
			if (user.role === 'admin') {
				const apiUrlBoards = 'http://localhost:8080/api/pixelBoards/'+user.username;
				axios.get(apiUrlBoards).then((boardsapi) => {
					user.boards = boardsapi.data.data[0];
					user.contributions = boardsapi.data.data[1];
					setAppState({ loading: false, user: user });
				});
			}
			else{
				const apiUrlBoards = 'http://localhost:8080/api/pixelBoardsByUsername/'+user.username;
				axios.get(apiUrlBoards).then((boardsapi) => {
					console.log(boardsapi)
					user.boards = boardsapi.data.data[0];
					user.contributions = boardsapi.data.data[1];
					setAppState({ loading: false, user: user });
				});
			}
		} else {
			setAppState({ loading: false, user: user });
		}

	}, [setAppState, user, token]);
	return (
		<ProfilLoading isLoading={appState.loading} user={appState.user} />
	);
}

export default ProfilPage;
