import { BoardProfil } from './BoardProfil';

import './List.scss';

export const BoardList = ({ boards }) => {
return(
	<>
	<div className="BoardList">
		<ul>
			{(boards || []).map((t) => (
				<BoardProfil key={t+Math.random()} board={t}/>
			))}
		</ul>
	</div>
	</>
	)};
