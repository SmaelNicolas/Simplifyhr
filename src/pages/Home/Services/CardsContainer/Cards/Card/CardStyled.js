import styled from "styled-components";

export const CardStyled = styled.div`
	width: 330px;
	height: 400px;
	margin: 0px 5px;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	background: #ffffff;
	border-radius: 30px;
	transition: all 0.1s linear;
	cursor: default;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
`;

export const CardTitleStyled = styled.div`
	width: 304px;
	height: 90px;

	font-size: 25px;
	font-weight: 700;

	line-height: 90px;
	text-align: center;

	background: #ffffff;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
	border-radius: 30px;
	color: var(--secondColor);
	text-transform: uppercase;
`;

export const CardTextStyled = styled.div`
	width: 100%;
	padding-top: 15px;
	height: 300px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
`;

export const CardTextContainerStyled = styled.div`
	width: 83%;
	font-size: ${({ fSize }) => fSize || "22px"};
	color: #000000;
	font-weight: 500;
	text-align: center;
	line-height: 150%;
`;

export const CardSubTextContainerStyled = styled.div`
	width: 83%;
	margin-top: 20px;
	padding: 10px;
	border-radius: 15px;
	background-color: var(--primaryColor);
	color: var(--secondTitleColor);
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);

	font-size: 15px;
	text-align: center;
	font-weight: 400;
	line-height: 17px;
`;
