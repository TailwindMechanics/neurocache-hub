//path: src\app\chat\page.tsx

"use client";

import ChatInput from "@/components/z_deprecated/chat/chatInput";
import Hublayout from "@/components/z_deprecated/hub/hubLayout";

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
