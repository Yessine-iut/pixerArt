import React, { useState, useEffect } from 'react';
import { Text, Divider, Container, Box, SimpleGrid } from '@chakra-ui/react';
import { NavPixer } from '../components/NavPixer';
import axios from 'axios';
import { BoardProfil } from '../components/BoardProfil';

export const Home = () => {
	const api = 'http://localhost:8080/api/';
	const [nbPixelBoards, setNbPixelBoards] = useState(0);
	const [nbUsers, setNbUsers] = useState(0);
	const [pxbsFinished, setPxbsFinished] = useState(0);
	const [pxbsF, setPxbsF] = useState([]);
	const [pxbsC, setPxbsC] = useState([]);
	axios.get(api + 'pixelBoards').then(resp => {
		setNbPixelBoards(resp.data.data.length);
	}).catch(err => {
		console.log(err);
	})
	useEffect(() => {
		axios.get(api + 'pixelBoardsFinished/').then(resp => {
			setPxbsFinished(resp.data.data.length);
			setPxbsF(resp.data.data)
		}).catch(err => {
			console.log(err);
		})
		axios.get(api + 'pixelBoardsLastCreated/').then(resp => {
			setPxbsC(resp.data.data)
		}).catch(err => {
			console.log(err);
		})
	}, []);

	axios.get(api + 'users').then(resp => {
		setNbUsers(resp.data.data.length);
	}).catch(err => {
		console.log(err);
	})

	return (
		<>
			<NavPixer />
			<Container maxW='5xl' centerContent>
				<Box mb={4} as='b'>
					<Text fontSize='3xl' color='salmon' as='u'>Accueil</Text>
				</Box>
				<Box>
					<Text fontSize='2xl'><Box as='span' color='salmon' fontSize='3xl'>{nbPixelBoards}</Box> PixelBoards ont été créés via PixerArt ! </Text>
					<Text fontSize='2xl'><Box as='span' color='salmon' fontSize='3xl'>{nbUsers}</Box> Utilisateurs nous ont rejoints !</Text>
					<Text fontSize='2xl'><Box as='span' color='salmon' fontSize='3xl'>{pxbsFinished}</Box> PixelBoards ont été finis via PixerArt ! </Text>
				</Box>
			</Container>
			<Divider orientation='horizontal' mb={4} mt={4} />
			<Container maxW='90%'>
				<Box>
					<Text fontSize='2xl' mb={3}>Voici les derniers pixelboards tout juste créés</Text>
				</Box>
				<SimpleGrid spacing={5} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
					{(pxbsC || []).map((t) => (
						<BoardProfil key={t + Math.random()} board={t} />
					))}
				</SimpleGrid>
			</Container>
			<Divider orientation='horizontal' mb={4} mt={4} />
			<Container maxW='90%' mb={5}>
				<Box>
					<Text fontSize='2xl' mb={3}>Voici les derniers pixelboards terminés</Text>
				</Box>
				<SimpleGrid spacing={5} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
					{(pxbsF || []).map((t) => (
						<BoardProfil key={t + Math.random()} board={t} />
					))}
				</SimpleGrid>
			</Container>
		</>
	)
}
