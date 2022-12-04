import React, { useState } from 'react';

import { request } from '../lib/request';
import { NavPixer } from '../components/NavPixer';
import useSessionStorage from '../lib/useSessionStorage';
import ErrorMessage from '../components/ErrorMessage';
import SuccessMessage from '../components/SucessMessage';
import {
	Flex,
	Box,
	Heading,
	FormControl,
	FormLabel,
	Input,
	Button,
	CircularProgress,
	Select
} from '@chakra-ui/react';


export const PixelBoardCreate = () => {
	const user = useSessionStorage('user')[0];
	const token = useSessionStorage('token')[0];
	const [success, setSuccess] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);
	const [pixelBoard, setPixelBoard] = useState({
		"statut": false,
		"dateCreation": '',
		"dateFin": '',
		"mode": "classique",
		"delai": 0,
		"titre": "",
		"pixels": [],
		"taille": {
			"height": 50,
			"width": 50
		}
	});
	let today=new Date();
	let tomorrow=today.setDate(today.getDate() + 1)

	const handleChange = (e) => {
		const { name, value } = e.target;
		setPixelBoard((prevUser) => ({
			...prevUser,
			[name]: value,
		}));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		let yourDate = new Date()
		const offset = yourDate.getTimezoneOffset()
		pixelBoard.dateCreation = new Date(yourDate.getTime() - (offset * 60 * 1000))
		pixelBoard.dateCreation = pixelBoard.dateCreation.toISOString().split('T')[0];
		pixelBoard.taille = {
			height: pixelBoard.height,
			width: pixelBoard.width
		}
		pixelBoard.auteur = user.username;
		try {
			await request.post('http://localhost:8080/api/pixelBoards?secret_token=' + token, pixelBoard)
				.then((resp) => resp.data);
			setIsLoading(false);
			setSuccess('Pixelboard '+pixelBoard.titre+' créé!');
			setError("");
		} catch (err) {
			setError('Pixelboard '+pixelBoard.titre+' non créé');
			setIsLoading(false);
		}
	};

	return (
		<><NavPixer />
			<Flex width="full" align="center" justifyContent="center">
				<Box
					p={8}
					maxWidth="500px"
					borderWidth={1}
					borderRadius={8}
					boxShadow="lg"
				>
					<Box textAlign="center">
						<Heading>Créer un PixelBoard</Heading>
					</Box>
					<Box my={4} textAlign="left">
						<form onSubmit={handleSubmit}>
							{error && <ErrorMessage message={error} />}
							{success && <SuccessMessage message={success} />}
							<FormControl isRequired>
								<FormLabel>Titre</FormLabel>
								<Input
									type="text"
									placeholder="titre"
									size="lg"
									name="titre"
									value={pixelBoard.titre}
									onChange={handleChange}
								/>
							</FormControl>
							<FormControl isRequired mt={3}>
								<FormLabel>Date de fin</FormLabel>
								<Input
									size="md"
									type="date"
									min={new Date(tomorrow).toISOString().split('T')[0]}
									name="dateFin"
									onChange={handleChange}
								/>
							</FormControl>
							<FormControl isRequired mt={3}>
								<FormLabel>Délai</FormLabel>
								<Input
									size="md"
									type="number"
									onChange={handleChange}
									name="delai"
									placeholder="0"
								/>
							</FormControl>
							<FormControl isRequired mt={3}>
								<FormLabel>Mode</FormLabel>
								<Select name="mode" onChange={handleChange}>
									<option>classique</option>
									<option>competitif</option>
								</Select>
							</FormControl>
							<FormControl as='fieldset' isRequired mt={3}>
								<FormLabel>Largeur</FormLabel>
								<Input
									size="md"
									type="number"
									onChange={handleChange}
									name="width"
									placeholder="50"
								/>
								<FormLabel>Hauteur</FormLabel>
								<Input
									size="md"
									type="number"
									onChange={handleChange}
									name="height"
									placeholder="50"
								/>
							</FormControl>
							<Button
								variantcolor="teal"
								variant="outline"
								type="submit"
								width="full"
								mt={3}
							>
								{isLoading ? (
									<CircularProgress
										isIndeterminate
										size="24px"
										color="teal"
									/>
								) : (
									'Créer le pixelBoard'
								)}
							</Button>
						</form>
					</Box>
				</Box>
			</Flex></>
	);
};