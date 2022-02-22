import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";
import {
	Cursor,
	Email,
	FooterContainer,
	FooterLink,
	Left,
	Message,
	Right,
	Title,
	Wrapper,
} from "./FooterStyled";
import TypingText from "./TypingText/TypingText";
import Logo from "../../Components/Logo/Logo";

function Footer() {
	// function Mailto({ email, subject, body, ...props }) {
	// 	return (
	// 		<a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
	// 			{props.children}
	// 		</a>
	// 	);
	// }

	const { data } = useContext(LanguageContext);

	return (
		<FooterContainer>
			<Left>
				<Message>
					<Title id="footerTitle">{data.footer.title}</Title>
					<TypingText data={data} />
					<Cursor id="footerCursor">_</Cursor>
				</Message>
				<Email href={"mailto: hello@hr-simplify.com"}>
					hello@hr-simplify.com
				</Email>
			</Left>
			<Right>
				<Logo />
				<Wrapper>
					<FooterLink to={"/privacy-policy"}>Privacy Policy</FooterLink>
					<FooterLink to={"/legal-terms"}>Legal Terms</FooterLink>
					<FooterLink to={"/cookies"}>Cookies</FooterLink>
				</Wrapper>
			</Right>
		</FooterContainer>
	);
}

export default Footer;
