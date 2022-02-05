import { useState, useEffect } from "react";
import { TitleStyled, FormStyled, LoginPageStyled } from "./LoginStyled";
import LoginForm from "./LoginForm/LoginForm";
import BlogPostScreen from "./BlogPostScreen/BlogPostScreen";

function Login() {
	const [isLogged, setIsLogged] = useState(false);

	useEffect(() => {}, [isLogged]);

	const valueIsLogged = (value) => {
		setIsLogged(value);
	};

	return (
		<LoginPageStyled>
			{isLogged ? (
				<>
					<TitleStyled>CREATE BLOG POST</TitleStyled>
					<BlogPostScreen></BlogPostScreen>
				</>
			) : (
				<>
					<TitleStyled>Login</TitleStyled>
					<FormStyled method='post'>
						<LoginForm valueIsLogged={valueIsLogged}></LoginForm>
					</FormStyled>
				</>
			)}
		</LoginPageStyled>
	);
}

export default Login;
