import { useEffect, useRef, useState, type ChangeEvent } from "react";
import Isotope from "isotope-layout";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
import Input from "../Components/Form/Input/Input";
import DropDownMenu from "../Components/Form/DropDown/DropDown";
import Card from "../Components/Card/Card";
import "../App.css";
import useAllCountriesQuery from "../hooks/useAllCountries";

function App() {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const isotope = useRef<Isotope | null>(null);

	const [searchQuery, setSearchQuery] = useState("");
	const [filterKeyRegion, setFilterKeyRegion] = useState("Filter By Region");

	const allcountries = useAllCountriesQuery();

	const regionsTypes = ["Filter By Region", "Africa", "Americas", "Europe", "Asia", "Oceania", "Polar", "Antarctic"];

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

		isotope.current.arrange({
			filter: filterKeyRegion === "*" || filterKeyRegion === "Filter By Region" ? "*" : `.filter-item.${filterKeyRegion}`,
		});
	}, [allcountries.data]);

	// --- Apply filter whenever filterKeyRegion changes from DropDown Menu
	useEffect(() => {
		if (!isotope.current) return;

		const filter = filterKeyRegion === "*" || filterKeyRegion === "Filter By Region" ? "*" : `.filter-item.${filterKeyRegion}`;
		isotope.current.arrange({ filter });
	}, [filterKeyRegion]);

	// --- TODO FIX
	//  filter countries by search text doesn't bring cards to top unless window resizes
	const filteredCountries =
		searchQuery.length > 0 && allcountries.data
			? allcountries.data.filter((c: any) => c.name.toLowerCase().includes(searchQuery.toLowerCase()))
			: allcountries.data || [];

	return (
		<>
			<div className="filters-container">
				<Input
					id="search"
					label="search"
					className="icon"
					name="search"
					type="text"
					value={searchQuery}
					placeholder="Search for a Country ..."
					handleChange={handleSearch}
				/>

				<DropDownMenu setValue={setFilterKeyRegion} values={regionsTypes} label="Filter by Region" />
			</div>
			{allcountries.isPending ? (
				<LoadingSpinner />
			) : (
				<div ref={containerRef} className="country-card-container filter-container">
					{filteredCountries.map((countryData: any) => (
						<Card key={countryData.name} countryName={countryData.name} {...countryData} />
					))}
				</div>
			)}
		</>
	);
}

export default App;
