import { useState } from "react";
import { TitleStyled, FormStyled, LoginPageStyled } from "./LoginStyled";
import LoginForm from "./LoginForm/LoginForm";
import BlogPostScreen from "./BlogPostScreen/BlogPostScreen";
import LoginImages from "./LoginImages/LoginImages";

function Login() {
	const [isLogged, setIsLogged] = useState(false);

	const valueIsLogged = (value) => {
		setIsLogged(value);
	};

	return (
		<LoginPageStyled>
			{isLogged ? (
				<BlogPostScreen />
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
