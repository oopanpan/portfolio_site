import React from 'react';
import { useState } from 'react';

import { MenuItems } from './MenuItems';
import { Button } from './Button';
import './NavBar.css';

function NavBar() {
	const [clicked, setClicked] = useState(false);

	const listMenuItems = (arr) => {
		return arr.map((entry, index) => {
			return (
				<li key={index}>
					<a className={entry.cName} href={entry.url}>
						{entry.label}
					</a>
				</li>
			);
		});
	};

	return (
		<nav className='NavbarItems'>
			<h1 className='navbar-logo'>
				React
				<i className='fab fa-react'></i>
			</h1>
			<div className='menu-icon' onClick={() => setClicked(!clicked)}>
				<i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
			</div>
			<div>
				<ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
					{listMenuItems(MenuItems)}
				</ul>
			</div>
			<Button>Hello</Button>
		</nav>
	);
}

export default NavBar;
