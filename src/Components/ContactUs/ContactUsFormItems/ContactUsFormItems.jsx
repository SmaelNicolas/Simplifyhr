import {
	Button,
	Inputs,
	Labels,
	InputBodyContent,
	Divisor,
} from "./ContactUsFormItemsStyled";

import { useState } from "react";

import database from "../../../Firebase/Firebase";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

function ContactUsFormItems({ toggleShow }) {
	const [name, setName] = useState();
	const [lastName, setLastName] = useState();
	const [email, setEmail] = useState();
	const [company, setCompany] = useState();
	const [body, setBody] = useState();

	function generateMessage() {
		fetch("https://formsubmit.co/ajax/9a8e0d24cf432f27bd92275ddf47b8dd", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				Name: name,
				LastName: lastName,
				Email: email,
				Company: company,
				Message: body,
			}),
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.log(error));

		const message = {
			date: new Date(),
			person: {
				name: name,
				lastName: lastName,
				email: email,
				company: company,
			},
			message: body,
		};
		// Add a new document in collection "messages"
		setDoc(doc(database, "messages", uuidv4()), message);
	}

	return (
		<>
			<Divisor>
				<Labels htmlFor='name'>Name </Labels>
				<Inputs
					type='text'
					id='name'
					name='name'
					placeholder='Name'
					autocomplete='name'
					required
					onChange={(e) => setName(e.target.value)}
				/>
			</Divisor>

			<Divisor>
				<Labels htmlFor='lastName'>Last Name </Labels>
				<Inputs
					type='text'
					id='lastName'
					name='lastName'
					placeholder='Last Name'
					autocomplete='last-name'
					required
					onChange={(e) => setLastName(e.target.value)}
				/>
			</Divisor>

			<Divisor>
				<Labels htmlFor='company'>Company </Labels>
				<Inputs
					type='text'
					id='company'
					name='company'
					placeholder='Company'
					required
					onChange={(e) => setCompany(e.target.value)}
				/>
			</Divisor>

			<Divisor>
				<Labels htmlFor='email'>Email </Labels>

				<Inputs
					id='email'
					name='email'
					placeholder='Email Address'
					type='email'
					autocomplete='email'
					required
					onChange={(e) => setEmail(e.target.value)}
				/>
			</Divisor>

			<Divisor width='100%'>
				<Labels htmlFor='messageContact' width='90%'>
					Message{" "}
				</Labels>

				<InputBodyContent
					type='text'
					id='messageContact'
					name='messageContact'
					placeholder='Write something..'
					required
					onChange={(e) => setBody(e.target.value)}
				/>
			</Divisor>

			<Button
				onClick={(e) => {
					e.preventDefault();
					generateMessage();
					toggleShow();
				}}
				type='submit'
			>
				Send Message
			</Button>
		</>
	);
}

export default ContactUsFormItems;
