import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	height: auto;
	display: flex;

	@media screen and (max-width: 800px) {
		flex-direction: column;
	}
`;

export const Menu = styled.div`
	background-color: var(--secondColor);
	width: 20%;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 800px) {
		width: 100%;
	}
`;

export const MenuLink = styled.span`
	height: 30px;
	padding: 30px;
	color: #fff;
	text-transform: uppercase;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	cursor: pointer;
`;

export const MainContainer = styled.div`
	overflow: scroll;
	width: 80%;
	padding: 20px;
	min-height: 100vh;

	@media screen and (max-width: 800px) {
		width: 100%;
	}
`;
