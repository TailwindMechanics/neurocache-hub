//path: src\modules\Drawer\Internal\components\conciergeChat.tsx

import React, { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";

import { getConciergeAgent } from "@modules/Agents/External/Server/actions";
import { Composer, DivAtom, TextAreaPreset } from "@modules/Composer";
import { useAgentStore } from "@modules/Agents/External/agentStore";
import { ChatMessage } from "@modules/Drawer/types";

const ChatFrame = new Composer("ConciergeChatFrame", DivAtom)
    .withStyle("justify-between")
    .withStyle("flex-col")
    .withStyle("h-25u")
    .withStyle("flex")
    .withRoundedElement()
    .build();
const ChatArea = new Composer("ConciergeChatArea", DivAtom)
    .withStyle("flex-col-reverse")
    .withStyle("overflow-y-auto")
    .withStyle("scrollbar-hide")
    .withStyle("flex-grow")
    .withStyle("flex")
    .withStyle("px-1")
    .withStyle("pb-0.5")
    .withRoundedElement()
    .build();
const ChatLine = new Composer("ConciergeChatBubble", DivAtom)
    .withStyle("text-night-title")
    .withStyle("items-start")
    .withStyle("flex")
    .withStyle("mx-1")
    .withStyle("mt-1")
    .build();
const TextArea = new Composer("ConciergeAgentInput", TextAreaPreset)
    .withStyle("font-semibold")
    .withStyle("leading-snug")
    .withStyle("resize-none")
    .withStyle("text-start")
    .withStyle("rounded-lg")
    .withStyle("border-2")
    .withStyle("text-xl")
    .build();

interface RemoteUserChatLineProps {
    className?: string;
    Username: string;
    AvatarUrl: string;
    Body: string;
}

const RenderBasedOnLinesLength = (linesLength: number) => {
    if (linesLength < 2) {
        return null;
    } else if (linesLength > 3) {
        return (
            <div className="w-full bg-night-black">
                <div className="h-5 w-full rounded-tr-full bg-night"></div>
            </div>
        );
    } else {
        return (
            <div className="w-full bg-night-black">
                <div className="h-4 w-full rounded-tr-xl bg-night"></div>
            </div>
        );
    }
};

const RemoteUserChatLine = (props: RemoteUserChatLineProps) => {
    const textRef = useRef<HTMLDivElement>(null);
    const [linesLength, setLinesLength] = useState(0);

    useEffect(() => {
        if (textRef.current) {
            const height = textRef.current.clientHeight;
            const lineHeight = parseInt(
                window.getComputedStyle(textRef.current).lineHeight,
            );
            setLinesLength(height / lineHeight);
        }
    }, [props.Body]);

    return (
        <>
            <ChatLine className={props.className}>
                <div className="items-left flex h-full w-10 flex-shrink-0 flex-col">
                    <div className="w-full rounded-l-full bg-night-black p-1">
                        <Image
                            width={128}
                            height={128}
                            src={props.AvatarUrl}
                            alt={props.Username}
                            className="h-8 w-8 rounded-full object-fill"
                        />
                    </div>
                    {RenderBasedOnLinesLength(linesLength)}
                </div>
                <div
                    ref={textRef}
                    className={`min-h-8 h-full w-full rounded-br-xl rounded-tr-xl bg-night-black px-2 py-1 font-semibold leading-snug ${
                        linesLength < 2
                            ? ""
                            : linesLength <= 3
                            ? "rounded-bl-lg"
                            : "rounded-bl-xl"
                    }`}>
                    {props.Body}
                </div>
            </ChatLine>
        </>
    );
};

const UserChatLine = (props: { Body: string; className?: string }) => {
    return (
        <ChatLine className={props.className}>
            <p className="h-full w-full rounded-b-xl rounded-l-xl bg-aqua-black px-2 py-1 font-bold leading-tight text-night-black">
                {props.Body}
            </p>
            <div className="w-3 flex-shrink-0 bg-aqua-black">
                <div className="h-5 w-full rounded-tl-full bg-night"></div>
            </div>
        </ChatLine>
    );
};

const ChatSkeleton = () => {
    return (
        <div className="animate-pulse">
            <RemoteUserChatLine
                className="opacity-50"
                Username={""}
                AvatarUrl={"/avatars/placeholder.png"}
                Body={
                    "———— ———————— ———— ———————— ———— ———————— ———— ———————— ———— ———————— ———— ———————— ———— ———————— ———— ———————— ———— ———————— ———— ————————"
                }
            />
            <UserChatLine
                className="opacity-50"
                Body={"———————— ———— ———————— ———— ———————— ———— ———————— ————"}
            />
            <RemoteUserChatLine
                className="opacity-50"
                Username={""}
                AvatarUrl={"/avatars/placeholder.png"}
                Body={
                    "———— ———————— ———— ———————— ———— ———————— ———— ———————— ———— ———————— ———— ———————— ———— ———————— ———— ———————— ———— ———————— ———— ————————"
                }
            />
            <UserChatLine
                className="opacity-50"
                Body={"———————— ———— ———————— ———— ———————— ———— ———————— ————"}
            />
            <RemoteUserChatLine
                className="opacity-50"
                Username={""}
                AvatarUrl={"/avatars/placeholder.png"}
                Body={
                    "———— ———————— ———— ———————— ———— ———————— ———— ———————— ———— ———————— ———— ———————— ———— ———————— ———— ———————— ———— ———————— ———— ————————"
                }
            />
            <UserChatLine
                className="opacity-50"
                Body={"———————— ———— ———————— ———— ———————— ———— ———————— ————"}
            />
            <RemoteUserChatLine
                className="opacity-50"
                Username={""}
                AvatarUrl={"/avatars/placeholder.png"}
                Body={
                    "———— ———————— ———— ———————— ———— ———————— ———— ———————— ———— ———————— ———— ———————— ———— ———————— ———— ———————— ———— ———————— ———— ————————"
                }
            />
        </div>
    );
};

const ConciergeChat: FC = React.memo(() => {
    const { conciergeAgent, setConciergeAgent } = useAgentStore((state) => ({
        conciergeAgent: state.conciergeAgent,
        setConciergeAgent: state.setConciergeAgent,
    }));
    const [chatHistory, setChatHistory] = useState<ChatMessage[] | undefined>(
        undefined,
    );

    useEffect(() => {
        const fetchData = async () => {
            const fetchedHistory = await getConciergeAgent();
            if (fetchedHistory) {
                setChatHistory(fetchedHistory.chatHistory);
                console.log(fetchedHistory.agent);

                setConciergeAgent(fetchedHistory.agent);
            }
        };

        fetchData();
    }, [setConciergeAgent]);

    return (
        <>
            <ChatFrame>
                <ChatArea>
                    {chatHistory ? (
                        chatHistory.map((message, index) => {
                            if (message.user_author_id) {
                                return (
                                    <UserChatLine
                                        key={index}
                                        Body={message.content}
                                    />
                                );
                            } else {
                                return (
                                    <RemoteUserChatLine
                                        key={index}
                                        Username={
                                            conciergeAgent?.agent_name ??
                                            "Unknown"
                                        }
                                        AvatarUrl={
                                            conciergeAgent?.avatar_url ??
                                            "/avatars/placeholder.png"
                                        }
                                        Body={message.content}
                                    />
                                );
                            }
                        })
                    ) : (
                        <ChatSkeleton />
                    )}
                </ChatArea>
                <div className="mx-1">
                    <TextArea />
                </div>
            </ChatFrame>
        </>
    );
});

ConciergeChat.displayName = "ConciergeChat";
export { ConciergeChat };
