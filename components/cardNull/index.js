import style from './cardNull.module.scss'
import Link from 'next/link'

const CardNull = ({}) => {
	return (
		<>
			<main className={style.cardNull}>
				<h2 className={style.cardNull__title}>ОФОРМЛЕНИЕ ПОКУПОК</h2>
				<p className={style.cardNull__text}>
					Ваша корзина пуста.
					<br />
					Перейдите в каталог для выбора товаров.
				</p>
				<Link href={`/products/`}>
					<a className={style.cardNull__button}>КАТАЛОГ</a>
				</Link>
			</main>
		</>
	)
}

export default CardNull
