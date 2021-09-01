import { motion } from 'framer-motion'
import { MenuProvider } from '../context/contextMenu'
import Menu from '../components/menu'
import Head from 'next/head'
import 'swiper/swiper.scss'

import { animation } from '../animation/animation'
import '../public/styles/globals.css'

import Header from '../components/header'
import Footer from '../components/footer'
import { CardProvider } from '../context/contextCard'

function MyApp({ Component, pageProps, router }) {
	return (
		<>
			<Head>
				<title>Brand new order</title>
			</Head>
		
			<CardProvider>
				<MenuProvider>
					<Menu />
					<Header />
					<motion.div
						initial="hidden" // Set the initial state to variants.hidden
						animate="enter" // Animated state to variants.enter
						exit="exit" // Exit state (used later) to variants.exit
						transition={{ type: 'linear' }} 
						onExitComplete={() => window.scrollTo(0, 0)}
						key={router.route}
						// initial="pageInitial"
						// animate="pageAnimate"
						variants={animation.page}
		>
					<Component {...pageProps} />
					</motion.div>
					<Footer />
				</MenuProvider>
			</CardProvider>
		
	</>
	)
}

export default MyApp
