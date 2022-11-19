import { useState, useCallback } from 'react';

import useLocalStorage from './lib/useLocalStorage';

import { ToggleModeNight } from './components/ToggleModeNight';

import './Profile.scss';
import { NavPixer } from './components/NavPixer';
import { ProfileCard } from './components/ProfileCard';


const Profile = ({user}) => {

	const [storageMode, setStorageMode] = useLocalStorage('darkmode');
	const [contributions, setContributions] = useState(0);

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
        

	return (
		<><NavPixer user={user} storageMode={storageMode} /><div className={`Profile ${storageMode ? 'dark' : 'light'}`}>
			<div className="container">
				<section className="track-section">
					<ToggleModeNight
						onChange={handleChangeMode}
						mode={storageMode} />
					<header className="Profile-header">
						<h1>Votre profile</h1>
					</header>
					<ProfileCard user={user} storageMode={storageMode} contributions={contributions} handleClick={contributionsHandler}/>
				</section>
			</div>
		</div></>
	);
};

export default Profile;
