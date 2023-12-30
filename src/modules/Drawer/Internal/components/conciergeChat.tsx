//path: src\modules\Drawer\Internal\components\conciergeChat.tsx

import React, { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";

import { Composer, DivAtom, TextAreaPreset } from "@modules/Composer";

const ChatFrame = new Composer("ConciergeChatFrame", DivAtom)
    .withStyle("justify-between")
    .withStyle("flex-col")
    .withStyle("h-80")
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
    .withRoundedElement()
    .build();
const ChatLine = new Composer("ConciergeChatBubble", DivAtom)
    .withStyle("text-night-title")
    .withStyle("items-start")
    .withStyle("flex")
    .withStyle("mr-1")
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
            <ChatLine>
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

const UserChatLine = (props: { Body: string }) => {
    return (
        <ChatLine>
            <p className="ml-1 w-full rounded-b-xl rounded-l-xl bg-aqua-black px-2 py-1 font-bold leading-tight text-night-black">
                {props.Body}
            </p>
            <div className="w-3 flex-shrink-0 bg-aqua-black">
                <div className="h-5 w-full rounded-tl-full bg-night"></div>
            </div>
        </ChatLine>
    );
};

const ConciergeChat: FC = React.memo(() => {
    return (
        <>
            <ChatFrame>
                <ChatArea>
                    <UserChatLine Body="Tailwind classes" />
                    <RemoteUserChatLine
                        Username={"Aine"}
                        AvatarUrl={"/avatars/aine.png"}
                        Body="Conditional rendering is done with the ternary operator."
                    />
                    <RemoteUserChatLine
                        Username={"Aine"}
                        AvatarUrl={"/avatars/aine.png"}
                        Body="Conditional rendering is done with the ternary operator."
                    />
                    <UserChatLine Body="Tailwind classes" />
                    <RemoteUserChatLine
                        Username={"Aine"}
                        AvatarUrl={"/avatars/aine.png"}
                        Body="Here's the corrected syntax."
                    />
                    <RemoteUserChatLine
                        Username={"Aine"}
                        AvatarUrl={"/avatars/aine.png"}
                        Body="In React, conditional rendering is typically handled using
                        ternary operators."
                    />
                    <UserChatLine Body="Tailwind classes" />
                    <UserChatLine Body="Tailwind classes" />
                    <UserChatLine Body="Tailwind classes. These can cause a gradual change in height" />
                    <RemoteUserChatLine
                        Username={"Aine"}
                        AvatarUrl={"/avatars/aine.png"}
                        Body="Check for CSS Transitions/Animations: Ensure that no 
                        CSS transitions or animations are being applied to the textarea's 
                        height property in your global styles or Tailwind classes. 
                        These can cause a gradual change in height rather than an 
                        immediate adjustment."
                    />
                    <UserChatLine Body="Tailwind classes. These can cause a gradual change in height" />
                    <RemoteUserChatLine
                        Username={"Aine"}
                        AvatarUrl={"/avatars/aine.png"}
                        Body="If the textarea's height adjustment appears to be lagging or
                        requires multiple frames to update, it might indeed be due
                        to CSS transitions or animations applied to the height
                        property. The behavior could also be influenced by how the
                        scrollHeight is being calculated and applied. Here are a few
                        things to consider and adjust in your code"
                    />
                    <UserChatLine
                        Body="Ok so the issue here is it seems to need
                        many frames to get from one value to the other, 
                        is that due to some sort of animation or transition 
                        somewhere? Can we force it?"
                    />
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
