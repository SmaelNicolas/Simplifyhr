import { Fade } from "react-awesome-reveal";
import {
	ContactUsContainer,
	FormContainer,
	CloseForm,
} from "./ContactUsStyled";

import ContactUsFormItems from "./ContactUsFormItems/ContactUsFormItems";

function ContactUs({ toggleShow, showContactUs }) {
	return (
		showContactUs && (
			<Fade>
				<ContactUsContainer>
					<FormContainer>
						<CloseForm onClick={toggleShow}> X </CloseForm>
						<ContactUsFormItems
							toggleShow={toggleShow}
						></ContactUsFormItems>
					</FormContainer>
				</ContactUsContainer>
			</Fade>
		)
	);
}

export default ContactUs;
