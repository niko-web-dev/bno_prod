import s from './icons.module.scss'

const Icons = ({ children }) => {
	return (
		<div className={s.icons}>
			{children}
		</div>
	)
}

export default Icons
