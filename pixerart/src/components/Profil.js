import { useState } from 'react';

import useLocalStorage from '../lib/useLocalStorage';

import './Profil.scss';
import { NavPixer } from './NavPixer';
import { ProfilCard } from './ProfilCard';
import { BoardList } from './List';
//import axios from 'axios';

const Profil = ({ user }) => {
	const storageMode = useLocalStorage('darkmode')[0];
	const [contributions, setContributions] = useState(0);
	let content = <p>Aucun utilisateur trouvé</p>;

	const contributionsHandler = () => {
		setContributions(contributions + 1)
	};
	if (user.role === 'admin')
		content = <><ProfilCard user={user} contributions={contributions} handleClick={contributionsHandler} /><BoardList boards={user.boards} /></>
	else content = <><ProfilCard user={user} contributions={contributions} handleClick={contributionsHandler} /></>
	return (
		<><NavPixer /><div className={`Profil ${storageMode}`}>
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
