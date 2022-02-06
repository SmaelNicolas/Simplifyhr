import styled from "styled-components";

export const NavbarContainer = styled.div`
	font-family: "Roboto", sans-serif;
	position: fixed;
	height: 10vh;
	width: 100%;
	background-color: #524ef8;
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: #ffff;
`;

export const Left = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Logo = styled.h1`
	text-transform: uppercase;
	cursor: pointer;
`;

export const Center = styled.div`
	flex: 2;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

export const NavbarItem = styled.span`
	cursor: pointer;
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

export const ContactButton = styled.button`
	background-color: transparent;
	border: none;
	color: #fff;
	cursor: pointer;
`;
