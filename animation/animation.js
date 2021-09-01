export const animation = {
	page: {
		hidden: { opacity: 0, x: -200, y: 0 },
		enter: { opacity: 1, x: 0, y: 0 },
		exit: { opacity: 0, x: 0, y: -100 },
		// pageInitial: {
		// 	opacity: 0,
		// 	transition: {
		// 		delay: 0.1,
		// 	},
		// },
		// pageAnimate: {
		// 	opacity: 1,
			
		// },
	},

	opacityAnim: {
		show: {
			opacity: 1,
		},
		hidden: {
			opacity: 0,
		},
	},

	scaleAnim: {
		scale: {
			scale: 2.5,
		},
		norm: {
			scale: 1,
		},
	},

	displayNoneAnim: {
		show: {
			opacity: 1,
			display: 'flex',
		},
		hidden: {
			opacity: 0,
			display: 'none',
		},
	},

	animationMenu: {
		visible: { y: '0' },
		hidden: { y: '-100%' },
	},

	cardSlideAnim: {
		enter: (direction) => {
			return {
				x: direction > 0 ? 1000 : -1000,
				opacity: 0,
			}
		},
		center: {
			zIndex: 1,
			x: 0,
			opacity: 1,
		},
		exit: (direction) => {
			return {
				zIndex: 0,
				x: direction < 0 ? 1000 : -1000,
				opacity: 0,
			}
		},
	},
}
