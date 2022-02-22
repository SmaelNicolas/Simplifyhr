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

export const MenuLink = styled.span`
	width: max-content;
	height: 30px;
	padding: 30px 0px 30px 30px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 30px;
	color: #fff;
	text-transform: uppercase;

	cursor: pointer;
	@media screen and (max-width: 1050px) {
		gap: 15px;
		padding-left: 15px;
	}

	@media screen and (max-width: 550px) {
		flex-direction: column;
		margin: 0px;
		padding: 10px 0px;
		height: auto;
		font-size: 12px;
		gap: 5px;
	}
`;
export const Menu = styled.div`
	background-color: var(--secondColor);
	width: 20%;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 800px) {
		width: 100%;
		flex-direction: row;
		position: sticky;
		top: 80px;
	}
	@media screen and (max-width: 550px) {
		gap: 10px;
		justify-content: center;
	}
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
