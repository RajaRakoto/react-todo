import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

/* styles */
import '@picocss/pico';
import './index.min.css';

/* components */
import TodoSample from './components/todo-sample/todo-sample';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.Fragment>
		<TodoSample />
	</React.Fragment>,
);

reportWebVitals();
