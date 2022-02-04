import {
	Button,
	Inputs,
	Labels,
	InputBodyContent,
	Divisor,
} from "./ContactUsFormItemsStyled";

function ContactUsFormItems() {
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

			<Labels htmlFor='messageContact'>Message </Labels>

			<InputBodyContent
				type='text'
				id='messageContact'
				name='messageContact'
				placeholder='Write something..'
				required
			></InputBodyContent>

			<Button
				onClick={(e) => {
					// e.preventDefault();
					console.log("LOGGED");
				}}
				type='submit'
			>
				Send Message
			</Button>
		</>
	);
}

export default ContactUsFormItems;
