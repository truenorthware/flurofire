import React from 'react';
import Logo from '../../assets/img/Logo.png';

import './style.scss';
class Toppanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapse: false,
			isWideEnough: false
		};
	}

	render() {
		return (
			<header className="toolbar">
				<nav className="toolbar_navigation">
					<div className="toolbar_logo">
						<a href="/">
							<img src={Logo} alt="Fluro" />
						</a>
					</div>
					<div className="toolbar_navigation_items">Fluro Fire service and maintenance</div>
				</nav>
			</header>
		);
	}
}

export default Toppanel;
