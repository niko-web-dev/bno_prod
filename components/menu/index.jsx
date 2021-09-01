import { useContext, useState } from 'react'
import Link from 'next/link'

import s from './menu.module.scss'

import { motion } from 'framer-motion'
import { contextMenu } from '../../context/contextMenu'
import { animation } from '../../animation/animation'
import MenuBrands from '../menuBrands'
import MenuCategory from '../menuCategory'
import CartIcon from '../icons/CardIcon'

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
								<label className={s.header__menu__seacrh}>
									<svg
										width="22"
										height="22"
										viewBox="0 0 22 22"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M4.58333 10.0833C4.58333 7.05008 7.05008 4.58333 10.0833 4.58333C13.1166 4.58333 15.5833 7.05008 15.5833 10.0833C15.5833 13.1166 13.1166 15.5833 10.0833 15.5833C7.05008 15.5833 4.58333 13.1166 4.58333 10.0833ZM18.9814 17.6852L15.8693 14.5723C16.8346 13.3311 17.4167 11.7755 17.4167 10.0833C17.4167 6.03992 14.1267 2.75 10.0833 2.75C6.03992 2.75 2.75 6.03992 2.75 10.0833C2.75 14.1267 6.03992 17.4167 10.0833 17.4167C11.7755 17.4167 13.3311 16.8346 14.5723 15.8693L17.6852 18.9814C17.864 19.1602 18.0987 19.25 18.3333 19.25C18.568 19.25 18.8027 19.1602 18.9814 18.9814C19.3398 18.623 19.3398 18.0437 18.9814 17.6852Z"
											fill="#231F20"
										/>
										<mask
											id="mask0"
											mask-type="alpha"
											maskUnits="userSpaceOnUse"
											x="2"
											y="2"
											width="18"
											height="18"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M4.58333 10.0833C4.58333 7.05008 7.05008 4.58333 10.0833 4.58333C13.1166 4.58333 15.5833 7.05008 15.5833 10.0833C15.5833 13.1166 13.1166 15.5833 10.0833 15.5833C7.05008 15.5833 4.58333 13.1166 4.58333 10.0833ZM18.9814 17.6852L15.8693 14.5723C16.8346 13.3311 17.4167 11.7755 17.4167 10.0833C17.4167 6.03992 14.1267 2.75 10.0833 2.75C6.03992 2.75 2.75 6.03992 2.75 10.0833C2.75 14.1267 6.03992 17.4167 10.0833 17.4167C11.7755 17.4167 13.3311 16.8346 14.5723 15.8693L17.6852 18.9814C17.864 19.1602 18.0987 19.25 18.3333 19.25C18.568 19.25 18.8027 19.1602 18.9814 18.9814C19.3398 18.623 19.3398 18.0437 18.9814 17.6852Z"
												fill="white"
											/>
										</mask>
										<g mask="url(#mask0)">
											<rect width="22" height="22" fill="#0D1C2E" />
										</g>
									</svg>
									<input type="text" />
								</label>
								<CartIcon />
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
									<a>О нас</a>
								</Link>
								<Link href="/delivery" shallow={true} scroll={false}>
									<a>Доставка</a>
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
