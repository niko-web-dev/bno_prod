import { useContext } from 'react'
import style from '../cardLeft.module.scss'
import Image from 'next/image'
import { ContextCard } from '../../../context/contextCard'

const CardItem = (product) => {
	const [cardLs, setCardLs] = useContext(ContextCard)
	const deleteItem = () => alert('delete: ' + product.id)

	return (
		<div className={style.cardProduct__item}>
			<Image
				className={style.cardProduct__image}
				src={product.image}
				width={245}
				height={300}
				alt="brand"
			/>
			<div className={style.cardProduct__info}>
				<h2 className={style.cardProduct__title}>{product.brands[0]?.name}</h2>
				<p className={style.cardProduct__article}>
					<span>{product.code}</span> {product.title}
				</p>
				<p className={style.cardProduct__size}>
					Size: <b>{product.size}</b>
				</p>
				<p className={style.cardProduct__price}>{product.price} ₽</p>

				<button
					className={style.cardProduct__delete}
					onClick={() => {
						product.deleteItem(product.index)
						setCardLs(localStorage.getItem('product'))
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
			</div>
		</div>
	)
}

export default CardItem
