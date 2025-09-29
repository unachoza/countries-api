import type { JSX } from "react";
import { useNavigate } from "react-router";
import backArrow from "../../assets/icons/back-arrow.svg";
import "./Button.css";

interface ButtonProps {
	text: string;
}

function Button({ text }: ButtonProps): JSX.Element {
	let navigate = useNavigate();
	return (
		<button onClick={() => navigate(-1)}>
			<span>
				<img src={backArrow} alt="back" />
			</span>
			{text}
		</button>
	);
}
export default Button;
