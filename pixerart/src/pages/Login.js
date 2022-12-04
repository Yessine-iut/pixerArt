import React, { useState } from 'react';
import {
	Flex,
	Box,
	Heading,
	FormControl,
	FormLabel,
	Input,
	Button,
	InputGroup,
	InputRightElement,
	CircularProgress,
	Text,
	useColorMode
} from '@chakra-ui/react';
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons'
import { NavPixer } from '../components/NavPixer';
import useLocalStorage from '../lib/useLocalStorage';
import useSessionStorage from '../lib/useSessionStorage';
import { request } from '../lib/request';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage';

export const Login = () => {
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const handlePasswordVisibility = () => setShowPassword(!showPassword);
	const setStorageMode = useLocalStorage('darkmode')[1];
	const navigate = useNavigate();
	const token = useSessionStorage('token')[1];
	const setToken = useSessionStorage('token')[1];
	const userData = useSessionStorage('user')[1];
	const [userInSS, setUserInSS] = useSessionStorage('user');
    const { colorMode, toggleColorMode } = useColorMode();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const user = useState({
		"username": '',
		"password": ''
	})[0];
	const handleSubmit = async event => {
		event.preventDefault();
		setIsLoading(true);
		try {
			user.username = username;
			user.password = password;
			await request.post('http://localhost:8080/login', user)
				.then((resp) => {
					token(resp.data.token);
					userData(resp.data.user);
					setStorageMode(resp.data.user.theme)
					if (colorMode !== resp.data.user.theme)
						toggleColorMode();
					navigate('/');
				}
				);
			setIsLoading(false);
		} catch (error) {
			setError('Invalid username or password');
			setIsLoading(false);
			setUsername('');
			setPassword('');
		}
	};

	const logout = () => {
		setToken(null);
		setUserInSS(null);
		navigate('/');
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
					{userInSS != null ? (
						<Box textAlign="center">
							<Text>{userInSS.username} already logged in!</Text>
							<Button
								variantcolor="orange"
								variant="outline"
								width="full"
								mt={4}
								onClick={logout}
							>
								Sign out
							</Button>
						</Box>
					) : (
						<>
							<Box textAlign="center">
								<Heading>Se connecter</Heading>
							</Box>
							<Box my={4} textAlign="left">
								<form onSubmit={handleSubmit}>
									{error && <ErrorMessage message={error} />}
									<FormControl isRequired>
										<FormLabel>Username</FormLabel>
										<Input
											type="text"
											placeholder="username"
											size="lg"
											name="username"
											onChange={event => setUsername(event.currentTarget.value)}
										/>
									</FormControl>
									<FormControl isRequired mt={6}>
										<FormLabel>Password</FormLabel>
										<InputGroup>
											<Input
												type={showPassword ? 'text' : 'password'}
												placeholder="*******"
												size="lg"
												name="password"
												onChange={event => setPassword(event.currentTarget.value)}
											/>
											<InputRightElement width="3rem" height="100%">
												<Button size="sm" onClick={handlePasswordVisibility}>
													{showPassword ? <ViewOffIcon /> : <ViewIcon />}
												</Button>
											</InputRightElement>
										</InputGroup>
									</FormControl>
									<Button
										variantcolor="teal"
										variant="outline"
										type="submit"
										width="full"
										mt={4}
									>
										{isLoading ? (
											<CircularProgress
												isIndeterminate
												size="24px"
												color="teal"
											/>
										) : (
											'Valider'
										)}
									</Button>
								</form>
							</Box>
						</>)}
				</Box>
			</Flex></>
	);
}
