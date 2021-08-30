import { useContext } from 'react'
import { contextMenu } from '../../context/contextMenu'
import Image from 'next/image'

const MenuBtn = () => {
	const [toggleMenu, setToggleMenu] = useContext(contextMenu)

	function handleMenu() {
		setToggleMenu(!toggleMenu)
	}

	return (
		<>
			<Image
				width={50}
				height={50}
				className="menu_img"
				src="/static/images/menu.png"
				alt="menu"
				onClick={handleMenu}
			/>

			<style jsx>{`
				.menu_img {
					cursor: pointer;
				}
			`}</style>
		</>
	)
}

export default MenuBtn
