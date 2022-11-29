import { useState } from 'react';

import useLocalStorage from '../lib/useLocalStorage';

import './Profile.scss';
import { NavPixer } from './NavPixer';
import { ProfileCard } from './ProfileCard';
import { BoardList } from './List';
//import axios from 'axios';

const Profile = ({ user }) => {
	const storageMode = useLocalStorage('darkmode')[0];
	const [contributions, setContributions] = useState(0);
	let content = <p>Aucun utilisateur trouvé</p>;

	const contributionsHandler = () => {
		setContributions(contributions + 1)
	};
	if (user.role === 'admin')
		content = <><ProfileCard user={user} contributions={contributions} handleClick={contributionsHandler} /><BoardList boards={user.boards} /></>
	else content = <><ProfileCard user={user} contributions={contributions} handleClick={contributionsHandler} /></>
	return (
		<><NavPixer /><div className={`Profile ${storageMode}`}>
			<div className="container">
				<section className="track-section">
					<header className="Profile-header">
						<h1>Votre profile</h1>
					</header>
					{content}
				</section>
			</div>
		</div></>
	);

};

export default Profile;
