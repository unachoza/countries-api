import type { JSX } from "react";
import { Link } from "react-router";
import "./Pill.css";

interface PillProps {
	text: string;
}

const Pill = ({ text }: PillProps): JSX.Element => {
	return (
		<Link to={`/countries/${text}`}>
			<div className="pill-container">{text}</div>
		</Link>
	);
};
export default Pill;
