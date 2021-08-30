import s from '../styles/info.module.scss'
import Image from 'next/image'
import Head from "next/head"

const Info = () => {
	return (
		<>
			<Head>
				<title>About</title>
			</Head>
			<main>
				<div className="container">
					<div className={s.top__block}>
						<Image
							src={'/static/images/russia_PNG4 1.png'}
							alt="brand"
							width={780}
							height={300}
						/>
						<div className={s.top__text}>
							<p className={s.top__text_single}>
								BASED IN
								<br />
								<b>MOSCOW</b>
							</p>
							<p className={s.top__text_single}>
								SINCE <br />
								<b>2 0 2 1</b>
							</p>
							<p className={s.top__text_single}>
								ORDER
								<br />
								<b>YOUR FUTURE</b>
							</p>
						</div>
						<div className={s.top__info}>
							<div className={s.top__info_block}>
								<div className={s.top__info_blockWorld}>
									<Image
										src={'/static/images/YSjGyVXpTC94LksqaheSV3nn 1.png'}
										alt="brand"
										width={600}
										height={320}
									/>
								</div>

								<Image
									src={'/static/images/Ellipse 2.png'}
									alt="brand"
									width={88}
									height={88}
								/>
								<p>
									<b>SHIPPING WORLDWIDE</b> <br />
									Fast & SAFE
								</p>
							</div>
							<div className={s.top__info_block}>
								<Image
									src={'/static/images/Ellipse 3.png'}
									alt="brand"
									width={88}
									height={88}
								/>
								<a href="@b.n.o.store" target="_blank">
									<b style={{ textTransform: 'uppercase' }}>Instagram</b> <br />
									@b.n.o.store
								</a>
								<a href="@b.n.o.store" target="_blank">
									<b style={{ textTransform: 'uppercase' }}>telegram</b> <br />
									@b.n.o.store
								</a>
							</div>
						</div>
					</div>
					<div className={s.details__img}>
						<Image
							src={'/static/images/details-text.png'}
							alt="brand"
							width={1641}
							height={688}
						/>
					</div>
				</div>
			</main>
		</>
	)
}

export default Info
