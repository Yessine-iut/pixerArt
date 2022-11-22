import { useState, useCallback } from 'react';

import useLocalStorage from '../lib/useLocalStorage';

import { ToggleModeNight } from './ToggleModeNight';

import './Profile.scss';
import { NavPixer } from './NavPixer';
import { ProfileCard } from './ProfileCard';
import { BoardList } from './List';



const Profile = ({user}) => {
	const [storageMode, setStorageMode] = useLocalStorage('darkmode');
	const [contributions, setContributions] = useState(0);
	let content =  <p>Aucun utilisateur trouvé</p>;	
	const handleChangeMode = useCallback(
		(e) => {
			const modeValue = !!e.target.checked;
			//setDarkMode(modeValue);
			setStorageMode(modeValue);
		},
		[setStorageMode],
	);


	const contributionsHandler = () => {
        setContributions(contributions+1)
        };

	if (user!=null) 
	content = <><ProfileCard user={user} contributions={contributions} handleClick={contributionsHandler}/><BoardList boards={user.boards}/></>
	return (
		<><NavPixer user={user} /><div className={`Profile ${storageMode ? 'dark' : 'light'}`}>
			<div className="container">
				<section className="track-section">
					<ToggleModeNight
						onChange={handleChangeMode}
						mode={storageMode} />
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
