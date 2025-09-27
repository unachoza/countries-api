import { useQueries, useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";
import Input from "./Components/Form/Input/Input";
import DropDownMenu from "./Components/Form/DropDown/DropDown";
import "./App.css";
import { useState, type ChangeEvent, type FormEvent } from "react";
import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import Page from "./Components/Page/Page";
import { getCountryQueryOptions, getAllCountriesQueryOptions } from "./api/countries";

function App() {
	const [countryQuery, setCountryQuery] = useState<string>("peru");
	const [region, setRegion] = useState<string>("all");
	const regionsTypes = ["Africa", "America", "Europe", "Asia", "Oceana"];

	const [allcountries, singleCountry] = useQueries({
		queries: [getAllCountriesQueryOptions(), getCountryQueryOptions(countryQuery)],
	});

	// const handleSearch = (e:FormEvent) => {
	//   const searchQuery = e.target.value
	// }

	function handleSearch(e: ChangeEvent<HTMLInputElement>) {
		const newValue = e.target.value;
		setCountryQuery(newValue);
	}
	
	return (
		<>
			<Header text="Where in the World?" />

			<div className="filters-container">
				<Input
					id="search"
					label="search"
					name="search"
					type="text"
					value={countryQuery}
					placeholder="Search for a Country ..."
					handleChange={handleSearch}
				/>
				<DropDownMenu setValue={setRegion} values={regionsTypes} label="Filter by Region" />
			</div>
			{singleCountry.data && <Page {...singleCountry.data[0]} />}
			<div className="country-card-container">
				{allcountries.isPending ? (
					<LoadingSpinner />
				) : (
					<div className="country-card-container">
						{allcountries.data.map((countryData: any) => {
							return <Card {...countryData} />;
						})}
					</div>
				)}
			</div>
		</>
	);
}

export default App;
