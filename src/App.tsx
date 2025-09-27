import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { useQueries } from "@tanstack/react-query";
import Isotope from "isotope-layout";
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";
import Input from "./Components/Form/Input/Input";
import DropDownMenu from "./Components/Form/DropDown/DropDown";
import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import Page from "./Components/Page/Page";
import { getCountryQueryOptions, getAllCountriesQueryOptions } from "./api/countries";
import "./App.css";

function App() {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const isotope = useRef<Isotope | null>(null);

	const [countryQuery, setCountryQuery] = useState("peru");
	const [searchQuery, setSearchQuery] = useState("");
	const [filterKeyRegion, setFilterKeyRegion] = useState("*");
	// const [displayCountries, setDisplayCountries] = useState([]);

	const regionsTypes = ["Africa", "Americas", "Europe", "Asia", "Oceania"];

	const [allcountries, singleCountry] = useQueries({
		queries: [getAllCountriesQueryOptions(), getCountryQueryOptions(countryQuery)],
	});

	function handleSearch(e: ChangeEvent<HTMLInputElement>) {
		setSearchQuery(e.target.value);
	}

	// --- Initialize / re-init Isotope whenever countries data changes
	useEffect(() => {
		if (!allcountries.data || allcountries.data.length === 0) return;
		if (!containerRef.current) return;

		isotope.current?.destroy();

		isotope.current = new Isotope(containerRef.current, {
			itemSelector: ".filter-item",
			layoutMode: "fitRows",
		});

		isotope.current.arrange({ filter: filterKeyRegion === "*" ? "*" : `.filter-item.${filterKeyRegion}` });
	}, [allcountries.data]);

	// --- Apply filter whenever filterKeyRegion changes from DropDown Menu
	useEffect(() => {
		if (!isotope.current) return;

		const filter = filterKeyRegion === "*" ? "*" : `.filter-item.${filterKeyRegion}`;
		isotope.current.arrange({ filter });
	}, [filterKeyRegion]);

	// --- TODO FIX
	//  filter countries by search text (frontend filtering) doesn't work when combined with multiple dropdowns and searches
	const filteredCountries =
		searchQuery.length > 0 && allcountries.data
			? allcountries.data.filter((c: any) => c.name.toLowerCase().includes(searchQuery.toLowerCase()))
			: allcountries.data || [];

	return (
		<>
			<Header text="Where in the World?" />

			<div className="filters-container">
				<Input
					id="search"
					label="search"
					name="search"
					type="text"
					value={searchQuery}
					placeholder="Search for a Country ..."
					handleChange={handleSearch}
				/>

				<DropDownMenu setValue={setFilterKeyRegion} values={regionsTypes} label="Filter by Region" />
			</div>
			{/* {singleCountry.data && <Page {...singleCountry.data[0]} />} */}
			{allcountries.isPending ? (
				<LoadingSpinner />
			) : (
				<div ref={containerRef} className="country-card-container filter-container">
					{filteredCountries.map((countryData: any) => (
						<Card key={countryData.name} {...countryData} />
					))}
				</div>
			)}
		</>
	);
}

export default App;
