import { useEffect } from "react"
import Router from "next/router"
import { MenuProvider } from '../context/contextMenu'
import Menu from '../components/menu'
import Head from 'next/head'
import NProgress from "nprogress"
import 'nprogress/nprogress.css'; //styles of nprogress
import 'swiper/swiper.scss'
import { AnimatePresence } from 'framer-motion'
import { animation } from '../animation/animation'
import '../public/styles/globals.css'

import Header from '../components/header'
import Footer from '../components/footer'
import { CardProvider } from '../context/contextCard'


function MyApp({ Component, pageProps, router }) {
	useEffect(() => {
		Router.events.on("routeChangeStart", () => NProgress.start());
		Router.events.on("routeChangeComplete", () => {
			window.scrollTo(0, 0)
			NProgress.done()
		});
		Router.events.on("routeChangeError", () => NProgress.done());
	  }, []);

	return (
		<>
			<Head>
				<title>Brand new order</title>
			</Head>
		
			<CardProvider>
				<MenuProvider>
					<Menu />
					<Header />
					<AnimatePresence
						initial="hidden" // Set the initial state to variants.hidden
						animate="enter" // Animated state to variants.enter
						exit="exit" // Exit state (used later) to variants.exit
						transition={{ type: 'linear' }} 
						// onExitComplete={() => window.scrollTo(0, 0)}
						key={router.route}
						variants={animation.page}
		>
						<Component {...pageProps} />
					</AnimatePresence>
					<Footer />
				</MenuProvider>
			</CardProvider>
			<style jsx global>{`
        #nprogress {
          pointer-events: none;
        }
        #nprogress .bar {
          background: gray;
          position: fixed;
          z-index: 1031;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
        }
        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0px;
          width: 100px;
          height: 100%;
          box-shadow: 0 0 3px black, 0 0 1px black;
          opacity: 1;
          -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
        }
        #nprogress .spinner {
          display: block;
          position: fixed;
          z-index: 1031;
          top: 15px;
          right: 15px;
        }
        #nprogress .spinner-icon {
          width: 18px;
          height: 18px;
          box-sizing: border-box;
          border: solid 2px transparent;
          border-top-color: black;
          border-left-color: gray;
          border-radius: 50%;
          -webkit-animation: nprogresss-spinner 400ms linear infinite;
          animation: nprogress-spinner 400ms linear infinite;
        }
        .nprogress-custom-parent {
          overflow: hidden;
          position: relative;
        }
        .nprogress-custom-parent #nprogress .spinner,
        .nprogress-custom-parent #nprogress .bar {
          position: absolute;
        }
        @-webkit-keyframes nprogress-spinner {
          0% {
            -webkit-transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
          }
        }
        @keyframes nprogress-spinner {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>

	</>
	)
}

export default MyApp
