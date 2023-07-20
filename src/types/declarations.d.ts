//path: src\types\declarations.d.ts

import { ReactNode, FC, HTMLAttributes } from "react";

interface IconProps {
	className?: string;
}

interface UserProfile {
	user_id: string;
	first_name: string;
	last_name: string;
	avatar_url: string;
}

interface Route {
	isActive: (path: string) => boolean;
	icon: React.FC<IconProps>;
	name: string;
	path: string;
	authenticated: boolean;
}

interface AtomProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	className?: string;
}

type AtomNode = FC<AtomProps>;

declare module "react-tailwindcss-datepicker";
declare module "react-notifications" {
	const content: any;
	export = content;
}
