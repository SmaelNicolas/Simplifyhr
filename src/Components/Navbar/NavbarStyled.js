import { NavHashLink } from "react-router-hash-link";
import styled from "styled-components";

export const NavbarContainer = styled.div`
	font-family: "Roboto", sans-serif;
	height: 10vh;
	width: 100%;
	background-color: #524ef8;
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: #ffff;
	position: sticky;
	top: 0px;
`;

export const Left = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

export const Logo = styled(NavHashLink)`
	text-transform: uppercase;
	cursor: pointer;
	text-decoration: none;
	color: #fff;
	font-size: 2em;
	font-weight: 600;
`;

export const Center = styled.div`
	flex: 2;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

export const NavbarItem = styled(NavHashLink)`
	cursor: pointer;
	text-decoration: none;
	color: #fff;
`;

export const Right = styled.div`
	flex: 1;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const LanguageWrapper = styled.div`
	width: 50px;
	display: flex;
	justify-content: space-between;
`;

export const LanguageButton = styled.button`
	background-color: transparent;
	border: none;
	color: #fff;
	cursor: pointer;
`;

export const ContactButton = styled.a`
	background-color: transparent;
	border: none;
	color: #fff;
	cursor: pointer;
`;
