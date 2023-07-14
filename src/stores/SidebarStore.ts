//path: src\stores\SidebarStore.ts

import { BookOpen, ChatBubbleLeft, Code, Squares2x2, User, Users } from "@/data/icons";
import { computed, makeObservable, observable, action } from "mobx";
import { IconProps, Route } from "@/types/declarations";
import UserStore from "./UserStore";


class SidebarStore {
	userStore;
	currentRoute = '/';

	constructor(userStore: UserStore) {
		makeObservable(this, {
			currentRoute: observable,
			updateCurrentRoute: action,
			currentRoutes: computed,
		});
		this.userStore = userStore;
	}

	getRoutes() {
		const routes: Route[] = [
			this.createRoute('/', 'Dashboard', false, Squares2x2),
			this.createRoute('/profile', 'Profile', true, User),
			this.createRoute('/agents', 'Agents', true, Users),
			this.createRoute('/chat', 'Chat', true, ChatBubbleLeft),
			this.createRoute('/manage-api', 'Manage Api', true, Code),
			this.createRoute('/docs', 'Docs', true, BookOpen),
		];

		return routes;
	}

	createRoute(path: string, name: string, authenticated: boolean, icon: React.FC<IconProps>): Route {
		return {
			path,
			name,
			authenticated,
			icon,
			isActive: (query: string) => query === path,
		};
	}

	handleRouteChange(url: string) {
		this.updateCurrentRoute(url);
	}

	updateCurrentRoute(route: string) {
		this.currentRoute = route;
	}

	get currentRoutes() {
		if (this.userStore.isLoggedIn) {
			return this.getRoutes();
		} else {
			return this.getRoutes().filter(route => !route.authenticated);
		}
	}
}

export default SidebarStore;