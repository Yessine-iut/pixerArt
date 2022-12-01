import React, { useState } from 'react';
import { request } from '../lib/request';
import { NavPixer } from '../components/NavPixer';
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
	InputGroup,
	InputRightElement,
	CircularProgress,
	Select,
	HStack,
	RadioGroup,
	Radio
} from '@chakra-ui/react';
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons'

export const Register = () => {
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const handlePasswordVisibility = () => setShowPassword(!showPassword);

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [role, setRole] = useState('client');
	const [themeChoice, setThemeChoice] = useState('dark');
	const sleep = ms => new Promise(r => setTimeout(r, ms));

	const user = useState({
		"username": '',
		"password": '',
		"role": 'client',
		"theme": 'dark'
	})[0];

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			user.username = username;
			user.password = password;
			user.role = role;
			user.theme = themeChoice;
			console.log(user);
			await request.post('http://localhost:8080/signup', user)
				.then((resp) => resp.data);
			setIsLoading(false);
			setSuccess('Compte '+user.username+' a été créé');
			setError("");
			sleep(1000).then(window.location.href='/login');
		} catch (error) {
			setError('Username already taken');
			setIsLoading(false);
			setUsername('');
			setPassword('');
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
						<Heading>Register</Heading>
					</Box>
					<Box my={4} textAlign="left">
						<form onSubmit={handleSubmit}>
							{error && <ErrorMessage message={error} />}
							{success && <SuccessMessage message={success} />}
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
							<FormControl isRequired mt={3}>
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
							<FormControl isRequired mt={3}>
								<FormLabel>Rôle</FormLabel>
								<Select onChange={event => setRole(event.currentTarget.value)}>
									<option>client</option>
									<option>admin</option>
								</Select>
							</FormControl>
							<FormControl as='fieldset' isRequired mt={3}>
								<FormLabel as='legend'>Thème du navigateur</FormLabel>
								<RadioGroup defaultValue='dark'>
									<HStack spacing='24px'>
										<Radio value='dark' onChange={event => setThemeChoice(event.currentTarget.value)}>dark</Radio>
										<Radio value='light' onChange={event => setThemeChoice(event.currentTarget.value)}>light</Radio>
									</HStack>
								</RadioGroup>
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
									'Register'
								)}
							</Button>
						</form>
					</Box>
				</Box>
			</Flex></>
	);
};