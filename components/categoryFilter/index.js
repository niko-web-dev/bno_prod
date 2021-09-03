import { useEffect, useState } from 'react'
import style from './categoryFilter.module.scss'

const CategoryFilter = ({
	closeAside,
	filterActive,
	products,
	updateFilter,
	defaultParams,
}) => {
	const [brandOpen, setBrandOpen] = useState(false)
	const [typeOpen, setTypeOpen] = useState(false)
	const [colorOpen, setColorOpen] = useState(false)
	const [sizeOpen, setSizeOpen] = useState(false)
	const [filters, setFilters] = useState({
		brands: [],
		color: [],
		size: [],
		type: [],
	})

	let brands = [],
		type = [],
		color = [],
		checkColor = [],
		size = []

	let isMenuCategoryOpen = {
		brands: false,
		type: false,
		color: false,
		size: false,
	}

	products?.map((product) => {
		color.push({
			name: product?.colors_variant ? product?.colors_variant[0].label : 'Все цвета',
			slug: product?.colors_variant ? product?.colors_variant[0].value : 'Все цвета',
		})
		brands.push({
			name: product?.brands[0]?.name ? product?.brands[0]?.name : 'Все бренды',
			slug: product?.brands[0]?.slug ? product?.brands[0]?.slug : 'Все бренды',
		})
		product.categories.map((cat) => {
			type.push({
				name: cat.name,
				slug: cat.slug,
			})
		})
		product.sizes.map((item) => {
			size.push({
				name: item,
				slug: item,
			})
		})
	})
	size = size.filter(
		(v, i, a) =>
			a.findIndex((t) => t.slug === v.slug && t.name === v.name) === i
	)

	type = type.filter(
		(v, i, a) =>
			a.findIndex((t) => t.slug === v.slug && t.name === v.name) === i
	)

	brands = brands.filter(
		(v, i, a) =>
			a.findIndex((t) => t.slug === v.slug && t.name === v.name) === i
	)

	color = color.filter(
		(v, i, a) =>
			a.findIndex((t) => t.slug === v.slug && t.name === v.name) === i
	)

	function addFilter(name, categ) {
		let prevArray = filters[categ]
		if (prevArray?.indexOf(name) > -1) {
			prevArray.splice(prevArray.indexOf(name), 1)
			setFilters({
				...filters,
				[categ]: prevArray,
			})
		} else {
			prevArray?.push(name)
			setFilters({
				...filters,
				[categ]: prevArray,
			})
		}
		updateFilter(filters)
	}

	function closeMenu(e) {
		e.preventDefault()
		closeAside(false)
	}

	function addSearchItems(slug){
		updateFilter(filters, slug)
	}

	const params =
		typeof window !== 'undefined' ? defaultParams : undefined

	useEffect(() => {
		if (params !== undefined) {
			switch (defaultParams.type) {
				case 'brand':
					return addFilter(defaultParams.slug, 'brands')
				case 'search':
					return addSearchItems(defaultParams.slug)
				default:
					return addFilter(defaultParams.slug, defaultParams.type)
			}
		}
	}, [defaultParams])

	return (
		<aside
			className={[style.filter, filterActive ? style.filterActive : null].join(
				' '
			)}
		>
			<button className={style.filter__close} onClick={closeMenu}>
				<div className={style.filter__closeIcon}>
					<svg
						width="28"
						height="28"
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
				</div>
				<p className={style.filter__closeText}>закрыть</p>
			</button>
			<div className={style.filter__wrapper}>
				<div
					className={[
						style.filter__block,
						brandOpen ? style.filter__blockActive : null,
					].join(' ')}
				>
					<button
						className={style.filter__blockButton}
						onClick={(e) => {
							e.preventDefault()
							setBrandOpen(!brandOpen)
						}}
					>
						<div className={style.filter__blockButtonCheck}>+</div>
						<h2>БРЕНД</h2>
					</button>
					<div className={style.filter__blockItems}>
						{brands?.map((item, index) => {
							return (
								<button
									key={index}
									onClick={() => addFilter(item.slug, 'brands')}
									className={[
										style.filter__blockItem,
										filters?.brands?.indexOf(item.slug) > -1
											? style.filter__blockItemActive
											: null,
									].join(' ')}
								>
									<div className={style.filter__blockItemCheck}>
										<svg
											width="16"
											height="12"
											viewBox="0 0 16 12"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M5.86338 11.9999C5.58738 11.9999 5.32338 11.8859 5.13438 11.6849L0.271382 6.50587C-0.107618 6.10387 -0.086618 5.47087 0.315382 5.09287C0.718382 4.71487 1.35138 4.73487 1.72838 5.13687L5.85338 9.52787L14.2614 0.325869C14.6354 -0.0831314 15.2674 -0.110131 15.6754 0.261869C16.0824 0.633869 16.1104 1.26687 15.7384 1.67387L6.60138 11.6739C6.41438 11.8799 6.14838 11.9979 5.87038 11.9999H5.86338Z"
												fill="#231F20"
											/>
										</svg>
									</div>
									<h2>{item.name}</h2>
								</button>
							)
						})}
					</div>
				</div>
				<div
					className={[
						style.filter__block,
						typeOpen ? style.filter__blockActive : null,
					].join(' ')}
				>
					<button
						className={style.filter__blockButton}
						onClick={(e) => {
							e.preventDefault()
							setTypeOpen(!typeOpen)
						}}
					>
						<div className={style.filter__blockButtonCheck}>+</div>
						<h2>ТИП ОДЕЖДЫ</h2>
					</button>
					<div className={style.filter__blockItems}>
						{type?.map((item, index) => {
							return (
								<button
									key={index}
									onClick={() => addFilter(item.slug, 'type')}
									className={[
										style.filter__blockItem,
										filters?.type?.indexOf(item.slug) > -1
											? style.filter__blockItemActive
											: null,
									].join(' ')}
								>
									<div className={style.filter__blockItemCheck}>
										<svg
											width="16"
											height="12"
											viewBox="0 0 16 12"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M5.86338 11.9999C5.58738 11.9999 5.32338 11.8859 5.13438 11.6849L0.271382 6.50587C-0.107618 6.10387 -0.086618 5.47087 0.315382 5.09287C0.718382 4.71487 1.35138 4.73487 1.72838 5.13687L5.85338 9.52787L14.2614 0.325869C14.6354 -0.0831314 15.2674 -0.110131 15.6754 0.261869C16.0824 0.633869 16.1104 1.26687 15.7384 1.67387L6.60138 11.6739C6.41438 11.8799 6.14838 11.9979 5.87038 11.9999H5.86338Z"
												fill="#231F20"
											/>
										</svg>
									</div>
									<h2>{item.name}</h2>
								</button>
							)
						})}
					</div>
				</div>
				<div
					className={[
						style.filter__block,
						colorOpen ? style.filter__blockActive : null,
					].join(' ')}
				>
					<button
						className={style.filter__blockButton}
						onClick={(e) => {
							e.preventDefault()
							setColorOpen(!colorOpen)
						}}
					>
						<div className={style.filter__blockButtonCheck}>+</div>
						<h2>ЦВЕТ</h2>
					</button>
					<div className={style.filter__blockItems}>
						{color?.map((item, index) => {
							return (
								<button
									key={index}
									onClick={() => addFilter(item.slug, 'color')}
									className={[
										style.filter__blockItem,
										filters?.color?.indexOf(item.slug) > -1
											? style.filter__blockItemActive
											: null,
									].join(' ')}
								>
									<div className={style.filter__blockItemCheck}>
										<svg
											width="16"
											height="12"
											viewBox="0 0 16 12"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M5.86338 11.9999C5.58738 11.9999 5.32338 11.8859 5.13438 11.6849L0.271382 6.50587C-0.107618 6.10387 -0.086618 5.47087 0.315382 5.09287C0.718382 4.71487 1.35138 4.73487 1.72838 5.13687L5.85338 9.52787L14.2614 0.325869C14.6354 -0.0831314 15.2674 -0.110131 15.6754 0.261869C16.0824 0.633869 16.1104 1.26687 15.7384 1.67387L6.60138 11.6739C6.41438 11.8799 6.14838 11.9979 5.87038 11.9999H5.86338Z"
												fill="#231F20"
											/>
										</svg>
									</div>
									<h2>{item.name}</h2>
								</button>
							)
						})}
					</div>
				</div>
				<div
					className={[
						style.filter__block,
						sizeOpen ? style.filter__blockActive : null,
					].join(' ')}
				>
					<button
						className={style.filter__blockButton}
						onClick={(e) => {
							e.preventDefault()
							setSizeOpen(!sizeOpen)
						}}
					>
						<div className={style.filter__blockButtonCheck}>+</div>
						<h2>РАЗМЕР</h2>
					</button>
					<div className={style.filter__blockItems}>
						{size?.map((item, index) => {
							return (
								<button
									key={index}
									onClick={() => addFilter(item.slug, 'size')}
									className={[
										style.filter__blockItem,
										filters?.size?.indexOf(item.slug) > -1
											? style.filter__blockItemActive
											: null,
									].join(' ')}
								>
									<div className={style.filter__blockItemCheck}>
										<svg
											width="16"
											height="12"
											viewBox="0 0 16 12"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M5.86338 11.9999C5.58738 11.9999 5.32338 11.8859 5.13438 11.6849L0.271382 6.50587C-0.107618 6.10387 -0.086618 5.47087 0.315382 5.09287C0.718382 4.71487 1.35138 4.73487 1.72838 5.13687L5.85338 9.52787L14.2614 0.325869C14.6354 -0.0831314 15.2674 -0.110131 15.6754 0.261869C16.0824 0.633869 16.1104 1.26687 15.7384 1.67387L6.60138 11.6739C6.41438 11.8799 6.14838 11.9979 5.87038 11.9999H5.86338Z"
												fill="#231F20"
											/>
										</svg>
									</div>
									<h2>{item.name}</h2>
								</button>
							)
						})}
					</div>
				</div>
			</div>
		</aside>
	)
}

export default CategoryFilter
