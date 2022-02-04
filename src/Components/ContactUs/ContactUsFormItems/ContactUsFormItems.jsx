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
		// Add a new document in collection "cities"
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
				></Inputs>
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
				></Inputs>
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
				></Inputs>
			</Divisor>

			<Divisor>
				<Labels htmlFor='email'>Email </Labels>

				<Inputs
					id='email'
					name='email'
					placeholder='Email'
					type='email'
					autocomplete='email'
					required
					onChange={(e) => setEmail(e.target.value)}
				></Inputs>
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
				></InputBodyContent>
			</Divisor>

			<Button
				onClick={(e) => {
					e.preventDefault();
					generateMessage();
					console.log("Message Sent");
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
