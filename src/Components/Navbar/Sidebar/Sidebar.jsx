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
					<SidebarLink to={"/#services"}>{data.navbar.a1}</SidebarLink>
					<SidebarLink to={"/#whyus"}>{data.navbar.a2}</SidebarLink>
					<SidebarLink to={"/resources"}>{data.navbar.a3}</SidebarLink>
					<ContactButtonNew />
					<LanguageButton />
				</SidebarMenu>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
