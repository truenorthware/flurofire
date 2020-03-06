import React from 'react';
import { MDBRow, MDBCol, MDBIcon } from 'mdbreact';

import './style.scss';

const AboutPanel = () => {
	return (
		<div className="aboutpanel">
			<div className="aboutfont">ABOUT US</div>
			<MDBRow className="rowtop">
				<MDBCol md="4">
					<MDBIcon icon="history" size="3x" className="red-text" />
					<h5 className="font-weight-bold my-4">+7 Years</h5>
					<p className="mb-md-0 mb-5">Fluro fire has been in the fire industry for over 7 years</p>
				</MDBCol>
				<MDBCol md="4">
					<MDBIcon fab icon="first-order" size="3x" className="cyan-text" />
					<h5 className="font-weight-bold my-4">Goal</h5>
					<p className="mb-md-0 mb-5">Our goal is to help you achieve a safe work place environment</p>
				</MDBCol>
				<MDBCol md="4">
					<MDBIcon far icon="building" size="3x" className="orange-text" />
					<h5 className="font-weight-bold my-4">Maintenance</h5>
					<p className="mb-md-0 mb-5">
						Maintenance is also a service we can provide. A well maintained fire system in your building
						ensures a reduction of false alarms
					</p>
				</MDBCol>
			</MDBRow>
		</div>
	);
};

export default AboutPanel;
