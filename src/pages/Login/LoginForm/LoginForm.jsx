import { useState, useEffect, useContext } from "react";
import { Labels, Inputs, Button } from "./LoginFormStyled";
import ErrorMessage from "../../../Components/ErrorMessage/ErrorMessage";
import { LanguageContext } from "../../../Context/LanguageContext";
import getUsers from "../../../Helpers/getUsers";
import checkUser from "../../../Helpers/checkUser";

function LoginForm({ valueIsLogged }) {
	const [userInput, setUserInput] = useState();
	const [pwInput, setPwInput] = useState();
	const [users, setUsers] = useState();
	const [showMessage, setShowMessage] = useState(false);

	const { data } = useContext(LanguageContext);

	useEffect(() => {
		getUsers(setUsers);
	}, []);

	const changeValueMessage = () => {
		setShowMessage(!showMessage);
	};

	const checking = () => {
		checkUser(users, userInput, pwInput, valueIsLogged, setShowMessage);
	};

	return showMessage ? (
		<ErrorMessage
			click={changeValueMessage}
			message={data.errorMessage.login}
		/>
	) : (
		<>
			<Labels htmlFor='idLogin'>Username </Labels>
			<Inputs
				type='text'
				id='fname'
				name='idLogin'
				placeholder='Username'
				autoComplete='username'
				required
				onChange={(e) => setUserInput(e.target.value)}
			/>

			<Labels htmlFor='password'>Password </Labels>

			<Inputs
				name='password'
				placeholder='Password'
				type='password'
				autoComplete='current-password'
				id='current-password'
				required
				onChange={(e) => setPwInput(e.target.value)}
			/>

			<Button
				onClick={(e) => {
					e.preventDefault();
					checking();
				}}
				type='submit'
			>
				Login
			</Button>
		</>
	);
}

export default LoginForm;
