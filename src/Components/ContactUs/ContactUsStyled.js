import { keyframes } from "styled-components";
import styled from "styled-components";

const opac = keyframes`
	0%{opacity:0.5}
	25%{opacity:0.7}
	50%{opacity:0.9}
	100%{opacity:1}
`;

export const ContactUsContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	left: 0px;
	top: 0px;
	transition: width 2s;
	z-index: 997;
`;

export const ContactUsContainer2 = styled.a`
	background-color: rgba(0, 0, 0, 0.555);
	width: 100%;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	left: 0px;
	top: 0px;
	border: none;
	animation: ${opac} 1s linear;
	z-index: 998;
`;

export const FormContainer = styled.form`
	max-width: 450px;
	height: 410px;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;

	justify-content: center;
	align-items: center;

	border: 1px solid #eeeeee;
	border-radius: 6px;
	background-color: #ffffff;

	padding: 15px;

	gap: 10px;
	position: relative;
	opacity: ${({ opacity }) => opacity || 0};
	animation: ${opac} 1s linear;
	z-index: 999;

	@media (max-width: 540px) {
		align-self: center;
		width: 98%;
		border: 1px solid var(--secondColor);
		padding: 5px;
		margin: 0 auto;
	}
`;
