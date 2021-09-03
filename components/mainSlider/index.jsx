import { useContext, useState } from 'react'
import Image from 'next/image'

import s from './mainSlider.module.scss'

import { motion } from 'framer-motion'
import Icons from '../icons'
import InstaIcon from '../icons/instagram'
import ShareIcon from '../icons/share'
import Btn from '../btn/Btn'
// import Pagination from '../Pagination'

import { animation } from '../../animation/animation'
import { ContextAnimation } from '../../context/contextAnimation'
const MainSlider = () => {


	const [slide, setSlide] = useState(1)
	const [slideAnim, setSlideAnim] = useContext(ContextAnimation)

	const slideCount = 2 // заменить на arr.length??

	return (
		<div className={s.mainSlider}>
			<div className="container">
				<div className={s.slider}>
					<motion.div
						transition={{ ease: [0.17, 0.67, 0.53, 0.37] }}
						animate={slide === 1 ? 'show' : 'hidden'}
						variants={animation.displayNoneAnim}
						className={s.slide}
					>
						<div className={s.slide__info}>
							<Image
								src="/static/images/slider/one/brand-logo.png"
								alt="brand"
								width={100}
								height={100}
								className={s.slide__infoImg}
							/>
							<h2>Stone island</h2>

							<p className={s.slide__text}>
								знаменитая на весь мир итальянская дизайн лаборатория, создающая
								премиум одежду с ипользованием хай-тек и милитари технологий с
								1982.
							</p>
							<Btn
								setSlideAnim={setSlideAnim}
								title="каталог"
								color="black"
								link={'products'}
							/>
						</div>
						<div className={s.slide__img}>
							<div
								className={
									slideAnim
										? `${s.slide__man} ${s.slide__man__anim}`
										: s.slide__man
								}
							>
								<Image
									src="/static/images/slider/one/man.png"
									width={302}
									height={762}
									alt="brand"
									layout="intrinsic"

								/>
							</div>
							<div
								className={
									slideAnim
										? `${s.slide__text__imgL} ${s.slide__text__imgL__anim}`
										: s.slide__text__imgL
								}
							>
								<Image
									src="/static/images/slider/one/stone.png"
									alt="cart"
									width={102}
									height={468}
									layout="intrinsic"
								
								/>
							</div>
							<div
								className={
									slideAnim
										? `${s.slide__text__imgR} ${s.slide__text__imgR__anim}`
										: s.slide__text__imgR
								}
							>
								<Image
									src="/static/images/slider/one/island.png"
									alt="cart"
									width={102}
									height={468}
								
								/>
								
							</div>
							<div
								className={
									slideAnim
										? `${s.slide__mash} ${s.slide__mash__anim}`
										: s.slide__mash
								}
							>
								<Image
									src="/static/images/slider/one/mash-1.jpg"
									width={1089}
									height={895}
									alt="mash"
									layout="intrinsic"
								/>
							</div>
						</div>
					</motion.div>

					<motion.div
						transition={{ ease: [0.17, 0.67, 0.53, 0.37] }}
						animate={slide === 2 ? 'show' : 'hidden'}
						variants={animation.displayNoneAnim}
						className={s.slide}
					>
						<div className={s.slide__info}>

							<div className={s.slide__brand}>
								<Image
									src="/static/images/slider/two/brand-logo.png"
									alt="brand"
									width={100}
									height={47}
									className={s.slide__infoImg}
								/>
							</div>
							<h2>evisu</h2>

							<p className={s.slide__text}>
								кропотливая работа с трудоемкими методиками позволяют сохранить
								традиционное производство японского денима <br />с 1991 года
							</p>

							<Btn
								setSlideAnim={setSlideAnim}
								title="каталог"
								color="black"
								link={'products'}
							/>
						</div>
						<div className={s.slide__img}>
							<div className={`${s.slide__man} ${s.slide__man_two}`}>
								<Image
									src="/static/images/slider/two/man.png"
									width={494}
									height={770}
									alt="brand"
								/>
							</div>
							<div
								className={`${s.slide__text__imgL} ${s.slide__text__imgL_two}`}
							>
								
								<Image
									src="/static/images/slider/two/text1.png"
									alt="evisu"
									width={102}
									height={401}
								
								/>
							</div>
							<div
								className={`${s.slide__text__imgR} ${s.slide__text__imgR_two}`}
							>
								<Image
									src="/static/images/slider/two/text2.png"
									alt="evisu"
									width={108}
									height={408}
								
								/>
							</div>

							<div className={`${s.slide__mash} ${s.slide__mash_two}`}>
								<Image
									src="/static/images/slider/two/mash.png"
									width={904}
									height={875}
									alt="mash"
								/>
							</div>
						</div>
					</motion.div>

					<div>
						{/*<Pagination*/}
						{/*	slide={slide}*/}
						{/*	setSlide={setSlide}*/}
						{/*	withCount={true}*/}
						{/*	position="right"*/}
						{/*/>*/}
					</div>
					<div className={s.slide__icons}>
						<Icons>
							<InstaIcon />
							<ShareIcon />
						</Icons>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainSlider
