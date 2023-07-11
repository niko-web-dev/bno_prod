import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from 'popmotion'
import { animation } from '../../animation/animation'

import s from './card-slider.module.scss'
import Pagination from '../pagination'
import Image from 'next/image'

const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => {
	return Math.abs(offset) * velocity
}

export const SliderMotion = ({ gallery }) => {
	// const [[page, direction], setPage] = useState([0, 0])
	const [slideSrc, setSlideSrc] = useState([])
	const [slide, setSlide] = useState(1)

	useEffect(() => {
		const image = []
		const images = Object.values(gallery)
		images.forEach((img) => {
			image.push(img.src)
			setSlideSrc(image)
		})
	}, [gallery])

	return (
		<>
			{slideSrc.map((img, index) => {
				return (
					<div key={index} className={s.card__slide}>
						{/*<Image src={img} height={600} width={362} alt="image" />*/}
					</div>
				)
			})}

			<Pagination slide={slide} setSlide={setSlide} withCount position="left" />
		</>
	)
}
