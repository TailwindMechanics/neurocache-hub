import { useState, FormEvent, KeyboardEvent, useRef, useEffect } from 'react';
import AutoResizingTextarea from './autoResizingTextArea';

const ChatInput = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<string[]>([]);
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
        setMessages([...messages, message]);
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
                {messages.map((msg, index) => 
                    <p key={index} className={`p-1 ${index % 2 === 0 ? 'bg-main-light rounded-lg' : 'bg-main-dark rounded-lg'}`}>{msg}</p>)}
                <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSubmit} className='-mb-2'>
                <label htmlFor="chat" className="hidden sr-only">Your message</label>
                <AutoResizingTextarea
                    value={message}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Unleash the fury, Mitch." />
            </form>
        </div>
    )
}

export default ChatInput;
