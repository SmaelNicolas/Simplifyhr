import { useContext } from "react";
import { TitleStyled, FormStyled, LoginPageStyled } from "./LoginStyled";
import LoginForm from "./LoginForm/LoginForm";
import LoginImages from "./LoginImages/LoginImages";
import Admin from "../Admin/Admin";
import { LoginContext } from "../../Context/LoginContext";

function Login() {
	const { isLogged } = useContext(LoginContext);
	return (
		<LoginPageStyled>
			{isLogged ? (
				<Admin />
			) : (
				<>
					<LoginImages />
					<TitleStyled>Login</TitleStyled>
					<FormStyled method="post">
						<LoginForm />
					</FormStyled>
				</>
			)}
		</LoginPageStyled>
	);
}

export default Login;
