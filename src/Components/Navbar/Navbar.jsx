import { useContext, useRef, useState } from "react";
import { LanguageContext } from "../../Context/LanguageContext";
import Logo from "../Logo/Logo";
import { CloseRounded, MenuRounded } from "@mui/icons-material";
import ContactButtonNew from "./ContactButton/ContactButtonNew";
import Sidebar from "./Sidebar/Sidebar";
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
	const [isOpen, setIsOpen] = useState(false);

  const el=useRef();
  console.log(el);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Sidebar isOpen={isOpen} data={data} toggle={toggle} />
			<Nav>
				<NavContainer>
					<Logo />
					<MobileIcon>
						{isOpen ? (
							<CloseRounded onClick={toggle} />
						) : (
							<MenuRounded onClick={toggle} />
						)}
					</MobileIcon>
					<NavMenu>
						<NavbarItem>
							<NavbarLink
								smooth
								to={`/#whyus`}
                ref={el}
							>
								{data.navbar.a2}
							</NavbarLink>
						</NavbarItem>
						<NavbarItem>
							<NavbarLink smooth to={"/#services"}>
								{data.navbar.a1}
							</NavbarLink>
						</NavbarItem>
						<NavbarItem>
							<NavbarLink smooth to={"/resources"}>
								{data.navbar.a3}
							</NavbarLink>
						</NavbarItem>
						<LanguageButton />
						<ContactButtonNew />
					</NavMenu>
				</NavContainer>
				{console.log("RENDERIZA NAVBAR")}
			</Nav>
		</>
	);
}

export default Navbar;
