import s from './header.module.scss'

import MenuBtn from '../menuBtn'
import Logo from '../logo/logo'
import Icons from '../icons'
import SearchIcon from '../icons/searchIcon'
import CardIcon from '../icons/CardIcon'

const Header = () => {
	return (
		<header className={s.header}>
			<div className="container">
				<MenuBtn />
				<Logo/>
				<Icons>
					<div >
						<SearchIcon />
						<CardIcon />
					</div>
				</Icons>
			</div>
		</header>
	)
}

export default Header
