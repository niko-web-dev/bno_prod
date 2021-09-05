import Image from 'next/image'

const ShareIcon = () => {
	return (
		<div className="share__icon">
			<Image
				src="/static/images/share.png"
				alt="brand"
				width={22}
				height={22}

			/>

			<style jsx>
				{`
					.share__icon {
						transform: translate(55px, -4px);
					}
				`}
			</style>
		</div>
	)
}

export default ShareIcon
