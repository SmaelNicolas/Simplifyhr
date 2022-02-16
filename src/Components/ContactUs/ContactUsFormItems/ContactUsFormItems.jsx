import {
	Button,
	Inputs,
	Labels,
	InputBodyContent,
	Divisor,
	ButtonCancel,
} from "./ContactUsFormItemsStyled";

import SuccessMessage from "../../SuccessMessage/SuccesMessage";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

import { useState } from "react";

import database from "../../../Firebase/Firebase";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

function ContactUsFormItems({ toggleShow }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [company, setCompany] = useState("");
	const [body, setBody] = useState("");
	const [showError, setShowError] = useState(false);
	const [showSuccess, setShowSucces] = useState(false);

	function generateMessage() {
		fetch("https://formsubmit.co/ajax/9a8e0d24cf432f27bd92275ddf47b8dd", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				Name: name,
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
				email: email,
				company: company,
			},
			message: body,
		};
		// Add a new document in collection "messages"
		setDoc(doc(database, "messages", uuidv4()), message);
		setShowSucces(true);
	}

	function checkForm() {
		if (
			name === "" ||
			company === "" ||
			email === "" ||
			body === "" ||
			body === undefined ||
			email.includes("@") === false ||
			email.includes(".com") === false
		) {
			setShowError(true);
		} else {
			generateMessage();
		}
	}

	const changeValueSuccessMessage = () => {
		setShowSucces(!showSuccess);
		toggleShow();
	};

	const changeValueErrorMessage = () => {
		setShowError(!showError);
	};

	return showSuccess ? (
		<SuccessMessage
			click={changeValueSuccessMessage}
			message='Email Enviado'
		/>
	) : showError ? (
		<ErrorMessage
			click={changeValueErrorMessage}
			message='Complete All Fields'
		/>
	) : (
		<>
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

			<Labels htmlFor='company'>Company </Labels>
			<Inputs
				type='text'
				id='company'
				name='company'
				placeholder='Company'
				required
				onChange={(e) => setCompany(e.target.value)}
			/>

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

			<Divisor>
				<ButtonCancel
					bgColor='#C2C0FF'
					color='#524ef8'
					onClick={(e) => {
						e.preventDefault();
						toggleShow();
					}}
					type='submit'
				>
					Close
				</ButtonCancel>
				<Button
					onClick={(e) => {
						e.preventDefault();
						checkForm();
					}}
					type='submit'
				>
					Send Message
				</Button>
			</Divisor>
		</>
	);
}

export default ContactUsFormItems;
