//path: src\stores\index.ts

"use client"

import DrawerStore from './DrawerStore';
import UserStore from './UserStore';
import React from 'react';

export const userStore = new UserStore();
export const drawerStore = new DrawerStore();

export const stores = {
  userStore,
  drawerStore
};

export const storesContext = React.createContext(stores);
