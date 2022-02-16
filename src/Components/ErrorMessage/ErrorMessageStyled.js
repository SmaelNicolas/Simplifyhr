import styled from "styled-components";

export const ErrorBackground = styled.div`
	width: 99vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.555);
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0px;
	left: 0px;
	z-index: 995;
`;

export const ErrorContainer = styled.div`
	width: 400px;
	height: 450px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	background-color: var(--secondTitleColor);
	border: 1px solid black;
	position: absolute;
`;
