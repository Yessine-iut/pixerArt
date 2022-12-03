import './Profil.scss';
import { NavPixer } from './NavPixer';
import { ProfilCard } from './ProfilCard';
import { BoardList } from './List';
//import axios from 'axios';

const Profil = ({ user }) => {
	let content = <p>Aucun utilisateur trouvé</p>;

		content = <><ProfilCard user={user} /><BoardList boards={user.boards} /></>
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
