//path: src\components\drawer\sideDrawer.tsx

import { RightArrow } from '@/data/icons';
import { storesContext } from '@/stores';
import { motion } from 'framer-motion';
import { FC, useContext } from 'react';
import { observer } from 'mobx-react';


const variants = {
	open: { x: 0 },
	closed: { x: '100%' },
};

const SideDrawer: FC = () => {
	const { drawerStore } = useContext(storesContext);
	const { isOpen, content } = drawerStore;

	return (
		<div className="text-center">
			<motion.div
				id="drawer-right-example"
				className="flex w-1/4 fixed top-0 right-0 z-40 h-screen"
				initial="closed"
				animate={isOpen ? "open" : "closed"}
				variants={variants}
				transition={{
					type: "easeInOut",
					delay: 0.1,
					duration: 0.2,
				}}
				tabIndex={-1}
				aria-labelledby="drawer-right-label">
				<div className='flex flex-col w-full items-center my-2 mr-1 rounded-xl border border-main-light bg-main-dark shadow-2xl drop-shadow-2xl text-text-dark'>
					{isOpen &&
						<button className='py-4 px-5 self-start' onClick={() => drawerStore.close()}>
							<RightArrow className='w-6 h-6 text-opacity-50 text-text-dark hover:text-text-light' />
						</button>}
					<div className='w-full'>
						{isOpen && content}
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default observer(SideDrawer);