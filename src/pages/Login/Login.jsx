import { TitleStyled, FormStyled } from "./LoginStyled";
import LoginForm from "./LoginForm/LoginForm";

function Login() {
	return (
		<>
			<TitleStyled>Login</TitleStyled>
			<FormStyled method='post'>
				<LoginForm></LoginForm>
			</FormStyled>
		</>
	);
}

export default Login;
