import { Labels, Inputs, Button } from "./LoginFormStyled";

function LoginForm() {
	return (
		<>
			<Labels htmlFor='idLogin'>Username </Labels>
			<Inputs
				type='text'
				id='fname'
				name='idLogin'
				placeholder='Username'
				autoComplete='username'
				required
			></Inputs>

			<Labels htmlFor='password'>Password </Labels>

			<Inputs
				name='password'
				placeholder='Password'
				type='password'
				autoComplete='current-password'
				id='current-password'
				required
			></Inputs>
			<Button
				onClick={(e) => {
					e.preventDefault();
				}}
				type='submit'
			>
				Login
			</Button>
		</>
	);
}

export default LoginForm;
