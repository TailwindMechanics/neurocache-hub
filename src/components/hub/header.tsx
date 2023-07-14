//path: src\components\hub\header.tsx

import { LivePanel } from '@/components/generic/livePanel'
import { FC } from 'react'
import UserBadge from '../generic/userBadge'


interface HeaderProps {
	text: string
}

const Header: FC<HeaderProps> = ({ text }) => {
	return <>
		<div className={``}>
			<div className="shadow-xl drop-shadow-2xl text-center rounded-xl p-4 border bg-main-dark border-main-light">
				<LivePanel>
					<h1 className="mb-0 font-bold leading-tight tracking-tight text-light text-2xl">
						{text}
					</h1>
				</LivePanel>
				<UserBadge />
			</div>
		</div>
	</>
}

export default Header