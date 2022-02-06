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
	const { setLanguage, language } = useContext(LanguageContext);

	return (
		<NavbarContainer>
			<Left>
				<Logo />
			</Left>
			<Center>
				<Wrapper>
					<NavbarItem></NavbarItem>
					<NavbarItem></NavbarItem>
					<NavbarItem></NavbarItem>
					<NavbarItem></NavbarItem>
				</Wrapper>
			</Center>
			<Right>
				<LanguageButton onClick={() => setLanguage("es")}>ES</LanguageButton>
				<LanguageButton onClick={() => setLanguage("en")}>EN</LanguageButton>
				<ContactButton />
			</Right>
		</NavbarContainer>
	);
}

export default Navbar;
