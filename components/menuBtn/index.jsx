import { useContext } from 'react'
import { contextMenu } from '../../context/contextMenu'
import Image from 'next/image'

const MenuBtn = () => {
	const [toggleMenu, setToggleMenu] = useContext(contextMenu)

	function handleMenu() {
		setToggleMenu(!toggleMenu)
	}

	return (
		<div className="menu__btn">
			<Image
				width={50}
				height={50}
				className="menu_img"
				src="/static/images/menu.png"
				alt="menu"
				onClick={handleMenu}
			/>

			<style jsx>{`
				.menu__btn {
					position: absolute;
					top: 50%;
					left: 0;
					transform: translateY(15px);
				}
				.menu_img {
					cursor: pointer;
					
				}
			`}</style>
		</div>
	)
}

export default MenuBtn
