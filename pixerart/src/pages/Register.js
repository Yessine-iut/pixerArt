import React, { useState } from 'react';
import {
	Alert,
	Button, Form, FormGroup, Input, Label, Row,
} from 'reactstrap';
import { request } from '../lib/request';
import { NavPixer } from '../components/NavPixer';
import './Signin.scss';
import useLocalStorage from '../lib/useLocalStorage';



export const Register = () => {
	const storageMode = useLocalStorage('darkmode')[0];
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [user, setUser] = useState({
		"username": '',
		"password": '',
		"role": 'client',
		"theme": 'dark'
	});

	const handleChange = (e) => {
		setSuccess(false);
		const { name, value } = e.target;
		setUser((prevUser) => ({
			...prevUser,
			[name]: value,
		}));
	};
	const sleep = ms => new Promise(r => setTimeout(r, ms));
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (user.username === '')
			setError({ message: "Champ username requis" })
		else if (user.password === '')
			setError({ message: "Champ password requis" })
		else {
			try {
				setSuccess(false);
				setLoading(true);
				setError(false);

				await request.post('http://localhost:8080/signup', user)
					.then((resp) => resp.data);
				setSuccess(true);
				await sleep(800);
				window.location.href='/login';
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		}
	};

	return (
			<Row tag="section" className = {`Signsection ${storageMode}`}>
				<NavPixer />
					<h1>Create an account</h1>
					<Form onSubmit={handleSubmit} className="Signin  align-items-start">
						<FormGroup className="d-flex flex-column align-items-start">
							<Label htmlFor="username">Username</Label>
							<Input name="username" value={user.username} onChange={handleChange} placeholder="Toto" />
						</FormGroup>
						<FormGroup className="d-flex flex-column align-items-start">
							<Label htmlFor="password">Password</Label>
							<Input type="password" name="password" onChange={handleChange} placeholder="password" />
						</FormGroup>
						<FormGroup className="d-flex flex-column align-items-start">
							<Label htmlFor="role">Role</Label>
							<Input type="select" name="role" onChange={handleChange} >
								<option>client</option>
								<option>admin</option>
							</Input>
						</FormGroup>
						<FormGroup className="d-flex flex-column align-items-start">
							<Label htmlFor="role">Theme</Label>
							<Input type="select" name="theme" onChange={handleChange} >
								<option>dark</option>
								<option>light</option>
							</Input>
						</FormGroup>
						<div className="d-flex flex-row align-items-center justify-content-between w-100">
							{error && <Alert color="danger" className="mb-0 py-2">{error.message}</Alert>}
							{success && <Alert color="success" className="mb-0 py-2">Success!</Alert>}
							<Button
								className="ms-auto"
								disabled={loading}
								color="primary"
								type="submit"
							>
								{loading ? 'loading' : 'Créer'}
							</Button>
						</div>
					</Form>

			</Row>
	);
};