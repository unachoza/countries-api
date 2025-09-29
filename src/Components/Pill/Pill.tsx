import type { JSX } from "react";
import { Link } from "react-router";
import useCountryCodeQuery from "../../hooks/useCountryCode";
import "./Pill.css";

interface PillProps {
	text: string;
}

function Pill({ text }: PillProps): JSX.Element {
	// const data = useCountryCodeQuery(text);
	// if (data.data) {
	// 	console.log(data.data.name.common);
	// }

	// if (data.isPending) {
	// 	return (
	// 		<Link to={`/countries/${text}`}>
	// 			<div className="pill-container">{text}</div>
	// 		</Link>
	// 	);
	// }

	return (
		<Link to={`/countries/${text}`}>
			<div className="pill-container">{text}</div>
		</Link>
	);
}
export default Pill;
