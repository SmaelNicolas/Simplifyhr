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

import { useContext, useState } from "react";

import { LanguageContext } from "../../../Context/LanguageContext";
import checkForm from "../../../Helpers/checkContactForm";

function ContactUsFormItems({ toggleShow }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [company, setCompany] = useState("");
	const [body, setBody] = useState("");
	const [showError, setShowError] = useState(false);
	const [showSuccess, setShowSucces] = useState(false);

	const { data } = useContext(LanguageContext);

	const changeValueSuccessMessage = () => {
		setShowSucces(!showSuccess);
		toggleShow();
	};

	const changeValueErrorMessage = () => {
		setShowError(!showError);
	};

	const checking = () => {
		checkForm(name, email, company, body, setShowSucces, setShowError);
	};

	return showSuccess ? (
		<SuccessMessage
			click={changeValueSuccessMessage}
			message={data.successMessage.sendForm}
		/>
	) : showError ? (
		<ErrorMessage
			click={changeValueErrorMessage}
			message={data.errorMessage.sendForm}
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
				Message
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
						checking();
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
