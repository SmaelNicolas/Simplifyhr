import styled from "styled-components";

export const CardStyled = styled.div`
	width: 330px;
	height: 400px;
	margin: 0px 5px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	background: #ffffff;
	border-radius: 30px;
	transition: all 0.1s linear;
	cursor: default;

	&:hover {
		opacity: 1;

		transition: all 0.1s linear;
		transform: scale(1.08);
	}
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
	height: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CardTextContainerStyled = styled.div`
	width: 83%;
	font-size: 22px;
	color: #000000;
	font-weight: 500;
	text-align: center;
	line-height: 150%;
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

	transition: all 0.1s linear;

	&:hover {
		transition: all 0.1s linear;
		transform: scale(1.05);
		filter: drop-shadow(0px 4px 4px rgba(0.1, 0.1, 0.1, 1));
	}
`;
