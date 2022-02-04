import {
	ContactUsContainer,
	FormContainer,
	CloseForm,
} from "./ContactUsStyled";

import ContactUsFormItems from "./ContactUsFormItems/ContactUsFormItems";
import { useState } from "react";

function ContactUs() {
	const [showContactUs, setShowContactUs] = useState(false);

	const toggleShow = () => {
		setShowContactUs(!showContactUs);
		console.log(showContactUs);
	};

	return showContactUs ? (
		<ContactUsContainer>
			<FormContainer>
				<CloseForm onClick={toggleShow}> X </CloseForm>
				<ContactUsFormItems
					toggleShow={toggleShow}
				></ContactUsFormItems>
			</FormContainer>
		</ContactUsContainer>
	) : (
		<button onClick={toggleShow}>FORM CONTACT US</button>
	);
}

export default ContactUs;
