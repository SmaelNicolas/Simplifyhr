import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

export const HeaderContainer = styled.div`
	height: 100vh;
	width: 100%;
	background-color: var(--primaryColor);
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`;

export const HeaderBg = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	z-index: 1;
`;

export const HeaderVideo = styled.video`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	background: var(--primaryColor);
`;

export const InfoContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 30px;
	z-index: 5;
	//background-color: var(--primaryColor);
	height: 100%;
`;

export const Title = styled.h2`
	font-size: 50px;
`;

export const Subtitle = styled.h3`
	font-size: 30px;
  margin: 30px 0;
`;

export const Button = styled(HashLink)`
	font-size: 20px;
	font-weight: 400;
	background-color: var(--primaryColor);
	color: #fff;
	text-decoration: none;
	padding: 10px 20px;
  border-radius: 40px;
  align-self: center;
`;

export const ImgContainer = styled.div`
	flex: 1;
`;
