import { NavHashLink } from "react-router-hash-link";
import styled from "styled-components";

export const NavbarContainer = styled.div`
	height: 10vh;
	width: 100%;
	background-color: var(--primaryColor);
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: var(--secondTitleColor);
	position: sticky;
	top: 0px;
	z-index: 1000;
`;

export const Left = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

export const Right = styled.div`
	flex: 2;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 0 20px;
`;

export const Wrapper = styled.div`
	width: 60%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-transform: uppercase;
`;

export const NavbarItem = styled(NavHashLink)`
	cursor: pointer;
	text-decoration: none;
	color: var(--secondTitleColor);
`;

export const LanguageWrapper = styled.div`
	min-width: 120px;
	height: 30px;
	user-select: none;
	overflow: ${(props) => (props.active === true ? "visible" : "hidden")};
	margin: 0 40px;
`;

export const LanguageTitle = styled.p`
	width: 100%;
	height: 100%;
	border-radius: 10px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	cursor: pointer;
`;

export const LanguageDropdown = styled.ul`
	width: 100%;
	height: auto;
	padding: 7px 0;
	border-radius: 10px;
	position: relative;
	border: 1px solid var(--primaryColor);
	color: var(--primaryColor);
	list-style: none;
	margin-top: 3px;
	background-color: #f1f1f1;
`;
export const LanguageButton = styled.li`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
	background-color: #f1f1f1;

	&:hover {
		background-color: var(--thirdColor);
		color: #f1f1f1;
	}
`;

export const ContactButton = styled.a`
	background-color: transparent;
	border: none;
	color: #fff;
	cursor: pointer;
	text-transform: uppercase;
`;
