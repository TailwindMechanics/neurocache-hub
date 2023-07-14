//path: src/components/hub/SignOut.tsx

import { useContext } from 'react';
import { storesContext } from '@/stores';

const ProfileDrawer = () => {
	const { userStore } = useContext(storesContext);

	const handleSignOut = () => {
		userStore.logout();
	};

	return <>
		<div className='w-full px-10 py-2'>
			<button onClick={handleSignOut} className="w-full rounded-l px-4 py-2 border border-main-light hover:border-text-dark bg-main-dark text-text-dark hover:text-text-light hover:bg-main-light">
				Sign Out
			</button>
		</div>
	</>
};

export default ProfileDrawer;
