import React from 'react';

export default function TaskForm({ addTask }) {
	const [text, setText] = React.useState('');

	const handleSubmit = e => {
		e.preventDefault();
		addTask(text);
		setText('');
	};

	return (
		<React.Fragment>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={text}
					placeholder="Entrer votre tache ici ..."
					required
					onChange={e => setText(e.target.value)}
				/>
			</form>
		</React.Fragment>
	);
}
