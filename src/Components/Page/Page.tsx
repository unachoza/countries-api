import "./Page.css";
import Button from "../Button/Button";
import Pill from "../Pill/Pill";

type FlagsType = {
	svg: string;
	png: string;
};

type CurrenciesType = {
	code: string;
	name: string;
	symbol: string;
};

type LanguageType = {
	iso639_1: string;
	iso639_2: string;
	name: string;
	nativeName: string;
};

type NameType = {
	common: string;
	nativeName: LooseObject;
	official: string;
};

interface LooseObject {
	[key: string]: any;
}

export interface PageProps {
	flags: FlagsType;
	name: NameType;
	nativeName: string;
	population: number;
	region: string;
	subregion: string;
	capital: string;
	topLevelDomain: string[];
	currencies: LooseObject;
	languages: LooseObject;
	borders: string[];
}

const Page = ({ flags, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders }: PageProps) => {
	console.log(flags, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders);
	return (
		<div className="Page-container">
			<Button text="Back" />
			<main>
				<div className="flag-img">
					<img className="page-flag" src={flags.svg} alt="country flag" />
				</div>
				<div className="country-info-container">
					<div className="title">{name.common}</div>
					<div className="stats-container">
						<div className="stat-label">
							Native Name: <span>{name.nativeName[0]?.common}</span>
						</div>
						<div className="stat-label">
							Population: <span>{population}</span>
						</div>
						<div className="stat-label">
							Region: <span>{region}</span>
						</div>
						<div className="stat-label">
							Sub Region: <span>{subregion}</span>
						</div>
						<div className="stat-label">
							Capital: <span>{capital}</span>
						</div>
						<div className="stat-label">
							Top Level Domain: <span>{topLevelDomain}</span>
						</div>
						<div className="stat-label">
							Currencies: <span>{Object.values(currencies)[0].name}</span>
						</div>
						<div className="stat-label">
							Languages:{" "}
							<span>
								{Object.values(languages).map((language: string) => {
									return <span>{language}</span>;
								})}
							</span>
						</div>
					</div>
					<div className="border-country-container">
						<div className="label">Border Countries</div>
						<div className="border-list">
							{borders.map((country: string) => {
								return <Pill text={country} />;
							})}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Page;
