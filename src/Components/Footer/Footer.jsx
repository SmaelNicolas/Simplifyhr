import {
	Email,
	FooterContainer,
	FooterLink,
	Left,
	Logo,
	Right,
	Wrapper,
} from "./FooterStyled";

function Footer() {
	function Mailto({ email, subject, body, ...props }) {
		return (
			<a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
				{props.children}
			</a>
		);
	}
	return (
		<FooterContainer>
			<Left>
				<Logo>Simplify-HR</Logo>
				<Email href={"mailto: hello@hr-simplify.com"}>
					hello@hr-simplify.com
				</Email>
			</Left>
			<Right>
				<Wrapper>
					<FooterLink>Privacy Policy</FooterLink>
					<FooterLink>Legal Terms</FooterLink>
					<FooterLink>Cookies</FooterLink>
				</Wrapper>
			</Right>
		</FooterContainer>
	);
}

export default Footer;
