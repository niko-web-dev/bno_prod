import {useState } from 'react'
import Image from 'next/image'
import s from '../cardForm/cardForm.module.scss'
import {useRouter} from 'next/router'

const SearchIcon = () => {
	const [searchInput, setSearchInput] = useState('')
	const [viewInput, setvIewInput] = useState(false)

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
		}
	}

	const inputDisplay = viewInput === false ? '0' : '1'

	return (
		<div className={s.search__icon}>
			<Image
				src="/static/images/search.png"
				alt="brand"
				width={22}
				height={22}
			
				onClick={() => setvIewInput(!viewInput)}
			/>
			<input
				style={{ opacity: inputDisplay }}
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
