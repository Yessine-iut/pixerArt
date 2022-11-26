import { BoardProfile } from './BoardProfile';

import './List.scss';

export const BoardList = ({ boards }) => (
	<>
	<h1>Les pixelBoards</h1>
	<div className="BoardList">
		<ul>
			{(boards || []).map((t) => (
				<BoardProfile board={t}/>
			))}
		</ul>
	</div>
	</>
);
