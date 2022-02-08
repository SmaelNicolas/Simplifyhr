import styled from "styled-components";
import { keyframes } from "styled-components";

const opac = keyframes`
	0%{opacity:0.5}
	25%{opacity:0.7}
	50%{opacity:0.9}
	100%{opacity:1}

`;

export const Labels = styled.label`
	width: 100%;
	color: #ffff;
	font-size: 15px;
	text-align: start;
	padding-left: 10px;
	letter-spacing: 0.4px;
	animation: ${opac} 1s linear;
`;

export const Inputs = styled.input`
	width: 100%;
	height: 50px;
	border-radius: 3px;
	padding-left: 20px;
	animation: ${opac} 1s linear;
`;

export const InputBodyContent = styled.textarea`
	width: 100%;
	height: 200px;
	padding: 15px;
	animation: ${opac} 1s linear;
`;

export const Divisor = styled.div`
	width: max(${({ width }) => width || "49%"}, 300px);
	height: auto;
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 10px;
`;

export const Button = styled.button`
	width: 250px;
	height: 30px;
	background-color: #8080808d;
	color: #ffff;

	margin: 0 auto;
	animation: ${opac} 1s linear;
`;
