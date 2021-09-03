import Link from 'next/link'
import Image from 'next/image'

const Logo= () => {
	return (
		<>
			<Link href="/" shallow={true} scroll={false} >
				<a className="header__logo">
					<Image
						src={'/static/images/logo.png'}
						alt="logo"
						width={100}
						height={100}
					/>
				</a>
			</Link>
			<style jsx>
                {`
                    .header__logo {
                        position: absolute;
                        top: 0;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                `}
            </style>
		</>
	)
}

export default Logo
