import Link from 'next/link'
import s from './popup.module.scss'


const Popup = ({activePopup, hidePopUp, cardLs}) => {
	// let products = JSON.parse(localStorage.getItem('product'))

	const products = cardLs
	return (

			<div className={s.popup + ' ' + `${activePopup ? `${s.active}` : ''}`} >
				{ products &&
					products?.map(({image, id, code, title, size, price, ...brands}, index) => {
							return (<div key={id} className={s.productItem}>

								<div className={s.wrapImg}>
									<img src={image} alt=""/>
								</div>
								<div className={s.wrapText}>
									<p className={s.wrapText__brand}>STONE ISLAND</p>
									<p className={s.wrapText__title}><span>{ code }</span>{ title }</p>
									<div className={s.innerText}>
										<p className={s.wrapText__size}>Размер: <span> { size } </span></p>
										<p className={s.wrapText__price}>{ price } ₽</p>
									</div>
								</div>
								<button
									className={s.productItem__delete}
								>
									<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
										<path  clipRule="evenodd" d="M9.05526 0.504185L0.503454 9.05599C0.226236 9.33321 0.108848 9.6683 0.241913 9.80136L0.267914 9.82736C0.400979 9.96043 0.736062 9.84304 1.01328 9.56582L9.56509 1.01401C9.84231 0.736794 9.96023 0.40118 9.82716 0.268115L9.80116 0.242114C9.66809 0.109049 9.33248 0.226967 9.05526 0.504185Z" fill="#979797"/>
										<path  clipRule="evenodd" d="M9.56503 9.05526L1.01322 0.503454C0.736001 0.226236 0.400918 0.108848 0.267853 0.241913L0.241852 0.267914C0.108787 0.400979 0.226175 0.736062 0.503393 1.01328L9.0552 9.56509C9.33242 9.84231 9.66803 9.96023 9.8011 9.82716L9.8271 9.80116C9.96016 9.66809 9.84225 9.33248 9.56503 9.05526Z" fill="#979797"/>
									</svg>
								</button>
							</div>)
						}
					)
				}
				<div className={s.allPrice}>
					<p>Сумма заказа</p>
					<p className={s.allPrice__value}>{products?.length > 0
						? products.reduce((sum, n) => sum + +n.price, 0).toLocaleString()
						: null} ₽</p>
				</div>
				<div className={s.popup__btn}><Link href={'/Card'}><a>Оформить заказ</a></Link></div>
				{
					activePopup ? hidePopUp() : ''
				}
			</div>

	)
}
export default Popup
