import {  useEffect, useState } from 'react'
import CardLeft from '../components/cardLeft'
import CardForm from '../components/cardForm'
import CardNull from '../components/cardNull'
import CardConfirm from '../components/cardConfirm'

const Card = ({ products }) => {
	const [status, setStatus] = useState(0)

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('product'))
		if (data != null && data.length > 0) {
			setStatus(1)
		}
	}, [])

	function updateStatus(value) {
		if (value === 1) {
			const data = JSON.parse(localStorage.getItem('product'))
			if (data.length > 0) {
				setStatus(1)
			} else {
				setStatus(0)
			}
		} else {
			setStatus(2)
		}
	}
	return (
		<>
			<main className={['card', status != 1 ? 'card-state-2' : null].join(' ')}>
				<div className="container">
					<div
						style={{ display: 'flex' }}
						className={[
							'card__wrapper',
							status != 1 ? 'card-center' : null,
						].join(' ')}
					>
						{status === 1 ? (
							<>
								<CardLeft updateStatus={updateStatus} />
								<CardForm updateStatus={updateStatus} />
							</>
						) : status === 2 ? (
							<CardConfirm />
						) : (
							<CardNull />
						)}
					</div>
				</div>
			</main>
		</>
	)
}

export default Card
