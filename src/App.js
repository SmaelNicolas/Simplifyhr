import styled from "styled-components";

function App() {
	return <AppContainerStyled>{"COMPONENTES DE LA APP"}</AppContainerStyled>;
}

const AppContainerStyled = styled.div`
	width: calc(100vw - (100vw - 100%));
`;

export default App;
