//path: src\app\chat\page.tsx

"use client";

import ChatInput from "@/components/chat/chatInput";
import Hublayout from "@/components/hub/hubLayout";

export default function ChatRoot() {
	return (
		<>
			<Hublayout headerText="Chat">
				<div className="flex h-full w-full">
					<ChatInput />
				</div>
			</Hublayout>
		</>
	);
}
