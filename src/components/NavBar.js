import React from 'react';
import { useState } from 'react';

import { MenuItems } from './MenuItems';
import './NavBar.css';

function NavBar() {
	const [clicked, setClicked] = useState(false);

	const renderMenuItems = (arr) => {
		return arr.map((el, index) => {
			return (
				<li key={index}>
					<a className={el.cName} href={el.url}>
						{el.label}
					</a>
				</li>
			);
		});
	};

	return (
		<nav className='NavbarItems'>
			<h1 className='navbar-logo'>
				React <i className='fab fa-react'></i>
			</h1>
			<div>
				<ul>{renderMenuItems(MenuItems)}</ul>
			</div>
		</nav>
	);
}

export default NavBar;
