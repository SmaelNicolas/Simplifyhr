import { useState } from "react";
import { TitleStyled, FormStyled, LoginPageStyled } from "./LoginStyled";
import LoginForm from "./LoginForm/LoginForm";
import BlogPostScreen from "./BlogPostScreen/BlogPostScreen";
import LoginImages from "./LoginImages/LoginImages";
import Admin from "../Admin/Admin";

function Login() {
	const [isLogged, setIsLogged] = useState(false);

	const valueIsLogged = (value) => {
		setIsLogged(value);
	};

	return (
		<LoginPageStyled>
			{isLogged ? (
				<Admin />
			) : (
				<>
					<LoginImages />
					<TitleStyled>Login</TitleStyled>
					<FormStyled method='post'>
						<LoginForm valueIsLogged={valueIsLogged} />
					</FormStyled>
				</>
			)}
		</LoginPageStyled>
	);
}

export default Login;
