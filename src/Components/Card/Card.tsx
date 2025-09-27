import "./Card.css";

type flags = {
	svg: string;
	png: string;
};

interface LooseObject {
  [key: string]: string;
}

type NameObjectType = {
	common: string,
	nativeName: LooseObject
	official: string,
}

interface CardProps {
	flags: flags;
	name: NameObjectType;
	population: number;
	region: string;
	capital: string[];
}

const Card = ({ flags, name, population, region, capital }: CardProps) => {
	return (
		<div className="card-container">
			<div className="flag-img">
				<img className="card-flag" src={flags.png} alt="country flag" />
			</div>
			<div className="title">{name.common}</div>
			<div className="details">
				<div>
					Population: <span>{population}</span>
				</div>
				<div>
					Region: <span>{region}</span>
				</div>
				<div>
					Capital: <span>{capital[0]}</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
