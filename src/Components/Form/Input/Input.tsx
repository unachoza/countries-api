import { type ChangeEvent, memo } from "react";
import "./Input.css";

interface InputProps {
	id: string;
	label?: string;
	name: string;
	type?: string;
	className?: string;
	value: string | number;
	errorMessage?: string;
	placeholder: string;
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({ id, label, name, className, value, errorMessage, placeholder, handleChange }: InputProps) => {
	return (
		<label>
			{label && <span className="label-text">{label}</span>}
			<input
				id={id}
				name={name}
				className={className ? className : ""}
				value={value}
				type="text"
				placeholder={placeholder}
				onChange={handleChange}
				required
			/>
			<div className="error-message" role="alert" id={`${name}-error`}>
				{errorMessage}
			</div>
		</label>
	);
};

export default memo(FormInput);
