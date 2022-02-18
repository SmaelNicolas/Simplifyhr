import styled from "styled-components";
import { NavHashLink } from "react-router-hash-link";
import { keyframes } from "styled-components";

const moveUpDown = keyframes`
	0% {background-position:top}
	50% {background-position:center}
	100% {background-position:top}
`;

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
	font-size: 23px;
	font-weight: 900;
	text-transform: uppercase;

	text-decoration: none;
	color: var(--primaryColor);
	background: #ffffff;
	transition: all 0.1s linear;

	box-shadow: 0px 1px 1px 1px rgba(158, 154, 154, 0.77);
	-webkit-box-shadow: 0px 1px 1px 1px rgba(158, 154, 154, 0.77);
	-moz-box-shadow: 0px 1px 1px 1px rgba(158, 154, 154, 0.77);

	&:hover {
		transition: all 0.1s linear;
		transform: scale(1.1);
		filter: drop-shadow(0px 4px 4px rgba(0.1, 0.1, 0.1, 1));
	}

	@media (max-width: 620px) {
		width: 320px;
		font-size: 15px;
	}

	@media (max-width: 370px) {
		width: 300px;
		font-size: 15px;
	}
`;

export const ButtonToTop = styled(NavHashLink)`
	width: 50px;
	height: 50px;
	background-image: url(${({ url }) => `${url}`});
	background-position: center;
	background-repeat: no-repeat;
	background-size: 50%;
	border-radius: 50%;
	margin-top: 15px;
	background-color: var(--secondTitleColor);
	animation: ${moveUpDown} 2s linear infinite;
`;
