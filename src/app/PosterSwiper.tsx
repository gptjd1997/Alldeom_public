"use client";

import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import Image from "next/image";
import poster from "@/Images/SampleImage.jpg";
import poster2 from "@/Images/SampleImage2.png";

export const PosterSwiper = () => {
	return (
		<div className="w-[300px] h-auto flex justify-center m-2">
			<Swiper
				style={{
					"--swiper-navigation-size": "20px",
				}}
				modules={[Navigation, Pagination, EffectFade, Autoplay]}
				effect="fade"
				speed={500}
				loop={true}
				draggable={false}
				navigation
				spaceBetween={500}
				pagination={true}
				autoplay={{ delay: 5000, disableOnInteraction: false }} //disableOnInteraction = 사용자 상호작용시 슬라이더 일시 정지 비활성
			>
				<SwiperSlide>
					<div className="w-auto h-auto">
						<Image src={poster} alt="poster" placeholder="blur" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="w-auto h-auto">
						<Image src={poster2} alt="poster" placeholder="blur" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="w-auto h-auto">
						<Image src={poster} alt="poster" placeholder="blur" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="w-auto h-auto">
						<Image src={poster2} alt="poster" placeholder="blur" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="w-auto h-auto items-center">
						<Image src={poster} alt="poster" placeholder="blur" />
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};
