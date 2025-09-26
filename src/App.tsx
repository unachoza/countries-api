import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";
import Input from "./Components/Form/Input/Input";
import DropDownMenu from "./Components/Form/DropDown/DropDown";
import "./App.css";
import { useState, type ChangeEvent, type FormEvent } from "react";
import countriesData from "./data.json";
import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import Page from "./Components/Page/Page";

function App() {
	const [search, setSearch] = useState<string>("");
	const [region, setRegion] = useState<string>("all");
	const regionsTypes = ["Africa", "America", "Europe", "Asia", "Oceana"];

	const getSpain = async () => {
		// await new Promise((resolve) => setTimeout(resolve, 1000));
		const response = await fetch("https://restcountries.com/v3.1/all");
		// const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
		return await response.json();
	};

	// const { data, isPending } = useQuery({
	// 	queryKey: ["countries"],
	// 	queryFn: getSpain,
	// });

	// const handleSearch = (e:FormEvent) => {
	//   const searchQuery = e.target.value
	// }

	function handleSearch(e: ChangeEvent<HTMLInputElement>) {
		const newValue = e.target.value;
		setSearch(newValue);
	}
	console.log(countriesData);
	return (
		<>
			<Header text="Where in the World?" />

			<div className="filters-container">
				<Input
					id="search"
					label="search"
					name="search"
					type="text"
					value={search}
					placeholder="Search for a Country ..."
					handleChange={handleSearch}
				/>
				<DropDownMenu setValue={setRegion} values={regionsTypes} label="Filter by Region" />
			</div>
			<Page {...countriesData[0]} />
			{/* <div className="card">{isPending ? <LoadingSpinner /> : JSON.stringify(data)}</div> */}

			<div className="country-card-container">
				{countriesData.map((countryData: any) => {
					return <Card {...countryData} />;
				})}
			</div>
		</>
	);
}

export default App;
