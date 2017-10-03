import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import './index.css';

ReactDOM.render(
	<div className='row'>
		<App>
			<Header />
		</App>
	</div>,
	document.getElementById('root')
);