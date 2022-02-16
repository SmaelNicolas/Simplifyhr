import { useContext, useState } from "react";
import styled from "styled-components";
import { LanguageContext } from "../../../Context/LanguageContext";
import ContactUs from "../../ContactUs/ContactUs";

export const ContactButton = styled.a`
	background-color: #f1f1f1;
	min-width: 150px;
	border: none;
	color: var(--primaryColor);
	font-weight: 600;
	padding: 10px 20px;
	cursor: pointer;
	text-transform: uppercase;
	text-align: center;
	border-radius: 40px;
	box-shadow: 2px 2px 10px 0px rgba(100, 100, 100, 0.8);
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.05);
	}
	&:active {
		transform: scale(0.95);
	}
`;

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
			{showContactUs && <ContactUs opacity={1} toggleShow={toggleShow} />}
		</>
	);
}

export default ContactButtonNew;
