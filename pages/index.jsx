import Head from 'next/head'
import GallerySlider from '../components/gallerySlider'
import StartWindow from '../components/startWindow'
// import Details from '../components/details'

const Home = ({ products }) => {
	return (
		<>
			<Head>
				<title>B.N.O</title>
				<link rel="icon" href="/logo.ico" />
			</Head>
			<StartWindow />
			<GallerySlider products={products} />
			{/*<Details />*/}
		</>
	)
}

export async function getServerSideProps() {

	try {
		const res = await fetch(`http://wp.brandneworder.ru/wp-json/wp/v2/products/`)
		const products = await res.json()

		return { props: { products } }
	} catch (e) {
		console.log(e)
	}

}

export default Home
