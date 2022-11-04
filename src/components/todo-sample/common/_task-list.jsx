import React from 'react';

/* icons */
import { editIco, deleteIco } from '../assets/icons/bt5-icons';

// TODO: integrate sweetalert2 [***]
/**
 * @description - generateur de tache pour le composant TaskList
 */
function TaskItem({ task, deleteTask, toggleTask, editTask }) {
	const [newText, setNewText] = React.useState(task.text);

	const handleDelClick = () => {
		deleteTask(task.id);
	};

	const handleToggleClick = () => {
		toggleTask(task.id);
	};

	const handleEditClick = () => {
		editTask(task.id, newText);
	};

	return (
		<React.Fragment>
			<div className="task-item container-fuild">
				<div className="row">
					<div className="col-6">
						<span>
							<input
								type="checkbox"
								defaultChecked={task.isDone}
								onChange={handleToggleClick}
							/>
						</span>
						<span>{task.text}</span>
					</div>
					<div className="col-6 d-flex justify-content-end">
						<input
							type="text"
							value={newText}
							required
							onChange={e => setNewText(e.target.value)}
						/>
						<button
							className="button-6 bi bi-pencil-square"
							style={{
								backgroundColor: 'rgba(247, 203, 59, 0.767)',
								color: '#888',
								height: 10,
								marginLeft: 10,
							}}
							onClick={handleEditClick}
						>
							<span style={{ marginRight: 10 }}>{editIco}</span>
							modifier
						</button>
						<button
							className="button-6"
							style={{
								backgroundColor: 'rgb(240, 154, 123)',
								color: '#eee',
								height: 10,
								marginLeft: 10,
							}}
							onClick={handleDelClick}
						>
							<span style={{ marginRight: 10 }}>{deleteIco}</span>
							supprimer
						</button>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default function TaksList({ tasks, deleteTask, toggleTask, editTask }) {
	return (
		<React.Fragment>
			<ul>
				{tasks.map(task => (
					<li key={task.id}>
						<TaskItem
							task={task}
							deleteTask={deleteTask}
							toggleTask={toggleTask}
							editTask={editTask}
						/>
					</li>
				))}
			</ul>
		</React.Fragment>
	);
}
