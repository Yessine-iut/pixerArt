import { BoardProfile } from './BoardProfile';

import './List.scss';

export const BoardList = ({ boards,storageMode }) => (
	<>
	<h1>Vos pixelBoards</h1>
	<div className="BoardList">
		<ul>
			{(boards || []).map((t) => (
				<BoardProfile board={t} storageMode={storageMode} />
			))}
		</ul>
	</div>
	</>
);
