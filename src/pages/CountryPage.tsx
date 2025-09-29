import { useParams, useNavigate } from "react-router";
import Button from "../Components/Button/Button";
import Pill from "../Components/Pill/Pill";
import useCountryQuery from "../hooks/useSingleCountry";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
import backArrow from "../assets/icons/back-arrow.svg";
import useAllCountriesQuery from "../hooks/useAllCountries";
import "./CountryPage.css";

const CountryPage = () => {
	const { countryName } = useParams();
	const singleCountry = useCountryQuery(countryName!);
	const allcountries = useAllCountriesQuery();
	let navigate = useNavigate();
	const navigateBack = () => navigate(-1);

	if (singleCountry.isPending) {
		return (
			<div className="page-container">
				<Button text="Back" onClick={navigateBack} element={<img src={backArrow} alt="back" />} />
				<main>
					<LoadingSpinner />
				</main>
			</div>
		);
	}

	if (singleCountry.error) {
		return (
			<div className="page-container">
				<Button text="Back" onClick={navigateBack} element={<img src={backArrow} alt="back" />} />
				<main>
					<p>Error. Try a different country.</p>
				</main>
			</div>
		);
	}

	if (!singleCountry.data || singleCountry.data.length === 0) {
		return (
			<div className="page-container">
				<Button text="Back" onClick={navigateBack} element={<img src={backArrow} alt="back" />} />
				<main>
					<p>No country data found</p>
				</main>
			</div>
		);
	}
	const { flags, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, currencySymbol, languages, borders } =
		singleCountry.data[0];

	const boarderCountryNames = borders?.map((borderCode: string) => {
		const match = allcountries.data?.find((country: { cca3: string }) => country.cca3 === borderCode);
		return match ? match.name : borderCode;
	});

	return (
		<div className="page-container">
			<Button text="Back" onClick={navigateBack} element={<img src={backArrow} alt="back" />} />
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
									Currencies: <span>{`${currencySymbol[0]} ${currencies[0]}`}</span>
								</div>
								<div className="stat-label">
									Languages:{" "}
									<span>
										{Object.values<string>(languages).map((language: string) => {
											return <span key={language}>{language}</span>;
										})}
									</span>
								</div>
							</div>
							<div className="border-country-container">
								<div className="label">Border Countries:</div>
								<div className="border-list">
									{!boarderCountryNames || boarderCountryNames.length === 0 ? (
										<span>No border countries</span>
									) : (
										boarderCountryNames.map((country: string) => <Pill key={country} text={country} />)
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
