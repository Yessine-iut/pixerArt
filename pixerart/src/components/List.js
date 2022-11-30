import { BoardProfil } from './BoardProfil';

import './List.scss';

export const BoardList = ({ boards }) => (
	<>
	<h1>Les pixelBoards</h1>
	<div className="BoardList">
		<ul>
			{(boards || []).map((t) => (
				<BoardProfil board={t}/>
			))}
		</ul>
	</div>
	</>
);
