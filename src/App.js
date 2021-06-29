import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom';

import NavBar from './components/NavBar.js';
import './App.css';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Router></Router>
		</div>
	);
}

export default App;
