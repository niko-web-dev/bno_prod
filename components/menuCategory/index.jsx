 import { useEffect, useState } from 'react'

import s from './menuCategory.module.scss'
import Link from 'next/link'

const MenuCategory = (brand) => {
	const [categories, setCategories] = useState([])
	const [categoriesOpen, setCategoriesOpen] = useState(1)
	let checkClass

	async function getMenuApi(endpoint) {

		try {
			const res = await fetch(
				`http://wp.brandneworder.ru/wp-json/wp/v2/${endpoint}/`
			)
			const result = await res.json()
			return result
		}catch (e) {
			console.log(e)
		}

	}

	useEffect(() => {
		getMenuApi('categories').then((res) => {
			let topCategory = []
			let lowCategory = []

			for (let item in res) {
				let newItem
				newItem = res[item]

				if (newItem.parent_id === 0) {
					let myItem = {
						id: newItem.id,
						name: newItem.title,
						slug: newItem.slug,
						isActive: false,
						subcategories: [],
					}
					topCategory.push(myItem)
				} else {
					let myItem = {
						id: newItem.id,
						name: newItem.title,
						slug: newItem.slug,
						parent_id: newItem.parent_id,
					}
					lowCategory.push(myItem)
				}
			}

			lowCategory.map((item) => {
				topCategory.map((itemTop) => {
					if (item.parent_id === itemTop.id) {
						itemTop.subcategories.push(item)
					}
				})
			})

			// @ts-ignore
			setCategories(topCategory)
		})
	}, [])

	function activeMenu(newId) {
		let oldCateg = categories

		for (let item in oldCateg) {
			if (oldCateg[item].id === newId) {
				oldCateg[item].isActive = !categories[item].isActive
				setCategoriesOpen(oldCateg[item].id * (Math.random() * 125))
			}
		}
		setCategories(oldCateg)
	}

	return (
		<>
			<div className={s.wrapper}>
				{categories?.map((item) => {
					return (
						<div
							className={[
								s.wrapper__item,
								item.isActive && categoriesOpen ? s.wrapperActive : '',
							].join(' ')}
							key={item.id}
						>
							<h2
								className={s.wrapper__title}
								onClick={(e) => {
									e.preventDefault()
									activeMenu(item.id)
								}}
							>
								{item.name}
							</h2>
							<ul className={s.wrapper__list}>
								{item?.subcategories.map((item) => {
									return (
										<li key={item.id} className={s.wrapper__item}>
											<Link
												scroll={false}
												href={{
													pathname: '/products',
													query: { type: item.slug },
												}}
											>
												{item.name}
											</Link>
										</li>
									)
								})}
							</ul>
						</div>
					)
				})}
			</div>
		</>
	)
}

export default MenuCategory
