//path: src\modules\Auth\client\nodes\loginNode.tsx

"use client";

import React, { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
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

const Card = new Composer("LoginContent", CardPreset)
    .withStyle("w-48")
    .withStyle("flex")
    .withRoundedFrame()
    .build();
const Content = new Composer("LoginContent", ContentPreset)
    .withStyle("text-night-title")
    .withStyle("bg-night-dark")
    .withStyle("text-center")
    .withStyle("text-sm")
    .withStyle("px-1")
    .withRoundedContent()
    .build();
const Button = new Composer("LoginButton", ButtonPreset)
    .withStyle("text-sm")
    .withRoundedButton()
    .build();
const Input = new Composer("LoginInput", InputPreset)
    .withStyle("text-center")
    .withRoundedElement()
    .build();
const Toggle = new Composer("LoginButton", ButtonPreset)
    .withStyle("text-sm")
    .withRoundedElement()
    .build();

const LoginNode: React.FC<NodeProps> = (props: NodeProps) => {
    const [passwordText, setPasswordText] = useState("");
    const [confirmPasswordText, setConfirmPasswordText] = useState("");
    const [emailText, setEmailText] = useState("");
    const [isSignUp, setIsSignUp] = useState(false);
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

    const onSubmit = async () => {
        if (!user) {
            if (isSignUp) {
                if (passwordText === confirmPasswordText) {
                    const response = await supabase.auth.signUp({
                        email: emailText,
                        password: passwordText,
                    });
                    if (response.data.user) {
                        window.location.reload();
                    }
                } else {
                    alert("Passwords do not match!");
                }
            } else {
                const response = await supabase.auth.signInWithPassword({
                    email: emailText,
                    password: passwordText,
                });
                if (response.data.user) {
                    window.location.reload();
                }
            }
        }
    };

    const onLogout = async () => {
        const response = await supabase.auth.signOut();
        if (!response.error) {
            window.location.reload();
        } else {
            console.error(`Failed to log out: ${response.error}`);
        }
    };

    return (
        <>
            <Card className={NodeSelection(props.id)}>
                {user ? (
                    <Button type="button" onClick={onLogout}>
                        Logout
                    </Button>
                ) : (
                    <Tab.Group>
                        <Tab.List className="flex space-x-1 bg-blue-900 p-1">
                            <Tab
                                className={({ selected }) =>
                                    selected
                                        ? "w-full bg-blue-600 py-2.5 text-sm font-medium text-white"
                                        : "w-full py-2.5 text-sm font-medium text-white"
                                }
                                onClick={() => setIsSignUp(false)}>
                                Login
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    selected
                                        ? "w-full bg-blue-600 py-2.5 text-sm font-medium text-white"
                                        : "w-full py-2.5 text-sm font-medium text-white"
                                }
                                onClick={() => setIsSignUp(true)}>
                                Signup
                            </Tab>
                        </Tab.List>
                        <Tab.Panels className="mt-2">
                            <Tab.Panel>
                                <FormPreset id="login_form" onSubmit={onSubmit}>
                                    <Input
                                        id="login_email"
                                        className="font-mono text-xs"
                                        value={emailText}
                                        onChange={(e) =>
                                            setEmailText(e.target.value)
                                        }
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
                                    <Button id="login_button" type="submit">
                                        Login
                                    </Button>
                                </FormPreset>
                            </Tab.Panel>
                            <Tab.Panel>
                                <FormPreset
                                    id="signup_form"
                                    onSubmit={onSubmit}>
                                    <Input
                                        id="signup_email"
                                        className="font-mono text-xs"
                                        value={emailText}
                                        onChange={(e) =>
                                            setEmailText(e.target.value)
                                        }
                                    />
                                    <Input
                                        id="signup_password"
                                        className="font-mono text-xs"
                                        value={passwordText}
                                        type="password"
                                        onChange={(e) =>
                                            setPasswordText(e.target.value)
                                        }
                                    />
                                    <Input
                                        id="signup_confirm_password"
                                        className="font-mono text-xs"
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
            </Card>
        </>
    );
};

const reflect_nodeData = {
    nodeType: "login",
    nodeName: "Login",
    category: "Utils",
    nodeId: "node_login_1",
    body: "This node logs a user in or signs up a new user.",
    handles: [],
    nodePosition: { x: 0, y: 0 },
    nodeComponent: LoginNode,
} as CustomNode;

export default React.memo(LoginNode);
