import React from 'react';
import './style.scss';
import Logo from '../../assets/img/Logo.png';

const Footer = (props) => {
	return (
		<footer className="footer-distributed">
			<img src={Logo} alt="Fluro" />
		</footer>
	);
};

export default Footer;
