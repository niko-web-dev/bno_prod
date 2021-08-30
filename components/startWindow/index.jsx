
import MainSlider from '../mainSlider'
// import Header from '../header'
// import { MenuProvider } from '../../context/contextMenu'
import { AnimationProvider } from '../../context/contextAnimation'

const StartWindow = () => {
	return (
		<AnimationProvider>
			<MainSlider />
		</AnimationProvider>
	)
}

export default StartWindow
