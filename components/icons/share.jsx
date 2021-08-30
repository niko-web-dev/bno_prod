import Image from 'next/image'

const ShareIcon = () => {
	return (
		<>
			<Image
				src="/static/images/share.png"
				alt="brand"
				width={22}
				height={22}
				className="share__icon"
			/>

			<style jsx>
				{`
					.share__icon {
						margin-right: 35px;
						padding-right: 45px;
					}
				`}
			</style>
		</>
	)
}

export default ShareIcon
