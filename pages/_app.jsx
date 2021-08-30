import { motion } from 'framer-motion'
import { MenuProvider } from '../context/contextMenu'
import Menu from '../components/menu'
import 'swiper/swiper.scss'

import { animation } from '../animation/animation'
import '../public/styles/globals.css'

import Header from '../components/header'
import Footer from '../components/footer'
import { CardProvider } from '../context/contextCard'

function MyApp({ Component, pageProps, router }) {
	return (
		<motion.div
			key={router.route}
			initial="pageInitial"
			animate="pageAnimate"
			variants={animation.page}
		>
			<CardProvider>
				<MenuProvider>
					<Menu />
					<Header />
					<Component {...pageProps} />
					<Footer />
				</MenuProvider>
			</CardProvider>
		</motion.div>
	)
}

export default MyApp
