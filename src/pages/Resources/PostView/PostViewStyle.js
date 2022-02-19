import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	height: auto;
`;

export const ReturnContainer = styled.div`
	width: 100%;
	height: 10vh;
	box-shadow: 0px 1px 1px 1px rgba(158, 154, 154, 0.77);
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

export const ReturnButton = styled(Link)`
	margin-left: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	color: var(--secondColor);
`;

export const MainContainer = styled.div`
	width: 100%;
	min-height: 90vh;
	padding: 30px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
`;

export const Info = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	min-height: 20vh;
`;

export const Title = styled.h1``;

export const Wrapper = styled.div`
	width: 50%;
	display: flex;
	justify-content: space-around;
`;

export const Author = styled.h2`
	font-weight: 400;
	font-size: 18px;
`;

export const VerticalLine = styled.div`
	background-color: #666;
	height: 24px;
	width: 2px;
	border-radius: 1px;
`;

export const ReadTime = styled.p`
	font-weight: 400;
	font-size: 18px;
`;

export const Image = styled.img`
	width: 80%;
  margin: 30px 0;
  height: 50vh;
  object-fit: cover;
  object-position: center;
  border-radius: 40px;
`;

export const Body = styled.p`
  text-align: justify;
  width: 80%;
  font-size: 18px;
  margin-bottom: 30px;
`;
