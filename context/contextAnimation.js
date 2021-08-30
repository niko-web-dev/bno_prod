import { createContext, useState } from 'react'

export const ContextAnimation = createContext([])

const { Provider } = ContextAnimation
export const AnimationProvider = ({ children }) => {
	const [slideAnim, setSlideAnim] = useState(false)

	return <Provider value={[slideAnim, setSlideAnim]}>{children}</Provider>
}
