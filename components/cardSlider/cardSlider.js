import { FC, useRef, useState } from 'react'
import s from './card-slider.module.scss'
import Image from 'next/image'
import SwiperCore, { Navigation, EffectFade, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Navigation, EffectFade, Pagination])

const CardSlider = ({ images }) => {
	const navigationPrevRef = useRef(null)
	const navigationNextRef = useRef(null)

	const pagination = {
		clickable: false,
		el: `.${s.card__sliderPagLine}`,
		renderBullet: function (index, className) {
			return '<div class="' + className + '"></div>'
		},
		bulletClass: s.card__sliderBullet,
		bulletActiveClass: s.card__sliderBulletActive,
	}

	return (
		<div className={s.card__slider}>
			<div className={s.card__sliderPag}>
				<button ref={navigationPrevRef} className={s.card__slider__prev}>
					<Image
						src="/static/images/slider/slide-arr.png"
						alt="brand"
						width={50}
						height={50}
					/>
				</button>
				<div className={s.card__sliderPagLine}></div>
				<button ref={navigationNextRef} className={s.card__slider__next}>
					<Image
						src="/static/images/slider/slide-arr.png"
						alt="brand"
						width={50}
						height={50}
					/>
				</button>
			</div>
			<Swiper
				direction={'vertical'}
				pagination={pagination}
				loop={false}
				slidesPerView={1}
				className={s.card__sliderWrapper}
				onInit={(swiper) => {
					swiper.params.navigation.prevEl = navigationPrevRef.current
					swiper.params.navigation.nextEl = navigationNextRef.current
					swiper.navigation.init()
					swiper.navigation.update()
				}}
			>
				{images.map((img, index) => {
					return (
						<SwiperSlide key={index} className={s.card__slide}>
							<Image
								src={img?.src}
								alt="Picture of the author"
								layout="fill"
								className={s.card__slideImg}
							/>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</div>
	)
}

export default CardSlider
