import type { JSX } from "react";
import "./Button.css";

interface ButtonProps {
	text: string;
}

function Button({ text }: ButtonProps): JSX.Element {
	return <button >{text}</button>;
}
export default Button;
