import "./LoadingSpinner.css";

const LoadingSpinner = () => {
	return (
		<div className="load-spinner">
			{Array.from({ length: 10 }).map((_, index) => (
				<div key={index}></div>
			))}
		</div>
	);
};
export default LoadingSpinner;
