import Image from 'next/image'
import Link from 'next/link'
import s from './logo.module.scss'

const Logo= () => {
	return (
		<>
			<Link href="/" shallow={true} scroll={false} >
				<a className={s.header__logo}>
					<Image
						src={'/static/images/logo.png'}
						alt="logo"
						width={100}
						height={100}
						layout="intrinsic"
					/>
				</a>
			</Link>
		
		</>
	)
}

export default Logo
