//path: src\components\chat\messageBox.tsx

import Shorthand from "@/data/shorthand";

export interface MessageData {
	username: string;
	text: string;
	bg: string;
}

export interface MessageBoxProps {
	message: MessageData;
}

export const MessageBox = ({ message }: MessageBoxProps) => {
	return (
		<>
			<p
				className={`px-3 py-1 ${message.bg} my-0.5 rounded-lg ${Shorthand.shadow.build}`}
			>
				{`${message.username}: ${message.text}`}
			</p>
		</>
	);
};
