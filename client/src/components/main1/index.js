import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

import MapComponet from '../mapcomponet';
import ContactForm from '../contact';

import './style.scss';
const MainPanel1 = () => {
	return (
		<div className="aboutpanel1">
			<MDBRow className="setheight">
				<MDBCol xl="3" className="setheight">
					<MapComponet />
				</MDBCol>
				<MDBCol lg="12" xl="6" className="setheight">
					<div className="setfont">Our goal is to help you achieve a safe work place environment</div>
				</MDBCol>
				<MDBCol xl="3" className="setheight">
					<ContactForm />
				</MDBCol>
			</MDBRow>
		</div>
	);
};

export default MainPanel1;
