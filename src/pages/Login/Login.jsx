import { useContext, useEffect } from "react";
import { TitleStyled, FormStyled, LoginPageStyled } from "./LoginStyled";
import LoginForm from "./LoginForm/LoginForm";
import LoginImages from "./LoginImages/LoginImages";
import Admin from "../Admin/Admin";
import { IsLoggedContext } from "../../Context/isLoggedContext";
import { Helmet } from "react-helmet-async";
import { LanguageContext } from "../../Context/LanguageContext";

function Login() {
	const { isLogged } = useContext(IsLoggedContext);
	const { data } = useContext(LanguageContext);

	useEffect(() => {}, [isLogged]);

	return (
		<>
			<Helmet>
				<title>Simplify-hr / Login</title>
				<meta name='description' content={data.description} />
				<link rel='canonical' href='' />
			</Helmet>
			<LoginPageStyled>
				{isLogged ? (
					<Admin />
				) : (
					<>
						<LoginImages />
						<TitleStyled>Login</TitleStyled>
						<FormStyled method='post'>
							<LoginForm />
						</FormStyled>
					</>
				)}
			</LoginPageStyled>
		</>
	);
}

export default Login;
