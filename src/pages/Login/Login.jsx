import { TitleStyled, FormStyled, LoginPageStyled } from "./LoginStyled";
import LoginForm from "./LoginForm/LoginForm";

function Login() {
	return (
		<LoginPageStyled>
			<TitleStyled>Login</TitleStyled>
			<FormStyled method='post'>
				<LoginForm></LoginForm>
			</FormStyled>
		</LoginPageStyled>
	);
}

export default Login;
