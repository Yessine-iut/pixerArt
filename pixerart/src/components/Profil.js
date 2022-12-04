import React, { useState,useEffect } from 'react';
import './Profil.scss';
import { NavPixer } from './NavPixer';
import { ProfilCard } from './ProfilCard';
import { BoardList } from './List';
import { Button } from '@chakra-ui/react';
//import axios from 'axios';

const Profil = ({ user }) => {
	const [pixelBoards,setBoards] = useState(null);
	const [sortDate,setSortDate] = useState("▲ Trier par date de création");
	let title = <h2>Les pixelBoards du site</h2>
	if(user.role==="client")
		title= <h2>Les pixelBoards auxquels vous avez contribué</h2>

	useEffect(() => {
		setBoards(user.boards)
	}, [setBoards,user]);
	let content = <p>Aucun utilisateur trouvé</p>;
	const filterBoards = () => {
		let res = JSON.parse(JSON.stringify(user.boards.sort((a, b) => { 
			if (new Date(a.dateCreation).getTime()<new Date(b.dateCreation).getTime()) {
				return -1;
			  }
			  if (new Date(a.dateCreation).getTime()>new Date(b.dateCreation).getTime()) {
				return 1;
			  }
			  return 0;
			}
		)))
		if(sortDate==="▼ Trier par date de création"){
			setBoards(res.reverse())
			setSortDate("▲ Trier par date de création")
		}
		else{
			setBoards(res)
			setSortDate("▼ Trier par date de création")

		}

	};
		content = <><ProfilCard user={user} />{title}<br/>
		<Button onClick= {filterBoards}>{sortDate}</Button>
		<BoardList boards={pixelBoards} /></>
	return (
		<><NavPixer /><div className='Profil'>
			<div className="container">
				<section className="track-section">
					<header className="Profil-header">
						<h1>Votre profil</h1>
					</header>
					{content}
				</section>
			</div>
		</div></>
	);

};

export default Profil;
