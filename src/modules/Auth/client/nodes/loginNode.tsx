//path: src\modules\Auth\client\nodes\loginNode.tsx

"use client";

import React, { useEffect, useState } from "react";
import { NodeProps } from "reactflow";
import {
    createClientComponentClient,
    User,
} from "@supabase/auth-helpers-nextjs";

import { NodeSelection } from "src/modules/Graph";
import { CustomNode } from "src/modules/Graph/types";
import {
    ContentPreset,
    ButtonPreset,
    InputPreset,
    FormPreset,
    CardPreset,
    Composer,
} from "src/modules/Composer";

const Content = new Composer("LoginContent", ContentPreset)
    .withStyle("text-night-title")
    .withStyle("text-sm")
    .withStyle("px-1")
    .withRoundedElement()
    .build();
const Button = new Composer("LoginButton", ButtonPreset)
    .withStyle("text-sm")
    .withRoundedButton()
    .build();
const Input = new Composer("LoginInput", InputPreset)
    .withStyle("text-center")
    .withRoundedElement()
    .build();

const LoginNode: React.FC<NodeProps> = (props: NodeProps) => {
    const [passwordText, setPasswordText] = useState("");
    const [emailText, setEmailText] = useState("");
    const supabase = createClientComponentClient();
    const [user, setUser] = useState<User>();

    useEffect(() => {
        const fetchUser = async () => {
            const sessionResponse = await supabase.auth.getSession();
            if (!sessionResponse.data.session) return;

            const response = await supabase.auth.getUser();
            if (response.error) return;

            setUser(response.data.user);
        };

        fetchUser();
    }, [supabase.auth]);

    const onSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!user) {
            await supabase.auth.signInWithPassword({
                email: emailText,
                password: passwordText,
            });
        } else {
            supabase.auth.signOut();
        }
    };

    return (
        <>
            <CardPreset className={NodeSelection(props.id)}>
                <FormPreset id="login_form" onSubmit={onSubmit}>
                    {user ? (
                        <Content>{user.email}</Content>
                    ) : (
                        <>
                            <Input
                                id="login_email"
                                className="font-mono text-xs"
                                value={emailText}
                                onChange={(e) => setEmailText(e.target.value)}
                            />
                            <Input
                                id="login_password"
                                className="font-mono text-xs"
                                value={passwordText}
                                type="password"
                                onChange={(e) =>
                                    setPasswordText(e.target.value)
                                }
                            />
                        </>
                    )}
                    <Button id="login_button" type="submit">
                        {user ? "Logout" : "Login"}
                    </Button>
                </FormPreset>
            </CardPreset>
        </>
    );
};

const reflect_nodeData = {
    nodeType: "login",
    nodeName: "Login",
    category: "Utils",
    nodeId: "node_login_1",
    body: "This node logs a user in.",
    handles: [],
    nodePosition: { x: 0, y: 0 },
    nodeComponent: LoginNode,
} as CustomNode;

export default React.memo(LoginNode);
