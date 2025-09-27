import "./Card.css";

interface CardTypeProps {
	flags: string;
	name: string;
	population: number;
	region: string;
	capital: string;
}

const Card = ({ flags, name, population, region, capital }: CardTypeProps) => {
	return (
		<div className={`card-container filter-item ${region}`}>
			<div className="flag-img">
				<img className="card-flag" src={flags} alt="country flag" />
			</div>
			<div className="title">{name}</div>
			<div className="details">
				<div>
					Population: <span>{population}</span>
				</div>
				<div>
					Region: <span>{region}</span>
				</div>
				<div>
					Capital: <span>{capital}</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
