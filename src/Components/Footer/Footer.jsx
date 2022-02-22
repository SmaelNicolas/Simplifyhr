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
import { EmailOutlined } from "@mui/icons-material";

function Footer() {
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
					<EmailOutlined style={{ marginRight: 5 }}/> hello@hr-simplify.com
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
