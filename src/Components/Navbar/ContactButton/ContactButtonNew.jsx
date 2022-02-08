import { useContext, useState } from "react";
import { ContactButton } from "../NavbarStyled";

import { LanguageContext } from "../../../Context/LanguageContext";
import ContactUs from "../../ContactUs/ContactUs";

function ContactButtonNew() {
	const { data } = useContext(LanguageContext);
	const [showContactUs, setShowContactUs] = useState(false);

	const toggleShow = () => {
		setShowContactUs(!showContactUs);
	};

	return (
		<>
			<ContactButton onClick={toggleShow}>
				{console.log("RENDERIZA CONTACT US")}

				{data.navbar.a4}
			</ContactButton>
			{showContactUs && (
				<ContactUs opacity={1} toggleShow={toggleShow}></ContactUs>
			)}
		</>
	);
}

export default ContactButtonNew;
