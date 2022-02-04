import {
	ContactUsContainer,
	FormContainer,
	CloseForm,
} from "./ContactUsStyled";

import ContactUsFormItems from "./ContactUsFormItems/ContactUsFormItems";

function ContactUs() {
	return (
		<ContactUsContainer>
			<FormContainer>
				<CloseForm> X </CloseForm>
				<ContactUsFormItems></ContactUsFormItems>
			</FormContainer>
		</ContactUsContainer>
	);
}

export default ContactUs;
