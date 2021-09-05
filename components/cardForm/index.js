import { useState } from 'react'
import style from './cardForm.module.scss'

const CardForm  = ({ updateStatus }) => {
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [contact, setContact] = useState('telegram')

	const submitForm = async (e) => {
		e.preventDefault()

		try {
			if (name !== '' && phone !== '' && email !== '') {
				let orderProducts = JSON.parse(localStorage.getItem('product'))
				let cardProducts = {}
				let totalCost = 0
				for (let item in orderProducts) {
					item = orderProducts[item]
					// @ts-ignore
					totalCost += +item.price
					// @ts-ignore
					cardProducts[+item.id] = {
						// @ts-ignore
						price: +item.price,
						// @ts-ignore
						size: item.size ? item.size : null,
						qty: 1,
					}
				}
				let data = {
					name: name,
					phone: phone,
					email: email,
					order: JSON.stringify({
						products: cardProducts,
						discount: null,
						total_cost: +totalCost,
					}),
					payment_method: '',
					contact_method: contact,
				}
				// @ts-ignore
				async function getFormData(object) {
					const formData = new FormData()
					Object.keys(object).forEach((key) => {
						const value =
							key === 'order' ? JSON.stringify(object[key]) : object[key]
						return formData.set(key, value)
					})
					return formData
				}

				let form_data = await getFormData(data)

				let response = await fetch(
					'http://wp.brandneworder.ru/wp-json/wp/v2/orders',
					{
						method: 'POST',
						body: form_data,
					}
				)

				let result = await response.json()

				subscriberUser(data.email)
				localStorage.removeItem('product')
			} else {
				alert('заполните контакты')
			}
		}catch (e) {
			console.log(e)
		}

	}
	const subscriberUser = async (userMail) => {
		let data = {
			email: userMail,
		}
		try {
			let response = await fetch(
				'http://wp.brandneworder.ru/wp-json/wp/v2/subscribe',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
					},
					body: new URLSearchParams(data),
				}
			)

			let result = await response.json()
			updateStatus(2)
		} catch (e) {
			console.log(e)
		}

	}

	const changeName = function (event) {
		setName(event.target.value)
	}
	const changePhone = function (event) {
		setPhone(event.target.value)
	}
	const changeEmail = function (event) {
		setEmail(event.target.value)
	}
	const handleContact = (event) => {
		event.preventDefault()
		setContact(event.target.value)
	}

	return (
		<form className={style.cardForm}>
			<h2 className={style.cardForm__title}>ВАШИ ДАННЫЕ</h2>

			<div className={style.cardForm__inputBlock}>
				<label className={style.cardForm__label} htmlFor="name">
					Имя
				</label>
				<input
					className={style.cardForm__input}
					id="name"
					onChange={changeName}
					value={name}
					required={true}
					type="text"
				/>
			</div>
			<div className={style.cardForm__inputBlock}>
				<label className={style.cardForm__label} htmlFor="tel">
					Телефон
				</label>
				<input
					className={style.cardForm__input}
					onChange={changePhone}
					value={phone}
					required={true}
					id="tel"
					type="tel"
				/>
			</div>
			<div className={style.cardForm__inputBlock}>
				<label className={style.cardForm__label} htmlFor="email">
					E-mail
				</label>
				<input
					className={style.cardForm__input}
					onChange={changeEmail}
					value={email}
					required={true}
					id="email"
					type="email"
				/>
			</div>

			<p className={style.cardForm__callText}>Предпочитаемый способ связи</p>

			<div className={style.cardForm__contacts}>
				<label
					className={[
						contact === 'telegram' ? style.cardForm__contactsLabelActive : null,
						style.cardForm__contactsLabel,
						style.cardForm__contactsLabelTelegram,
					].join(' ')}
				>
					<input
						className={style.cardForm__contactsRadio}
						onClick={handleContact}
						value="telegram"
						name="contact"
						type="radio"
					/>
				</label>
				<label
					className={[
						contact === 'whatsup' ? style.cardForm__contactsLabelActive : null,
						style.cardForm__contactsLabel,
						style.cardForm__contactsLabelWhatsup,
					].join(' ')}
				>
					<input
						className={style.cardForm__contactsRadio}
						onClick={handleContact}
						value="whatsup"
						name="contact"
						type="radio"
					/>
				</label>
				<label
					className={[
						contact === 'phone' ? style.cardForm__contactsLabelActive : null,
						style.cardForm__contactsLabel,
						style.cardForm__contactsLabelPhone,
					].join(' ')}
				>
					<input
						className={style.cardForm__contactsRadio}
						onClick={handleContact}
						value="phone"
						name="contact"
						type="radio"
					/>
				</label>
				<label
					className={[
						contact === 'mail' ? style.cardForm__contactsLabelActive : null,
						style.cardForm__contactsLabel,
						style.cardForm__contactsLabelMail,
					].join(' ')}
				>
					<input
						className={style.cardForm__contactsRadio}
						onClick={handleContact}
						value="mail"
						name="contact"
						type="radio"
					/>
				</label>
			</div>

			<button className={style.cardForm__button} onClick={submitForm}>
				ЗАВЕРШИТЬ ОФОРМЛЕНИЕ
			</button>
		</form>
	)
}
export default CardForm
