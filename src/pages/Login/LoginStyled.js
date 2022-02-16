import styled from "styled-components";

export const LoginPageStyled = styled.section`
	width: 100%;
	min-height: 70vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const TitleStyled = styled.div`
	width: 100%;
	height: auto;
	padding: 25px 0px;
	color: var(--primaryColor);
	font-size: 45px;
	font-weight: 700;
	letter-spacing: 0.4px;
	text-align: center;
`;

export const FormStyled = styled.form`
	width: 320px;
	height: 400px;
	display: flex;
	flex-direction: column;

	justify-content: space-evenly;
	align-items: center;

	border: 1px solid var(--secondColor);
	border-radius: 6px;
`;
