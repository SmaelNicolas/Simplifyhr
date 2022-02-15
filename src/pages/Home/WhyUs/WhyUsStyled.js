import styled from "styled-components";

export const WhyUsContainer = styled.section`
	width: 100%;

	padding: 100px 0px;

	display: flex;
	flex-direction: column;

	justify-content: center;
	align-items: center;
	gap: 15px;
`;

export const TitleStyled = styled.div`
	max-width: 428px;
	height: auto;
	color: var(--primaryColor);
	font-size: 45px;
	font-weight: 700;
	letter-spacing: 0.4px;
	text-align: center;
	@media (max-width: 1089px) {
		font-size: 40px;
	}
	@media (max-width: 370px) {
		font-size: 35px;
	}
	@media (max-width: 350px) {
		font-size: 30px;
	}
`;

export const SubtitleStyled = styled.div`
	max-width: 979px;
	text-align: center;
	color: var(--greySubtitle);
	font-weight: 500;
	font-size: 28px;
	margin-bottom: 50px;
	padding: 0px 10px;

	@media (max-width: 1089px) {
		font-size: 24px;
	}
	@media (max-width: 330px) {
		font-size: 20px;
	}
`;

export const ButtonStyled = styled.a`
	width: 400px;
	height: 50px;
	margin: 60px 0px;

	border-radius: 25px;
	cursor: pointer;

	text-align: center;
	line-height: 48px;
	font-size: 25px;
	font-weight: 900;
	text-transform: uppercase;

	text-decoration: none;
	color: var(--primaryColor);
	background: #ffffff;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	transition: all 0.2s linear;

	&:hover {
		transition: all 0.2s linear;
		transform: scale(1.1);
		filter: drop-shadow(0px 4px 4px rgba(0.1, 0.1, 0.1, 1));
	}
`;
