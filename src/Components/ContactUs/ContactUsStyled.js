import styled from "styled-components";

export const ContactUsContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	background-color: hsl(0, 1%, 77%);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const FormContainer = styled.div`
	min-width: 300px;
	max-width: 780px;
	height: auto;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	justify-content: flex-start;
	align-items: flex-start;

	border: 1px solid black;
	border-radius: 6px;
	background-color: black;

	padding: 30px;
	margin: 5px;

	gap: 10px;
	position: relative;
`;

export const CloseForm = styled.div`
	width: 20px;
	height: 30px;
	position: absolute;
	right: 5px;
	top: 5px;
	color: white;
	font-size: 20px;
	cursor: pointer;
`;
