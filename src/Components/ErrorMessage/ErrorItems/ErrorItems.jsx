import React from "react";
import { ErrorButton, ErrorImg, ErrorTextMessage } from "./ErrorItemsStyled";

import ImgError from "../../../Assest/error.svg";

function ErrorItems({ click, message }) {
	return (
		<>
			<ErrorImg url={ImgError}></ErrorImg>
			<ErrorTextMessage>{message}</ErrorTextMessage>
			<ErrorButton onClick={click}>Try Again</ErrorButton>
		</>
	);
}

export default ErrorItems;
