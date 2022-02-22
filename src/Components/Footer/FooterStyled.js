import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

export const FooterContainer = styled.div`
	width: 100%;
	height: 40vh;
	background-color: #000;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #fff;
`;

export const Left = styled.div`
	flex: 1;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const Message = styled.h4`
	position: relative;
	font-size: 2rem;
	font-weight: 600;
	overflow: hidden;
  margin-bottom: 20px;

  @media screen and (max-width: 440px) {
    font-size: 1.5rem;
  }
`;

export const Title = styled.span``;

export const Cursor = styled.span``;

export const Email = styled.a`
	cursor: pointer;
	font-size: 20px;
	text-decoration: none;
	color: #fff;

  @media screen and (max-width: 834px) {
    font-size: 1rem;
  }
`;

export const Right = styled.div`
	flex: 1;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: space-evenly;
	height: 100%;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;

export const FooterLink = styled(HashLink)`
	text-decoration: none;
	color: #fff;
  font-size: 12px;
`;
