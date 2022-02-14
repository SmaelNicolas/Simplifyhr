import styled from "styled-components";

export const WhyUsContainer = styled.section`
	width: 100%;

	padding: 100px 0px;
	border: 1px solid black;

	display: flex;
	flex-direction: column;

	justify-content: center;
	align-items: center;
	gap: 15px;
`;

export const TitleStyled = styled.div`
	width: 100%;
	height: auto;
	color: #524ef8;
	font-size: calc(2rem + 2vw);

	font-weight: 600;
	letter-spacing: 0.4px;
	text-align: center;
`;

export const SubtitleStyled = styled.div`
	width: 70%;
	text-align: center;
	font-size: calc(1.5rem + 2vw);
	color: grey;
	font-weight: 300;
`;

export const ButtonStyled = styled.a`
	width: 400px;
	height: 50px;
	border: 1px solid black;
	border-radius: 5px;
	cursor: pointer;
	background-color: #524ef8;
	text-align: center;
	line-height: 48px;
	color: white;
	font-size: 36px;
	margin: 60px 0px;
	text-decoration: none;
`;
