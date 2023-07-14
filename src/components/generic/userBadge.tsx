//path: src\components\generic\userBadge.tsx

import ProfileDrawer from '../drawer/profileDrawer';
import { storesContext } from '@/stores';
import { UserIcon } from '@/data/icons';
import { motion } from 'framer-motion';
import { useContext } from 'react';


const badgeVariants = {
	hidden: { scale: 0 },
	visible: { scale: 1 },
};

export default function UserBadge() {
	const { userStore, drawerStore } = useContext(storesContext);

	if (!userStore.user) {
		return null;
	}

	const initials =
		userStore.user.first_name && userStore.user.last_name ? (
			`${userStore.user.first_name[0]}${userStore.user.last_name[0]}`
		) : (
			<UserIcon />
		);

	const handleClick = () => {
		drawerStore.open(<ProfileDrawer />);
	};

	return (
		<motion.button
			onClick={handleClick}
			className="p-2 rounded-full shadow-xl drop-shadow-xl border border-main-light hover:border-text-dark  bg-main-dark text-text-dark text-sm hover:text-text-light hover:bg-main-light"
			style={{ position: 'fixed', right: '0.5rem', top: '0.5rem' }}
			initial="hidden"
			animate="visible"
			variants={badgeVariants}>
			{userStore.user.avatar_url ? (
				<img
					src={userStore.user.avatar_url}
					alt="User avatar"
					className="rounded-full h-8 w-8"
				/>
			) : (
				initials
			)}
		</motion.button>
	);
}