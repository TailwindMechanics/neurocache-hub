//path: src\app\features\documentation\components\FeaturesNav.tsx

import { FC, useState, MouseEventHandler } from "react";

interface NavItem {
    name: string;
    isActive: boolean;
}

interface FeaturesNavProps {
    activeIndex: number;
}

const FeaturesNav: FC<FeaturesNavProps> = ({ activeIndex }) => {
    const SECTION_NAVS: NavItem[] = [
        { name: "Authentication", isActive: activeIndex === 1 },
        { name: "Sidebar", isActive: false },
        { name: "Add New Page", isActive: false },
        { name: "Right sidebar", isActive: false },
        { name: "Themes", isActive: false },
        { name: "Modal", isActive: false },
        { name: "Notification", isActive: false },
    ];

    const [navs, setNavs] = useState(SECTION_NAVS);

    const scrollToSection = (currentIndex: number): MouseEventHandler<HTMLLIElement> => {
        return () => {
            setNavs(navs.map((n, k) => {
                if (k === currentIndex) return { ...n, isActive: true };
                else return { ...n, isActive: false };
            }));
            const element = document.getElementById('feature' + (currentIndex + 1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        };
    };

    return (
        <ul className="menu w-56 mt-10 text-sm">
            <li className="menu-title"><span className="">Features</span></li>

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

export default FeaturesNav;