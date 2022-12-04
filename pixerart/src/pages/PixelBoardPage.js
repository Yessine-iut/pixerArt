import React, { useEffect, useState } from 'react';
import axios from 'axios';
import withLoading from '../components/withLoading';
import useSessionStorage from '../lib/useSessionStorage';
import { useLocation } from "react-router-dom";
import { PixelBoard } from '../components/PixelBoard';

function PixelBoardPage() {
	const search = useLocation().search;
	const id = new URLSearchParams(search).get('id');
	const PixelBoardLoading = withLoading(PixelBoard);
	let user = useSessionStorage('user')[0];
	let token = useSessionStorage('token')[0];
	const [appState, setAppState] = useState({
		loading: false,
		pixelBoard: null,
	});
	useEffect(() => {
		let pixelBoard = null;
		setAppState({ loading: true });
		if (user != null) {
			const apiUrlBoards = 'http://localhost:8080/api/pixelBoard/' + id;
			axios.get(apiUrlBoards).then((boardsapi) => {
				pixelBoard = boardsapi.data;
				setAppState({ loading: false, pixelBoard: pixelBoard });
			});
		} else {
			setAppState({ loading: false, pixelBoard: pixelBoard });
		}

	}, [setAppState, user, token, id]);
	return (
		<PixelBoardLoading isLoading={appState.loading} pixelBoard={appState.pixelBoard} />
	);
}

export default PixelBoardPage;
