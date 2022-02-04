import styled from "styled-components";

export const Labels = styled.label`
	width: 100%;
	color: #ffff;
	font-size: 15px;
	text-align: start;
	padding-left: 10px;
	letter-spacing: 0.4px;
`;

export const Inputs = styled.input`
	width: 100%;
	height: 50px;
	border-radius: 3px;
	padding-left: 20px;
`;

export const InputBodyContent = styled.textarea`
	width: 100%;
	height: 200px;
	padding: 15px;
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
`;
