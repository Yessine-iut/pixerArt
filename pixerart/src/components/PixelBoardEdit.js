import React, { useState } from 'react';
import {
	Alert,
	Button, Form, FormGroup, Input, Label, Row,
} from 'reactstrap';
import { request } from '../lib/request';
import { NavPixer } from '../components/NavPixer';
import '../pages/Signin.scss';
import useLocalStorage from '../lib/useLocalStorage';
import useSessionStorage from '../lib/useSessionStorage';



export const PixelBoardEdit = (pixelBoardEdit) => {
	const storageMode = useLocalStorage('darkmode')[0];
    const token = useSessionStorage('token')[0];
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
    let pixelBoardSource;
    if(pixelBoardEdit.pixelBoardEdit==null || pixelBoardEdit.pixelBoardEdit===undefined){
        pixelBoardSource={
            "statut": false,
            "dateCreation": '',
            "dateFin": '',
            "mode":"test1",
            "delai":0,
            "titre":"",
            "pixels":[],
            "taille":{
                "height":500,
                "width":500
            }
        }
    }else pixelBoardSource=pixelBoardEdit.pixelBoardEdit
	const [pixelBoard, setPixelBoard] = useState({
		"statut": pixelBoardSource.statut,
		"dateCreation": pixelBoardSource.dateCreation,
		"dateFin": pixelBoardSource.dateFin,
        "mode":pixelBoardSource.mode,
        "delai":pixelBoardSource.delai,
        "titre":pixelBoardSource.titre,
        "pixels":pixelBoardSource.pixels,
        "taille":pixelBoardSource.taille,
        "height":pixelBoardSource.taille.height,
        "width":pixelBoardSource.taille.width,
        "auteur":pixelBoardSource.auteur
	});

	const handleChange = (e) => {
		setSuccess(false);
		const { name, value } = e.target;
		setPixelBoard((prevUser) => ({
			...prevUser,
			[name]: value,
		}));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		 if (pixelBoard.dateFin === '')
			setError({ message: "Champ date fin requis" })
        else if (pixelBoard.titre === '')
			setError({ message: "Champ titre requis" })
        else if (pixelBoard.height === undefined)
			setError({ message: "Champ hauteur requis" })
        else if (pixelBoard.width === undefined)
			setError({ message: "Champ largeur requis" })
		else {
            pixelBoard.taille={
                height:pixelBoard.height,
                width:pixelBoard.width
            }
			try {
				setSuccess(false);
				setLoading(true);
				setError(false);
				await request.put('http://localhost:8080/api/pixelBoard/'+pixelBoardEdit.pixelBoardEdit._id+'?secret_token='+token, pixelBoard)
					.then((resp) => resp.data);
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
				<NavPixer />
					<h1>Edit PixelBoard</h1>
					<Form onSubmit={handleSubmit} className="Signin  align-items-start">
						<FormGroup className="d-flex flex-column align-items-start">
							<Label htmlFor="titre">Titre</Label>
							<Input name="titre" value={pixelBoard.titre} onChange={handleChange} placeholder="titre" />
						</FormGroup>
                        <FormGroup className="d-flex flex-column align-items-start">
							<Label htmlFor="dateFin">Date fin</Label>
							<Input type="date" name="dateFin" value={pixelBoard.dateFin} onChange={handleChange} />
						</FormGroup>
						<FormGroup className="d-flex flex-column align-items-start">
							<Label htmlFor="delai">délai</Label>
							<Input type="number" name="delai" onChange={handleChange} value={pixelBoard.delai} placeholder="0" />
						</FormGroup>
						<FormGroup className="d-flex flex-column align-items-start">
							<Label htmlFor="mode">Mode</Label>
							<Input type="select" name="mode" value={pixelBoard.mode} onChange={handleChange} >
								<option>test1</option>
								<option>test2</option>
							</Input>
						</FormGroup>
						<FormGroup className="d-flex flex-column align-items-start">
                            <Label htmlFor="width">Largeur</Label>
							<Input type="number" name="width" onChange={handleChange} value={pixelBoard.taille.width} placeholder="500"/>
						    <Label htmlFor="height">Hauteur</Label>
                            <Input type="number" name="height" onChange={handleChange} value={pixelBoard.taille.height} placeholder="500"/>
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
		</React.StrictMode>
	);
};