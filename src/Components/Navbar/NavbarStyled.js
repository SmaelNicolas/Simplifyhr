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
	width: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-transform: uppercase;
`;

export const NavbarItem = styled(NavHashLink)`
	cursor: pointer;
	text-decoration: none;
	color: var(--secondTitleColor);
	margin: 0 20px;
	text-align: center;
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
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.03);
	}
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
	background-color: #f1f1f1;
	min-width: 150px;
	border: none;
	color: var(--primaryColor);
	font-weight: 600;
	padding: 10px 20px;
	cursor: pointer;
	text-transform: uppercase;
	text-align: center;
	border-radius: 40px;
	box-shadow: 2px 2px 10px 0px rgba(100, 100, 100, 0.8);
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.03);
	}
	&:active {
		transform: scale(0.95);
	}
`;
