import {useState } from 'react'
import Image from 'next/image'
import s from '../cardForm/cardForm.module.scss'
import {useRouter} from 'next/router'

const SearchIcon = () => {
	const [searchInput, setSearchInput] = useState('')
	const [viewInput, setViewInput] = useState(false)

	const router = useRouter()

	const changeSearchInput = function (event) {
		setSearchInput(event.target.value)
	}
	function searchProduct(e) {
		if (e.key === "Enter") {
			router.push({
				pathname: '/products',
				query: { search: searchInput }
			})
			setSearchInput('')
			setViewInput(false)
		}
	}
	const inputDisplay = viewInput === false ? '0' : '1'

	return (
		<div className={s.search__icon} style={{cursor: 'pointer'}}>
			<div className={s.search__icon_img}>
				{viewInput ?
					<svg
					onClick={() => setViewInput(!viewInput)}
					width="20"
					height="20"
					viewBox="0 0 28 28"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M25.1187 1.39811L1.39678 25.1201C0.627801 25.889 0.302179 26.8185 0.671288 27.1876L0.743413 27.2598C1.11252 27.6289 2.04201 27.3033 2.81099 26.5343L26.533 2.81232C27.3019 2.04334 27.629 1.11238 27.2599 0.743267L27.1878 0.671142C26.8187 0.302032 25.8877 0.629128 25.1187 1.39811Z"
						fill="#231F20"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M26.5328 25.1185L2.81084 1.39654C2.04186 0.627557 1.11237 0.301935 0.743262 0.671044L0.671137 0.743169C0.302028 1.11228 0.62765 2.04177 1.39663 2.81075L25.1186 26.5327C25.8876 27.3017 26.8185 27.6288 27.1876 27.2597L27.2598 27.1875C27.6289 26.8184 27.3018 25.8875 26.5328 25.1185Z"
						fill="#231F20"
					/>
				</svg>
				:
					<div className={s.search__icon_img}>
					<Image
						src="/static/images/search.png"
						alt="brand"
						width={22}
						height={22}
						onClick={() => setViewInput(!viewInput)}
					/>
					</div>
				}
			</div>
			<input
				style={{ opacity: inputDisplay, display: viewInput ? "block" : "none" }}
				className={s.cardForm__input + ' ' + s.cardForm__input_search}
				id="searchInput"
				onChange={changeSearchInput}
				onKeyPress={searchProduct}
				value={searchInput}
				required={true}
				type="text"
			/>
		</div>
	)
}

export default SearchIcon
