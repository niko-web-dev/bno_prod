import Link from 'next/link'
import s from './products.module.scss'
import Image from 'next/image'

const ProductCard = ({ product }) => {
	return (
		<Link href={`/products/${product?.id}`} scroll={false}>
			<a className={s.gallery__item}>
				<h2 className={s.gallery__itemTitle}>
					{product?.code} <b>{product?.title}</b>
				</h2>
				<div className={s.gallery__itemInfo}>
					<Image
						className={s.gallery__itemImage}
						src={product?.main_image?.src}
						width={500}
						height={500}
						alt={product?.title}
					/>
					<p className={s.gallery__itemPrice}>
						<b>{Number(product?.price).toLocaleString()}</b> ₽
					</p>
				</div>
				<div className={s.gallery__itemHelp}>
					<div className={s.gallery__itemSizes}>
						{product?.sizes.map((item, index) => {
							return <p key={index}>{item}</p>
						})}
					</div>
					<div
						className={s.gallery__itemColor}
						style={{ background: product?.color }}
					></div>
				</div>
			</a>
		</Link>
	)
}

export default ProductCard
