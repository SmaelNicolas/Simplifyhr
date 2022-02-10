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
	color: #524ef8;
	font-size: 15px;
	text-align: start;
	padding-left: 10px;
	letter-spacing: 0.4px;
	animation: ${opac} 0.5s linear;
`;

export const Inputs = styled.input`
	width: 100%;
	height: 50px;
	border-left: 4px solid #c2c0ff;
	border-bottom: 4px solid #c2c0ff;
	border-top: 1px solid #c2c0ff;
	border-right: 1px solid #c2c0ff;
	border-radius: 3px;
	padding-left: 20px;
	animation: ${opac} 0.5s linear;
`;

export const InputBodyContent = styled.textarea`
	width: 100%;
	height: 200px;
	padding: 15px;
	animation: ${opac} 0.5s linear;
	resize: none;
	border-left: 4px solid #c2c0ff;
	border-bottom: 4px solid #c2c0ff;
	border-top: 1px solid #c2c0ff;
	border-right: 1px solid #c2c0ff;
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
	height: 43px;
	background-color: ${({ bgColor }) => bgColor || "#524ef8"};
	color: ${({ color }) => color || "white"};
	border: none;
	border-radius: 10px;
	font-weight: bolder;
	letter-spacing: 0.3px;
	font-size: 14px;
	text-transform: uppercase;

	margin: 0 auto;
	animation: ${opac} 0.5s linear;
	cursor: pointer;

	&:hover {
		border: 1px solid black;
	}
`;
