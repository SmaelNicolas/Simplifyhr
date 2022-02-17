import ContactButtonNew from "../ContactButton/ContactButtonNew";
import LanguageButton from "../LanguageButton/LanguageButton";
import {
	SidebarContainer,
	SidebarLink,
	SidebarMenu,
	SidebarWrapper,
} from "./SidebarStyle";

const Sidebar = ({ data, isOpen }) => {
	return (
		<SidebarContainer isOpen={isOpen}>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink smooth to={"/#services"}>{data.navbar.a1}</SidebarLink>
					<SidebarLink smooth to={"/#whyus"}>{data.navbar.a2}</SidebarLink>
					<SidebarLink smooth to={"/resources"}>{data.navbar.a3}</SidebarLink>
					<ContactButtonNew />
					<LanguageButton />
				</SidebarMenu>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
