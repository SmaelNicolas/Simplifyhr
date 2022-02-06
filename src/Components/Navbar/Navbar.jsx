import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";
import {
	Center,
	ContactButton,
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
	const { setLanguage, language, data } = useContext(LanguageContext);

	return (
		<NavbarContainer>
			<Left>
				<Logo to={`/`}>Simplify-hr</Logo>
			</Left>
			<Center>
				<Wrapper>
					<NavbarItem to={"/#services"}>{data.navbar.a1}</NavbarItem>
					<NavbarItem to={"#"}>{data.navbar.a2}</NavbarItem>
					<NavbarItem to={"/resources"}>{data.navbar.a3}</NavbarItem>
				</Wrapper>
			</Center>
			<Right>
				<LanguageWrapper>
					<LanguageButton onClick={() => setLanguage("es")}>ES</LanguageButton>
					<LanguageButton onClick={() => setLanguage("en")}>EN</LanguageButton>
				</LanguageWrapper>
				<ContactButton>{data.navbar.a4}</ContactButton>
			</Right>
		</NavbarContainer>
	);
}

export default Navbar;
