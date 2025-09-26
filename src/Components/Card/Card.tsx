import "./Card.css";

type flags = {
	svg: string;
	png: string;
};
interface CardProps {
	flags: flags;
	name: string;
	population: number;
	region: string;
	capital: string;
}

const Card = ({ flags, name, population, region, capital }: CardProps) => {
	return (
		<div className="card-container">
			<div className="flag-img">
				<img src={flags.png} alt="country flag" />
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
