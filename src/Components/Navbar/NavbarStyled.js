import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

export const Nav = styled.nav`
	height: 80px;
	width: 100%;
	background-color: var(--primaryColor);
	display: flex;
	justify-content: center;
	align-items: center;
	color: var(--secondTitleColor);
	position: sticky;
	top: 0px;
	z-index: 1000;

	@media screen and (max-width: 945px) {
		transition: 0.8s all ease;
	}
`;

export const NavContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80px;
	width: 100%;
	padding: 0 24px;
`;

export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 945px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		cursor: pointer;
		font-size: 1.8rem;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	text-transform: uppercase;

	@media screen and (max-width: 945px) {
		display: none;
	}
`;

export const NavbarItem = styled.li`
	height: 50px;
`;

export const NavbarLink = styled(HashLink)`
	cursor: pointer;
	text-decoration: none;
	display: flex;
	align-items: center;
	padding: 0 1rem;
	height: 100%;
	color: var(--secondTitleColor);
	background-color: ${({ match }) => match && "yellow"};

	&:active {
		border: 1px solid #f1f1f1;
		border-radius: 40px;
	}
`;
