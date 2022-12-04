import React, { useEffect, useState } from 'react';
import axios from 'axios';
import withLoading from '../components/withLoading';
import useSessionStorage from '../lib/useSessionStorage';
import { useLocation } from "react-router-dom";
import { PixelBoardEdit } from '../components/PixelBoardEdit';

function PixelBoardEditPage() {
	const search = useLocation().search;
	const id = new URLSearchParams(search).get('id');
	const PixelBoardLoading = withLoading(PixelBoardEdit);
	let user = useSessionStorage('user')[0];
	let token = useSessionStorage('token')[0];
	const [appState, setAppState] = useState({
		loading: false,
		pixelBoardEdit: null,
	});
	useEffect(() => {
		let pixelBoardEdit = null;
		setAppState({ loading: true });
		if (user != null) {
			if (user.role === 'admin') {
				const apiUrlBoards = 'http://localhost:8080/api/pixelBoard/' + id;
				axios.get(apiUrlBoards).then((boardsapi) => {
					pixelBoardEdit = boardsapi.data;
					setAppState({ loading: false, pixelBoardEdit: pixelBoardEdit });
				});
			}
			else
				setAppState({ loading: false, pixelBoardEdit: pixelBoardEdit });
		} else {
			setAppState({ loading: false, pixelboardEdit: pixelBoardEdit });
		}

	}, [setAppState, user, token, id]);
	return (
		<PixelBoardLoading isLoading={appState.loading} pixelBoardEdit={appState.pixelBoardEdit} />
	);
}

export default PixelBoardEditPage;
