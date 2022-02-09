import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";
import ContactButtonNew from "./ContactButton/ContactButtonNew";
import {
	Center,
	LanguageButton,
	LanguageWrapper,
	Left,
	Logo,
	NavbarContainer,
	NavbarItem,
	Right,
	Wrapper,
} from "./NavbarStyled";

function Navbar() {
	const { setLanguage, data } = useContext(LanguageContext);

	return (
		<NavbarContainer>
			<Left>
				<Logo to={`/#home`}>Simplify-hr</Logo>
			</Left>
			<Center>
				<Wrapper>
					<NavbarItem to={"/#services"}>{data.navbar.a1}</NavbarItem>
					<NavbarItem to={"/#whyus"}>{data.navbar.a2}</NavbarItem>
					<NavbarItem to={"/resources"}>{data.navbar.a3}</NavbarItem>
				</Wrapper>
			</Center>
			<Right>
				<LanguageWrapper>
					<LanguageButton onClick={() => setLanguage("es")}>
						ES
					</LanguageButton>
					<LanguageButton onClick={() => setLanguage("en")}>
						EN
					</LanguageButton>
				</LanguageWrapper>
				<ContactButtonNew />
			</Right>
			{console.log("RENDERIZA NAVBAR")}
		</NavbarContainer>
	);
}

export default Navbar;
