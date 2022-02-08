import styled from "styled-components";

export const LoginPageStyled = styled.section`
	width: ${({ width }) => width || "100%"};
	height: ${({ height }) => height || "auto"};
	background-color: ${({ backgroundColor }) => backgroundColor || "none"};
	padding: ${({ padding }) => padding || "100px"};
	display: ${({ display }) => display || "flex"};
	flex-direction: ${({ flexDirection }) => flexDirection || "column"};
	justify-content: ${({ justifyContent }) => justifyContent || "center"};
	align-items: ${({ alignItems }) => alignItems || "center"};
	gap: ${({ gap }) => gap || "15px"};
	border: ${({ border }) => border || "none"};
`;

export const TitleStyled = styled.div`
	width: ${({ width }) => width || "100%"};
	height: ${({ height }) => height || "auto"};
	padding: ${({ padding }) => padding || "25px 0px"};
	color: ${({ color }) => color || "black"};
	background-color: ${({ backgroundColor }) => backgroundColor || "none"};
	font-size: ${({ fontSize }) => fontSize || "45px"};
	font-weight: ${({ fontWeight }) => fontWeight || "800"};
	letter-spacing: ${({ letterSpacing }) => letterSpacing || "0.4px"};
	text-align: ${({ textAlign }) => textAlign || "center"};
`;

export const FormStyled = styled.form`
	width: 320px;
	height: 400px;
	background-color: #000000d1;
	display: flex;
	flex-direction: column;

	justify-content: space-evenly;
	align-items: center;

	border: 1px solid black;
	border-radius: 6px;
`;
