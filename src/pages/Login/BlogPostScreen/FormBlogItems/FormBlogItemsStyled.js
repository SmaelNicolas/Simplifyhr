import styled from "styled-components";

export const InputContainer = styled.div`
	width: 350px;
	height: 500px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	@media (max-width: 1089px) {
		width: 98%;
	}
`;

export const BodyContainer = styled.div`
	width: 800px;
	height: 600px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	@media (max-width: 1089px) {
		padding-top: 20px;
		width: 98%;
	}
`;

export const Inputs = styled.input`
	width: 300px;
	height: 50px;
	border-radius: 3px;
	padding-left: 20px;
	width: 80%;
	@media (max-width: 1089px) {
		width: 100%;
	}
`;

export const InputPostContent = styled.div`
	width: 100%;
	height: 470px;
	padding: 15px;
	resize: none;
`;

export const Labels = styled.label`
	width: 60%;

	font-size: 25px;
	align-self: flex-start;

	color: var(--primaryColor);

	@media (max-width: 1089px) {
		width: 100%;
	}
`;

export const Submit = styled.button`
	width: 200px;
	height: 50px;

	font-size: 20px;

	align-self: flex-end;
	background-color: var(--primaryColor);
	color: var(--secondTitleColor);

	border-radius: 28px;
	cursor: pointer;

	transition: all 0.1s linear;

	box-shadow: 0px 1px 1px 1px rgba(158, 154, 154, 0.77);
	-webkit-box-shadow: 0px 1px 1px 1px rgba(158, 154, 154, 0.77);
	-moz-box-shadow: 0px 1px 1px 1px rgba(158, 154, 154, 0.77);

	&:hover {
		transition: all 0.1s linear;
		transform: scale(1.01);
		filter: drop-shadow(0px 4px 4px rgba(0.1, 0.1, 0.1, 1));
	}
	font-family: var(--montserratFont);
`;
