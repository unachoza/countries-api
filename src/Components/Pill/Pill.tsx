import type { JSX } from "react";
import "./Pill.css";

interface PillProps {
	text: string;
}

function Pill({ text }: PillProps): JSX.Element {
	return <div className="pill-container">{text}</div>;
}
export default Pill;
