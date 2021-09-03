import {useContext, useEffect, useState } from 'react'
import s from '../menu/menu.module.scss'
import Link from 'next/link'
import { ContextCard } from '../../context/contextCard'
import Image from 'next/image'

const CardIcon = () => {
	const [cardLs, setCardLs] = useContext(ContextCard)

	return (
		<div className="header__card">
			<Link href="/Card" shallow={true} scroll={false}>
				<a className={s.header__card}>
				<Image
				src="/static/images/shopping-cart.png"
				alt="cart"
				width={22}
				height={22}
			/>
					<span className={s.card__count}>{cardLs?.length}</span>
				</a>
			</Link>

			<style jsx>{``}</style>
		</div>
	)
}

export default CardIcon
