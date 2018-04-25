import React from 'react';

const Nav = (props) =>{
	return (
			<nav>
				<button
					onClick={props.showList}>
					List
				</button>
				<button
					onClick={props.showMap}>
					Map
				</button>
			</nav>
		);
}

	export default Nav;