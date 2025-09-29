import { Link } from "react-router";
import "./Card.css";

interface CardTypeProps {
	flags: string;
	countryName: string;
	population: number;
	region: string;
	capital: string;
}

const Card = ({ flags, countryName, population, region, capital }: CardTypeProps) => {
	return (
		<Link to={`/countries/${countryName}`}>
			<div className={`card-container filter-item ${region}`}>
				<div className="flag-img">
					<img className="card-flag" src={flags} alt="country flag" />
				</div>
				<div className="title">{countryName}</div>
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
		</Link>
	);
};

export default Card;
