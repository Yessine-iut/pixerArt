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


export const PixelBoardEdit = (pixelBoardEdit) => {
	const token = useSessionStorage('token')[0];
	const [success, setSuccess] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);
	let pixelBoardSource;
	if (pixelBoardEdit.pixelBoardEdit == null || pixelBoardEdit.pixelBoardEdit === undefined) {
		pixelBoardSource = {
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
		}
	} else pixelBoardSource = pixelBoardEdit.pixelBoardEdit
	const [pixelBoard, setPixelBoard] = useState({
		"statut": pixelBoardSource.statut,
		"dateCreation": pixelBoardSource.dateCreation,
		"dateFin": pixelBoardSource.dateFin,
		"mode": pixelBoardSource.mode,
		"delai": pixelBoardSource.delai,
		"titre": pixelBoardSource.titre,
		"pixels": pixelBoardSource.pixels,
		"taille": pixelBoardSource.taille,
		"height": pixelBoardSource.taille.height,
		"width": pixelBoardSource.taille.width,
		"auteur": pixelBoardSource.auteur
	});
	let today;
	let tomorrow=new Date();
	if(pixelBoard.dateCreation!==''){
		today=new Date(pixelBoard.dateCreation)
		tomorrow=today.setDate(today.getDate() + 1)
	}
	

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

			pixelBoard.taille = {
				height: pixelBoard.height,
				width: pixelBoard.width
			}
			try {

				await request.put('http://localhost:8080/api/pixelBoard/' + pixelBoardEdit.pixelBoardEdit._id + '?secret_token=' + token, pixelBoard)
					.then((resp) => resp.data);
					setIsLoading(false);
					setSuccess('Pixelboard '+pixelBoard.titre+' modifi??!');
					setError("");
							} catch (err) {
				setError('Pixelboard '+pixelBoard.titre+' non modifi??');
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
						<Heading>Editer PixelBoard</Heading>
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
									name="dateFin"
									min={new Date(tomorrow).toISOString().split('T')[0]}
									value={pixelBoard.dateFin}
									onChange={handleChange}
								/>
							</FormControl>
							<FormControl isRequired mt={3}>
								<FormLabel>D??lai</FormLabel>
								<Input
									size="md"
									type="number"
									onChange={handleChange}
									name="delai"
									placeholder="0"
									value={pixelBoard.delai}

								/>
							</FormControl>
							<FormControl isRequired mt={3}>
								<FormLabel>Mode</FormLabel>
								<Select name="mode" onChange={handleChange}>
									<option>competitif</option>
									<option>classique</option>
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
									value={pixelBoard.width}
								/>
								<FormLabel>Hauteur</FormLabel>
								<Input
									size="md"
									type="number"
									onChange={handleChange}
									name="height"
									placeholder="50"
									value={pixelBoard.height}
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
									'Editer le pixelBoard'
								)}
							</Button>
						</form>
					</Box>
				</Box>
			</Flex></>
	);
};