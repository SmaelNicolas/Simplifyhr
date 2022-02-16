import { useContext, useState } from "react";
import { LanguageContext } from "../../Context/LanguageContext";
import Logo from "../Logo/Logo";
import {
	KeyboardArrowDownRounded,
	KeyboardArrowUpRounded,
	LanguageOutlined,
} from "@mui/icons-material";
import ContactButtonNew from "./ContactButton/ContactButtonNew";
import {
	LanguageButton,
	LanguageDropdown,
	LanguageTitle,
	LanguageWrapper,
	Left,
	NavbarContainer,
	NavbarItem,
	Right,
	Wrapper,
} from "./NavbarStyled";

function Navbar() {
	const { setLanguage, data, language } = useContext(LanguageContext);
	const [dropdown, setDropdown] = useState(false);

	return (
		<NavbarContainer>
			<Left>
				<Logo />
			</Left>
			<Right>
				<Wrapper>
					<NavbarItem to={"/#services"}>{data.navbar.a1}</NavbarItem>
					<NavbarItem to={"/#whyus"}>{data.navbar.a2}</NavbarItem>
					<NavbarItem to={"/resources"}>{data.navbar.a3}</NavbarItem>
				</Wrapper>
				<LanguageWrapper
					onClick={() => setDropdown(!dropdown)}
					active={dropdown}
				>
					<LanguageTitle>
						<LanguageOutlined /> {language}
						{dropdown ? (
							<KeyboardArrowUpRounded />
						) : (
							<KeyboardArrowDownRounded />
						)}
					</LanguageTitle>
					<LanguageDropdown>
						<LanguageButton onClick={() => setLanguage("Español")}>
							Español
						</LanguageButton>
						<LanguageButton onClick={() => setLanguage("English")}>
							English
						</LanguageButton>
					</LanguageDropdown>
				</LanguageWrapper>
				<ContactButtonNew />
			</Right>
			{console.log("RENDERIZA NAVBAR")}
		</NavbarContainer>
	);
}

export default Navbar;
