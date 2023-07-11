//path: src\components\chat\chatInput.tsx

import { useState, FormEvent, KeyboardEvent, useRef, useEffect } from 'react';
import AutoResizingTextarea from './autoResizingTextArea';
import { MessageBox, MessageData } from './messageBox';


const ChatInput = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<MessageData[]>([]);
    const [userHasScrolled, setUserHasScrolled] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
        const scrollFromBottom = scrollHeight - (scrollTop + clientHeight);
        const scrollThreshold = 40;  // Set lineHeight according to your needs

        if (scrollFromBottom > scrollThreshold) {
            setUserHasScrolled(true);
        } else {
            setUserHasScrolled(false);
        }
    }

    useEffect(() => {
        if (!userHasScrolled && messagesEndRef.current !== null) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const bg = messages.length % 2 === 0 ? 'bg-main-light' : 'bg-main-dark border border-main-light';
        const username = messages.length % 2 === 0 ? 'Bob' : 'Alice';
        const newMessage = { username: username, text: message, bg };
        setMessages([...messages, newMessage]);
        setMessage('');
    };  

    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSubmit(event);
        }
    }

    return (
        <div className="p-3 flex flex-col w-full h-full">
            <div className="scrollbar-none px-3 pt-3 pb-2 overflow-y-auto flex-grow flex flex-col" onScroll={handleScroll}>
                {/* Display the messages */}
                {messages.map((msg, index) => <MessageBox key={index} message={msg} />)}
                <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSubmit} className='-mb-2'>
                <label htmlFor="chat" className="hidden sr-only">Your message</label>
                <AutoResizingTextarea
                    value={message}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}/>
            </form>
        </div>
    )
}

export default ChatInput;
