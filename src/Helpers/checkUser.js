function checkUser(users, userInput, pwInput, valueIsLogged, setShowMessage) {
	let isUser = users.find(
		(user) => user.id === userInput && user.password === pwInput
	);
	isUser !== undefined ? valueIsLogged(true) : setShowMessage(true);
}

export default checkUser;
