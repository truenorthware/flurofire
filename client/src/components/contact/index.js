import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from 'mdbreact';
import axios from 'axios';

import './style.scss';
const api_url = 'http://165.22.33.142:3030/api/form';
// const api_url = 'http://localhost:3030/api/form';
class ContactForm extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			subject: '',
			message: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	async handleSubmit(e) {
		e.preventDefault();
		const { name, email, subject, message } = this.state;
		var isvalid = true;
		if (name === '') {
			alert('Please input your full name!!!');
			isvalid = false;
		} else if (name !== '') {
			let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if (!re.test(email)) {
				alert('Please input valid email!!!');
				isvalid = false;
			}
		}
		if (isvalid === true) {
			let data = {
				email: email,
				name: name,
				subject: subject,
				message: message
			};
			axios.post(api_url, data).then(() => alert('Email sent')).catch((err) => {
				console.error(err);
			});
		}
	}

	render() {
		return (
			<div className="contact_main">
				<MDBCard>
					<MDBCardBody>
						<div className="form-header blue accent-1">
							<h5 className="mt-2">
								<MDBIcon icon="envelope" /> Request for service:
							</h5>
						</div>
						{/* <p className="dark-grey-text">We'll write rarely, but only the best content.</p> */}
						<div className="md-form">
							<MDBInput
								icon="user"
								label="Your name"
								iconClass="grey-text"
								name="name"
								type="text"
								id="form-name"
								size="sm"
								onChange={this.handleChange}
							/>
						</div>
						<div className="md-form">
							<MDBInput
								icon="envelope"
								size="sm"
								label="Your email"
								iconClass="grey-text"
								name="email"
								type="text"
								id="form-email"
								onChange={this.handleChange}
							/>
						</div>
						<div className="md-form">
							<MDBInput
								icon="tag"
								label="Subject"
								iconClass="grey-text"
								name="subject"
								size="sm"
								type="text"
								id="form-subject"
								onChange={this.handleChange}
							/>
						</div>
						<div className="md-form">
							<MDBInput
								icon="pencil-alt"
								label="Your Message"
								iconClass="grey-text"
								size="sm"
								name="message"
								type="textarea"
								id="form-text"
								onChange={this.handleChange}
							/>
						</div>
						<div className="text-center">
							<MDBBtn onClick={this.handleSubmit} color="light-blue">
								Send
							</MDBBtn>
						</div>
					</MDBCardBody>
				</MDBCard>
			</div>
		);
	}
}

export default ContactForm;
