import styled from "styled-components";

export const CardsContainerStyled = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin: 15px;
`;

export const CardStyled = styled.div`
	max-width: 392px;
	height: 542px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 1px solid black;
	transition: all 0.5s cubic-bezier(0.79, 0.18, 0.46, 0.74);

	:nth-child(1) {
		opacity: 0;
		transform: scale(0.5);
	}
	:nth-child(2) {
		opacity: 0;
		transform: scale(0.5);
	}
	:nth-child(3) {
		opacity: 0;
		transform: scale(0.5);
	}
`;

export const CardTitleStyled = styled.div`
	font-family: "Roboto", sans-serif;
	color: #ffffff;
	width: 100%;
	height: 75px;
	font-size: 48px;
	text-align: center;
	font-weight: 500;
	padding: 10px;
	background-color: #524ef8;
`;

export const CardTextStyled = styled.div`
	width: 100%;
	height: 542px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	margin-top: 104px;
`;

export const CardTextContainerStyled = styled.div`
	width: 100%;
	font-family: "Roboto", sans-serif;
	font-size: 36px;
	color: black;
	text-align: center;
	font-weight: 700;
`;

export const CardButtonStyled = styled.a`
	font-family: "Roboto", sans-serif;
	font-size: 36px;
	font-weight: 600;

	width: 300px;
	height: 82px;
	padding: 20px;
	margin: 30px;

	text-align: center;
	color: #000000;
	background-color: #c4c4c4;
	text-decoration: none;
`;
