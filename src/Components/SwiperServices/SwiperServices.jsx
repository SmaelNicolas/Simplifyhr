import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { SwiperSlide } from "swiper/react";
import { SwiperContainer, SwiperStyled } from "./SwiperServicesStyled";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SwiperCss.css";
import Card from "../../pages/Home/Services/CardsContainer/Cards/Card/Card";
import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

function SwiperServices() {
	const { data } = useContext(LanguageContext);

	return (
		<SwiperContainer>
			<SwiperStyled
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				slidesPerView={1.3}
				spaceBetween={100}
				centeredSlides={true}
				pagination={{
					clickable: true,
				}}
				navigation
				scrollbar={{ draggable: true }}
			>
				<SwiperSlide>
					<Card
						key='cardSwiper3'
						title={data.services.cards.card1.title}
						body={data.services.cards.card1.body}
						subBody={data.services.cards.card1.subBody}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Card
						key='cardSwiper2'
						title={data.services.cards.card2.title}
						body={data.services.cards.card2.body}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Card
						key='cardSwiper3'
						title={data.services.cards.card3.title}
						body={data.services.cards.card3.body}
						fSize='20px'
					/>
				</SwiperSlide>
			</SwiperStyled>
		</SwiperContainer>
	);
}

export default SwiperServices;
