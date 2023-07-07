//path: src\app\features\documentation\components\DocComponentsNav.tsx

import { FC, useState, MouseEventHandler } from "react";

interface NavItem {
    name: string;
    isActive: boolean;
}

interface DocComponentsNavProps {
    activeIndex: number;
}

const DocComponentsNav: FC<DocComponentsNavProps> = ({ activeIndex }) => {
    const SECTION_NAVS: NavItem[] = [
        { name: "Typography", isActive: activeIndex === 1 },
        { name: "Form Input", isActive: false },
        { name: "Cards", isActive: false },
    ];

    const [navs, setNavs] = useState(SECTION_NAVS);

    const scrollToSection = (currentIndex: number): MouseEventHandler<HTMLLIElement> => {
        return () => {
            setNavs(navs.map((n, k) => {
                if (k === currentIndex) return { ...n, isActive: true };
                else return { ...n, isActive: false };
            }));
            const element = document.getElementById('component' + (currentIndex + 1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        };
    };

    return (
        <ul className="menu w-56 mt-10 text-sm">
            <li className="menu-title"><span className="">Components</span></li>

            {
                navs.map((n, k) => {
                    return (
                        <li key={k} onClick={scrollToSection(k)} className={n.isActive ? "bordered" : ""}><a>{n.name}</a></li>
                    );
                })
            }
        </ul>
    );
};

export default DocComponentsNav;
