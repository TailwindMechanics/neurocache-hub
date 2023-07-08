//path: src\app\hub\dashboard\sideMenu.tsx

import { LivePanel } from '@/app/components/generic/react/livePanel'
import { FC } from 'react'


const SideMenu: FC = () => {
    return <>
        <ul className="menu">
            <LivePanel>
                <li><a>Item 1</a></li>
            </LivePanel>
            <li>
                <details open>
                    <summary>Parent</summary>
                    <ul>
                        <LivePanel>
                            <li><a>level 2 item 1</a></li>
                        </LivePanel>
                        <LivePanel>
                            <li><a>level 2 item 2</a></li>
                        </LivePanel>
                        <li>
                            <details open>
                                <summary>Parent</summary>
                                <ul>
                                    <LivePanel>
                                        <li><a>level 3 item 1</a></li>
                                    </LivePanel>
                                    <LivePanel>
                                        <li><a>level 3 item 2</a></li>
                                    </LivePanel>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </details>
            </li>
            <LivePanel>
                <li><a>Item 3</a></li>
            </LivePanel>
        </ul>
    </>
}

export default SideMenu