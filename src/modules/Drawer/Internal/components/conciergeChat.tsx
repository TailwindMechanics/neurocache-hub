//path: src\modules\Drawer\Internal\components\conciergeChat.tsx

import React, { FC } from "react";
import Image from "next/image";

import { Composer, DivAtom, TextAreaPreset } from "@modules/Composer";

export const ConciergeAgent: string = "Concierge: Aine";

const ChatFrame = new Composer("ConciergeChatFrame", DivAtom)
    .withStyle("justify-between")
    .withStyle("flex-col")
    .withStyle("h-70")
    .withStyle("flex")
    .withRoundedElement()
    .build();
const ChatArea = new Composer("ConciergeChatArea", DivAtom)
    .withStyle("overflow-y-auto")
    .withStyle("scrollbar-hide")
    .withStyle("flex-grow")
    .withStyle("flex-col-reverse")
    .withStyle("flex")
    .withStyle("px-1")
    .withRoundedElement()
    .build();
const ChatLine = new Composer("ConciergeChatBubble", DivAtom)
    .withStyle("text-night-title")
    .withStyle("items-start")
    .withStyle("flex")
    .withStyle("py-1")
    .build();
const TextArea = new Composer("ConciergeAgentInput", TextAreaPreset)
    .withStyle("resize-none")
    .withStyle("text-start")
    .withStyle("rounded-lg")
    .withStyle("border-2")
    .withStyle("text-xl")
    .withStyle("font-semibold")
    .withStyle("leading-snug")
    .build();

interface ChatLineHeaderProps {
    Title: string;
    ImageUrl: string;
}
const ChatLineHeader = (props: ChatLineHeaderProps) => {
    return (
        <div className="items-left flex h-full w-10 flex-shrink-0 flex-col">
            <div className="w-full rounded-l-full bg-night-black p-1">
                <Image
                    width={128}
                    height={128}
                    src={props.ImageUrl}
                    alt={props.Title}
                    className="h-8 w-8 rounded-full object-fill"
                />
            </div>
            <div className="w-full bg-night-black">
                <div className="min-h-10 h-10 w-full rounded-tr-xl bg-night"></div>
            </div>
        </div>
    );
};

interface ChatLineBodyProps {
    Body: string;
}
const ChatLineBody = (props: ChatLineBodyProps) => {
    return (
        <p className="rounded-b-xl rounded-r-xl bg-night-black px-2 py-1 font-semibold leading-snug">
            {props.Body}
        </p>
    );
};

const UserChatLine = (props: ChatLineBodyProps) => {
    return (
        <ChatLine>
            <div className="w-12 "></div>
            <p className="rounded-b-xl rounded-l-xl bg-aqua-black px-2 py-1 font-bold leading-snug text-night-black">
                {props.Body}
            </p>
        </ChatLine>
    );
};

const ConciergeChat: FC = React.memo(() => {
    return (
        <>
            <ChatFrame>
                <ChatArea>
                    <ChatLine>
                        <ChatLineHeader
                            Title={"Aine"}
                            ImageUrl={"/avatars/aine.png"}
                        />
                        <ChatLineBody
                            Body="WebGPU, a new web standard for high-performance 3D graphics and
                            data-parallel computation on the web, has been officially released."
                        />
                    </ChatLine>
                    <UserChatLine Body="I have been dead for ten thousand years." />
                    <ChatLine>
                        <ChatLineHeader
                            Title={"Aine"}
                            ImageUrl={"/avatars/aine.png"}
                        />
                        <ChatLineBody
                            Body="Optical illusions in logos typically involve visual tricks that
                            play on perception—like objects appearing different from what
                            they are, shapes that seem to move or change, or clever use of
                            negative space."
                        />
                    </ChatLine>
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
