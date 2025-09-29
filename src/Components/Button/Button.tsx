import type { JSX, MouseEventHandler } from "react";
import "./Button.css";

interface ButtonProps {
	text: string;
	element?: JSX.Element;
	onClick: MouseEventHandler;
}

function Button({ text, element, onClick }: ButtonProps): JSX.Element {
	return (
		<button role="button" onClick={onClick}>
			<span>{element}</span>
			{text}
		</button>
	);
}
export default Button;
