import styled from "styled-components";

export const LanguageWrapper = styled.div`
	min-width: 120px;
	height: 30px;
	user-select: none;
	overflow: ${(props) => (props.active === true ? "visible" : "hidden")};
	margin: 0 40px;
`;

export const LanguageTitle = styled.p`
	width: 100%;
	height: 100%;
	border-radius: 10px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.03);
	}
`;

export const LanguageDropdown = styled.ul`
	width: 100%;
	height: auto;
	padding: 7px 0;
	border-radius: 10px;
	position: relative;
	border: 1px solid var(--primaryColor);
	color: var(--primaryColor);
	list-style: none;
	margin-top: 3px;
	background-color: #f1f1f1;
`;
export const LanguageOption = styled.li`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
	background-color: #f1f1f1;

	&:hover {
		background-color: var(--thirdColor);
		color: #f1f1f1;
	}
`;
