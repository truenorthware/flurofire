import React from 'react';
import { Component } from 'react';

import Toppanel from '../../components/toppanel';
import AboutUS from '../../components/aboutus';
import MainPanel from '../../components/main1';
import './style.scss';

export default class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="project">
				<Toppanel />
				<MainPanel />
				<AboutUS />
			</div>
		);
	}
}
