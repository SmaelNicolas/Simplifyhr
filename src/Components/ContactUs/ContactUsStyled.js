import styled from "styled-components";

export const ContactUsContainer = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #000000d1;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const FormContainer = styled.div`
	max-width: 800px;
	height: auto;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	justify-content: flex-start;
	align-items: flex-start;

	border: 1px solid black;
	border-radius: 6px;
	padding: 20px;
	background-color: black;

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
