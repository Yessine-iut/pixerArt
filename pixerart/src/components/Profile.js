import { useState, useCallback } from 'react';

import useLocalStorage from '../lib/useLocalStorage';

import { ToggleModeNight } from './ToggleModeNight';

import './Profile.scss';
import { NavPixer } from './NavPixer';
import { ProfileCard } from './ProfileCard';
import { BoardList } from './List';
import axios from 'axios';
import useSessionStorage from '../lib/useSessionStorage';

const Profile = ({user}) => {
	const [storageMode, setStorageMode] = useLocalStorage('darkmode');
	const token = useSessionStorage('token')[0];
	const [contributions, setContributions] = useState(0);
	let content =  <p>Aucun utilisateur trouvé</p>;	
	const handleChangeMode = useCallback(
		(e) => {
			//const modeValue = !!e.target.checked;
			//setDarkMode(modeValue);
			if(e.target.checked) {
				setStorageMode("dark");
				user.theme='dark'
			 } else {
				setStorageMode("light");
				user.theme='light'
			 }
				axios.put('http://localhost:8080/api/user/'+user._id+'?secret_token='+token,user);
		},
		[setStorageMode,token,user],
	);


	const contributionsHandler = () => {
        setContributions(contributions+1)
        };
if(user.role==='admin')
	content = <><ProfileCard user={user} contributions={contributions} handleClick={contributionsHandler}/><BoardList boards={user.boards}/></>
else content = <><ProfileCard user={user} contributions={contributions} handleClick={contributionsHandler}/></>
	return (
		<><NavPixer/><div className={`Profile ${storageMode}`}>
			<div className="container">
				<section className="track-section">
					<ToggleModeNight
						onChange={handleChangeMode}
						mode={storageMode==='dark'} />
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
