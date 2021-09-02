import Header from '../../components/header'
import Index from '../../components/Tags'

import s from './product-page.module.scss'
import ProductInfo from '../../components/productInfo'
import CardSlider from '../../components/cardSlider/cardSlider'
import Head from "next/head"

const ProductPage= ({ product }) => {
	return (
		<>
			<Head>
				<title>{product.title}</title>
			</Head>
			<Header />

			<div className={s.card__wrap}>
				<div
					className={['container', s.card__wrap_container].join(' ')}
					style={{ display: 'flex' }}
				>
					<h1 className={s.card__titleMobile}>
				{product.code} <b>{product.title}</b>
			</h1>
					<div className={s.card__content}>
						<Index
							brand={product.brands[0].name}
							types={[product.categories[0].name, product.categories[product.categories.length - 1].name]}
						/>
						<CardSlider images={product.gallery} />
					</div>

					<ProductInfo product={product} />
				</div>
			</div>
		</>
	)
}

export async function getServerSideProps(ctx) {
	const { id } = ctx.query
	try {
		const res = await fetch(
			`http://wp.brandneworder.ru/wp-json/wp/v2/products/${id}`
		)
		const product = await res.json()

		return { props: { product } }
	} catch (e) {
		console.log(e)
	}

}

export default ProductPage
