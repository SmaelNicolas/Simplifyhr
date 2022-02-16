import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Labels, Inputs, Button } from "./LoginFormStyled";
import database from "../../../Firebase/Firebase";
import ErrorMessage from "../../../Components/ErrorMessage/ErrorMessage";

function LoginForm({ valueIsLogged }) {
	const [userInput, setUserInput] = useState();
	const [pwInput, setPwInput] = useState();
	const [users, setUsers] = useState();
	const [showMessage, setShowMessage] = useState(false);

	useEffect(() => {
		getUsers();
	}, []);

	function checkUser() {
		let isUser = users.find(
			(user) => user.id === userInput && user.password === pwInput
		);
		isUser !== undefined ? valueIsLogged(true) : setShowMessage(true);
	}

	async function getUsers() {
		const usersCollection = collection(database, "users");
		const userDocs = await getDocs(usersCollection);
		const userDocsListed = userDocs.docs.map((doc) => doc.data());
		setUsers(userDocsListed);
	}

	const changeValueMessage = () => {
		setShowMessage(!showMessage);
	};

	return showMessage ? (
		<ErrorMessage
			click={changeValueMessage}
			message='Incorrect User or Password'
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
					checkUser();
				}}
				type='submit'
			>
				Login
			</Button>
		</>
	);
}

export default LoginForm;
