import { useContext, useState } from 'react'
import Link from 'next/link'

import s from './menu.module.scss'

import { motion } from 'framer-motion'
import { contextMenu } from '../../context/contextMenu'
import { animation } from '../../animation/animation'
import MenuBrands from '../menuBrands'
import MenuCategory from '../menuCategory'
import SearchIcon from '../icons/searchIcon'

const Menu = () => {
	const [toggleMenu, setToggleMenu] = useContext(contextMenu)
	const [tab, setTab] = useState('brands')

	function closeMenu(event) {
		event.preventDefault()
		setToggleMenu(false)
	}

	function setTabs(info) {
		event.preventDefault()
		setTab(info)
	}

	const content = () => {
		switch (tab) {
			case 'brands':
				return <MenuBrands />

			case 'categories':
				return <MenuCategory />

			default:
				return <MenuBrands />
		}
	}

	return (
		<>
			<motion.div
				className={s.menu__wrap}
				initial="hidden"
				animate={toggleMenu ? 'visible' : ''}
				variants={animation.animationMenu}
				transition={{ duration: 0.4 }}
			>
				<div className={'container'}>
					<div className={s.menu__wrapper}>
						<div className={s.header__menu}>
							<button className={s.header__menu__close} onClick={closeMenu}>
								<svg
									width="41"
									height="16"
									viewBox="0 0 41 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M0.292892 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM41 9H1V7H41V9Z"
										fill="black"
									/>
								</svg>
							</button>
							<div className={s.header__menu__tabs}>
								<h2>ОДЕЖДА</h2>
								<div className={s.header__menu__tabsWrapper}>
									<button
										className={[
											s.header__menu__tab,
											tab === 'brands' ? s.header__menu__tabActive : null,
										].join(' ')}
										onClick={() => {
											setTabs('brands')
										}}
									>
										Бренды
									</button>
									<button
										className={[
											s.header__menu__tab,
											tab === 'categories' ? s.header__menu__tabActive : null,
										].join(' ')}
										onClick={() => {
											setTabs('categories')
										}}
									>
										Категории
									</button>
								</div>
							</div>
							<div className={s.header__menu__input}>
								<SearchIcon />
							</div>
						</div>
						<nav className={s.menu}>
							{content()}
							<div
								className={[
									s.menu__info,
									tab === 'categories' ? s.menu__infoActive : null,
								].join(' ')}
							>
								<Link href="/Info" shallow={true} scroll={false}>
									<a onClick={() => setToggleMenu(false)}>О нас</a>
								</Link>
								<Link href="/Info" shallow={true} scroll={false}>
									<a onClick={() => setToggleMenu(false)}>Доставка</a>
								</Link>
							</div>
						</nav>
					</div>
				</div>
			</motion.div>

			<style jsx>{``}</style>
		</>
	)
}

export default Menu
