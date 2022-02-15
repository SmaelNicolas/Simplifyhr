import styled from "styled-components";

export const ContentContainer = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 15px;

	@media (max-width: 1089px) {
		width: 100%;
	}

	@media (max-width: 330px) {
		gap: 50px;
	}
`;
