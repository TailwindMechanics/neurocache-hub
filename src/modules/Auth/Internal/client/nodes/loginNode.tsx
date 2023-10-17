//path: src\modules\Auth\Internal\client\nodes\loginNode.tsx

"use client";

import React, { useEffect, useState } from "react";
import { NodeProps, useReactFlow } from "reactflow";
import {
    createClientComponentClient,
    User,
} from "@supabase/auth-helpers-nextjs";

import { CustomNode } from "src/modules/Graph/types";
import { NodeSelection } from "src/modules/Graph";
import { TabPreset } from "@modules/Composer";
import { Tab } from "@headlessui/react";
import {
    TabListPreset,
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
const Button = new Composer("LoginButton", ButtonPreset)
    .withStyle("text-sm")
    .withRoundedButton()
    .build();
const Input = new Composer("LoginInput", InputPreset)
    .withStyle("text-center")
    .withRoundedElement()
    .build();
const Content = new Composer("LoginContent", ContentPreset)
    .withStyle("text-night-title")
    .withStyle("bg-night-dark")
    .withStyle("text-center")
    .withStyle("text-sm")
    .withStyle("px-1")
    .withRoundedElement()
    .build();

const LoginNode = React.memo((props: NodeProps) => {
    const [confirmPasswordText, setConfirmPasswordText] = useState("");
    const [passwordText, setPasswordText] = useState("");
    const [emailText, setEmailText] = useState("");
    const [isSignUp, setIsSignUp] = useState(false);
    const supabase = createClientComponentClient();
    const [user, setUser] = useState<User>();
    const allNodes = useReactFlow().getNodes();

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
                    const response = await supabase.auth.admin.createUser({
                        email: emailText,
                        password: passwordText,
                        email_confirm: true,
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
            <Card className={NodeSelection(props.id, allNodes)}>
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
                            <TabPreset onClick={() => setIsSignUp(false)}>
                                Login
                            </TabPreset>
                            <TabPreset onClick={() => setIsSignUp(true)}>
                                Signup
                            </TabPreset>
                        </TabListPreset>
                        <Tab.Panels>
                            <Tab.Panel>
                                <FormPreset id="login_form" onSubmit={onSubmit}>
                                    <Input
                                        type="email"
                                        id="login_email"
                                        placeholder="email"
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
                                    onSubmit={onSubmit}>
                                    <Input
                                        id="signup_email"
                                        type="email"
                                        placeholder="email"
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
                                        placeholder="password"
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
});

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

LoginNode.displayName = "LoginNode";
export { LoginNode };
