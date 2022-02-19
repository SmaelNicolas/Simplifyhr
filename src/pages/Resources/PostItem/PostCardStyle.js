import { FiberManualRecord } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardContainer = styled.div`
	height: 461px;
	width: 340px;
	display: flex;
	flex-direction: column;
`;
export const Image = styled.img`
	width: 340px;
	height: 336px;
	border-radius: 20px;
`;
export const Info = styled.div`
	margin: 20px 0;
`;
export const Title = styled.p`
	font-family: "Roboto", sans-serif;
	font-weight: 600;
	font-size: 20px;
	letter-spacing: 0.5px;
`;

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;
export const Button = styled(Link)`
	width: 108px;
	height: 34px;
	border-radius: 20px;
	background-color: #a3a3a3;
	border: none;
	cursor: pointer;
	text-decoration: none;
	color: #000;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Dot = styled.div`
	margin: 0 30px;
	height: 0.5em;
  width: 0.5em;
  background-color: #000;
  border-radius: 50%;
`;

export const DateString = styled.p``;
