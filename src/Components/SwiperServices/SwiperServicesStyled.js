import styled from "styled-components";
import { Swiper } from "swiper/react";

export const SwiperContainer = styled.div`
	display: none;
	width: 100%;
	height: 420;
	@media (max-width: 820px) {
		display: flex;
	}
`;

export const SwiperStyled = styled(Swiper)`
	padding-top: 30px;
	height: 480px;
`;
