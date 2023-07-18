//path: src\stores\index.ts

"use client";

import DrawerStore from "./DrawerStore";
import SidebarStore from "./SidebarStore";
import UserStore from "./UserStore";
import React from "react";

export const userStore = new UserStore();
export const drawerStore = new DrawerStore();
export const sidebarStore = new SidebarStore(userStore);

export const stores = {
	userStore,
	drawerStore,
	sidebarStore,
};

export const storesContext = React.createContext(stores);
