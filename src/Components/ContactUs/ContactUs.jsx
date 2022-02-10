import {
	ContactUsContainer,
	FormContainer,
	ContactUsContainer2,
} from "./ContactUsStyled";

import ContactUsFormItems from "./ContactUsFormItems/ContactUsFormItems";

function ContactUs({ toggleShow, opacity }) {
	return (
		<ContactUsContainer>
			<ContactUsContainer2 onClick={toggleShow} />
			<FormContainer opacity={opacity}>
				<ContactUsFormItems toggleShow={toggleShow} />
			</FormContainer>
		</ContactUsContainer>
	);
}

export default ContactUs;
