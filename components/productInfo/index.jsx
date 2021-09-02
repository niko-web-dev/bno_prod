import { useContext, useEffect, useState } from 'react'
import s from '../../pages/products/product-page.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { ContextCard } from '../../context/contextCard'
import Popup from '../popup/index'

const ProductInfo = ({ product }) => {
	const [colors, setColors] = useState([])
	const [size, setSize] = useState('')
	const [matherialPopup, setMatherialPopup] = useState(false)
	const [cardLs, setCardLs] = useContext(ContextCard)
	const [activePopup, setPopUp] = useState(false)

	useEffect(() => {
		let allColors = []
		{
			let activeColor = {
				id: product.id,
				color: product.colors_variant[0],
			}
			allColors.push(activeColor)
			for (let item in product.related_posts) {
				let newColor = {
					id: product.related_posts[item].id,
					color: product.related_posts[item].color,
				}
				allColors.push(newColor)
			}
		}
		allColors.sort((a, b) => (a.id > b.id ? 1 : -1))
		setColors(allColors)
	}, [product])

	const handleSizes = (event) => {
		event.preventDefault()
		setSize(event.target.value)
	}

	function addToCard(e) {
		event.preventDefault()
		let myProduct = {
			brands: product.brands,
			title: product.title,
			code: product.code,
			id: product.id,
			image: product.main_image.src,
			size: size,
			price: product.price,
		}
		if (localStorage.getItem('product') !== null) {
			let products = JSON.parse(localStorage.getItem('product'))
			products.push(myProduct)
			setCardLs(localStorage.setItem('product', JSON.stringify(products)))
			localStorage.setItem('product', JSON.stringify(products))
		} else {
			let products = []
			products.push(myProduct)
			localStorage.setItem('product', JSON.stringify(products))
		}
	}

	const chechProductInCard = (id) => {
		if (typeof window !== 'undefined') {
			const carts = JSON.parse(localStorage.getItem('product'))
			return carts?.some((prod) => prod.id === id)
		}
	}

	const popUpNow = () => {
		setPopUp(true);
	}
	const hidePopUp = () => {
		setTimeout(() => {
			setPopUp(false)
		}, 5000)
	}

	return (
		<form className={s.card__info}>
			<Popup activePopup={activePopup} hidePopUp={hidePopUp} cardLs={cardLs}/>

			<div
				className={[
					s.card__save,
					matherialPopup ? s.card__saveActive : null,
				].join(' ')}
			>
				<button
					className={s.card__save_close}
					onClick={(e) => {
						e.preventDefault()
						setMatherialPopup(false)
					}}
				>
					<svg
						width="22"
						height="23"
						viewBox="0 0 22 23"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M19.7848 1.62653L1.09999 20.2549C0.494301 20.8588 0.237821 21.5887 0.528554 21.8785L0.585364 21.9352C0.876097 22.225 1.60822 21.9693 2.21391 21.3654L20.8987 2.73708C21.5044 2.13322 21.7621 1.40215 21.4713 1.11229L21.4145 1.05566C21.1238 0.765802 20.3905 1.02266 19.7848 1.62653Z"
							fill="#231F20"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M20.8981 20.2538L2.21328 1.62548C1.60758 1.02162 0.87546 0.765912 0.584727 1.05577L0.527917 1.1124C0.237185 1.40226 0.493664 2.13217 1.09936 2.73603L19.7842 21.3644C20.3899 21.9683 21.1231 22.2251 21.4139 21.9353L21.4707 21.8786C21.7614 21.5888 21.5038 20.8577 20.8981 20.2538Z"
							fill="#231F20"
						/>
					</svg>
				</button>
				<div className={s.card__save_block}>
					<h1 className={s.card__title}>
						<b>Материалы</b>
					</h1>
					<ul className={s.card__save_blockList}>
						{product?.materials.map((item, index) => {
							return (
								<li key={index}>
									<h2>{item.label}:</h2>
									<p>{item.text}</p>
								</li>
							)
						})}
					</ul>
				</div>
				<div className={s.card__save_block}>
					<h1 className={s.card__title}>
						<b>УХОД </b>
					</h1>
					<ul className={s.card__save_blockListMat}>
						{product?.care?.map((item, index) => {
							if (item.icon) {
								return (
									<li key={index}>
										<Image
											src={item?.icon}
											alt={item.text}
											layout={'fixed'}
											width={35}
											height={35}
											objectFit="contain"
										/>
										<p>{item.text}</p>
									</li>
								)
							}
						})}
					</ul>
				</div>
			</div>
			<h1 className={s.card__title}>
				{product.code} <b>{product.title}</b>
			</h1>
			<div className={s.card__description}>
				{product.description.split('<br />').map((str, index) => (
					<p key={index}>{str}</p>
				))}
			</div>
			<div className={s.card__popupslink}>
				<button
					onClick={(e) => {
						e.preventDefault()
						setMatherialPopup(true)
					}}
				>
					Материалы и уход
				</button>
			</div>
			<h2 className={s.card__colorTitle}>Доступные цвета</h2>
			<div className={s.card__colors}>
				{colors.length > 1
					? colors.map(({ id, color }) => {
							return (
								<Link href={`/products/${id}`} key={id} scroll={false}>
									<a
										className={[
											s.card__colorsLink,
											id === product.id ? s.card__colorsLinkActive : null,
										].join(' ')}
										style={{ background: color }}
									/>
								</Link>
							)
					  })
					: 'one color'}
			</div>
			<h2 className={s.card__sizesTitle}>Доступные размеры</h2>
			<div className={s.card__sizes}>
				{product.sizes?.length > 0
					? product.sizes.map((item, index) => {
							return (
								<label
									className={[
										s.card__sizesLabel,
										size === item ? s.card__sizesLabelActive : null,
									].join(' ')}
									key={index}
								>
									{item}
									<input
										className={s.card__sizesRadio}
										onClick={handleSizes}
										type="radio"
										name="sizes"
										value={item}
									/>
								</label>
							)
					  })
					: 'One size'}
			</div>
			<h2 className={s.card__price}>
				<b>{product.price.toLocaleString()}</b> ₽
			</h2>
			{chechProductInCard(product.id) ? (
				<Link href={'/Card'} scroll={false}>
					<a className={s.card__button} style={{ display: 'block' }}>
						КОРЗИНА
					</a>
				</Link>
			) : (
				<button className={s.card__button} onClick={(e) => {
					addToCard(e)
					popUpNow()
				}}>
					КУПИТЬ
				</button>
			)}
		</form>
	)
}

export default ProductInfo
