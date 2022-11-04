import React from 'react';

export default function TaskHeader({ tasks }) {
	const tasksUnChecked = tasks.filter(task => task.isDone === false);
	return (
		<React.Fragment>
			<h2 align="center">TODO LIST</h2>
			<h4 style={{textAlign: "center", fontSize: 22, opacity: 0.4}}>without redux</h4>
			<h5>Tache(s) a faire: {tasksUnChecked.length}</h5>
		</React.Fragment>
	);
}
