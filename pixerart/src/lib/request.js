import axios from 'axios';

// ici on créé une instance de axios avec des paramètres par défaut
// de cette manière on n'a pas à répéter les mêmes paramètres à chaque requête
const { REACT_APP_API_URL } = "http://localhost:8080/";//process.env

export const request = axios.create({
	baseURL: REACT_APP_API_URL,
	headers: {
		'Content-Type': 'application/json',

	},
});
