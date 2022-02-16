import styled from "styled-components";
import { keyframes } from "styled-components";

const opac = keyframes`
	0%{opacity:0.5}
	25%{opacity:0.7}
	50%{opacity:0.9}
	100%{opacity:1}

`;

export const Labels = styled.label`
	width: 90%;
	padding-left: 10px;

	color: #524ef8;

	font-size: 15px;
	font-weight: 600;
	text-align: start;
	letter-spacing: 0.5px;

	animation: ${opac} 0.5s linear;
	z-index: 99;
`;

export const Inputs = styled.input`
	width: 90%;
	height: 50px;
	border-left: 4px solid #c2c0ff;
	border-bottom: 4px solid #c2c0ff;
	border-top: 1px solid #c2c0ff;
	border-right: 1px solid #c2c0ff;
	border-radius: 3px;
	padding-left: 20px;
	animation: ${opac} 0.5s linear;
	z-index: 98;
	color: black;
	font-weight: 600;

	&:focus {
		outline: none;
	}
`;

export const InputBodyContent = styled.textarea`
	width: 90%;

	height: 100px;
	padding: 15px;
	animation: ${opac} 0.5s linear;
	resize: none;
	border-left: 4px solid #c2c0ff;
	border-bottom: 4px solid #c2c0ff;
	border-top: 1px solid #c2c0ff;
	border-right: 1px solid #c2c0ff;
	z-index: 97;

	&:focus {
		outline: none;
	}
`;

export const Divisor = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: row;
	gap: 10px;
	padding: 10px;
	z-index: 96;
`;

export const Button = styled.button`
	width: 260px;
	height: 58px;
	background-color: var(--primaryColor);
	color: var(--secondTitleColor);

	border: none;
	border-radius: 28px;

	font-weight: bolder;
	letter-spacing: 0.3px;
	font-size: 14px;
	text-transform: uppercase;

	margin: 0 auto;
	animation: ${opac} 0.5s linear;
	cursor: pointer;
	border: 1px solid var(--secondColor);

	transition: all 0.1s linear;
	z-index: 95;

	&:hover {
		transition: all 0.1s linear;
		transform: scale(1.05);
		filter: drop-shadow(0px 4px 4px rgba(0.1, 0.1, 0.1, 1));
	}
`;

export const ButtonCancel = styled(Button)`
	border: 1px solid var(--primaryColor);
	color: var(--primaryColor);
	background-color: var(--secondTitleColor);
	z-index: 40;
`;
