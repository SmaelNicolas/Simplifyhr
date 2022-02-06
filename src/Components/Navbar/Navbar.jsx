import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";
import {
	Center,
	ContactButton,
	LanguageButton,
	Left,
	Logo,
	NavbarContainer,
	NavbarItem,
	Right,
	Wrapper,
} from "./NavbarStyled";

function Navbar() {
	const { setLanguage, language, data } = useContext(LanguageContext);

	return (
		<NavbarContainer>
			<Left>
				<Logo>Simplify-hr</Logo>
			</Left>
			<Center>
				<Wrapper>
					<NavbarItem>{data.navbar.a1}</NavbarItem>
					<NavbarItem>{data.navbar.a2}</NavbarItem>
					<NavbarItem>{data.navbar.a3}</NavbarItem>
				</Wrapper>
			</Center>
			<Right>
				<LanguageButton onClick={() => setLanguage("es")}>ES</LanguageButton>
				<LanguageButton onClick={() => setLanguage("en")}>EN</LanguageButton>
				<ContactButton>{data.navbar.a4}</ContactButton>
			</Right>
		</NavbarContainer>
	);
}

export default Navbar;
