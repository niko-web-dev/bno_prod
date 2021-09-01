// @ts-ignore
import s from './footer.module.scss'
import Logo from '../logo/logo'
import Link from 'next/link'
import { useState } from 'react'

const Footer = () => {
	const [email, setEmail] = useState('')
	const changeEmail = function (event) {
		setEmail(event.target.value)
	}

	function checkEmail(mail) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(mail)
	}

	const subscriberUser = async (event) => {
		event.preventDefault()
		if (checkEmail(email)) {
			alert('укажите корректную почту')
			return
		}
		let data = {
			email: email,
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
			setEmail('')
		} catch (e) {
			console.log(e)
		}

	}

	return (
		<footer className={s.footer}>
			<div className="container">
				<div className={s.footer__wrapper}>
					<div className={s.footer__logo}>
						<Logo color="white" />
						<p>
							order your future MoSCOW
							<br />
							<span>2021</span>
						</p>
					</div>
					<div className={s.footer__subscription}>
						<h3 className={s.footer__subscriptionTitle}>
							подпишись на обновления
						</h3>
						<input
							className={s.footer__subscriptionInput}
							type="email"
							onChange={changeEmail}
							value={email}
							required={true}
							placeholder={'e-mail'}
						/>
						<button
							className={s.footer__subscriptionButton}
							onClick={subscriberUser}
						>
							подписаться
						</button>
					</div>
					<div className={s.footer__social}>
						<Link href={`/telegram`} scroll={false}>
							<a className={s.footer__socialLink}>telegram</a>
						</Link>
						<Link href={`/instagram`} scroll={false}>
							<a className={s.footer__socialLink}>instagram</a>
						</Link>
						<Link href={`/share`} scroll={false}>
							<a className={s.footer__socialLink}>share</a>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
