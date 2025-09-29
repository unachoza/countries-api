import type { JSX } from "react";
import { Link } from "react-router";
import "./Header.css";

interface HeaderProps {
	text: string;
}

const Header = ({ text }: HeaderProps): JSX.Element => {
	return (
		<div className="header fixed-top">
			<Link to="/">{text}</Link>
		</div>
	);
};
export default Header;
