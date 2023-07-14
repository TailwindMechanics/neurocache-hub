//path: src\components\hub\header.tsx

import { LivePanel } from '@/components/generic/livePanel'
import UserBadge from '../generic/userBadge'
import { storesContext } from '@/stores'
import { FC, useContext } from 'react'
import { observer } from 'mobx-react'


interface HeaderProps {
	text: string
}

const Header: FC<HeaderProps> = observer(({ text }) => {
	const { userStore } = useContext(storesContext);
	const headerText = userStore.isLoggedIn ? text : 'Login';

	return <>
		<div className={``}>
			<div className="shadow-xl drop-shadow-2xl text-center rounded-xl p-4 border bg-main-dark border-main-light">
				<LivePanel>
					<h1 className="mb-0 font-bold leading-tight tracking-tight text-light text-2xl">
						{headerText}
					</h1>
				</LivePanel>
				<UserBadge />
			</div>
		</div>
	</>
})

export default Header