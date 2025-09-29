import { useParams } from "react-router";
import Button from "../Components/Button/Button";
import Pill from "../Components/Pill/Pill";
import useCountryQuery from "../hooks/useSingleCountry";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
import "../Components/Page/Page.css";

const CountryPage = () => {
	const { countryName } = useParams();
	const singleCountry = useCountryQuery(countryName!);

	if (singleCountry.isPending) {
		return (
			<div className="Page-container">
				<Button text="Back" />
				<main>
					<LoadingSpinner />
				</main>
			</div>
		);
	}

	if (!singleCountry.data || singleCountry.data.length === 0) {
		return (
			<div className="Page-container">
				<Button text="Back" />
				<main>
					<p>No country data found</p>
				</main>
			</div>
		);
	}

	const { flags, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders } =
		singleCountry.data[0];

	return (
		<div className="Page-container">
			<Button text="Back" />
			<main>
				{singleCountry.isPending ? (
					<LoadingSpinner />
				) : (
					<>
						<div className="flag-img">
							<img className="page-flag" src={flags} alt="country flag" />
						</div>
						<div className="country-info-container">
							<div className="title">{name}</div>
							<div className="stats-container">
								<div className="stat-label">
									Native Name: <span>{nativeName}</span>
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
									Top Level Domain: <span>{topLevelDomain[0]}</span>
								</div>
								<div className="stat-label">
									Currencies: <span>{currencies[0]}</span>
								</div>
								<div className="stat-label">
									Languages:{" "}
									<span>
										{Object.values<string>(languages).map((language: string) => {
											return <span>{language}</span>;
										})}
									</span>
								</div>
							</div>
							<div className="border-country-container">
								<div className="label">Border Countries:</div>
								<div className="border-list">
									{!borders ? (
										<span>No boarder countries</span>
									) : (
										borders.map((country: string) => {
											return <Pill text={country} />;
										})
									)}
								</div>
							</div>
						</div>
					</>
				)}
			</main>
		</div>
	);
};

export default CountryPage;
