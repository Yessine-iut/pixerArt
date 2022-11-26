import React, { useState } from 'react';
import {
	Alert,
	Button, Form, FormGroup, Input, Label, Row,
} from 'reactstrap';
import { request } from '../lib/request';
import { NavPixer } from '../components/NavPixer';
import './Signin.scss';
import useLocalStorage from '../lib/useLocalStorage';
import useSessionStorage from '../lib/useSessionStorage';
import {
	useNavigate
} from 'react-router-dom';


export const Login = () => {
	const [storageMode,setStorageMode] = useLocalStorage('darkmode');
    const navigate = useNavigate();
    const token = useSessionStorage('token')[1];
    const userData = useSessionStorage('user')[1];

	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [user, setUser] = useState({
		"username": '',
		"password": ''
	});

	const handleChange = (e) => {
		setSuccess(false);
		const { name, value } = e.target;
		setUser((prevUser) => ({
			...prevUser,
			[name]: value,
		}));
	};
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

				await request.post('http://localhost:8080/login', user)
					.then((resp) => {
                        token(resp.data.token);
                        userData(resp.data.user);
                        setStorageMode(resp.data.user.theme)
                        navigate('/');
                    }
                    );
				setSuccess(true);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		}
	};

	return (
		<React.StrictMode>
			<Row tag="section" className = {`Signsection ${storageMode}`}>
				<NavPixer/>
					<h1>Login</h1>
					<Form onSubmit={handleSubmit} className="Signin  align-items-start">
						<FormGroup className="d-flex flex-column align-items-start">
							<Label htmlFor="username">Username</Label>
							<Input name="username" value={user.username} onChange={handleChange} placeholder="Toto" />
						</FormGroup>
						<FormGroup className="d-flex flex-column align-items-start">
							<Label htmlFor="password">Password</Label>
							<Input type="password" name="password" onChange={handleChange} placeholder="password" />
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
								{loading ? 'loading' : 'Connectez-vous'}
							</Button>
						</div>
					</Form>

			</Row>
		</React.StrictMode>
	);
};