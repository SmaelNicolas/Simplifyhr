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

export const InputPostContent = styled.textarea`
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
`;
