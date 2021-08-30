import { createContext, useEffect, useState } from 'react'

export const ContextCard = createContext([])

const { Provider } = ContextCard

export const CardProvider = ({ children }) => {
	const [cardLs, setCardLs] = useState('')
	const cardProduct =
		typeof window !== 'undefined' ? localStorage.getItem('product') : 0

	useEffect(() => {
		if (cardProduct) {
			setCardLs(JSON.parse(cardProduct))
		}
	}, [cardProduct])

	return <Provider value={[cardLs, setCardLs]}>{children}</Provider>
}
