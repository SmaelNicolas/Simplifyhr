import styled from "styled-components";

export const CardsContainerStyled = styled.div`
	width: 1000px;
	height: 800px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
`;

export const CardStyled = styled.div`
	width: 33.3333%;
	height: 550px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 1px solid black;
`;

export const CardTitleStyled = styled.div`
	width: 100%;
	height: 70px;
	font-size: 40px;
	text-align: center;
	font-weight: 600;
	padding: 10px;
	background-color: #524ef8;
`;

export const CardTextStyled = styled.div`
	width: 100%;
	height: 600px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CardTextContainerStyled = styled.div`
	font-size: 35px;
	padding: 0px 10px;

	text-align: center;
	font-weight: 300;
`;

export const CardButtonStyled = styled.a`
	width: 80%;
	height: auto;
	padding: 20px;
	margin: 30px;
	font-size: 25px;
	text-align: center;
	color: Black;
	border: 1px solid black;
	border-radius: 5px;
	background-color: #c4c4c4;
`;
