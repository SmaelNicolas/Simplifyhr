import ContactButtonNew from "../ContactButton/ContactButtonNew";
import LanguageButton from "../LanguageButton/LanguageButton";
import {
	SidebarContainer,
	SidebarLink,
	SidebarMenu,
	SidebarWrapper,
} from "./SidebarStyle";

const Sidebar = ({ data, isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen}>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink onClick={toggle} smooth to={"/#services"}>
						{data.navbar.a1}
					</SidebarLink>
					<SidebarLink onClick={toggle} smooth to={"/#whyus"}>
						{data.navbar.a2}
					</SidebarLink>
					<SidebarLink onClick={toggle} smooth to={"/resources"}>
						{data.navbar.a3}
					</SidebarLink>
					<ContactButtonNew onClick={toggle} />
					<LanguageButton onClick={toggle} />
				</SidebarMenu>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
