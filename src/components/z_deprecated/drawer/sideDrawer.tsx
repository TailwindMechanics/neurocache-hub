//path: src\components\z_deprecated\drawer\sideDrawer.tsx

import { FC, useContext, useEffect } from "react";
import { RightArrow } from "@src/data/icons";
import { storesContext } from "@src/stores";
import { motion } from "framer-motion";
import { observer } from "mobx-react";
import { reaction } from "mobx";

const variants = {
	open: { x: 0 },
	closed: { x: "100%" },
};

const SideDrawer: FC = () => {
	const { drawerStore, userStore } = useContext(storesContext);
	const { isOpen, content } = drawerStore;

	useEffect(() => {
		const dispose = reaction(
			() => userStore.isLoggedIn,
			(isLoggedIn) => {
				if (!isLoggedIn && isOpen) {
					drawerStore.close();
				}
			},
		);

		return dispose;
	}, [userStore, isOpen, drawerStore]);

	return (
		<div className="text-center">
			<motion.div
				id="drawer-right-example"
				className="fixed right-0 top-0 z-40 flex h-screen w-1/4"
				initial="closed"
				animate={isOpen ? "open" : "closed"}
				variants={variants}
				transition={{
					type: "easeInOut",
					delay: 0.1,
					duration: 0.2,
				}}
				tabIndex={-1}
				aria-labelledby="drawer-right-label"
			>
				<div className="border-main-light bg-main-dark text-text-dark my-2 mr-1 flex w-full flex-col items-center rounded-xl border shadow-2xl drop-shadow-2xl">
					{isOpen && (
						<button
							className="self-start px-5 py-4"
							onClick={() =>
								drawerStore.close()
							}
						>
							<RightArrow className="text-text-dark hover:text-text-light h-6 w-6 text-opacity-50" />
						</button>
					)}
					<div className="h-full w-full">
						{isOpen && content}
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default observer(SideDrawer);
