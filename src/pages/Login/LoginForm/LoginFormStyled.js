import styled from "styled-components";

export const Labels = styled.label`
	color: var(--secondColor);
	font-size: 25px;
	align-self: flex-start;
	padding-left: 10px;
`;

export const Inputs = styled.input`
	width: 300px;
	height: 50px;
	border-radius: 3px;
	padding-left: 20px;
	border: 1px solid var(--secondColor);
	border-radius: 5px;
	font-size: 20px;
`;

export const InputCheckbox = styled.input`
	width: 20px;
	height: 20px;
	border-radius: 50pxpx;
`;

export const RememberMe = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
`;

export const Button = styled.button`
	width: 250px;
	height: 58px;
	background-color: var(--primaryColor);
	border: 1px solid var(--primaryColor);
	color: #ffff;
	border-radius: 28px;
	margin: 30px 0px;
	font-size: 20px;
	font-weight: 600;
	cursor: pointer;

	transition: all 0.1s linear;

	box-shadow: 0px 1px 1px 1px rgba(158, 154, 154, 0.77);
	-webkit-box-shadow: 0px 1px 1px 1px rgba(158, 154, 154, 0.77);
	-moz-box-shadow: 0px 1px 1px 1px rgba(158, 154, 154, 0.77);

	&:hover {
		transition: all 0.1s linear;
		transform: scale(1.02);
		filter: drop-shadow(0px 4px 4px rgba(0.1, 0.1, 0.1, 1));
	}
`;
