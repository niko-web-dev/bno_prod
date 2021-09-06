import s from './btn.module.scss'
import { useRouter } from 'next/router'
import {useWindowSize}  from '../../hooks'

const Btn = ({ setSlideAnim, color, title, link }) => {
	const windowSize = useWindowSize()
	const router = useRouter()

	return (
		<button
			className={s.btn}
			style={{
				border: color === 'black' ? '2px solid black' : '2px solid white',

			}}
			onMouseOver={() => {
				windowSize.width > 830 && setSlideAnim && setSlideAnim(true)
			}}
			onMouseOut={() => {
				windowSize.width > 830 && setSlideAnim && setSlideAnim(false)
			}}
			onClick={() => router.push(link)}
		>
			{title}
		</button>
	)
}

export default Btn
