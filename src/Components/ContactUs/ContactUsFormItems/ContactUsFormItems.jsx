import {
	Button,
	Inputs,
	Labels,
	InputBodyContent,
	Divisor,
} from "./ContactUsFormItemsStyled";

function ContactUsFormItems({ toggleShow }) {
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
				></InputBodyContent>
			</Divisor>

			<Button
				onClick={(e) => {
					e.preventDefault();
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
