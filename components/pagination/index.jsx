import cn from 'classnames'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useContext } from 'react'
import { animation } from '../../animation/animation'
import { ContextAnimation } from '../../context/contextAnimation'
import { changeSlideCount } from '../../utils/utils'
import s from './pagination.module.scss'

const Pagination = ({
						slide,
						setSlide,
						withCount,
						position,
						slideCount = 2,
					}) => {
	const [slideAnim] = useContext(ContextAnimation)

	const clickSliderLine = () => {
	    if (slide === 1) return setSlide(2)
	    if (slide === 2) return setSlide(1)
	}

	return (
		<div
			className={cn(s.pagination__wrap, {
				[s.pagination__wrap__left]: position === 'left',
				[s.pagination__wrap__right]: position === 'right',
			})}
		>
			<div
				onClick={clickSliderLine}
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

				<button type="button" className={s.pagination__count}>
					<motion.div
						// transition={{ ease: [0.4, 0.4, 0.4, 0.4] }}
						animate={!slideAnim ? 'norm' : 'scale'}
						variants={animation.scaleAnim}
						style={{ opacity: withCount ? 1 : 0 }}
						className={s.pagination__count_inner}
					>
						<span> 0 {slide} /</span>
						<span className={s.count__opacity}> 0 {slideCount} </span>
					</motion.div>
				</button>
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
