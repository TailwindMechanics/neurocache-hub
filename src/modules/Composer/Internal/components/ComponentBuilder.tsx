//path: src\modules\Composer\Internal\components\ComponentBuilder.tsx

import React, { FC } from "react";

import { IsNullOrEmpty } from "@modules/Utils";
import { AtomProps } from "../../types";

export default class ComponentBuilder {
    private dataProps: { [key: string]: string | boolean | number } = {};
    private styles: string[] = [];
    private node: FC<AtomProps>;
    private displayName: string = "Built Component";

    constructor(name: string, atom: FC<AtomProps>) {
        if (!atom) throw new Error(`Atom is ${atom}`);
        if (IsNullOrEmpty(name)) throw new Error("Component name is required");

        this.node = atom;
        this.displayName = name;
    }

    private push = (style: string) => {
        if (IsNullOrEmpty(style)) return;

        if (!this.styles.includes(style)) {
            this.styles.push(style);
        }
    };

    withData(key: string, value: string | boolean | number): ComponentBuilder {
        this.dataProps[`data-${key}`] = value;
        return this;
    }

    withBg(): ComponentBuilder {
        this.push("from-night-dark to-night-light bg-gradient-to-t via-night");
        return this;
    }

    withRoundedFrame(): ComponentBuilder {
        this.push("rounded-t-md rounded-b-xl");
        return this;
    }

    withShadow(): ComponentBuilder {
        this.push("shadow-md");
        return this;
    }

    withRoundedContent(): ComponentBuilder {
        this.push("rounded-t rounded-b-lg");
        return this;
    }

    withRoundedElement(): ComponentBuilder {
        this.push("rounded");
        return this;
    }

    withRoundedButton(): ComponentBuilder {
        this.push("rounded-t-ms rounded-b-lg");
        return this;
    }

    withStyle(style: string): ComponentBuilder {
        this.push(style);
        return this;
    }

    build(): FC<AtomProps> {
        const styles = this.styles.join(" ");
        const Component: FC<AtomProps> = (props: AtomProps) => {
            let newClassName = `${props.className ?? ""} ${styles}`.trim();
            const newProps = {
                ...props,
                className: newClassName,
                ...this.dataProps,
            };
            return <this.node {...newProps}>{props.children}</this.node>;
        };

        Component.displayName = this.displayName;
        return Component;
    }
}
