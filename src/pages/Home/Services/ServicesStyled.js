import styled from "styled-components";

export const ServicesContainer = styled.section`
	width: 100%;
	min-height: 100vh;
	padding: 100px 0px;
	border: 1px solid black;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background: linear-gradient(180deg, #524ef8 0%, #57add9 100%);
`;

export const TitleContainer = styled.div`
	width: 574px;
	height: 110px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 70px;
`;

export const TitleStyled = styled.div`
	width: 574px;
	height: 110px;
	color: var(--secondTitleColor);
	font-size: 45px;
	font-weight: 700;
	letter-spacing: 0.4px;
	line-height: 55px;
	text-align: center;
`;
