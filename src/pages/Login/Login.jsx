import { useContext } from "react";
import { TitleStyled, FormStyled, LoginPageStyled } from "./LoginStyled";
import LoginForm from "./LoginForm/LoginForm";
import LoginImages from "./LoginImages/LoginImages";
import Admin from "../Admin/Admin";
import { IsLoggedContext } from "../../Context/isLoggedContext";

function Login() {
	const { isLogged, setIsLogged } = useContext(IsLoggedContext);

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
