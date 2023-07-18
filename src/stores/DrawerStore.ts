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
		this.content = content;
		this.isOpen = true;
	}

	close() {
		this.isOpen = false;
		this.content = null;
	}
}

export default DrawerStore;
