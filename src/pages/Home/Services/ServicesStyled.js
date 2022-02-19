import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { keyframes } from "styled-components";

const moveUpDown = keyframes`
	0% {background-position:top}
	50% {background-position:center}
	100% {background-position:top}
`;

export const ServicesContainer = styled.section`
	width: 100%;
	min-height: 100vh;
	padding: 100px 0px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background: linear-gradient(116.82deg, #524ef8 0%, #57add9 100%);
	mix-blend-mode: normal;
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

export const ButtonStyled = styled.a`
	width: 400px;
	height: 50px;
	margin: 60px 0px;

	border-radius: 25px;
	cursor: pointer;

	text-align: center;
	line-height: 48px;
	font-size: 22px;
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

export const ButtonToTop = styled(HashLink)`
	width: 50px;
	height: 50px;
	background-image: url(${({ url }) => `${url}`});
	background-position: center;
	background-repeat: no-repeat;
	background-size: 50%;
	border-radius: 50%;
	margin-top: 15px;
	background-color: transparent;
	animation: ${moveUpDown} 2s linear infinite;
`;
