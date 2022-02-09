import {
	ContactUsContainer,
	FormContainer,
	CloseForm,
	ContactUsContainer2,
} from "./ContactUsStyled";

import ContactUsFormItems from "./ContactUsFormItems/ContactUsFormItems";

function ContactUs({ toggleShow, opacity }) {
	return (
		<ContactUsContainer>
			<ContactUsContainer2 onClick={toggleShow} />
			<FormContainer opacity={opacity}>
				<CloseForm onClick={toggleShow}> X </CloseForm>
				<ContactUsFormItems />
			</FormContainer>
		</ContactUsContainer>
	);
}

export default ContactUs;
