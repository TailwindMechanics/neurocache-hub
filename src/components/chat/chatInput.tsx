import AutoResizingTextarea from './autoResizingTextArea';
import { FC, useState, ChangeEvent } from 'react'


const ChatInput: FC = () => {
    const [message, setMessage] = useState('');

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    };

    return (
        <div className="flex-grow mt-auto">
            <form className='mt-auto flex-grow m-0 -mb-2 h-full'>
                <label htmlFor="chat" className="hidden sr-only">Your message</label>
                    <AutoResizingTextarea
                        value={message}
                        onChange={handleChange}
                        placeholder="Unleash the fury, Mitch." />
                <div className=''>
                </div>
            </form>
        </div>
    )
}

export default ChatInput;
