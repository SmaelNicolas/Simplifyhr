import styled from "styled-components";

export const ContentContainer = styled.div`
	width: 60%;
	margin-left: 170px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 15px;

	@media (max-width: 1650px) {
		width: 85%;
		margin-left: 110px;
	}

	@media (max-width: 1089px) {
		width: 90%;
		margin-left: 20px;
	}

	@media (max-width: 330px) {
		gap: 50px;
		margin-left: 0px;
	}
`;
