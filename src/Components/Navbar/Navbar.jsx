import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";
import Logo from "../Logo/Logo";
import { MenuRounded } from "@mui/icons-material";
import ContactButtonNew from "./ContactButton/ContactButtonNew";
import {
	MobileIcon,
	Nav,
	NavbarItem,
	NavbarLink,
	NavContainer,
	NavMenu,
} from "./NavbarStyled";
import LanguageButton from "./LanguageButton/LanguageButton";

function Navbar() {
	const { data } = useContext(LanguageContext);

	return (
		<Nav>
			<NavContainer>
				<Logo />
				<MobileIcon>
					<MenuRounded />
				</MobileIcon>
				<NavMenu>
					<NavbarItem>
						<NavbarLink to={"/#services"}>{data.navbar.a1}</NavbarLink>
					</NavbarItem>
					<NavbarItem>
						<NavbarLink to={"/#whyus"}>{data.navbar.a2}</NavbarLink>
					</NavbarItem>
					<NavbarItem>
						<NavbarLink to={"/resources"}>{data.navbar.a3}</NavbarLink>
					</NavbarItem>
					<LanguageButton />
					<ContactButtonNew />
				</NavMenu>
			</NavContainer>
			{console.log("RENDERIZA NAVBAR")}
		</Nav>
	);
}

export default Navbar;
