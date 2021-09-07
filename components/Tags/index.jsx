
import s from './breadcrumbs.module.scss'
import Link from 'next/link'


const Index = ({ brand, types }) => {
	return (
		<div className={s.breadcrumbs}>
			<h3><Link
				href={{ pathname: '/products', query: { brand: brand[1] } }}
				shallow={true}
				scroll={false}
			>
				{brand[0]}
			</Link></h3>
			<ul>
				{types.map((type, index) => {
					return <li key={index}>
						<Link
							href={{ pathname: '/products', query: { type: type[1] } }}
							shallow={true}
							scroll={false}
						 >
							{type[0]}
						</Link>
						</li>
				})}
			</ul>
		</div>
	)
}

export default Index
