//path: src\data\shorthand.tsx

export default class Shorthand {
    private static classes = "";

    private static addName(input: string) {
        Shorthand.classes += ` ${input}`;
    }

    static build(children: React.ReactNode): JSX.Element {
        console.log(Shorthand.classes);
        
        const result = <div className={Shorthand.classes.trim()}>{children}</div>;
        Shorthand.classes = "";
        return result;
    }

    static get flexGrow() {
        Shorthand.addName("flex-grow");
        
        return Shorthand;
    }

    static get mainPanel() {
        Shorthand.addName("rounded-xl bg-main-dark border border-main-light");
        return Shorthand;
    }

    static get shadow() {
        Shorthand.addName("shadow-2xl drop-shadow-2xl");
        return Shorthand;
    }

    static get scrollHidden() {
        Shorthand.addName("scrollbar-none overflow-auto");
        return Shorthand;
    }

    static custom(customClasses: string) {
        Shorthand.addName(customClasses);
        return Shorthand;
    }

    static mt(size: number) {
        Shorthand.addName(`mt-${size} `);
        return Shorthand;
    }

    static mb(size: number) {
        Shorthand.addName(`mb-${size} `);
        return Shorthand;
    }

    static ml(size: number) {
        Shorthand.addName(`ml-${size} `);
        return Shorthand;
    }
    
    static mr(size: number) {
        Shorthand.addName(`mr-${size} `);
        return Shorthand;
    }

    static m(size: number) {
        Shorthand.addName(`m-${size} `);
        return Shorthand;
    }

    static my(size: number) {
        Shorthand.addName(`my-${size} `);
        return Shorthand;
    }

    static mx(size: number) {
        Shorthand.addName(`mx-${size} `);
        return Shorthand;
    }
}