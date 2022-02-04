import { Fade } from "react-awesome-reveal";
import {
	ContactUsContainer,
	FormContainer,
	CloseForm,
} from "./ContactUsStyled";

import ContactUsFormItems from "./ContactUsFormItems/ContactUsFormItems";
import { useState } from "react";

function ContactUs() {
	// TODO
	// Agregar state showContactUs al navbar y eliminarlo de aca
	// Ejecutar toggleShow en link contactUs
	//Pasar comom prop la funcion toggleShow al contacto para ejecutarla en la X y boton enviar mensaje
	const [showContactUs, setShowContactUs] = useState(false);

	const toggleShow = () => {
		setShowContactUs(!showContactUs);
	};

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
