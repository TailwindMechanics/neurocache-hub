//path: src\modules\Drawer\Internal\components\conciergeChat.tsx

import React, { FC } from "react";
import Image from "next/image";

import { Composer, DivAtom, InputPreset } from "@modules/Composer";

export const ConciergeAgent: string = "Concierge: Aine";

const ChatFrame = new Composer("ConciergeChatFrame", DivAtom)
    .withStyle("justify-between")
    .withStyle("flex-col")
    .withStyle("h-60")
    .withStyle("flex")
    .withRoundedElement()
    .build();
const ChatArea = new Composer("ConciergeChatArea", DivAtom)
    .withStyle("overflow-y-auto")
    .withStyle("scrollbar-hide")
    .withStyle("flex-grow")
    .withStyle("flex-col")
    .withStyle("flex")
    .withRoundedElement()
    .build();
const ChatLine = new Composer("ConciergeChatBubble", DivAtom)
    .withStyle("text-night-title")
    .withStyle("rounded-lg")
    .withStyle("flex-grow")
    .withStyle("flex-col")
    .withStyle("flex")
    .withStyle("py-1")
    .withStyle("px-1.5")
    .build();
const Input = new Composer("ConciergeAgentInput", InputPreset)
    .withStyle("text-start")
    .withStyle("border-2")
    .withStyle("text-2xl")
    .withStyle("py-1")
    .withStyle("h-20p")
    .withRoundedElement()
    .build();

interface ChatLineHeaderProps {
    Title: string;
    ImageUrl: string;
}
const ChatLineHeader = (props: ChatLineHeaderProps) => {
    return (
        <div className="flex items-center space-x-3 rounded-t-2xl border border-b-night-light border-l-night border-r-night border-t-night bg-night-black">
            <Image
                width={128}
                height={128}
                src={props.ImageUrl}
                alt={props.Title}
                className="h-8 w-8 rounded-full object-fill"
            />
            <p className="text-2xl font-bold text-aqua-dark">{props.Title}</p>
        </div>
    );
};

const ChatLineBody = () => {
    return (
        <p className="rounded-b-lg border border-b-night border-l-night border-r-night border-t-night-black bg-night-black px-1.5">
            WebGPU, a new web standard for high-performance 3D graphics and
            data-parallel computation on the web, has been officially released.
            It was shipped by the Chrome team on April 6, 2023, and is available
            by default in Chrome 113. This release marks a significant milestone
            as it brings advanced GPU capabilities to the web, similar to APIs
            like Direct3D 12, Metal, and Vulkan, but with a focus on web
            platform integration. WebGPU provides access to more advanced GPU
            features than its predecessor, WebGL, and offers improvements in
            areas such as reduced JavaScript workload for graphics rendering and
            enhanced efficiency in machine learning model inferences. The
            initial release of WebGPU supports ChromeOS, macOS, and Windows,
            with plans for expanding support to other platforms later.
        </p>
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
                        <ChatLineBody />
                    </ChatLine>
                    <ChatLine>
                        <ChatLineHeader
                            Title={"Aine"}
                            ImageUrl={"/avatars/aine.png"}
                        />
                        <ChatLineBody />
                    </ChatLine>
                </ChatArea>
                <Input />
            </ChatFrame>
        </>
    );
});

ConciergeChat.displayName = "ConciergeChat";
export { ConciergeChat };
