import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

export default class Container extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			contactList:[]
		}
	}
	
	componentDidMount() {
		this.getContacts();
	}
	
	getContacts = () => {
		let fetchObject = {
			method: "GET",
			mode: "cors",
			headers:{"Content-Type":"json"}
		}
		console.log("Error:");
		fetch("/api/contacts", fetchObject).then((response) =>
		{
			console.log(response);
			if(response.ok) {
				response.json().then((data) => {
					this.setState({
						contactList:data
					});
				});
			}
		}).catch((error) => {
			console.log("Error:"+error);
		})
	}
	
	updateContacts = (contact) => {
		let fetchObject = {
			method: "POST",
			mode: "cors",
			headers:{"Content-Type":"application/json"},
			body:JSON.stringify({
				"firstName":contact.firstName,
				"company":contact.company,
				"city":contact.email,
				"phone":contact.phone
			})
		}
		fetch("/api/contacts",fetchObject).then((response) => {
				if(response.ok) {
					response.json().then((data) => {
						console.log(data);
						this.getContacts();
					})
				}
		}).catch((error) => {
			console.log("Error:"+error);
		});
	}
	
	deleteContact = (id) => {
		let fetchObject = {
			method:"DELETE",
			mode:"cors",
			headers:{"Content-type":"application/json"}
		}
		fetch("/api/contact/"+id,fetchObject).then((response) => {
			if(response.ok){
					console.log("Success!!");
					this.getContacts();
			} else {
					console.log("Not Found!!");
			}			
		}).catch((error) => {
			console.log(error);
		});
	}

	render() {
		return (
			<div>
				<ContactForm updateContacts={this.updateContacts}/>
				<hr></hr>
				<ContactList contactList={this.state.contactList}
							deleteContact={this.deleteContact}/>
			</div>
		)
	
	}
}