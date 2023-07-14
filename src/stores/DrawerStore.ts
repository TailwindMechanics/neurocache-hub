//path: src\stores\DrawerStore.ts

import { makeAutoObservable } from "mobx";
import React from "react";


class DrawerStore {
	isOpen = false;
	content: React.ReactNode = null;

	constructor() {
		 makeAutoObservable(this);
	}

	open(content: React.ReactNode) {
		 console.log("Open method was called");  // Debugging line
		 this.content = content;
		 this.isOpen = true;
		 console.log("Drawer state is now", this.isOpen);  // Debugging line
	}

	close() {
		 this.isOpen = false;
		 this.content = null;
	}
}

export default DrawerStore;