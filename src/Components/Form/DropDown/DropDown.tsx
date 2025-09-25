import { type SetStateAction, useState } from "react";
import downArrow from "../../../assets/icons/icon-caret-down.svg";
import "./DropDown.css";

interface DropDownMenuProps {
	setValue: SetStateAction<string | any>;
	values: string[];
	label: string;
}
const DropDownMenu = ({ setValue, values, label }: DropDownMenuProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(values[0]);

	const toggling = () => setIsOpen(!isOpen);

	const onOptionClicked = ({ innerHTML }: any) => {
		setValue(innerHTML);
		setSelectedOption(innerHTML);
		setIsOpen(false);
	};

	return (
		<div className="drop-down-container">
			<div className="drop-down-visible">
				<label>{label}</label>
				<div className="drop-down-header" onClick={toggling}>
					<div>{selectedOption}</div>
					<span>
						<img className={`menu-icon ${isOpen && "open"}`} src={downArrow} alt="arrow" />
					</span>
				</div>
			</div>

			{isOpen && (
				<div className="drop-down-list-container">
					<ul className="drop-down-list">
						{values.map((value, i) => {
							return (
								<li key={i} value={value} className="list-item" onClick={(e) => onOptionClicked(e.target)}>
									{value}
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
};

export default DropDownMenu;
