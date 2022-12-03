import { BoardProfil } from './BoardProfil';
import useSessionStorage from '../lib/useSessionStorage';

import './List.scss';

export const BoardList = ({ boards }) => {
	const user = useSessionStorage('user')[0];
	let title = <h1>Les pixelBoards du site</h1>
	if(user.role==="client")
		title= <h1>Les pixelBoards auxquels vous avez contribué</h1>
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
