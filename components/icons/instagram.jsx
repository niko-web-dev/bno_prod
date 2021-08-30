import Image from 'next/image'

const InstaIcon = () => {
	return (
		<>
			<Image
				src="/static/images/insta.png"
				alt="brand"
				width={22}
				height={22}
				className="insta__icon"
			/>

			<style jsx>{``}</style>
		</>
	)
}

export default InstaIcon
