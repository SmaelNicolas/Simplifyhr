import React from "react";
import ErrorItems from "./ErrorItems/ErrorItems";
import { ErrorContainer, ErrorBackground } from "./ErrorMessageStyled";

function ErrorMessage({ click, message }) {
	return (
		<ErrorBackground>
			<ErrorContainer>
				<ErrorItems click={click} message={message} />
			</ErrorContainer>
		</ErrorBackground>
	);
}

export default ErrorMessage;
