import styled from "styled-components";

export const ServicesContainer = styled.section`
	width: 100%;
	padding: 100px 0px;
	border: 1px solid black;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

export const TitleContainer = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 10px;
`;

export const TitleStyled = styled.div`
	width: 100%;
	height: auto;
	color: var(--primaryColor);
	font-size: calc(2rem + 2vw);
	font-weight: 600;
	letter-spacing: 0.4px;
	text-align: center;
`;
