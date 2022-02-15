import styled from "styled-components";

export const CardStyled = styled.div`
	width: 304px;
	height: 390px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	background: #ffffff;
	border-radius: 30px;
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
	width: 237px;
	height: 85px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: flex-start;
`;

export const CardTextContainerStyled = styled.div`
	width: 237px;

	font-size: 22px;
	color: #000000;
	text-align: center;
	font-weight: 500;
`;

export const CardButtonStyled = styled.a`
	width: 255px;
	height: 55px;

	font-size: 25px;
	font-weight: 900;

	text-align: center;
	line-height: 57px;

	color: var(--secondTitleColor);
	background: var(--primaryColor);

	border-radius: 20px;
	text-decoration: none;
	margin-bottom: 25px;
`;
