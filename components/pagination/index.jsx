import { FC, useContext } from 'react'
import Image from 'next/image'

import s from './pagination.module.scss'
import cn from 'classnames'

import { motion } from 'framer-motion'
import { animation } from '../../animation/animation'
import { changeSlideCount } from '../../utils/utils'
import { ContextAnimation } from '../../context/contextAnimation'

const Pagination = ({
	slide,
	setSlide,
	withCount,
	position,
	slideCount = 2,
}) => {
	const [slideAnim] = useContext(ContextAnimation)

	return (
		<div
			className={cn(s.pagination__wrap, {
				[s.pagination__wrap__left]: position === 'left',
				[s.pagination__wrap__right]: position === 'right',
			})}
		>
			<div
				className={cn(s.pagination, {
					[s.pagination__border_one]: slide === 1 && !slideAnim,
					[s.pagination__border_two]: slide === 2 && !slideAnim,
				})}
			>
				<motion.div
					className={s.pagination__prev}
					transition={{ ease: [0.4, 0.4, 0.4, 0.4] }}
					animate={!slideAnim ? 'show' : 'hidden'}
					variants={animation.opacityAnim}
					onClick={() => setSlide(changeSlideCount(slide, 'prev', slideCount))}
				>
					<Image
						src="/static/images/slider/slide-arr.png"
						alt="brand"
						width={50}
						height={50}
					/>
				</motion.div>

				<div className={s.pagination__count}>
					<motion.div
						// transition={{ ease: [0.4, 0.4, 0.4, 0.4] }}
						animate={!slideAnim ? 'norm' : 'scale'}
						variants={animation.scaleAnim}
						style={{ opacity: withCount ? 1 : 0 }}
					>
						<span> 0 {slide} /</span>
						<span className={s.count__opacity}> 0 {slideCount} </span>
					</motion.div>
				</div>
				<motion.div
					className={s.pagination__next}
					transition={{ ease: [0.17, 0.67, 0.53, 0.37] }}
					animate={!slideAnim ? 'show' : 'hidden'}
					variants={animation.opacityAnim}
					onClick={() => setSlide(changeSlideCount(slide, 'next', slideCount))}
				>
					<Image
						src="/static/images/slider/slide-arr.png"
						alt="brand"
						width={50}
						height={50}
					/>
				</motion.div>
			</div>
		</div>
	)
}

export default Pagination
