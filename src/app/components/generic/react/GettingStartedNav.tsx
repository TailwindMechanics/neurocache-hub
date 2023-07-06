import { useState, FC } from "react";

interface Nav {
    name: string;
    isActive: boolean;
}

interface GettingStartedNavProps {
    activeIndex: number;
}

const GettingStartedNav: FC<GettingStartedNavProps> = ({ activeIndex }) => {
    const SECTION_NAVS: Nav[] = [
        { name: "Introduction", isActive: activeIndex === 1 },
        { name: "How to Use", isActive: false },
        { name: "Tailwind CSS", isActive: false },
        { name: "Daisy UI", isActive: false },
        { name: "Chart JS", isActive: false },
        { name: "Redux Toolkit", isActive: false },
        { name: "Hero Icons", isActive: false },
        { name: "Project Structure", isActive: false },
    ];
    
    const [navs, setNavs] = useState(SECTION_NAVS);

    const scrollToSection = (currentIndex: number) => {
        return () => {
            setNavs(navs.map((n, k) => {
                if (k === currentIndex) return { ...n, isActive: true };
                else return { ...n, isActive: false };
            }));
            const element = document.getElementById('getstarted' + (currentIndex + 1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        };
    };
    

    return (
        <ul className="menu w-56 mt-10 text-sm">
            <li className="menu-title"><span className="">Getting Started</span></li>

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

export default GettingStartedNav;
