import React from 'react';

/* components */
import TaskForm from './common/_task-form';
import TaskHeader from './common/_task-header';
import TaskList from './common/_task-list';

/* style */
import './todo-sample.min.css';

export default function TodoSample() {
	const [tasks, setTasks] = React.useState([
		{ id: 10, text: 'Tache1', isDone: false },
	]);

	/**
	 * @description - ajout d'une tache en prenant le state text du composant TaskForm
	 */
	const addTask = text => {
		const newTask = {
			id: Date.now(),
			text: text,
			isDone: false,
		};

		setTasks([...tasks, newTask]);
	};

	/**
	 * @description - suppression d'une tache existante
	 */
	const deleteTask = id => {
		const newTasks = tasks.filter(task => task.id !== id);
		setTasks(newTasks);
	};

	/**
	 * @description - changement de l'etat d'une tache existante
	 */
	const toggleTask = id => {
		const realTask = tasks.find(task => task.id === id); // recuperer la tache concernEe
		const indexTask = tasks.findIndex(task => task.id === id); // recuperer son index
		const taskCopy = { ...realTask }; // creation d'une copie de la tache concernEe
		const tasksCopy = [...tasks]; // creation d'une copie de toute la tache

		taskCopy.isDone = !taskCopy.isDone; // modification de la proprietE isDone de la copie
		tasksCopy[indexTask] = taskCopy; // replacement de l'objet qui se trouve dans l'index du tableau d'objet tasksCopy
		setTasks(tasksCopy); // mise a jour du state tasks
	};

	/**
	 * @description - modification d'une tache existante
	 */
	const editTask = (id, newText) => {
		const realTask = tasks.find(task => task.id === id);
		const indexTask = tasks.findIndex(task => task.id === id);
		const taskCopy = { ...realTask };
		const tasksCopy = [...tasks];

		taskCopy.text = newText;
		tasksCopy[indexTask] = taskCopy;
		setTasks(tasksCopy);
	};

	return (
		<React.Fragment>
			<div className="container">
				<article>
					<header>
						<TaskHeader tasks={tasks} />
					</header>
					<TaskList
						tasks={tasks}
						deleteTask={deleteTask}
						toggleTask={toggleTask}
            editTask={editTask}
					/>
					<footer>
						<TaskForm addTask={addTask} />
					</footer>
				</article>
			</div>
		</React.Fragment>
	);
}
