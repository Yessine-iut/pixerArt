import { BoardProfil } from './BoardProfil';
import useSessionStorage from '../lib/useSessionStorage';

import './List.scss';

export const BoardList = ({ boards }) => {
	const user = useSessionStorage('user')[0];
	let title = <h2>Les pixelBoards du site</h2>
	if(user.role==="client")
		title= <h2>Les pixelBoards auxquels vous avez contribué</h2>
return(
	<>
	<div className="BoardList">
		{title}
		<ul>
			{(boards || []).map((t) => (
				<BoardProfil key={t+Math.random()} board={t}/>
			))}
		</ul>
	</div>
	</>
	)};
