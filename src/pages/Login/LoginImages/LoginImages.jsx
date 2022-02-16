import React from "react";
import { ImageContainer } from "./LoginImagesStyled";

import loginImg from "../../../Assets/loginImg.jpg";

function LoginImages() {
	return (
		<>
			<ImageContainer url={loginImg} />
		</>
	);
}

export default LoginImages;
