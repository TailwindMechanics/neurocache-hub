//path: src\components\library\buttonComponent\buttonComponent.tsx

import ButtonAtom from "@src/components/atoms/buttonAtom";
import { ButtonProps } from "@src/types/declarations";

export default function ButtonComponent(props: ButtonProps) {
	let Button = new ButtonAtom().build(props);
	return <Button>{props.label}</Button>;
}
