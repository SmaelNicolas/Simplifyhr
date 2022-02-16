import React from "react";
import SuccesItems from "./SuccessItems/SuccesItems";
import { SuccessContainer, SuccesBackground } from "./SuccessMessageStyled";

function SuccessMessage({ click, message }) {
	return (
		<SuccesBackground>
			<SuccessContainer>
				<SuccesItems click={click} message={message} />
			</SuccessContainer>
		</SuccesBackground>
	);
}

export default SuccessMessage;
