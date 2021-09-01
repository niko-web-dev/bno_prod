import {useContext, useEffect, useState } from 'react'
import s from '../menu/menu.module.scss'
import Link from 'next/link'
import { ContextCard } from '../../context/contextCard'

const CardIcon = () => {
	const [cardLs, setCardLs] = useContext(ContextCard)

	return (
		<div className="header__card" style={{ marginLeft: '35px' }}>
			<Link href="/Card" shallow={true} scroll={false}>
				<a className={s.header__card}>
					<svg
						width="19"
						height="18"
						viewBox="0 0 19 18"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M14.0167 10.8333H7.03349L5.53291 5.33333H16.7667L14.0167 10.8333ZM18.3259 4.369C17.9895 3.8245 17.4065 3.5 16.7667 3.5H5.03333L4.46774 1.42558C4.35866 1.02683 3.99658 0.75 3.58316 0.75H1.74983C1.24291 0.75 0.83316 1.16067 0.83316 1.66667C0.83316 2.17267 1.24291 2.58333 1.74983 2.58333H2.88283L5.44858 11.9911C5.55766 12.3898 5.91974 12.6667 6.33316 12.6667H14.5832C14.9306 12.6667 15.2477 12.4705 15.4036 12.1597L18.4066 6.15283C18.6935 5.57992 18.6623 4.9135 18.3259 4.369ZM5.87501 14.5C5.11601 14.5 4.50001 15.1151 4.50001 15.875C4.50001 16.6349 5.11601 17.25 5.87501 17.25C6.63401 17.25 7.25001 16.6349 7.25001 15.875C7.25001 15.1151 6.63401 14.5 5.87501 14.5ZM13.6667 15.875C13.6667 15.1151 14.2827 14.5 15.0417 14.5C15.8007 14.5 16.4167 15.1151 16.4167 15.875C16.4167 16.6349 15.8007 17.25 15.0417 17.25C14.2827 17.25 13.6667 16.6349 13.6667 15.875Z"
							fill="#231F20"
						/>
					</svg>
					<span className="card__count">{cardLs?.length}</span>
				</a>
			</Link>

			<style jsx>{``}</style>
		</div>
	)
}

export default CardIcon
