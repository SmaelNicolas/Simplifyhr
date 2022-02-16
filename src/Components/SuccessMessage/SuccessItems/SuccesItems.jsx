import React from "react";
import {
	SuccesButton,
	SuccesImg,
	SuccessTextMessage,
} from "./SuccesItemsStyled";

import ImgSucces from "../../../Assest/success.svg";

function SuccesItems({ click, message }) {
	return (
		<>
			<SuccesImg url={ImgSucces} />
			<SuccessTextMessage>{message}</SuccessTextMessage>
			<SuccesButton onClick={click}>Continue</SuccesButton>
		</>
	);
}

export default SuccesItems;
