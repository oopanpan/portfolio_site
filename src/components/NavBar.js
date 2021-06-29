import React from 'react';
import { MenuItems } from './MenuItems';

function NavBar() {
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
			<div>
				<ul>{renderMenuItems(MenuItems)}</ul>
			</div>
		</nav>
	);
}

export default NavBar;
