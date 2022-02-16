import styled from "styled-components";

export const SuccesImg = styled.div`
	width: 85px;
	height: 85px;
	background-image: url(${({ url }) => `${url}`});
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	border-radius: 50%;
`;

export const SuccessTextMessage = styled.div`
	width: 200px;
	height: 30px;
	line-height: 30px;
	text-align: center;
	color: green;
`;

export const SuccesButton = styled.div`
	width: 160px;
	height: 60px;

	line-height: 60px;
	text-align: center;
	font-weight: 500;
	font-size: 14px;

	border-radius: 28px;
	border: 1px solid var(--primaryColor);
	color: var(--primaryColor);
`;
