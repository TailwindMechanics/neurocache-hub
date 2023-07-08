//path: src\app\hub\dashboard\(welcome)\welcomeDrawer.tsx

import { FC } from 'react'

interface WelcomeDrawerProps {

}

const WelcomeDrawer: FC = () => {
    return <>
        <div className="chat chat-start">
            <div className="chat-bubble border border-dotted border-main-light">
                This is a message sent by the user,
                <br />and another.
            </div>
        </div>
        <div className="chat chat-end">
            <div className="chat-bubble bg-main-light">
                This is a reply from the agent.
                </div>
        </div>
    </>
}

export default WelcomeDrawer