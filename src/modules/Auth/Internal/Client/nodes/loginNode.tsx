//path: src\modules\Auth\Internal\Client\nodes\loginNode.tsx

"use client";

import React, { useEffect, useState } from "react";
import { NodeProps, useReactFlow } from "reactflow";
import {
    createClientComponentClient,
    User,
} from "@supabase/auth-helpers-nextjs";

import { CustomNode } from "@modules/Graph/types";
import { NodeSelection, OnDoubleClick } from "@modules/Graph";
import { TabPreset } from "@modules/Composer";
import { Tab } from "@headlessui/react";
import {
    TabListPreset,
    ContentPreset,
    ButtonPreset,
    StatusPreset,
    InputPreset,
    FormPreset,
    CardPreset,
    Composer,
} from "@modules/Composer";
import { useDrawer } from "@modules/Drawer";

const Card = new Composer("LoginContent", CardPreset)
    .withStyle("w-4u")
    .withStyle("min-h-2u")
    .withStyle("flex")
    .withStyle("flex-col")
    .withRoundedFrame()
    .build();
const Button = new Composer("LoginButton", ButtonPreset)
    .withStyle("text-xs")
    .withStyle("flex-grow")
    .withRoundedButton()
    .build();
const Input = new Composer("LoginInput", InputPreset)
    .withStyle("text-center")
    .withRoundedElement()
    .build();
const Content = new Composer("LoginContent", ContentPreset)
    .withStyle("text-night-title")
    .withStyle("bg-night-dark")
    .withStyle("leading-none")
    .withStyle("align-bottom")
    .withStyle("text-center")
    .withStyle("flex-grow")
    .withStyle("truncate")
    .withStyle("text-ss")
    .withStyle("pt-0.5")
    .withStyle("px-1")
    .withRoundedElement()
    .build();

const LoginNode = React.memo((props: NodeProps) => {
    const [confirmPasswordText, setConfirmPasswordText] = useState("");
    const [passwordText, setPasswordText] = useState("");
    const [emailText, setEmailText] = useState("");
    const supabase = createClientComponentClient();
    const [user, setUser] = useState<User>();
    const allNodes = useReactFlow().getNodes();
    const nodeData = props.data as CustomNode;
    const [statusText, setStatusText] = useState("");
    const { openDrawer } = useDrawer();

    const resetStatusText = () => {
        setTimeout(() => {
            setStatusText("");
        }, 6000);
    };

    useEffect(() => {
        if (statusText) {
            resetStatusText();
        }
    }, [statusText]);

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

    const onSignUp = async () => {
        if (passwordText === confirmPasswordText) {
            const response = await supabase.auth.signUp({
                email: emailText,
                password: passwordText,
            });
            if (response.error) {
                setStatusText(response.error.message);
            } else if (response.data.user) {
                window.location.reload();
            }
        } else {
            setStatusText("Passwords do not match!");
        }
    };
    const onLogin = async () => {
        const response = await supabase.auth.signInWithPassword({
            email: emailText,
            password: passwordText,
        });
        if (response.error) {
            setStatusText(response.error.message);
        } else if (response.data.user) {
            window.location.reload();
        }
    };

    const onLogout = async () => {
        const response = await supabase.auth.signOut();
        if (response.error) {
            setStatusText(response.error.message);
        } else {
            window.location.reload();
        }
    };

    return (
        <>
            <Card
                onDoubleClick={() => OnDoubleClick(nodeData, openDrawer)}
                className={NodeSelection(props.id, allNodes)}>
                {user ? (
                    <>
                        <Content>{user.email}</Content>
                        <Button type="button" onClick={onLogout}>
                            Logout
                        </Button>
                    </>
                ) : (
                    <Tab.Group>
                        <TabListPreset>
                            <TabPreset>Login</TabPreset>
                            <TabPreset>Signup</TabPreset>
                        </TabListPreset>
                        <Tab.Panels>
                            <Tab.Panel>
                                <FormPreset id="login_form" onSubmit={onLogin}>
                                    <Input
                                        type="email"
                                        id="login_email"
                                        placeholder="email"
                                        className="font-mono text-ss"
                                        value={emailText}
                                        onChange={(e) =>
                                            setEmailText(e.target.value)
                                        }
                                    />
                                    <Input
                                        id="login_password"
                                        className="font-mono text-ss"
                                        value={passwordText}
                                        placeholder="password"
                                        type="password"
                                        onChange={(e) =>
                                            setPasswordText(e.target.value)
                                        }
                                    />
                                    <Button id="login_button" type="submit">
                                        Login
                                    </Button>
                                </FormPreset>
                            </Tab.Panel>
                            <Tab.Panel>
                                <FormPreset
                                    id="signup_form"
                                    onSubmit={onSignUp}>
                                    <Input
                                        id="signup_email"
                                        type="email"
                                        placeholder="email"
                                        className="font-mono text-ss"
                                        value={emailText}
                                        onChange={(e) =>
                                            setEmailText(e.target.value)
                                        }
                                    />
                                    <Input
                                        id="signup_password"
                                        className="font-mono text-ss"
                                        value={passwordText}
                                        placeholder="password"
                                        type="password"
                                        onChange={(e) =>
                                            setPasswordText(e.target.value)
                                        }
                                    />
                                    <Input
                                        id="signup_confirm_password"
                                        className="font-mono text-ss"
                                        value={confirmPasswordText}
                                        type="password"
                                        placeholder="Confirm Password"
                                        onChange={(e) =>
                                            setConfirmPasswordText(
                                                e.target.value,
                                            )
                                        }
                                    />
                                    <Button id="signup_button" type="submit">
                                        Signup
                                    </Button>
                                </FormPreset>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                )}
                <StatusPreset newStatus={statusText} />
            </Card>
        </>
    );
});

LoginNode.displayName = "LoginNode";
export { LoginNode };
