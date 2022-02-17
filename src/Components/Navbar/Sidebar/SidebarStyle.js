import styled from "styled-components";
import { NavHashLink } from "react-router-hash-link";

export const SidebarContainer = styled.aside`
	position: fixed;
	z-index: 1000;
	width: 100%;
	height: 100%;
	background-color: var(--primaryColor);
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	left: 0;
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
	top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const SidebarWrapper = styled.div`
	color: #f1f1f1;
	height: 70%;
`;

export const SidebarMenu = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	height: 100%;
`;

export const SidebarLink = styled(NavHashLink)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	text-decoration: none;
	list-style: none;
	transition: 0.2s ease-in-out;
	text-decoration: none;
	color: #f1f1f1;
	cursor: pointer;
	margin: 20px 0;

	&hover {
		color: var(--thirdColor);
		transition: 0.2s ease-in-out;
	}
`;
