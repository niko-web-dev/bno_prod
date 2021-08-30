import { useState } from 'react'

export default function useBrands(products) {
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

	function hexToHSL(H) {
		// Convert hex to RGB first
		let r = 0,
			g = 0,
			b = 0
		if (H.length == 4) {
			r = '0x' + H[1] + H[1]
			g = '0x' + H[2] + H[2]
			b = '0x' + H[3] + H[3]
		} else if (H.length == 7) {
			r = '0x' + H[1] + H[2]
			g = '0x' + H[3] + H[4]
			b = '0x' + H[5] + H[6]
		}
		// Then to HSL
		r /= 255
		g /= 255
		b /= 255
		let cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0

		if (delta == 0) h = 0
		else if (cmax == r) h = ((g - b) / delta) % 6
		else if (cmax == g) h = (b - r) / delta + 2
		else h = (r - g) / delta + 4

		h = Math.round(h * 60)

		if (h < 0) h += 360

		l = (cmax + cmin) / 2
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
		s = +(s * 100).toFixed(1)
		l = +(l * 100).toFixed(1)

		return { h: h, s: s, l: l }
	}

	function colorName(hsl) {
		var l = Math.floor(hsl.l),
			s = Math.floor(hsl.s),
			h = Math.floor(hsl.h)
		if (s <= 10 && l >= 90) {
			return 'Белый'
		} else if ((s <= 10 && l <= 70) || s === 0) {
			return 'Серый'
		} else if (l <= 15) {
			return 'Черный'
		} else if ((h >= 0 && h <= 15) || h >= 346) {
			return 'Красный'
		} else if (h >= 16 && h <= 35) {
			if (s < 90) {
				return 'Коричневый'
			} else {
				return 'Оранжевый'
			}
		} else if (h >= 36 && h <= 54) {
			if (s < 90) {
				return 'коричневый'
			} else {
				return 'Желтый'
			}
		} else if (h >= 55 && h <= 165) {
			return 'Зеленый'
		} else if (h >= 166 && h <= 260) {
			return 'Синий'
		} else if (h >= 261 && h <= 290) {
			return 'Фиолетовый'
		} else if (h >= 291 && h <= 345) {
			return 'Розовый'
		}
	}

	products?.map((product) => {
		checkColor.push(product.color)
		brands.push({
			name: product?.brands[0]?.name ? product?.brands[0]?.name : 'no brand',
			slug: product?.brands[0]?.slug ? product?.brands[0]?.slug : 'no-brand',
		})
		type.push({
			name: product.categories[0].name,
			slug: product.categories[0].slug,
		})
		product.sizes.map((item) => {
			size.push({
				name: item,
				slug: item,
			})
		})
	})

	checkColor = [...new Set(checkColor)]

	checkColor.map((item) => {
		let hsl = hexToHSL(item)
		let name = colorName(hsl)

		color.push({
			name: name,
			slug: item,
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

	function addFilter(name, categ) {
		let prevArray = filters[categ]
		if (prevArray.indexOf(name) > -1) {
			prevArray.splice(prevArray.indexOf(name), 1)
			setFilters({
				...filters,
				[categ]: prevArray,
			})
		} else {
			prevArray.push(name)
			setFilters({
				...filters,
				[categ]: prevArray,
			})
		}
		updateFilter(filters)
	}

	return {
		brands,
		filters,
		setFilters,
		addFilter,
	}
}
