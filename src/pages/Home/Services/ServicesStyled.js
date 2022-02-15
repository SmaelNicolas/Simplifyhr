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
	background: linear-gradient(116.82deg, #524ef8 0%, #57add9 100%);
`;

export const TitleContainer = styled.div`
	max-width: 590px;
	height: 110px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 70px;
`;

export const TitleStyled = styled.div`
	width: 100%;
	height: 100%;
	color: var(--secondTitleColor);
	font-size: 45px;
	font-weight: 700;
	letter-spacing: 0.4px;
	line-height: 55px;
	text-align: center;
	@media (max-width: 620px) {
		font-size: calc(0.5rem + 5vw);
	}

	@media (max-width: 380px) {
		font-size: calc(0.8rem + 3vw);
	}
`;
