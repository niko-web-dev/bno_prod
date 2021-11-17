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
		</div>
	)
}

export default ShareIcon
